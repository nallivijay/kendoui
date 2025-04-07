import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [KENDO_BUTTONS,KENDO_DROPDOWNS,KENDO_ICONS,KENDO_DATEINPUTS],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
}
