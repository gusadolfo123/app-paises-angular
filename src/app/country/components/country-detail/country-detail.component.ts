import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/core/models/country.interface';
import { CountryService } from 'src/app/core/services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country!: Country;

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.getCountryByAlpha(id)))
      .pipe(tap(console.log))
      .subscribe((data) => {
        this.country = data;
      });
  }
}
