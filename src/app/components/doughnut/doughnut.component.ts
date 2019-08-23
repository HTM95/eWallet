import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Chart } from "chart.js";
import { HistoriqueService } from "../../services/historique.service";
import { Idepense } from "../../classes/idepense";

@Component({
  selector: "app-doughnut",
  templateUrl: "./doughnut.component.html",
  styleUrls: ["./doughnut.component.scss"]
})
export class DoughnutComponent implements OnInit {
  constructor(private _historiqueService: HistoriqueService) {}

  doughnutChart: any;
  items: Idepense[] = [];
  ngOnInit() {
    this.getDepensesData();
    this.doughnutChartMethod();
    this.items.forEach(item => {
      console.log(item.amount);
      this.addData(item.categ.nomCateg, item.amount);
    });
  }
  getDepensesData() {
    this._historiqueService
      .getDepenses()
      .subscribe(depenses => (this.items = depenses));
    /* let chartsLabels = depenses.map(item => item.categ.nomCateg.toString());
      let chartsData = depenses.map(item => item.amount);
      /* depenses.forEach(item => {
        chartsLabels.push(item.categ.nomCateg.toString());
        chartsData.push(item.amount);
      });*/

    //this.doughnutChartMethod(chartsLabels, chartsData);
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart("canvas", {
      type: "doughnut",
      data: {
        labels: ["Amount"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850"
            ],
            data: [100]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050"
        }
      }
    });
  }

  addData(label, data) {
    this.doughnutChart.data.labels.push(label);
    this.doughnutChart.data.datasets.forEach(dataset => {
      dataset.data.push(data);
    });
    this.doughnutChart.update();
  }
}
