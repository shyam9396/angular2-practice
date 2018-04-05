System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var likesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            likesComponent = (function () {
                function likesComponent() {
                    this.totalLikes = 0;
                    this.likeStatus = false;
                }
                likesComponent.prototype.likesCount = function () {
                    this.likeStatus = !this.likeStatus;
                    this.totalLikes += this.likeStatus ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], likesComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], likesComponent.prototype, "likeStatus", void 0);
                likesComponent = __decorate([
                    core_1.Component({
                        selector: 'likes',
                        template: "\n                <button class=\"btn inline-block\" (click)=\"likesCount()\">\n                    <i class=\"glyphicon glyphicon-heart\" [class.liked]=\"likeStatus\"></i>\n                </button>\n                <span class=\"inline-block\">{{totalLikes}}</span>\n    ",
                        styles: ["\n        .inline-block{display:inline-block;}\n        .btn{background:transparent;}\n        .btn > i{color:#ccc;font-size:16px;}\n        .btn > i.liked{color:deeppink;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], likesComponent);
                return likesComponent;
            }());
            exports_1("likesComponent", likesComponent);
        }
    }
});
//# sourceMappingURL=likes.component.js.map