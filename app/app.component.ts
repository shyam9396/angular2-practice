import {Component} from 'angular2/core';
import {coursesComponent} from './coursesComponent/corses.component';
import {authorsComponent} from './authorComponent/author.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
                <courses></courses>
                <author></author>
                `,
    directives:[coursesComponent, authorsComponent]
})
export class AppComponent { }