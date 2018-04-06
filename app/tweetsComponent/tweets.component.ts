import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TweetService} from '../tweetsComponent/tweets.service';
import {TweetComponent} from '../tweetsComponent/tweet.component';
@Component({
    selector:'tweets',
    template:`
                <div *ngFor="#tweet of tweets">
                    <tweet [data]="tweet"></tweet>
                </div>
            `,
    styles:[],
    providers: [TweetService],
    directives: [TweetComponent]
})

export class TweetsComponent{
    
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}