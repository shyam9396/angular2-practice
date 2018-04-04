import {Component} from 'angular2/core';

@Component({
    selector:'rating',
    template:`
                <h4>my ratings</h4>
                {{title}}
    `
})

export class ratingComponent{
    title = "give a ratings based on your experience" 
}