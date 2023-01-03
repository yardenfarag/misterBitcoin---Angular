import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
    selector: 'user-msg',
    templateUrl: './user-msg.component.html',
    styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnDestroy,  OnInit{

    constructor(public userMsgService: UserMsgService) { }
   
    msg:string = ''

    subscription!:Subscription

    ngOnInit(): void {
        this.subscription = this.userMsgService.msg$.subscribe(msg => {
            this.msg = msg
        })
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe()
    }
}
