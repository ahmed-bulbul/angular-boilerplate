import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/services/login.services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AllModulesService } from '../all-modules/all-modules.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PipeTransform, Pipe, NgZone } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


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
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private loginService: LoginService
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

   // this._getPermittedMenu();



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

  _hardCodeMenuString() {

    const menuStr = `
    <li class="menu-title">
      <span>Menus</span>
    </li>
    <li class="submenu">
      <a href="javascript:"><i class="la la-dashboard"></i> <span>Dashboard</span> <span class="menu-arrow"></span></a>
      <ul style="display: none;">
        <li><a class="routerlink" href="/dashboard/admin">Admin Dashboard</a></li>
      </ul>
    </li>
    `;

    return menuStr;
  }

  _generateMenuHTML(menuData) {

    let menuHTML = '';
    menuHTML = this._menuNodeRenderRF( menuData, menuHTML, 0 )
    return menuHTML;

  }

  _menuNodeRenderRF( menuData, menuHTML, level ){

    for (const k in menuData) {

      const menuNode = menuData[k];
      console.log("menuNode..... key  : " + k);
      console.log("menuNode..... level: " + level);

      let description = menuNode.description;
      let iconHtml = menuNode.iconHtml ? menuNode.iconHtml : "las la-angle-double-right la-sm";
      let openUrl = menuNode.openUrl;
      let hasChild = menuNode.hasChild;

      if( hasChild ){

        // menuHTML += ` <li class="submenu">
        //                   <a href="javascript:">
        //                       <i class="${menuNode.iconHtml}"></i>
        //                       <span>${menuNode.description}</span>
        //                       <span class="menu-arrow"></span>
        //                   </a>
        //                   <ul style="display: none;">
        //                   </ul>
        //               </li>
        //             `;

        // pre...............................................................
        menuHTML              += `<li class="submenu">`;

        menuHTML              +=    `<a href="javascript:">`;
        if(iconHtml) menuHTML +=        `<i class="${iconHtml}"></i>`;
        menuHTML              +=         `<span>${description}</span>`;
        menuHTML              +=        `<span class="menu-arrow"></span>`;
        menuHTML              +=     `</a>`;
        // child render recursively
        menuHTML              +=      `<ul style="display: none;">`;
        menuHTML              =          this._menuNodeRenderRF( menuNode.child, menuHTML, level+1 );
        menuHTML              +=      `</ul>`;

        // post ............................................................
        menuHTML              += `</li>`;

        // customize according to level if you want
        if(level == 0){
          //
        } else if(level == 1){
          //
        } else {
          // generic links render
        }


      } else {

        menuHTML += this._renderSingleLinkHTML( level, description, openUrl, iconHtml );

      }

      console.log("generated HTML string:");
      console.log(menuHTML);


    }

    return menuHTML;

  }

  _renderSingleLinkHTML( level, description, openUrl, iconHtml ){

    // menuHTML += `<li><a class="routerlink" href="${openUrl}"> <span>${description}</span></a></li>`;
    let menuHTML = '';
    menuHTML    += `<li>`;
    menuHTML    +=     `<a class="routerlink" href="${openUrl}">`;
    menuHTML    +=         `<i class="${iconHtml}"></i>`;
    menuHTML    +=         `<span>${description}</span>`;
    menuHTML    +=     `</a>`;
    menuHTML    += `</li>`;

    // customize according to level if you want
    if(level == 0){
      // override HTML
    } else if(level == 1){
      // override HTML
    }

    return menuHTML;

  }



  _getPermittedMenu(){

    // let apiURL = this.baseUrl + "/common/getAuthMenus";

    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlci1hZG1pbiIsImlhdCI6MTY1ODU2Njk1OSwiZXhwIjoxNjU4NTg0OTU5fQ.xMLnfc15B8R7-4WJ1Vmn6fjlDeFEW_uVhEeoiuArIuU47r-ZWUvWT3Bv2qRM8M1sUJLFzWNcUYHMyGQ0pKv9hA'

    //const apiURL = this.baseUrl + '/system/systemMenu/getMenuData';
    const apiURL = 'http://143.110.191.105:8080/pta-service/system/systemMenu/getMenuData';
    //add Bearer token
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' +token);

    const queryParams: any = {};
    // this.loginService.sendGetRequest(apiURL, queryParams).subscribe((response: any) => {
    //   // append response

    //   let menuStr = this._hardCodeMenuString();

    //   let data = {
    //     "DASHBOARD_ADMIN": {
    //         "id": 1,
    //         "code": "DASHBOARD_ADMIN",
    //         "description": "Dashboard",
    //         "openUrl": "/dashboard",
    //         "iconHtml": "fa fa-dashboard",
    //         "hasChild": false,
    //         "level": 0,
    //         "child": {}
    //     },
    //     "DASHBOARD_USER": {
    //         "id": 2,
    //         "code": "DASHBOARD_USER",
    //         "description": "Dashboard",
    //         "openUrl": "/dashboard/patient",
    //         "iconHtml": "fa fa-dashboard",
    //         "hasChild": false,
    //         "level": 0,
    //         "child": {}
    //     },
    //     "LAYOUT_BUILDER": {
    //         "id": 3,
    //         "code": "LAYOUT_BUILDER",
    //         "description": "Layout Builder",
    //         "openUrl": "/builder",
    //         "iconHtml": "fa fa-th",
    //         "hasChild": false,
    //         "level": 0,
    //         "child": {}
    //     },
    //     "ACCEPTANCE_REQUIREMENTS": {
    //         "id": 4,
    //         "code": "ACCEPTANCE_REQUIREMENTS",
    //         "description": "Acceptance Requirements",
    //         "openUrl": "/acceptance-requirements",
    //         "iconHtml": "fa fa-th",
    //         "hasChild": true,
    //         "level": 0,
    //         "child": {
    //             "ACCEPTANCE_REQUIREMENTS_CREATE": {
    //                 "id": 5,
    //                 "code": "ACCEPTANCE_REQUIREMENTS_CREATE",
    //                 "description": "Create",
    //                 "openUrl": "/acceptance-requirements/create",
    //                 "iconHtml": "fa fa-th",
    //                 "hasChild": false,
    //                 "level": 1,
    //                 "child": {}
    //             },
    //             "ACCEPTANCE_REQUIREMENTS_LIST": {
    //                 "id": 6,
    //                 "code": "ACCEPTANCE_REQUIREMENTS_LIST",
    //                 "description": "List",
    //                 "openUrl": "/acceptance-requirements/list",
    //                 "iconHtml": "fa fa-th",
    //                 "hasChild": false,
    //                 "level": 1,
    //                 "child": {}
    //             }
    //         }
    //     },
    //     "MANAGE_USERS": {
    //         "id": 7,
    //         "code": "MANAGE_USERS",
    //         "description": "Manage Users",
    //         "openUrl": "/users",
    //         "iconHtml": "fa fa-th",
    //         "hasChild": false,
    //         "level": 0,
    //         "child": {}
    //     }
    // }
    //    menuStr = this._generateMenuHTML( data );
    // //   menuStr = this._generateMenuHTML( response.data );
    //   $('#_leftMenuContainer').append( menuStr );
    //   $('i.la-sm').css('font-size', '.875em');


    // });

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
