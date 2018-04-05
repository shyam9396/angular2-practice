System.register(['angular2/core', './courses.service', '../autoGrowDirective/autoGrow.directive'], function(exports_1, context_1) {
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
    var core_1, courses_service_1, autoGrow_directive_1;
    var coursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (autoGrow_directive_1_1) {
                autoGrow_directive_1 = autoGrow_directive_1_1;
            }],
        execute: function() {
            coursesComponent = (function () {
                function coursesComponent(coursesService) {
                    this.isActive = true;
                    this.title = "Courses";
                    this.courses = coursesService.getCourses();
                }
                coursesComponent.prototype.onClick = function ($event) {
                    console.log("Clicked", $event);
                };
                coursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n                <h4>{{title}}</h4>\n                <input type=\"text\" autoGrow />\n                <ul>\n                    <li *ngFor=\"#course of courses\">\n                        {{course}}\n                    </li>\n                </ul>\n                <button class=\"btn\" [class.active]=\"isActive\" (click)=\"onClick($event)\"> Class binding Button </button><br><br>\n                <button class=\"btn\" [style.background]=\"isActive ? 'yellow' : 'red'\"> Style binding Button </button><br><br>\n\n    ",
                        providers: [courses_service_1.CoursesService],
                        directives: [autoGrow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], coursesComponent);
                return coursesComponent;
            }());
            exports_1("coursesComponent", coursesComponent);
        }
    }
});
//# sourceMappingURL=corses.component.js.map