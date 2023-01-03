import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts!: Contact[] | null
  // @Output() onSelect = new EventEmitter<string>()
  @Output() onRemove = new EventEmitter<string>()
}
