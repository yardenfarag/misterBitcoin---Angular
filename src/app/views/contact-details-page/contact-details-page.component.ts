import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { Move } from 'src/app/models/move/move.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  constructor(
    private ContactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private userMsgService: UserMsgService
    ) { }
  @Output() moves!:Move[] 
  contact!: Contact
  amount!:number

  subscription!: Subscription

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    this.loadMoves()
  }

  loadMoves() {
    const moves = this.userService.getUser().moves
    this.moves = moves.filter((move:Move) => move.toId === this.contact._id).splice(0,3)
  }

  onRemove() {
    if(this.contact?._id){
      this.ContactService.deleteContact(this.contact._id)
      this.router.navigateByUrl('/contact')
      this.userMsgService.setMsg('Contact removed!')
    }
  }
  onTransferFunds() {
    if (this.amount < 1) {
      this.userMsgService.setMsg('Please enter a value greater than 0!')
      return
    }
    const user = this.userService.getUser()
    if (this.amount > user.coins) {
      this.userMsgService.setMsg('Not enough coins!')
      this.amount = user.coins
      return
    }
    this.userService.addMove(this.contact, this.amount)
    this.userMsgService.setMsg(`Coins transferred to ${this.contact.name}`)
    this.amount = 1
    this.loadMoves()
  }
}
