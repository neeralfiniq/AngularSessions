import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner-one",
  template: `
    <div id="index-banner" class="parallax-container">
      <div class="parallax">
        <img
          src="https://cdn.dribbble.com/users/1707548/screenshots/3625905/wb_gif_2.gif"
          alt="Unsplashed background img 1"
        />
      </div>
    </div>
  `,
  styles: []
})
export class BannerOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
