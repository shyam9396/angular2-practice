import {Component} from 'angular2/core';
import {AuthorsService} from './author.service'
@Component({
    selector:'author',
    template:`<h4>{{title}}</h4>
                <ul>
                    <li *ngFor="#author of authors">
                        {{author}}
                    </li>
                </ul>
    `,
    providers:[AuthorsService]

})

export class authorsComponent{
    title = 'Author'
    authors;

    constructor(authorsService : AuthorsService){
        this.authors = authorsService.getAuthors();
    }


}
