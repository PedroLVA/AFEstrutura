import { Component, EventEmitter, Input, Output } from '@angular/core';
import IProduct from '../../utils/IProduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Output() idFromRemovedProduct = new EventEmitter<number>();
  @Input() product: IProduct = {} as IProduct;

  deleteProduct() {
    this.idFromRemovedProduct.emit(this.product.id);
  }

}
