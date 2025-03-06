import { Component } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { bookIcon, chevronDownIcon, eyeIcon, fileAddIcon, paperclipIcon, userIcon } from '@progress/kendo-svg-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { Product } from '../model';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [KENDO_DROPDOWNS,KENDO_ICONS,KENDO_INPUTS,KENDO_LABEL,KENDO_BUTTONS,KENDO_LAYOUT,KENDO_GRID],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
  public chevron = chevronDownIcon;
  public listItems: Array<string> = [
    "Approved",
    "Rejected"
  ];
  public radio1 = {
    layout: "Landscape",
  };

  public radio2 = {
    layout: "Landscape",
  };
  public current = 1;
  public steps = [
    { label: "Personal Info", svgIcon: userIcon },
    { label: "Education", svgIcon: bookIcon },
    { label: "Attachments", svgIcon: paperclipIcon, optional: true },
    { label: "Preview", svgIcon: eyeIcon },
    { label: "Submit", svgIcon: fileAddIcon },
  ];




  public gridData: Product[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    }
];
}
