import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "target-page",
        loadChildren: "../target-page/target-page.module#TargetPagePageModule"
      },
      {
        path: "home",
        loadChildren: () =>
          import("../../home/home.module").then(m => m.HomePageModule)
      },
      {
        path: "transfer-page",
        loadChildren:
          "../transfer-page/transfer-page.module#TransferPagePageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
