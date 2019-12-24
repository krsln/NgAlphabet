import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AurebeshComponent, FutharkComponent, OrkhonComponent, YeniseiComponent} from './Components';

const routes: Routes = [
  {
    path: '', // ... Removed for Lazy-Loading look: src/App.Routing.Module.ts
    // component: LayoutComponent,
    children: [
      {path: 'Aurebesh', component: AurebeshComponent},
      {path: 'Futhark', component: FutharkComponent},
      {path: 'Orkhon', component: OrkhonComponent},
      {path: 'Yenisei', component: YeniseiComponent},

      {path: '', component: YeniseiComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule {
}
