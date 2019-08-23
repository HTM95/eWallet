import { Component, OnInit } from "@angular/core";
import { HistoriqueService } from "src/app/services/historique.service";
import { Idepense } from "src/app/classes/idepense";

@Component({
  selector: "app-historique-liste",
  templateUrl: "./historique-liste.component.html",
  styleUrls: ["./historique-liste.component.scss"]
})
export class HistoriqueListeComponent implements OnInit {
  items: Idepense[] = [];
  sliderConfig = {
    spaceBetween: 2,
    centredSlides: true
  };
  constructor(private _historiqueService: HistoriqueService) {
    /*for (let i = 0; i < icons.length; i++) {
      this.items.push({
        name: icons[i],
        icon: icons[i],
        amount: i * 100 + 50,
        date: new Date()
      });
    }*/
  }
  ngOnInit() {
    this.getDepensesData();
  }

  getDepensesData() {
    this._historiqueService
      .getDepenses()
      .subscribe(depenses => (this.items = depenses));
  }
}

const icons = ["airplane", "cart", "pulse", "cafe", "home", "car"];
