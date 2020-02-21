import { RouterModule, Route, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { PersonalBioComponent } from "./layouts/personal-bio/personal-bio.component";
import { MobPartsComponent } from "./products/product-display/product-display.component";

import { SqrtPipe } from "./pipes/sqrt.pipe";
import { FirstDirective } from "./directives/first.directive";
import { FirstCapitalPipe } from "./pipes/first-capital.pipe";
import { ReturnKeyValuePipe } from "./pipes/return-key-value.pipe";
import { HostDirective } from "./directives/host.directive";
import { AppRoutingModule } from "./app-routing.module";

const ROUTES: Routes = [{ path: "Products", component: ProductsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    FooterComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    PersonalBioComponent,
    MobPartsComponent,
    SqrtPipe,
    FirstDirective,
    FirstCapitalPipe,
    ReturnKeyValuePipe,
    HostDirective
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
