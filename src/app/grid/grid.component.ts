import { Component } from '@angular/core';
// import { Product } from './model';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { NgIf } from '@angular/common';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { chevronDownIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [KENDO_GRID,NgIf,KENDO_ICONS,KENDO_DROPDOWNS],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  
  public chevron = chevronDownIcon;
  public listItems: Array<string> = [
    "Approved",
    "Rejected"
  ];

  public mySelection: string[] = [];
// public gridData: Product[] = [
//     {
//       Id:1,
//       Icons:'a',
//       Quote:4700280,
//       JT:"High Pressure Equipment Cleaning",
//       ST:"10K Hydroblast Vessel Cleaning",
//       JD:"Vessel Cleaning",
//       Stus:"Approved",
//       QO:"McKim, Alan",
//       CD:"10/09/2024",






//     },
//     {
//       Id:2,
//       Icons:'b',
//       Quote:4700281,
//       JT:"High Pressure Equipment Cleaning",
//       ST:"10K Hydroblast Vessel Cleaning",
//       JD:"Vessel Cleaning",
//       Stus:"Approved",
//       QO:"McKim, Alan",
//       CD:"10/09/2024",
//     }
//   ];
}
