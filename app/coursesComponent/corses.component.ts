import {Component, Directive} from 'angular2/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from '../autoGrowDirective/autoGrow.directive'

@Component({
    selector:'courses',
    template:`
                <h4>{{title}}</h4>
                <input type="text" autoGrow />
                <ul>
                    <li *ngFor="#course of courses">
                        {{course}}
                    </li>
                </ul>
                <button class="btn" [class.active]="isActive" (click)="onClick($event)"> Class binding Button </button><br><br>
                <button class="btn" [style.background]="isActive ? 'yellow' : 'red'"> Style binding Button </button><br><br>
                <button class="btn" (click)="starEve()">
                    <i class="glyphicon" 
                        [class.glyphicon-star-empty] = "!toggleStar"
                        [class.glyphicon-star] = "toggleStar"></i>
                </button>

    `,
    providers:[CoursesService],
    directives:[AutoGrowDirective]
})

export class coursesComponent{
    toggleStar = false;
    isActive = true;
    title = "Courses" 
    courses;

    starEve(){
        this.toggleStar = !this.toggleStar;
    }

    constructor(coursesService : CoursesService){
        this.courses = coursesService.getCourses();
    }

    onClick($event){
        console.log("Clicked", $event);
    }
}