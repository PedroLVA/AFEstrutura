import { Component, Input } from '@angular/core';
import IProduct from '../../utils/IProduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product: IProduct = {} as IProduct;

}
