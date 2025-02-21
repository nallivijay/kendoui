import { Component } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { GridComponent } from "../grid/grid.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [KENDO_DROPDOWNS, KENDO_DATEINPUTS, GridComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];

  public range = {
    start: new Date(2025, 6, 3),
    end: new Date(2025, 6, 9),
  };
}
