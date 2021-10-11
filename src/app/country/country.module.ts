import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CountryRouterModule } from './country-router.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountryComponent],
  imports: [CommonModule, CountryRouterModule, SharedModule],
})
export class CountryModule {}
