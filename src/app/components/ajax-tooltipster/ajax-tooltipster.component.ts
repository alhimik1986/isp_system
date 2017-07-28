import { Component, OnInit, Input } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: '[ajax-tooltipster]',
  templateUrl: './ajax-tooltipster.component.html',
  styleUrls: ['./ajax-tooltipster.component.css']
})
export class AjaxTooltipsterComponent implements OnInit {
	@Input() descId: string;

	public tooltipText: string = null;
	public showTooltip: boolean = false;
	public loading: boolean = false;

	constructor(private platformLocation: PlatformLocation, private appService: AppService) {}

	ngOnInit() {
		
	}

	getDescription(id: string) {
		if (this.tooltipText !== null)
			return;

		this.loading = true;
		this.appService.getDescription(id).subscribe((data: any) => {
			this.loading = false;
			this.tooltipText = data['pricelist'][id]['description_ru'];
		});
	}
}
