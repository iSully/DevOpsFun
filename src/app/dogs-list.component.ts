import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DogDataService} from "./dog-data.service";
import {DogCardComponent} from "./dog-card.component";

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogCardComponent],
  template: `
    <section class="hero-section">
      <h2>Discover Pets To Walk Nearby!</h2>
    </section>
    <article class="pet-list">
        <app-dog-card class="dog-card" *ngFor="let dog of this.dogService.dogs; let i = index;" [index]="i" [dog]="dog">
          {{dog.name}}
          <p>{{dog.description}}</p>
        </app-dog-card>>
    </article>
  `,
  styles: [`
    .pet-list {
      display: flex;
      flex-wrap: wrap;
    }

    .dog-card {
      margin: 10px;
    }
  `

  ]
})
export class DogsListComponent {
  constructor(readonly dogService: DogDataService) {

  }
}
