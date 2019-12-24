import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './Components/layout/layout.component';


const routes: Routes = [
  {
    path: 'Alphabet', component: LayoutComponent,
    loadChildren: () => import('./Modules/Alphabet/alphabet.module').then(mod => mod.AlphabetModule)
  },
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: '/Alphabet', pathMatch: 'full'},
      // {path: '**', resolve: {path: PathResolveService}, component: PageNotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
