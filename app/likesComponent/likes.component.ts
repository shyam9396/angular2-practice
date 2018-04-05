import {Component, Input} from 'angular2/core';

@Component({
    selector:'likes',
    template:`
                <button class="btn inline-block" (click)="likesCount()">
                    <i class="glyphicon glyphicon-heart" [class.liked]="likeStatus"></i>
                </button>
                <span class="inline-block">{{totalLikes}}</span>
    `,
    styles:[`
        .inline-block{display:inline-block;}
        .btn{background:transparent;}
        .btn > i{color:#ccc;font-size:16px;}
        .btn > i.liked{color:deeppink;}
    `]

})

export class likesComponent{
    @Input() totalLikes = 0;
    @Input() likeStatus = false;
    likesCount(){
        this.likeStatus = !this.likeStatus;
        this.totalLikes += this.likeStatus ? 1 : -1;
    }
}