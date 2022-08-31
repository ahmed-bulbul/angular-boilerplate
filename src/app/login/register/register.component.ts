import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { LocalstorageService } from "src/app/security/service/localstorage.service";
import { SharedService } from "src/app/sharing/service/shared.service";
import { environment } from "src/environments/environment";
import { Login } from "../model/login";
import { Register } from "../model/register";
import { LoginService } from "../services/login.services";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public formData: Register = new Register();
  public isLoading: boolean;

  //declare input field error message
  public errorMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private localStorageService: LocalstorageService,
    private sharedService: SharedService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._initForm();
    //myForm data assign to formData variable
    this.myForm.valueChanges.subscribe((data) => {
      this.formData = data;
    });
  }

  private _initForm() {
    this.myForm = this.formBuilder.group({
      password: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      name: ["", Validators.required],
      phone: ["", Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.register();
  }
  register() {
    this.isLoading = true;
    this.loginService.register(this.formData).subscribe(
      (res) => {
        if (res["status"] == true) {
          this.isLoading = false;
          Swal.fire({
            title: "Success",
            text: "Register Successfully",
            icon: "success",
          });
          this.router.navigate(["/login"]);
        }
      },
      (error) => {
        this.isLoading = false;
        if (error.status === 400) {
          Swal.fire({
            title: "error",
            text: error.error.message,
            icon: "error",
          });
        } else {
          console.log(error);
        }
      }
    );
  }

  hasError(event: any): void {
    if (!event && this.myForm.value.phone !== "") {
      this.myForm.get("phone").setErrors(["invalid_cell_phone", true]);
    }
  }
}
