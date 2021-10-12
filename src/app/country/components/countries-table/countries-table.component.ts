import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css'],
})
export class CountriesTableComponent implements OnInit {
  titles: string[] = ['#', 'Bandera', 'Nombre', 'Poblacion', 'Detalle'];
  @Input() countries!: Country[];

  constructor() {}

  ngOnInit(): void {}
}
