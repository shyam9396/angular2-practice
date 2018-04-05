import {Component, Input} from 'angular2/core';

@Component({
    selector:'favorite',
    template:`
                <button class="btn" (click)="starEve()">
                    <i class="glyphicon"
                        [class.glyphicon-star-empty] = "!isFavorite"
                        [class.glyphicon-star] = "isFavorite"></i>
                </button>

    `,
})

export class favoriteComponent{
    @Input() isFavorite = false;

    starEve(){
        this.isFavorite = !this.isFavorite;
    }
}