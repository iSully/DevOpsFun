import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DogDataService} from "./dog-data.service";

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <h2>Discover Pets To Walk Nearby!</h2>
    </section>
    <article class="pet-list">
      <ul>
        <li *ngFor="let dog of dogService.dogs">
          {{dog.name}}
          <p>{{dog.description}}</p>
        </li>
      </ul>
    </article>
  `,
  styles: [
  ]
})
export class DogsListComponent {
  constructor(readonly dogService: DogDataService) {

  }
}
