import { Component } from '@angular/core';
import { KENDO_DROPDOWNS} from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { bookIcon, calendarIcon, checkIcon, chevronDownIcon, eyeIcon, fileAddIcon, paperclipIcon, SVGIcon, userIcon } from '@progress/kendo-svg-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_GRID, PageChangeEvent,
  PagerPosition,
  PagerType, } from '@progress/kendo-angular-grid';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_TOOLTIPS } from '@progress/kendo-angular-tooltip';
import { FormsModule } from '@angular/forms';
import { Product } from './model';
import { DropDwnComponent } from "../drop-dwn/drop-dwn.component";
import { KENDO_PAGER } from "@progress/kendo-angular-pager";

import { ViewChild } from '@angular/core';
import { products } from './products';
import {
  ICON_SETTINGS,
  IconsService,
  IconSettingsService,
} from "@progress/kendo-angular-icons";
import { MyIconService } from './my-icon.service';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [KENDO_DROPDOWNS, KENDO_ICONS, KENDO_INPUTS,KENDO_TOOLTIPS, KENDO_LABEL, KENDO_BUTTONS, KENDO_LAYOUT, KENDO_GRID,KENDO_PAGER, FormsModule, KENDO_DATEINPUTS, DropDwnComponent,KENDO_DIALOGS],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss',
  providers: [
      IconsService,
      { provide: ICON_SETTINGS, useValue: { type: "svg" } },
      { provide: IconSettingsService, useClass: MyIconService },
    ],
})
export class DesignSystemComponent {

  public type: PagerType = "numeric";

  public buttonCount = 5;
  public info = true;
  public pageSizes = [5, 10, 20];
  public previousNext = true;
  public position: PagerPosition = "bottom";
  public data: any[] = products;
  public pageSize = 2;
  public skip = 0;
  public checkIcon = checkIcon;
  public chevron = chevronDownIcon;
  public dateic = calendarIcon;
  public listItems: Array<string> = [
    "Approved",
    "Rejected"
  ];
  public listItems2: Array<string> = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
  ];
  public radio1 = {
    layout: "Landscape",
  };

  public radio2 = {
    layout: "Landscape",
  };
  public opened = true;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
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

  
  public range = {
    start: new Date(2025, 6, 3),
    end: new Date(2025, 6, 9),
  };



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
  },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // },
  // {
  //   Id1:2,
  //   Icons:'b',
  //   contract:"WE3388",
  //   instruction_type:"BLAL - Billing Comments - All Services",
  //   instructions:"Some type of instructions	",
  //   created_by:"Parmar, Sujata",
  //   created_date:"01/09/2025",
  //   modified_by:"McKim, Alan",
  //   modified_date:"01/10/2025",
  // }
];

}
