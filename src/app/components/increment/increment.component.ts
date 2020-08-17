import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // tslint:disable-next-line: no-input-rename
  @Input('numberProgress') progress = 50;
  @Input() btnClass = 'btn-primary';

  // tslint:disable-next-line: no-output-rename
  @Output('numberProgress') changeValueNumber: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.changeValueNumber.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.changeValueNumber.emit(0);
      return this.progress = 0;
    } else {
      this.progress = this.progress + value;
      this.changeValueNumber.emit(this.progress);
    }
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.changeValueNumber.emit(this.progress);
  }

}
