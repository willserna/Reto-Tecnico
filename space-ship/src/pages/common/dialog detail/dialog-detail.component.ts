import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'detail-dialog',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DialogDetailComponent {
  public title: string = 'Ship Detail'
  public shipList: Array<number> = [1, 2 , 3, 4, 5, 6]

}
