import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
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
}
