import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
  },
  {
    path: ':id',
    component: CountryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CountryRouterModule {}
