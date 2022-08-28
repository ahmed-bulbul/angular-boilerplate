import { LocalstorageService } from './../security/service/localstorage.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AllModulesService } from '../all-modules/all-modules.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PipeTransform, Pipe, NgZone } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { SharedService } from '../sharing/service/shared.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  baseUrl = environment.baseUrl;
  public menuData: SafeHtml;



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
    private sharedService: SharedService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private localstorageService:LocalstorageService
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



    console.log('@Call getPermittedMenu()............');
    this.getPermittedMenu();



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


  setActive(member) {
    this.allModulesService.members.active = member;
  }
  _hardCodeMenuString() {

    const menuStr = `
    <li class="submenu">
      <a href="javascript:"><i class="la la-dashboard"></i> <span>Dashboard</span> <span class="menu-arrow"></span></a>
      <ul style="display: none;">
        <li><a class="routerlink" href="/dashboard/admin">Admin Dashboard</a></li>
        <li><a class="routerlink" href="/dashboard/employee">Employee Dashboard</a></li>
      </ul>
    </li>
    `;

    return menuStr;
  }

  // we need to follow like this
  // during dynamic rendering by recursive function
  _menuHTML_structure(){

    let menuHTML_template = `
    <li>
        <a class="routerlink" href="/users/user/list">
            <i class="las la-circle"></i>
            <span>Single Level</span>
        </a>
    </li>
    <li class="submenu">
        <a href="javascript:" class="">
            <i class="la la-share-alt"></i>
            <span>Multi Level</span>
            <span class="menu-arrow"></span>
        </a>
        <ul style="display: none;">
            <li>
                <a class="routerlink" href="/users/user/list">
                    <span>Level 1</span>
                </a>
            </li>
            <li class="submenu">
                <a href="javascript:">
                    <span>Level 1</span>
                    <span class="menu-arrow"></span>
                </a>
                <ul style="display: none;">
                    <li><a href="javascript:"><span>Level 2</span></a></li>
                    <li class="submenu">
                        <a href="javascript:"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                        <ul style="display: none;">
                            <li><a class="routerlink" href="/dashboard/admin">Level 3</a></li>
                            <li><a class="routerlink" href="/dashboard/employee">Level 3</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:"> <span>Level 2</span></a></li>
                </ul>
            </li>
        </ul>
    </li>
    `;

    return menuHTML_template;

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


  _generateMenuHTML(menuData) {

    let menuHTML = '';
    menuHTML = this._menuNodeRenderRF( menuData, menuHTML, 0 )
    return menuHTML;

  }

  getPermittedMenu(){
    //get menu from local storage
    // let menu = this.localstorageService.getMenu();

    const apiURL = this.baseUrl + '/api/v1/system/systemMenu/getMenuData';
    const queryParams: any = {};
    this.sharedService.sendGetRequest(apiURL, queryParams).subscribe((response: any) => {
      let menuStr = this._hardCodeMenuString();
      $('#_leftMenuContainer').append( menuStr );

      menuStr = this._generateMenuHTML(response.data);
      $('#_leftMenuContainer').append( menuStr );

      // $('#_leftMenuContainer').append( this._menuHTML_structure() );
       $('i.la-sm').css('font-size', '.875em');
    },error=>{
      console.log(error);
    });

  }

}

