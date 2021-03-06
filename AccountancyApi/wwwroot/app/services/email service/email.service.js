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
Object.defineProperty(exports, "__esModule", { value: true });
var email_http_service_1 = require("./email-http.service");
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var EmailService = /** @class */ (function () {
    function EmailService(emailHttp) {
        this.emailHttp = emailHttp;
        this.smtpSettingsChanged = new Subject_1.Subject();
        this.autoConfigResult = new Subject_1.Subject();
    }
    EmailService.prototype.SendMessage = function (message) {
        this.emailHttp.SendEmail(message).subscribe(function (response) {
            alert("Wiadomość wysła na pomyślnie");
        }, function (error) {
            alert("Nie udało się wysłać");
        });
    };
    EmailService.prototype.ChangeSmtpSettings = function (settings) {
        var _this = this;
        this.emailHttp.ChangeSmtpSettings(settings).subscribe(function (response) {
            _this.smtpSettingsChanged.next(true);
            return true;
        }, function (error) {
            alert("wystąpił błąd");
            _this.smtpSettingsChanged.next(false);
            return false;
        });
    };
    EmailService.prototype.ResetDefaults = function () {
        var _this = this;
        this.emailHttp.ResetDefaults().subscribe(function (response) {
            _this.smtpSettingsChanged.next(true);
            return true;
        }, function (error) {
            alert("wystąpił błąd");
            _this.smtpSettingsChanged.next(false);
            return false;
        });
    };
    EmailService.prototype.SmtpAutoConfig = function (config) {
        var _this = this;
        this.emailHttp.SmtpAutoConfig(config).subscribe(function (result) {
            _this.autoConfigResult.next(result);
            console.log("autoConfigResult");
        }, function (error) {
            _this.autoConfigResult.next(null);
            alert("Błędna konfiguracja");
        });
    };
    EmailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [email_http_service_1.EmailHttpService])
    ], EmailService);
    return EmailService;
}());
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map