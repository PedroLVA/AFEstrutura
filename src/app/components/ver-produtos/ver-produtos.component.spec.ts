import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProdutosComponent } from './ver-produtos.component';

describe('VerProdutosComponent', () => {
  let component: VerProdutosComponent;
  let fixture: ComponentFixture<VerProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
