import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/services/login.services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AllModulesService } from '../all-modules/all-modules.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PipeTransform, Pipe, NgZone } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  baseUrl = environment.baseUrl;





  urlComplete = {
    mainUrl: '',
    subUrl: '',
    childUrl: '',
    fullUrl: '',
  };

  sidebarMenus = {
    default: true,
    chat: false,
    settings: false,
  };

  members = {};
  groups = {};

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private allModulesService: AllModulesService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        $('.main-wrapper').removeClass('slide-nav');
        $('.sidebar-overlay').removeClass('opened');
        const url = event.url.split('/');
        this.urlComplete.mainUrl = url[1];
        this.urlComplete.subUrl = url[2];
        this.urlComplete.childUrl = url[3];
        if (url[1] === '') {
          this.urlComplete.mainUrl = 'dashboard';
          this.urlComplete.subUrl = 'admin';
        }

        if (url[2] === 'chat' || url[2] === 'calls') {
          this.sidebarMenus.chat = true;
          this.sidebarMenus.default = false;
        } else {
          this.sidebarMenus.chat = false;
          this.sidebarMenus.default = true;
        }
        // make full url
        this.urlComplete.fullUrl = url[1]
        if (url.length > 3) this.urlComplete.fullUrl = url[2] + '/' + url[3];
        console.log(this.urlComplete.fullUrl);
      }
    });

    this.groups = { ...this.allModulesService.groups };
    this.members = { ...this.allModulesService.members };
  }

  ngOnInit() {

    const self = this;



    // menu click event bind
    // tslint:disable-next-line:only-arrow-functions
    $(document).on('click', 'a.routerlink', function (e) {
      e.preventDefault();
      e.stopPropagation();

      self.navigateRouterLink(e);

    });



    // // Slide up and down of menus
    $(document).on('click', '#sidebar-menu a', function (e) {
      e.stopImmediatePropagation();
      if ($(this).parent().hasClass('submenu')) {
        e.preventDefault();
      }
      if (!$(this).hasClass('subdrop')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('subdrop');
        $(this).next('ul').slideDown(350);
        $(this).addClass('subdrop');
      } else if ($(this).hasClass('subdrop')) {
        $(this).removeClass('subdrop');
        $(this).next('ul').slideUp(350);
      }
    });



  }





  navigateRouterLink(event) {

    if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLSpanElement) {

      let element = event.target as HTMLAnchorElement;
      if (event.target instanceof HTMLSpanElement) element = event.target.parentNode;

      if (element.className === 'routerlink') {
        $('a.routerlink').removeClass('active');
        $(element).addClass('active');
        const route = element?.getAttribute('href');
        if (route) {
          this.ngZone.run(() => {
            this.router.navigate([`/${route}`]);
          });

        }
      }

    }

  }







}
