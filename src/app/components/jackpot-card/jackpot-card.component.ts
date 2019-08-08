import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-jackpot-card",
  templateUrl: "./jackpot-card.component.html",
  styleUrls: ["./jackpot-card.component.scss"]
})
export class JackpotCardComponent implements OnInit {
  constructor(public alertController: AlertController) {}
  amount = 400.0;
  exp = 300.0;
  inc = 100.0;

  async addIncomeAlert() {
    const alert = await this.alertController.create({
      header: "Add Income",
      inputs: [
        {
          name: "amount",
          type: "number",
          placeholder: "Amount"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: alertData => {
            this.inc += parseInt(alertData.amount);
            this.amount += parseInt(alertData.amount);
          }
        }
      ]
    });

    await alert.present();
  }

  async addDepenseAlert() {
    const alert = await this.alertController.create({
      header: "Add Depense",
      message: "",
      inputs: [
        {
          name: "amount",
          type: "number",
          placeholder: "Amount"
        },
        {
          name: "categ",
          type: "text",
          placeholder: "Categorie"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: alertData => {
            if (parseInt(alertData.amount) > this.amount) {
              this.exp += parseInt(alertData.amount);
              this.amount -= parseInt(alertData.amount);
            } else {
              alert.message = "No";
            }
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {}
}
