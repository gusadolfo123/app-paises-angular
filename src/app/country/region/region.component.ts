import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.interface';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  countries!: Country[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  searchCountryPerRegion(value: string) {
    this.countryService.getContryByRegion(value).subscribe((data) => {
      this.countries = data;
    });
  }
}
