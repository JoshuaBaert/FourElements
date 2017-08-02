webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  width: 100%;\n  height: 325px;\n  margin-bottom: 72px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/banner.jpg") + ");\n  background-position: center;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .banner .banner-overlay {\n    width: 50%;\n    padding: 8%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/banner-overlay.png") + ");\n    background-position: center;\n    background-size: cover; }\n  .banner h1 {\n    font-size: 36px;\n    font-weight: 800;\n    letter-spacing: 2.88px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        template: "\n    <div class=\"banner\">\n      <div class=\"banner-overlay\"></div>\n    </div>\n    <app-nav></app-nav>\n    \n    <router-outlet></router-outlet>\n    \n    <app-footer></app-footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__picture_picture_component__ = __webpack_require__("../../../../../src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__para_para_component__ = __webpack_require__("../../../../../src/app/para/para.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__under_work_under_work_component__ = __webpack_require__("../../../../../src/app/under-work/under-work.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__picture_picture_component__["a" /* PictureComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__para_para_component__["a" /* ParaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__under_work_under_work_component__["a" /* UnderWorkComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                { path: 'under-work', component: __WEBPACK_IMPORTED_MODULE_11__under_work_under_work_component__["a" /* UnderWorkComponent */] },
            ]),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-main {\n  width: 100%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #333;\n  border-top: solid #555555 1px;\n  border-bottom: solid #555555 1px; }\n  .footer-main .foot-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .footer-main .left-right-wrap {\n    max-width: 650px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .footer-main .foot-left {\n    min-width: 400px; }\n  .footer-main .social {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .footer-main .social .icon-div {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background: #ddd;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .footer-main .social .icons {\n      color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")],
        template: "\n    <div class=\"footer-main\">\n      <div class=\"foot-wrap\">\n        <div class=\"left-right-wrap\">\n          <div class=\"foot-left\">\n            <b>Address</b>\n            <p>1261 W 800 S <br>Orem, UT 84058</p>\n\n            <b>Hours</b>\n            <p>Mon - Fri 8:00am - 6:00 pm<br>Sat 9:00am - 2:00pm <br> Closed Sun</p>\n          </div>\n          <div class=\"foot-right\">\n            <b>Contact us</b>\n            <p>Phone: <a href=\"tel:951-415-5023\">951-415-5023</a> <br>\n            Email: <a href=\"mailto:4elements4g@gmail.com\">4elements4g@gmail.com</a></p>\n          </div>\n        </div>\n        <div class=\"foot-bottom\">\n          <div class=\"social\">\n            <a href=\"https://www.etsy.com/shop/FourElementsForgeLLC\" target=\"_blank\">\n              <div class=\"icon-div\"><i class=\"fa fa-etsy icons\" aria-hidden=\"true\"></i></div>\n            </a>\n            \n          </div>\n        </div>\n        \n      </div>\n      \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-main {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.introParagraph = [
            { type: 'header', text: 'About Us' },
            { type: 'paragraph', text: "Four Elements Forge is your classic traditional blacksmith\n     shop located in central Utah right off of good old I15. We specialize in custom home\n     decor iron work, staircase/porch railings, and unique jewelry. That is not to say \n     that we don\u2019t craft the occasional high carbon blade every so often when requested.\n     Our moto is if it\u2019s made of steel or iron we can probably forge it for you. We \n     began as a simple Idea, make things that were not fake, that did not break and were \n     made in the USA for customers that are looking for high end quality products for \n     their yard, or home, or office. We took this Idea and expanded to wedding hardware \n     including the one ring that will bind them all and added on our fine crafting area \n     for the more dainty metals. It is our mission to bring you, the customer, the same \n     amazing lasts forever quality that you would expect to be dug up from a thousand \n     years ago, and put it in your hands" },
        ];
        this.classParagraph = [
            { type: 'header', text: 'Lessons' },
            { type: 'paragraph', text: "Instruction, classes, forge nights, special events. Keep an\n     eye out for our special events and class schedule. We do all sorts of stuff within \n     our local community as well as the occasional rendezvous out of town. If you want to \n     join one of our classes we have the perfect place for you. Our shop has both gas, and \n     coke forges, and can support quite a few students at a time. Here you will learn the \n     basics of forge management, tapering, bends, twists, and if you really want to we \n     will show you how to make something cool in your last lesson. If you already have a \n     bit of skill we have classes for you guys and gals as well. We go over the basics of \n     tool making, tempering, forge welding, and high quality finish work. What if you have \n     a special someone and want to go on a unique date? We do date nights for coupes to \n     come down. She can make herself something nice and you can make her something nice \n     too. Don\u2019t miss out, give us a call or email today and set up your time at the forge. \n     Contact.\n      " },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        template: "\n    <div class=\"home-main\">\n\n      <app-picture\n        [background]=\"'./assets/img/img7.jpg'\"\n      ></app-picture>\n      \n      <app-para\n        [info]=\"introParagraph\"\n      ></app-para>\n\n      <app-picture\n        [background]=\"'./assets/img/img2.jpg'\"\n      ></app-picture>\n\n      <app-para\n        [info]=\"classParagraph\"\n      ></app-para>\n\n      <app-picture\n        [background]=\"'./assets/img/img3.jpg'\"\n      ></app-picture>\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-main {\n  height: 72px;\n  width: 100%;\n  border-top: solid #555555 1px;\n  border-bottom: solid #555555 1px;\n  background: #333; }\n\nnav {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nul {\n  margin: 0;\n  display: block; }\n  ul li {\n    display: inline-block;\n    padding: 14px 17.5px;\n    font-size: 14px;\n    font-weight: 600; }\n  ul a:hover {\n    cursor: pointer; }\n\n.nav-absolute {\n  position: absolute;\n  top: 325px; }\n\n.nav-fixed {\n  position: fixed;\n  top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent(renderer) {
        this.renderer = renderer;
        this.absolute = true;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onScroll = function (event) {
        if (event.target.scrollingElement.scrollTop < 325 && this.absolute === false) {
            this.renderer.removeClass(this.navMain.nativeElement, 'nav-fixed');
            this.renderer.addClass(this.navMain.nativeElement, 'nav-absolute');
            this.absolute = !this.absolute;
        }
        if (event.target.scrollingElement.scrollTop >= 325 && this.absolute === true) {
            this.renderer.removeClass(this.navMain.nativeElement, 'nav-absolute');
            this.renderer.addClass(this.navMain.nativeElement, 'nav-fixed');
            this.absolute = !this.absolute;
        }
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('nav'),
    __metadata("design:type", Object)
], NavComponent.prototype, "navMain", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavComponent.prototype, "onScroll", null);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nav',
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")],
        template: "\n    <div class=\"nav-main nav-absolute\" #nav>\n      <nav>\n        <ul>\n          <li>\n            <a routerLink=\"\">\n              The Forge\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"under-work\">\n              Gallery\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.etsy.com/shop/FourElementsForgeLLC\" target=\"_blank\">\n              Shop\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"under-work\">\n              Custom Work\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"under-work\">\n              Lessons\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"under-work\">\n              Contact\n            </a>\n          </li>\n        </ul>\n      </nav>\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/para/para.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  margin-bottom: 50px; }\n\n.para {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top: solid #555555 1px;\n  border-bottom: solid #555555 1px;\n  background: #333; }\n\n.para-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  max-width: 650px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/para/para.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParaComponent = (function () {
    function ParaComponent() {
        this.info = [
            { type: 'header', text: 'Some Header' },
            { type: 'sub-header', text: 'Some sub-head' },
            { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vehicula felis. Aenean auctor quis ex quis fermentum. Integer dignissim felis sapien, sit amet dignissim massa tincidunt at. Suspendisse id placerat nulla, nec congue ante. Proin varius tellus sed tellus porta, ut tempus magna sollicitudin. Nulla sed nisi urna. Duis rutrum magna quis tortor tristique, rhoncus lobortis libero interdum. Nunc vulputate dictum est, ac tristique urna finibus sed. Pellentesque mollis arcu ac ligula luctus, malesuada condimentum sapien congue. Aliquam ut odio convallis lectus aliquam mattis vel id sem. Nunc nec turpis sit amet enim luctus faucibus eu at leo. Cras egestas ligula a turpis luctus posuere. Cras non scelerisque nisi." },
        ];
    }
    ParaComponent.prototype.ngOnInit = function () {
    };
    return ParaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ParaComponent.prototype, "info", void 0);
ParaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-para',
        styles: [__webpack_require__("../../../../../src/app/para/para.component.scss")],
        template: "\n    <div class=\"para\">\n      <div class=\"para-wrap\">\n        <div *ngFor=\"let section of info\">\n          <h3 *ngIf=\"section.type == 'header'\">{{section.text}}</h3>\n          <b *ngIf=\"section.type == 'sub-header'\">{{section.text}}</b>\n          <p *ngIf=\"section.type == 'paragraph'\">{{section.text}}</p>\n        </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ParaComponent);

//# sourceMappingURL=para.component.js.map

/***/ }),

/***/ "../../../../../src/app/picture/picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pic-main {\n  width: 100%;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureComponent = (function () {
    function PictureComponent(renderer) {
        this.renderer = renderer;
        this.height = '100vh';
        this.attachment = 'fixed';
    }
    PictureComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.picMain.nativeElement, 'background-image', "url(\"" + this.background + "\")");
        this.renderer.setStyle(this.picMain.nativeElement, 'height', this.height);
        this.renderer.setStyle(this.picMain.nativeElement, 'background-attachment', this.attachment);
    };
    return PictureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], PictureComponent.prototype, "background", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], PictureComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], PictureComponent.prototype, "attachment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('pic'),
    __metadata("design:type", Object)
], PictureComponent.prototype, "picMain", void 0);
PictureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-picture',
        styles: [__webpack_require__("../../../../../src/app/picture/picture.component.scss")],
        template: "\n    <div class=\"pic-main\" #pic>\n      \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _a || Object])
], PictureComponent);

var _a;
//# sourceMappingURL=picture.component.js.map

/***/ }),

/***/ "../../../../../src/app/under-work/under-work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".working-on-it {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/under-work/under-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnderWorkComponent = (function () {
    function UnderWorkComponent() {
        this.underConstruction = [
            { type: 'header', text: 'Site is still "In The Forge"' }
        ];
    }
    UnderWorkComponent.prototype.ngOnInit = function () {
    };
    return UnderWorkComponent;
}());
UnderWorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-under-work',
        styles: [__webpack_require__("../../../../../src/app/under-work/under-work.component.scss")],
        template: "\n    <app-para\n      [info]=\"underConstruction\"\n    ></app-para>\n    \n    <app-picture\n      [background]=\"'./assets/img/under-work2.gif'\"\n      [height]=\"'60vh'\"\n      [attachment]=\"'scroll'\"\n    ></app-picture>\n    \n    <!--<div class=\"working-on-it\">\n      <img \n        class=\"working-img\"\n        src=\"./assets/img/under-work2.gif\" \n        alt=\"Site is still In The Forge\">\n    </div>-->\n  "
    }),
    __metadata("design:paramtypes", [])
], UnderWorkComponent);

//# sourceMappingURL=under-work.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/banner-overlay.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-overlay.f751d1b4b2779d8f2813.png";

/***/ }),

/***/ "../../../../../src/assets/img/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.b0184f62f124f52486f9.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map