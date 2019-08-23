import { Icategory } from "./icategory";

export interface Idepense {
  id: number;
  amount: number;
  categ: Icategory;
  date: Date;
}
