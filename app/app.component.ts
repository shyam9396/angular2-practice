import {Component} from 'angular2/core';
import {coursesComponent} from './coursesComponent/corses.component';
import {authorsComponent} from './authorComponent/author.component';
import {favoriteComponent} from './favoriteComponent/favorite.component';
import {likesComponent} from './likesComponent/likes.component';
import {votesComponent} from './votesComponent/votes.component';
import {TweetsComponent} from './tweetsComponent/tweets.component';
import {TweetComponent} from './tweetsComponent/tweet.component';
import {TweetService} from './tweetsComponent/tweets.service';

@Component({
    selector: 'my-app',
    template: `<!-- <h1>Hello Angular</h1>
                <favorite 
                    [isFavorite]="post.title"
                    (change)="onFavoriteChange($event)">
                </favorite>
                <courses></courses>
                <author></author>
                <likes [totalLikes]='tweet.totalLikes' [likeStatus]='tweet.likeStatus'></likes>
                <votes [voteCount]="votes.voteCount" [myVote]="votes.myVote" (vote)="onVotes($event)" ></votes>-->
                <div *ngFor="#tweet of tweets">
                    <tweet [data]="tweet"></tweet>
                </div>
                
                `,
    providers: [TweetService],
    directives:[coursesComponent, authorsComponent, favoriteComponent, likesComponent, votesComponent, TweetsComponent, TweetComponent]
})
export class AppComponent { 

  /*  post = {
        title : "Title",
        isFavorite : true
    }
    onFavoriteChange($event){
        console.log($event);
    }   

    votes ={
        voteCount : 10,
        myVote:0
    }
    onVotes($event){
        console.log($event);
    }*/
	
    tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

}