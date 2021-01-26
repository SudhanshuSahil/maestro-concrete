import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit, OnDestroy {
  doubleSlider = [1000, 5000];
  data : Date = new Date();

  product_list;
  all_products;
  radio;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.radio = "0"
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('ecommerce-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');

      this.http.get<any>("https://admin.maestroconcrete.in/web/products/?format=json").subscribe(
        (data) => {
          this.all_products = data;
          this.product_list = this.all_products;
        },
        (error) => {
          
        }
      );


  }

  change () {
    if (this.radio === '0') {
      this.product_list = this.all_products;
    }
    else{
      this.product_list = this.all_products.filter(s => s.category.id === Number(this.radio))
    }
  }

  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('ecommerce-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}
