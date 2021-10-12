import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.interface';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countries!: Country[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  getCountry(term: string) {
    this.countryService.getCountry(term).subscribe((data) => {
      this.countries = data;
    });
  }
}
