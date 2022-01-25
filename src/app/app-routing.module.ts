import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutZeroComponent as Layout} from './Layouts';

const routes: Routes = [
  {
    path: 'Alphabet', component: Layout,
    loadChildren: () => import('./Modules/Alphabet/alphabet.module').then(mod => mod.AlphabetModule)
  },
  {
    path: '', component: Layout, children: [
      {path: '', redirectTo: '/Alphabet', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
