import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IconsListComponent } from "./components/icons-list/icons-list.component";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { AccountService } from "./services/account.service";
import { HistoriqueService } from "./services/historique.service";
import { ChartsModule } from "ng2-charts";
import { CardModule } from "ngx-card/ngx-card";
@NgModule({
  declarations: [AppComponent, IconsListComponent],
  entryComponents: [IconsListComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ChartsModule,
    CardModule
  ],
  providers: [
    ImagePicker,
    StatusBar,
    SplashScreen,
    AccountService,
    HistoriqueService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
