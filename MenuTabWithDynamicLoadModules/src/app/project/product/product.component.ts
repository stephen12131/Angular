import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() IsActive:boolean = true;

  canClose(): boolean {
    return true;
   }

}
