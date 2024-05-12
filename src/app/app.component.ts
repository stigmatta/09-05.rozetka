import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component'; 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'rozetka';
  products: ProductComponent[] = [];

  constructor() { }
  
  addProduct(image: string, titleText: string): void {
    const product = new ProductComponent();
    product.image = image;
    product.titleText = titleText;
    this.products.push(product);
  }
  
  ngOnInit(): void {
    this.addProduct('assets/noutbuki.png', 'Ноутбуки');
    this.addProduct('assets/monitory.png', 'Монітори');
    this.addProduct('assets/kompyutery.png', 'Computers');
    this.addProduct('assets/planshety.png', 'Планшети');
    this.addProduct('assets/tovary-dlya-gejmerov.png', 'Gaming');
  }
}
