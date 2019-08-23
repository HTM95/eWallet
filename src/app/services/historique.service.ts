import { Injectable } from "@angular/core";
import { Icategory } from "../classes/icategory";
import { Idepense } from "../classes/idepense";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HistoriqueService {
  constructor() {}

  categories: Icategory[] = [
    {
      id: 1,
      nomCateg: "Food",
      icon: "restaurant"
    },
    { id: 2, nomCateg: "Transport", icon: "car" },
    {
      id: 3,
      nomCateg: "Coffe",
      icon: "cafe"
    },
    { id: 4, nomCateg: "House", icon: "home" },
    {
      id: 5,
      nomCateg: "Health",
      icon: "medkit"
    },
    {
      id: 6,
      nomCateg: "Shopping",
      icon: "cart"
    },
    {
      id: 7,
      nomCateg: "Phone",
      icon: "call"
    },
    {
      id: 8,
      nomCateg: "Gym",
      icon: "fitness"
    }
  ];
  depenses: Idepense[] = [];

  getDepenses(): Observable<Idepense[]> {
    return of(this.depenses);
  }
  addDepnse(dep: Idepense) {
    this.depenses.push(dep);
  }
  addCateg(categ: Icategory) {
    this.categories.push(categ);
  }
}
