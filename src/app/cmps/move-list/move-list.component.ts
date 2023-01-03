import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent{

    @Input() moves:Move[] | undefined

  
}
