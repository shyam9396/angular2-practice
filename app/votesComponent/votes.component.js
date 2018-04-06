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
    var votesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            votesComponent = (function () {
                function votesComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                votesComponent.prototype.voteUp = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                votesComponent.prototype.voteDown = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votesComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votesComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], votesComponent.prototype, "vote", void 0);
                votesComponent = __decorate([
                    core_1.Component({
                        selector: 'votes',
                        template: "\n            <div class=\"votes\">\n                <span (click)=\"voteUp()\"><button><i class=\"glyphicon glyphicon-menu-up\" [class.voted]=\"myVote == 1\"></i></button></span>\n                <span>{{voteCount + myVote}}</span>\n                <span (click)=\"voteDown()\"><button><i class=\"glyphicon glyphicon-menu-down\" [class.voted]=\"myVote == -1\"></i></button></span>\n            </div>\n    ",
                        styles: ["\n        .votes{width:36px;display:block;margin:50px auto;}\n        .votes span{display:block;text-align:center;font-size:24px;height:auto;overflow:hidden;}\n        .votes span > button{display:block;background:transparent;border:none;}\n        .votes span > button > i.voted{color:yellow}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], votesComponent);
                return votesComponent;
            }());
            exports_1("votesComponent", votesComponent);
        }
    }
});
//# sourceMappingURL=votes.component.js.map