"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_1 = require("@angular/cdk/platform");
var core_2 = require("@ngx-translate/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_service_1 = require("@fuse/services/config.service");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var sidebar_service_1 = require("@fuse/components/sidebar/sidebar.service");
var splash_screen_service_1 = require("@fuse/services/splash-screen.service");
var translation_loader_service_1 = require("@fuse/services/translation-loader.service");
var navigation_1 = require("app/navigation/navigation");
var en_1 = require("app/navigation/i18n/en");
var tr_1 = require("app/navigation/i18n/tr");
var AppComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    function AppComponent(document, _fuseConfigService, _fuseNavigationService, _fuseSidebarService, _fuseSplashScreenService, _fuseTranslationLoaderService, _translateService, _platform) {
        this.document = document;
        this._fuseConfigService = _fuseConfigService;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseSidebarService = _fuseSidebarService;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._translateService = _translateService;
        this._platform = _platform;
        // Get default navigation
        this.navigation = navigation_1.navigation;
        // Register the navigation to the service
        this._fuseNavigationService.register('main', this.navigation);
        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('main');
        // Add languages
        this._translateService.addLangs(['en', 'tr']);
        // Set the default language
        this._translateService.setDefaultLang('en');
        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(en_1.locale, tr_1.locale);
        // Use a language
        this._translateService.use('en');
        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.fuseConfig = config;
            if (_this.fuseConfig.layout.width === 'boxed') {
                _this.document.body.classList.add('boxed');
            }
            else {
                _this.document.body.classList.remove('boxed');
            }
        });
    };
    /**
     * On destroy
     */
    AppComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    AppComponent.prototype.toggleSidebarOpen = function (key) {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __param(0, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object, config_service_1.FuseConfigService,
            navigation_service_1.FuseNavigationService,
            sidebar_service_1.FuseSidebarService,
            splash_screen_service_1.FuseSplashScreenService,
            translation_loader_service_1.FuseTranslationLoaderService,
            core_2.TranslateService,
            platform_1.Platform])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map