import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrl: './adicionar-produtos.component.scss'
})
export class AdicionarProdutosComponent {

  productForm: FormGroup = new FormGroup({});

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
    console.log(this.productForm.value)
  }
}


