import { Component, OnInit, Input, Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styles: [
    `
      .available {
        color: green;
      }
      .notAvailable {
        color: red;
      }
    `
  ]
})
export class MobPartsComponent implements OnInit {
  constructor() {}
  @Input() input: any;
  ngOnInit() {}

  bookImgURL =
    "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  mobileImgURL =
    "https://images-na.ssl-images-amazon.com/images/I/41E3D99rd2L._SX258_BO1,204,203,200_.jpg";

  myfunction(name: string) {
    return (name = name.toUpperCase());
  }
}
