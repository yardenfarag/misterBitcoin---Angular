import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private userMsgService: UserMsgService
    ) { }

  contacts$!: Observable<Contact[]>
  isLoading = true
  isBlur = false

  subscription!: Subscription

  ngOnInit(): void {

      this.contactService.loadContacts()
      setTimeout(()=>{
        this.contacts$ = this.contactService.contacts$
        this.isLoading = false
      },2000)

      this.subscription = this.router.events.subscribe((val) => {
        if (val instanceof NavigationStart) {
          
          this.isBlur = (val.url !== '/contact')
          console.log('blur:',this.isBlur, 'url', val.url);
        }
      }) 
  }

}
