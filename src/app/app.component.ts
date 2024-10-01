import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Cars {
  mark?: Mark;
  model: string;
  year: string;
}

interface Mark {
  name: string;
  country: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projekt-5-zadanie-dyrektywy-2';
  activeMark: string = '';
  marks: Mark[] = [
    {
      name: 'Porsche',
      country: 'Deutschland',
    },
    {
      name: 'Renault',
      country: 'France',
    },
    {
      name: 'Škoda',
      country: 'Czech Republic',
    },
  ];
  cars: Cars[] = [
    {
      model: '911 Turbo S',
      year: '2023',
      mark: this.marks[0],
    },
    {
      model: 'Megane RS',
      year: '2020',
      mark: this.marks[1],
    },
    {
      model: 'Super B',
      year: '2022',
      mark: this.marks[2],
    },
  ];

  selectMark = (mark: string): void => {
    this.activeMark = mark;
  };
}
