import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KENDO_GRID } from "@progress/kendo-angular-grid";
import { sampleProducts } from './product';
import { Product } from './model1';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

import { FooterComponent } from "./footer/footer.component";
import { DesignSystemComponent } from "./design-system/design-system.component";
import { ToastMessagesComponent } from "./toast-messages/toast-messages.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KENDO_GRID, HeaderComponent, DesignSystemComponent, ToastMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public gridData: Product[] = sampleProducts;
  title = 'demo';
}
