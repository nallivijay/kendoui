import { Component } from '@angular/core';
import { KENDO_NOTIFICATION ,
  NotificationService,} from '@progress/kendo-angular-notification';
  import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

  // import { KENDO_ICONS } from "@progress/kendo-angular-icons";
  import {
    ICON_SETTINGS,
    IconsService,
    IconSettingsService,
  } from "@progress/kendo-angular-icons";
  import { KENDO_ICONS } from "@progress/kendo-angular-icons";

import { paperclipIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { MyIconService } from '../design-system/my-icon.service';
@Component({
  selector: 'app-toast-messages',
  standalone: true,
  imports: [KENDO_NOTIFICATION,KENDO_BUTTON,KENDO_ICONS],
  templateUrl: './toast-messages.component.html',
  styleUrl: './toast-messages.component.scss',
  providers: [
    IconsService,
    { provide: ICON_SETTINGS, useValue: { type: "svg" } },
    { provide: IconSettingsService, useClass: MyIconService },
  ],
})
export class ToastMessagesComponent {
  constructor(private notificationService: NotificationService) {}
  public paperClip: SVGIcon = paperclipIcon;

  
  
  public showSuccess(): void {
    this.notificationService.show({
      content: "This is a success message alert",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "success", icon: true },
      closable: true,
    });
  }
  public showWarning(): void {
    this.notificationService.show({
      content: "Warning notification",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "warning", icon: true },
      closable: true,
    });
  }
  public showInfo(): void {
    this.notificationService.show({
      content: "Info notification",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "info", icon: true },
      closable: true,
    });
  }
  public showError(): void {
    this.notificationService.show({
      content: "Error notification",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "error", icon: true },
      closable: true,
    });
  }
}
