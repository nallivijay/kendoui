import { Component } from '@angular/core';
import { KENDO_TOOLTIPS } from '@progress/kendo-angular-tooltip';
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-drop-dwn',
  standalone: true,
  imports: [KENDO_TOOLTIPS,ButtonsModule],
  templateUrl: './drop-dwn.component.html',
  styleUrl: './drop-dwn.component.scss'
})
export class DropDwnComponent {

}
