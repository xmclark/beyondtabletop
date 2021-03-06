import { Component, Input } from '@angular/core';

@Component({
  selector: 'bt-rpg-overview-collectable-type-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class RpgOverviewCollectableTypeReferenceComponent {
  @Input() public self: any
  @Input() public collectable: any
  @Input() public item: any
  @Input() public field: any
  constructor() { }
}
