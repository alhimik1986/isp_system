import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ajax-tooltipster]'
})
export class AjaxTooltipsterDirective {
	@HostBinding("style.cursor") get getCursor(){
		return "pointer";
	}
}
