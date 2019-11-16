(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Rate My Cakes</h1>\r\n<main>\r\n  <div class=\"main\">\r\n    <form (submit)=\"createCake()\">\r\n      <p>Submit a cake to be rated</p>\r\n      <div>\r\n        <label for=\"baker_name\">Baker name:</label>\r\n        <input type=\"text\" id=\"baker_name\" name=\"name\" [(ngModel)]=\"newCake.baker_name\">\r\n      </div>\r\n      <div>\r\n        <label for=\"image_url\">Image URL:</label>\r\n        <input type=\"text\" id=\"image_url\" name=\"image_url\" [(ngModel)]=\"newCake.image_url\">\r\n      </div>\r\n      <button>Submit</button>\r\n    </form>\r\n\r\n    <div *ngIf=\"cakes\">\r\n      <app-cake *ngFor=\"let cake of cakes.all; let idx = index;\" [cake]=\"cake\" [cakeIdx]=\"idx\"></app-cake>\r\n    </div>\r\n\r\n  </div>\r\n  <app-summary *ngIf=\"cakes.selected !== null\" [cake]=\"cakes.selected\"></app-summary>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cake/cake.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cake/cake.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cake\">\r\n  <img [src]=\"cake.image_url\" width=\"200\" (click)=\"selectCake()\">\r\n  <form (submit)=\"addReview(cake._id)\">\r\n    <div>\r\n      <select name=\"newRating.rating\" [(ngModel)]=\"newRating.rating\">\r\n        <option value=\"5\">5</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"1\">1</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <textarea name=\"comment\" cols=\"30\" rows=\"10\" [(ngModel)]=\"newRating.comment\"\r\n        placeholder=\"Type your comment here\"></textarea>\r\n    </div>\r\n    <div>\r\n      <button>Rate!</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/summary/summary.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/summary/summary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Baked by: {{ cake.baker_name }}</h2>\r\n  <div class=\"summary\">\r\n    <div>\r\n      <img [src]=\"cake.image_url\" width=\"300\">\r\n    </div>\r\n    <div *ngIf=\"cake.reviews.length\">\r\n      <h3>Average rating {{ calculateAverageRating(cake.reviews) }} stars</h3>\r\n      <div *ngFor=\"let review of cake.reviews\">\r\n        <p>\r\n          {{ review.comment }}<br />\r\n          {{ review.rating }} stars\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  max-width: 900px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cake.service */ "./src/app/cake.service.ts");




let AppComponent = class AppComponent {
    constructor(_httpService, _cakeService) {
        this._httpService = _httpService;
        this._cakeService = _cakeService;
        this.cakes = null;
    }
    ngOnInit() {
        this.newCake = {
            baker_name: '',
            image_url: ''
        };
        // cakes is an obj, see it in CakeService
        this._cakeService.getFreshCakes();
        this.cakes = this._cakeService.cakes;
    }
    createCake() {
        this._httpService.createCake(this.newCake)
            .subscribe((response) => {
            if (response.hasOwnProperty('cake')) {
                this.cakes.all.push(response.cake);
                // reset the form
                this.newCake = {
                    baker_name: '',
                    image_url: ''
                };
            }
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _cake_service__WEBPACK_IMPORTED_MODULE_3__["CakeService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cake/cake.component */ "./src/app/cake/cake.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cake.service */ "./src/app/cake.service.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__["CakeComponent"],
            _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _cake_service__WEBPACK_IMPORTED_MODULE_9__["CakeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cake.service.ts":
/*!*********************************!*\
  !*** ./src/app/cake.service.ts ***!
  \*********************************/
/*! exports provided: CakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeService", function() { return CakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let CakeService = class CakeService {
    constructor(_httpService) {
        this._httpService = _httpService;
        /** Wrapped in an object so it can be passed via reference/pointer
         * so that when it is updated, all pointers to it will be updated
        */
        this.cakes = {
            all: [],
            selected: null
        };
    }
    getFreshCakes() {
        this._httpService.getCakes().subscribe((response) => {
            this.cakes.all = response.cakes;
        });
    }
    updateCakeByIdx(idx, updatedCake) {
        this.cakes.all[idx] = updatedCake;
        this.cakes.selected = updatedCake;
    }
};
CakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], CakeService);



/***/ }),

/***/ "./src/app/cake/cake.component.css":
/*!*****************************************!*\
  !*** ./src/app/cake/cake.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cake {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZS9jYWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY2FrZS9jYWtlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FrZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cake/cake.component.ts":
/*!****************************************!*\
  !*** ./src/app/cake/cake.component.ts ***!
  \****************************************/
/*! exports provided: CakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeComponent", function() { return CakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cake.service */ "./src/app/cake.service.ts");




let CakeComponent = class CakeComponent {
    constructor(_httpService, _cakeService) {
        this._httpService = _httpService;
        this._cakeService = _cakeService;
        this.newRating = {
            rating: 5,
            comment: ''
        };
    }
    selectCake() {
        /** All vars pointing at selected cake from cake service will
         * be updated via reference
         */
        this._cakeService.cakes.selected = this.cake;
    }
    addReview(id) {
        this._httpService.createReview(id, this.newRating)
            .subscribe((response) => {
            if (response.hasOwnProperty('cake')) {
                // reset the form
                this.newRating.rating = 5;
                this.newRating.comment = '';
                this._cakeService.updateCakeByIdx(this.cakeIdx, response.cake);
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CakeComponent.prototype, "cake", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CakeComponent.prototype, "cakeIdx", void 0);
CakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cake',
        template: __webpack_require__(/*! raw-loader!./cake.component.html */ "./node_modules/raw-loader/index.js!./src/app/cake/cake.component.html"),
        styles: [__webpack_require__(/*! ./cake.component.css */ "./src/app/cake/cake.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _cake_service__WEBPACK_IMPORTED_MODULE_3__["CakeService"]])
], CakeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getCakes() {
        return this._http.get('/api/cakes');
    }
    createCake(cake) {
        return this._http.post('/api/cakes', cake);
    }
    createReview(cakeId, review) {
        return this._http.post(`/api/cakes/${cakeId}/reviews`, review);
    }
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summary {\r\n  display: flex;\r\n  border: 2px solid green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() {
    }
    calculateAverageRating(reviews) {
        let sum = 0;
        for (const review of reviews) {
            sum += review.rating;
        }
        return sum / reviews.length;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SummaryComponent.prototype, "cake", void 0);
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/summary/summary.component.html"),
        styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SummaryComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Neil\Documents\code\Dojo\oc_instruction\MEAN\assignment_slns\angular\dom_manip\rate-my-cakes\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map