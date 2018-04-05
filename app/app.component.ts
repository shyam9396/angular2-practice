import {Component} from 'angular2/core';
import {coursesComponent} from './coursesComponent/corses.component';
import {authorsComponent} from './authorComponent/author.component';
import {favoriteComponent} from './favoriteComponent/favorite.component';
import {likesComponent} from './likesComponent/likes.component'

@Component({
    selector: 'my-app',
    template: `<!-- <h1>Hello Angular</h1>
                <favorite 
                    [isFavorite]="post.title"
                    (change)="onFavoriteChange($event)">
                </favorite>
                <courses></courses>
                <author></author> -->
                <likes [totalLikes]='tweet.totalLikes' [likeStatus]='tweet.likeStatus'></likes>
                `,
    directives:[coursesComponent, authorsComponent, favoriteComponent, likesComponent]
})
export class AppComponent { 

    post = {
        title : "Title",
        isFavorite : true
    }
    onFavoriteChange($event){
        console.log($event);
    }

    tweet = {
        totalLikes : 10,
        likeStatus : false        
    }

}