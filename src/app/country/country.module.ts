import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CountryRouterModule } from './country-router.module';
import { SharedModule } from '../shared/shared.module';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CoreModule } from '../core/core.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { CapitalComponent } from './capital/capital.component';

@NgModule({
  declarations: [
    CountryComponent,
    CountryDetailComponent,
    CountriesTableComponent,
    RegionComponent,
    CapitalComponent,
  ],
  imports: [
    CommonModule,
    CountryRouterModule,
    SharedModule,
    CoreModule,
    RouterModule,
  ],
})
export class CountryModule {}
