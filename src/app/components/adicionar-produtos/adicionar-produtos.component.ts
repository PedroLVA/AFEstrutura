import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import IProduct from '../../utils/IProduct';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrl: './adicionar-produtos.component.scss'
})
export class AdicionarProdutosComponent {

  productForm: FormGroup = new FormGroup({});
  product: IProduct | null = null;


  @Input() actualId: number | undefined;
  @Output() addProduct = new EventEmitter<IProduct>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  register(){
    console.log("chegou aqui")
    this.product = this.productForm.value;
    if (this.product) {
      if (this.actualId) {
        this.product.id = this.actualId + 1;
      }
      this.addProduct.emit(this.product);
      this.productForm.reset();
    }
  }
}


