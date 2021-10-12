import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output('onEnter') onEnter: EventEmitter<string> = new EventEmitter();
  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.onEnter.emit(this.term);
  }
}
