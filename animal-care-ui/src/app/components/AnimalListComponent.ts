import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../services/api.services';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card *ngFor="let animal of animais$ | async">
      <mat-card-title>{{ animal.nome }}</mat-card-title>
    </mat-card>
  `
})
export class AnimalListComponent {
  animais$ = this.api.getAnimais();

  constructor(private api: ApiService) {}
}
