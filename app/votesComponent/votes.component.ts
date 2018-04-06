import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector:'votes',
    template:`
            <div class="votes">
                <span (click)="voteUp()"><button><i class="glyphicon glyphicon-menu-up" [class.voted]="myVote == 1"></i></button></span>
                <span>{{voteCount + myVote}}</span>
                <span (click)="voteDown()"><button><i class="glyphicon glyphicon-menu-down" [class.voted]="myVote == -1"></i></button></span>
            </div>
    `,
    styles:[`
        .votes{width:36px;display:block;margin:50px auto;}
        .votes span{display:block;text-align:center;font-size:24px;height:auto;overflow:hidden;}
        .votes span > button{display:block;background:transparent;border:none;}
        .votes span > button > i.voted{color:yellow}
    `]
})

export class votesComponent{
   @Input() voteCount = 0;
   @Input() myVote = 0;
   @Output() vote = new EventEmitter();

   voteUp(){
        if(this.myVote == 1){
            return;
        }
            this.myVote++;
            this.vote.emit({myVote : this.myVote});
        
    }
    voteDown(){
        if(this.myVote == -1){
            return;
        }
            
        this.myVote--;
        this.vote.emit({myVote : this.myVote});        
    }
}