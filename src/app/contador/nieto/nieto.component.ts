import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { resetState } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent implements OnInit {
  public contador!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }
  public reset() {
    this.store.dispatch(resetState());
  }
}
