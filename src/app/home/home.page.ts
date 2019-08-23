import { Component, OnInit, ViewChild } from "@angular/core";
import * as anime from "animejs";
import { JackpotCardComponent } from "../components/jackpot-card/jackpot-card.component";

//import { MultiDataSet, Label } from "ng2-charts";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor() {}

  dismissPopover() {
    JackpotCardComponent.call(this.dismissPopover());
  }
  callAnime() {
    anime({
      targets: ".potdiv",
      translateY: 200
    });
  }

  /*  useAngularLibrary() {
    this.pieChartData = {
      chartType: "PieChart",
      dataTable: [["Depenses", "Percent"], [this.items.forEach, 1 / 3]],
      options: {
        width: 250,
        height: 250,
        pieHole: 0.8,
        pieSliceText: "none",
        legend: "none",
        colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"]
      }
    };
  }*/
  ngOnInit() {}
}
