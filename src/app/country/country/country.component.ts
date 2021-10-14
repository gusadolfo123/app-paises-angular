import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Country } from 'src/app/core/models/country.interface';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countries!: Country[];
  suggestions: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  getCountry(term: string) {
    this.countryService.getCountry(term).subscribe((data) => {
      this.suggestions = [];
      this.countries = data;
    });
  }

  getSuggestion(term: string) {
    this.countryService
      .getCountry(term)
      .pipe(
        map((data): string[] => {
          return data.map((element) => {
            return element.name;
          });
        })
      )
      .pipe(tap(console.log))
      .subscribe((data: string[]) => (this.suggestions = data.slice(0, 3)));
  }
}
