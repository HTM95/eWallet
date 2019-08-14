import { Component } from "@angular/core";
import * as anime from "animejs";
import { JackpotCardComponent } from "../components/jackpot-card/jackpot-card.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  pieChartData;
  constructor() {
    this.useAngularLibrary();
    // this.callAnime();
  }

  dismissPopover() {
    JackpotCardComponent.call(this.dismissPopover());
  }
  callAnime() {
    anime({
      targets: ".potdiv",
      translateY: 200
    });
  }
  useAngularLibrary() {
    this.pieChartData = {
      chartType: "PieChart",
      dataTable: [
        ["Languages", "Percent"],
        ["Cafe", 33],
        ["Car", 33],
        ["House", 33]
      ],
      options: {
        width: 300,
        height: 300,
        pieHole: 0.8,
        pieSliceText: "none",
        legend: "none",
        colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"]
      }
    };
  }
}
