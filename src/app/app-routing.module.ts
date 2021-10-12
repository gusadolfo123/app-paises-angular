import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './country/capital/capital.component';
import { RegionComponent } from './country/region/region.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'country', pathMatch: 'full' },
      {
        path: 'country',
        loadChildren: () =>
          import('./country/country.module').then((m) => m.CountryModule),
      },
      {
        path: 'region',
        component: RegionComponent,
      },
      {
        path: 'capital',
        component: CapitalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
