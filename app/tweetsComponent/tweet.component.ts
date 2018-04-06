
import {Component, Input} from 'angular2/core';
import {likesComponent} from '../likesComponent/likes.component';

@Component({
    selector: 'tweet',
    template: `
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{ data.imageUrl }}">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">
        {{ data.author }} <span class="handle">{{ data.handle }}</span>
    </h4>
    {{ data.body }}
    <div>
        <likes [totalLikes]='tweet.totalLikes' [likeStatus]='tweet.likeStatus'></likes>
    </div>
  </div>
</div>    
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [likesComponent]
})
export class TweetComponent {
    constructor(){
        console.log(this.data);
    }
    @Input() data;

    tweet = {
        totalLikes : 10,
        likeStatus : false        
    }
}