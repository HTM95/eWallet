import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-historique-liste",
  templateUrl: "./historique-liste.component.html",
  styleUrls: ["./historique-liste.component.scss"]
})
export class HistoriqueListeComponent implements OnInit {
  items: any[] = [];
  constructor() {
    for (let i = 0; i < icons.length; i++) {
      this.items.push({
        name: icons[i],
        icon: icons[i],
        amount: i * 100 + 50,
        date: new Date()
      });
    }
  }
  ngOnInit() {}
}

const icons = ["airplane", "cart", "pulse", "cafe", "home", "car"];
