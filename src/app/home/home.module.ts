import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { JackpotCardComponent } from "../components/jackpot-card/jackpot-card.component";
import { HistoriqueListeComponent } from "../components/historique-liste/historique-liste.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ])
  ],
  declarations: [HomePage, JackpotCardComponent, HistoriqueListeComponent]
})
export class HomePageModule {}
