import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      .available {
        color: green;
      }
      .notAvailable {
        color: green;
      }
    `
  ]
})
export class ProductsComponent implements OnInit {
  constructor() {}

  productsInfo = [
    {
      name: "Mobile",
      price: "1000",
      stock: 111,
      country: "india",
      available: "green"
    },
    {
      name: "Mobile 1",
      price: "10000",
      stock: 0,
      country: "pakistan",
      class: "red"
    },

    {
      name: "Mobile 2",
      price: "10000",
      stock: 50,
      country: "UK",
      class: "green"
    }
  ];
  ngOnInit() {}
}
