import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";

const routes: Routes = [
  // {path: '', redirectTo: 'Home'},
  {
    path: '', data: {breadcrumb: 'Alphabet'},
    children: [
      {path: '', data: {breadcrumb: 'Home'}, component: HomeComponent},
      {path: ':Name', data: {breadcrumb: 'Home'}, component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule {
}
