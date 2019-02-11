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
var config_service_1 = require("@fuse/services/config.service");
var FuseModule = /** @class */ (function () {
    function FuseModule(parentModule) {
        if (parentModule) {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }
    FuseModule_1 = FuseModule;
    FuseModule.forRoot = function (config) {
        return {
            ngModule: FuseModule_1,
            providers: [
                {
                    provide: config_service_1.FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    FuseModule = FuseModule_1 = __decorate([
        core_1.NgModule(),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [FuseModule])
    ], FuseModule);
    return FuseModule;
    var FuseModule_1;
}());
exports.FuseModule = FuseModule;
//# sourceMappingURL=fuse.module.js.map