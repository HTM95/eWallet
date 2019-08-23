import { Injectable } from "@angular/core";
import { IAccount } from "../classes/account";
import { from, Observable, of } from "rxjs";
import { HistoriqueService } from "./historique.service";
import { Idepense } from "../classes/idepense";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private _historiqueService: HistoriqueService) {}

  account: IAccount = {
    id: 1,
    actualAmount: 300,
    income: 300,
    expense: 200,
    globalAmount: 500
  };
  getAccount(): Observable<IAccount> {
    return of(this.account);
  }
  addInc(inc: number) {
    this.account.income += inc;
    this.account.actualAmount += inc;
    this.account.globalAmount += inc;
  }

  addDep(dep: Idepense) {
    this.account.expense += dep.amount;
    this.account.actualAmount -= dep.amount;
    this._historiqueService.addDepnse(dep);
  }
}
