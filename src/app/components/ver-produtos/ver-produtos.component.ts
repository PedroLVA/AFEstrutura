import { Component } from '@angular/core';
import IProduct from '../../utils/IProduct';
import { BinaryTree } from '../../utils/BinaryTree';
import { Pilha } from '../../utils/Pilha';

@Component({
  selector: 'app-ver-produtos',
  templateUrl: './ver-produtos.component.html',
  styleUrls: ['./ver-produtos.component.scss']
})
export class VerProdutosComponent {

  pilha: Pilha<IProduct> = new Pilha();
  binaryTree: BinaryTree = new BinaryTree();
  products: Array<IProduct> = [];
  actualId = 1;
  filterValue: string = 'one';

  constructor() {
    this.products = [
      { id: this.actualId, name: 'Produto 1', description: 'Descrição do produto 1', price: 10.00 },
      { id: this.actualId += 1, name: 'Produto 2', description: 'Descrição do produto 2', price: 20.00 },
      { id: this.actualId += 1, name: 'Produto 3', description: 'Descrição do produto 3', price: 30.00 }
    ];

    this.products.forEach(product => {
      this.binaryTree.insert(product);
    });

    this.updateProductsList('ascending');
  }

  onAddProduct(newProduct: IProduct) {
    this.actualId++;
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

  onProductDeleted(productId: number) {
    const productIndex = this.products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
      const deletedProduct = this.products.splice(productIndex, 1)[0];
      this.pilha.push(deletedProduct);
      this.updateBinaryTree();
    }
  }

  updateBinaryTree() {
    this.binaryTree = new BinaryTree();
    this.products.forEach(product => {
      this.binaryTree.insert(product);
    });
  }

  undoDelete() {
    const product = this.pilha.pop();
    if (product) {
      this.products.push(product);
      this.binaryTree.insert(product);
      this.updateProductsList('ascending');
    }
  }


}
