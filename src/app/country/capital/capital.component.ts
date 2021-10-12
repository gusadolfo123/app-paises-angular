import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.interface';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
})
export class CapitalComponent implements OnInit {
  countries!: Country[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  getCountry(term: string) {
    this.countryService.getCountryByCapital(term).subscribe((data) => {
      this.countries = data;
    });
  }
}
