import { Component } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { GridComponent } from "../grid/grid.component";
import { calendarIcon, chevronDownIcon } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [KENDO_DROPDOWNS, KENDO_DATEINPUTS, GridComponent,KENDO_ICONS],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public dateic = calendarIcon;
  public chevron = chevronDownIcon;
  public listItems: Array<string> = [
    "Approved",
    "Rejected"
  ];

  public range = {
    start: new Date(2025, 6, 3),
    end: new Date(2025, 6, 9),
  };
}
