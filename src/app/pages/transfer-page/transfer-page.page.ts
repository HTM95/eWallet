import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transfer-page",
  templateUrl: "./transfer-page.page.html",
  styleUrls: ["./transfer-page.page.scss"]
})
export class TransferPagePage implements OnInit {
  constructor() {}

  ngOnInit() {}
  sendTransfert(data) {
    console.log(data);
  }
}
