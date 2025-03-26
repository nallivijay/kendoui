import { Component } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { bookIcon, checkIcon, chevronDownIcon, eyeIcon, fileAddIcon, paperclipIcon, SVGIcon, userIcon } from '@progress/kendo-svg-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

import { FormsModule } from '@angular/forms';
import { Product } from './model';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [KENDO_DROPDOWNS,KENDO_ICONS,KENDO_INPUTS,KENDO_LABEL,KENDO_BUTTONS,KENDO_LAYOUT,KENDO_GRID,FormsModule],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
  public checkIcon = checkIcon;
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
    { label: "Step Title", isValid: true},
    { label: "Step Title", isValid: true},
    { label: "Step Title", isValid: true},
    { label: "Step Title" , isValid: true},
    { label: "Step Title", isValid: true},
  ];

  public currentVertical = 0;
  public stepsVertical = [
    { label: "Step Title", isValid: true},
    { label: "Step Title", isValid: true},
    { label: "Step Title", isValid: true},
    { label: "Step Title" , isValid: true},
    { label: "Step Title", isValid: true},
  ];





abc() {
  console.log("hello")
}

public listItems1: Array<{ text: string; value: number }> = [
  { text: "Small", value: 1 },
  { text: "Medium", value: 2 },
  { text: "Large", value: 3 },
];
public value: any = [{ text: "Medium", value: 2 }];

public gridData3: Product[] = [
  {
    Id1:1,
    Icons:'a',
    contract:"WE3387",
    instruction_type:"BLAL - Billing Comments - All Services",
    instructions:"Some type of instructions	",
    created_by:"Parmar, Sujata",
    created_date:"01/09/2025",
    modified_by:"McKim, Alan",
    modified_date:"01/10/2025",
  },
  {
    Id1:2,
    Icons:'b',
    contract:"WE3388",
    instruction_type:"BLAL - Billing Comments - All Services",
    instructions:"Some type of instructions	",
    created_by:"Parmar, Sujata",
    created_date:"01/09/2025",
    modified_by:"McKim, Alan",
    modified_date:"01/10/2025",
  }
];

}
