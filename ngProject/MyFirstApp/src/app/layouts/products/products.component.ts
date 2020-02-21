import { BOOKDATA } from "./../../products/model/book-data";
import { MOBDATA } from "../../products/model/mob-info-data";
import { Component, OnInit, SimpleChanges } from "@angular/core";
import { MobileInfo } from "src/app/products/model/mob-info";
import { BookInfo } from "src/app/products/model/book";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: []
})
export class ProductsComponent implements OnInit {
  public product;
  public finalInfo: any[];

  mobileInfo: MobileInfo[] = MOBDATA;

  bookInfo: BookInfo[] = BOOKDATA;

  noData = [];

  constructor(route: ActivatedRoute) {
    route.params.subscribe(val => {
      console.log("constructor-products");
      const parameters = new URLSearchParams(window.location.search);
      switch (parameters.get("Product")) {
        case "MOBILE":
          this.product = "MOBILE";
          console.log("this.product " + this.product);
          break;

        case "BOOK":
          this.product = "BOOK";
          console.log("this.product " + this.product);
        default:
          break;
      }
    });
  }

  ngOnInit() {
    console.log("ngOnInit-products");
    const parameters = new URLSearchParams(window.location.search);
    switch (parameters.get("Product")) {
      case "MOBILE":
        this.product = "MOBILE";
        console.log("this.product " + this.product);
        break;

      case "BOOK":
        this.product = "BOOK";
        console.log("this.product " + this.product);
      default:
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges-products");
    const parameters = new URLSearchParams(window.location.search);
    switch (parameters.get("Product")) {
      case "MOBILE":
        this.product = "MOBILE";
        console.log("this.product " + this.product);
        break;

      case "BOOK":
        this.product = "BOOK";
        console.log("this.product " + this.product);
      default:
        break;
    }
  }
}
