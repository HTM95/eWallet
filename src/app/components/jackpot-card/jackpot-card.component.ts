import { Component, OnInit, ViewChild } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { IconsListComponent } from "../icons-list/icons-list.component";
import { IonSelect } from "@ionic/angular";
import { IAccount } from "../../classes/account";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: "app-jackpot-card",
  templateUrl: "./jackpot-card.component.html",
  styleUrls: ["./jackpot-card.component.scss"]
})
export class JackpotCardComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    public popoverController: PopoverController,
    private _accountService: AccountService
  ) {}

  account: IAccount;

  currentPopover = null;
  // @ViewChild("select1") select1: IonSelect;

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
            this._accountService.addInc(parseInt(alertData.amount));
          }
        }
      ]
    });

    await alert.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: IconsListComponent,
      event: ev,
      translucent: true
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => {
        this.currentPopover = null;
      });
    }
  }
  /* async addDepenseAlert() {
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
  }*/
  /*openSelect() {
    this.select1.open();
  }*/

  getAccountsData(): void {
    this._accountService
      .getAccount()
      .subscribe(account => (this.account = account));
  }
  ngOnInit() {
    this.getAccountsData();
  }
}
