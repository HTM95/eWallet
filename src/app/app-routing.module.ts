import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs/home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  { path: "tabs", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  { path: 'add-card', loadChildren: './pages/add-card/add-card.module#AddCardPageModule' },
  { path: 'invoices', loadChildren: './pages/invoices/invoices.module#InvoicesPageModule' },
  { path: 'edit-profil', loadChildren: './pages/edit-profil/edit-profil.module#EditProfilPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
