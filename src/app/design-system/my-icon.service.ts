import { Injectable } from "@angular/core";
import { IconSettingsService } from "@progress/kendo-angular-icons";
import { SVGIcon } from "@progress/kendo-svg-icons";
import * as allSVGIcons from "@progress/kendo-svg-icons";

@Injectable()
export class MyIconService extends IconSettingsService {
  private svgDictionary: { [key: string]: SVGIcon } = {
    "caret-alt-down": allSVGIcons.chevronDownIcon,
    "caret-alt-up": allSVGIcons.chevronUpIcon,
    "caret-alt-right":allSVGIcons.chevronRightIcon,
    "caret-alt-left":allSVGIcons.chevronLeftIcon,
    "caret-alt-to-right":allSVGIcons.chevronDoubleRightIcon,
    "caret-alt-to-left":allSVGIcons.chevronDoubleLeftIcon,

    "plus":allSVGIcons.chevronRightIcon,
    "minus":allSVGIcons.chevronDownIcon,
   

  };

  public override getSvgIcon(svgIconName: string): SVGIcon {
    return this.svgDictionary[svgIconName] || super.getSvgIcon(svgIconName);
  }
}
