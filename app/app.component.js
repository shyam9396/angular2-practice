System.register(['angular2/core', './coursesComponent/corses.component', './authorComponent/author.component', './favoriteComponent/favorite.component', './likesComponent/likes.component', './votesComponent/votes.component', './tweetsComponent/tweets.component', './tweetsComponent/tweet.component', './tweetsComponent/tweets.service'], function(exports_1, context_1) {
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
    var core_1, corses_component_1, author_component_1, favorite_component_1, likes_component_1, votes_component_1, tweets_component_1, tweet_component_1, tweets_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (corses_component_1_1) {
                corses_component_1 = corses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (likes_component_1_1) {
                likes_component_1 = likes_component_1_1;
            },
            function (votes_component_1_1) {
                votes_component_1 = votes_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<!-- <h1>Hello Angular</h1>\n                <favorite \n                    [isFavorite]=\"post.title\"\n                    (change)=\"onFavoriteChange($event)\">\n                </favorite>\n                <courses></courses>\n                <author></author>\n                <likes [totalLikes]='tweet.totalLikes' [likeStatus]='tweet.likeStatus'></likes>\n                <votes [voteCount]=\"votes.voteCount\" [myVote]=\"votes.myVote\" (vote)=\"onVotes($event)\" ></votes>-->\n                <div *ngFor=\"#tweet of tweets\">\n                    <tweet [data]=\"tweet\"></tweet>\n                </div>\n                \n                ",
                        providers: [tweets_service_1.TweetService],
                        directives: [corses_component_1.coursesComponent, author_component_1.authorsComponent, favorite_component_1.favoriteComponent, likes_component_1.likesComponent, votes_component_1.votesComponent, tweets_component_1.TweetsComponent, tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map