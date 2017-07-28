import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent {
	public app_base_url: string;

	constructor(private platformLocation: PlatformLocation) {
		this.app_base_url = this.platformLocation['location']['href'];
	}
}
