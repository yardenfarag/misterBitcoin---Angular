import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-edit',
    templateUrl: './contact-edit-page.component.html',
    styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditComponent implements OnInit {
    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    contact!: Contact
    subscription!: Subscription

    ngOnInit(): void {
        this.route.data.subscribe(({contact}) => {
            this.contact = contact || this.contactService.getEmptyContact() as Contact
        })
    }

    onSaveContact() {
        this.contactService.saveContact(this.contact)
        this.router.navigateByUrl('/contact')

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

}
