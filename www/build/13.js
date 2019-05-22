webpackJsonp([13],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.currentItems = this.items.query();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    HomePage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    HomePage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    HomePage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fabricio/Projetos/Fidelizera/src/pages/home/home.html"*/'<ion-header no-shadow>\n    <ion-navbar >\n        <ion-title>Olá Joãozinho</ion-title>\n        <ion-buttons end>\n            <ion-icon color="primary" slot="start" name="settings"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <h3>Você está em</h3>\n\n    <ion-content class="no-scroll" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n            <ion-item class="combobox">\n                    <ion-label >Endereço</ion-label>\n                    <ion-select [(ngModel)]="endereco">\n                        <ion-option value="1">Qr 416 conjunto i santa maria</ion-option>\n                        <ion-option value="2">Quadra CRNW 506 Bloco A Lote 5 Setor Noroeste</ion-option>\n                        <ion-option value="3">Conjunto SHA Conjunto 1 Chácara 30A Setor Habitacional Arniqueira (Águas Claras)</ion-option>\n                    </ion-select>\n                </ion-item>\n                <p>\n                    Abaixo os estabelecimentos próximos:\n                </p>\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/450px-McDonald%27s_logo.svg.png">\n                    </ion-avatar>\n                    <h2>\n                        <b>MC donalds</b>\n                    </h2>\n                    <h3>Qr 416 conjunto i santa maria</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://irp-cdn.multiscreensite.com/7dee32a5/images/C%C3%B3pia_2_delogo2.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>Tio Jão Lanches</b>\n                    </h2>\n                    <h3>Quadra CRNW 506 Bloco A Lote 5 Setor Noroeste</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://www.subway.com/~/media/Base_English/Images/FooterButtons/footer_popup-menu_group.jpg?la=pt-BR&hash=ED360007012A325C2E93ADBAF10DC4B7B60714BC">\n                    </ion-avatar>\n                    <h2>\n                        <b>Subway</b>\n                    </h2>\n                    <h3>Qr 416 conjunto i santa maria</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://media.cdnandroid.com/c1/e9/26/71/imagen-spoleto-0big.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>Spoletto</b>\n                    </h2>\n                    <h3>Quadra CRNW 506 Bloco A Lote 5 Setor Noroeste</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://http2.mlstatic.comcurso-apostila-como-montar-uma-papelaria-frete-gratis-D_NQ_NP_954514-MLB27387777057_052018-F.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>Tia Lúcia Papelaria</b>\n                    </h2>\n                    <h3>Qr 416 conjunto i santa maria</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="http://supermercadodoisirmaos.zip.net/images/DSC02898.JPG">\n                    </ion-avatar>\n                    <h2>\n                        <b>Mercado Dois Irmãos</b>\n                    </h2>\n                    <h3>Conjunto SHA Conjunto 1 Chácara 30A Setor Habitacional Arniqueira (Águas Claras)</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n    </ion-content>\n</ion-content>'/*ion-inline-end:"/home/fabricio/Projetos/Fidelizera/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map