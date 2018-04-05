import {Component} from 'angular2/core';
import {coursesComponent} from './coursesComponent/corses.component';
import {authorsComponent} from './authorComponent/author.component';
import {favoriteComponent} from './favoriteComponent/favorite.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
                <courses></courses>
                <author></author>
                <favorite [isFavorite]="post.title "></favorite>
                `,
    directives:[coursesComponent, authorsComponent, favoriteComponent]
})
export class AppComponent { 

    post = {
        title : "Title",
        isFavorite : true
    }
}