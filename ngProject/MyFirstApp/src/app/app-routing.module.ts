import { PersonalBioComponent } from "./layouts/personal-bio/personal-bio.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  { path: "Products", component: ProductsComponent },
  { path: "PersonalBioComponent", component: PersonalBioComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
