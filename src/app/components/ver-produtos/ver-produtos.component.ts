import { Component } from '@angular/core';
import IProduct from '../../utils/IProduct';
import { BinaryTree } from '../../utils/BinaryTree';

@Component({
  selector: 'app-ver-produtos',
  templateUrl: './ver-produtos.component.html',
  styleUrls: ['./ver-produtos.component.scss']
})
export class VerProdutosComponent {

  binaryTree: BinaryTree = new BinaryTree();
  products: Array<IProduct> = [];

  constructor() {
    this.products = [
      { name: 'Produto 1', description: 'Descrição do produto 1', price: 10.00 },
      { name: 'Produto 2', description: 'Descrição do produto 2', price: 20.00 },
      { name: 'Produto 3', description: 'Descrição do produto 3', price: 30.00 }
    ];

    this.products.forEach(product => {
      this.binaryTree.insert(product);
    });

    this.updateProductsList('ascending');
  }

  onAddProduct(newProduct: IProduct) {
    this.binaryTree.insert(newProduct);
    this.updateProductsList('ascending');
  }

  updateProductsList(order: 'ascending' | 'descending') {
    let sortedProducts = this.binaryTree.inorder();
    if (order === 'descending') {
      sortedProducts = sortedProducts.reverse();
    }
    this.products = sortedProducts;
  }

  onFilterChange(event: any) {
    const value = event.value;
    if (value === 'one') {
      this.updateProductsList('ascending');
    } else if (value === 'two') {
      this.updateProductsList('descending');
    }
  }
}
