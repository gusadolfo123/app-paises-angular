import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output('onEnter') onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();
  @ViewChild('term') term!: ElementRef;
  @Input() suggestions: string[] = [];

  debouncer: Subject<string> = new Subject();
  showSuggestions = true;

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((data) => {
      this.onDebouncer.emit(data);
    });
  }

  onSubmit() {
    this.onEnter.emit(this.term.nativeElement.value);
  }

  keyPress() {
    this.debouncer.next(this.term.nativeElement.value);
  }

  selectedSuggestion(term: string) {
    this.suggestions = [];
    this.onEnter.emit(term);
  }
}
