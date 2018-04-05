import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'favorite',
    templateUrl:"app/favoriteComponent/favorite.template.html"
})

export class favoriteComponent{
    @Input() isFavorite = false;
    @Output() change = new EventEmitter();
    starEve(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue : this.isFavorite});
    }

}