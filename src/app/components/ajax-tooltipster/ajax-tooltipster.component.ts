import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: '[ajax-tooltipster]',
  templateUrl: './ajax-tooltipster.component.html',
  styleUrls: ['./ajax-tooltipster.component.css']
})
export class AjaxTooltipsterComponent implements OnInit {
	@Input() descId: string;

	public app_base_url: string;
	public tooltipText: string = null;
	public showTooltip: boolean = false;
	public loading: boolean = false;
	
	private getDescEvent = new EventEmitter<any>();

	constructor(private platformLocation: PlatformLocation, private appService: AppService) {}

	ngOnInit() {
		this.app_base_url = this.platformLocation['location']['href'];

		this.getDescEvent.subscribe((data: any) => {
			this.tooltipText = data['description_ru'];
		});
	}

	getDescription(id: string) {
		if (this.tooltipText !== null)
			return;

		this.loading = true;
		this.appService.getDescription(id).subscribe((data: any) => {
			this.loading = false;
			let desc = data['pricelist'][id];
			this.getDescEvent.emit(desc);
		});
	}
}
