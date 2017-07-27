import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxTooltipsterComponent } from './ajax-tooltipster.component';

describe('AjaxTooltipsterComponent', () => {
  let component: AjaxTooltipsterComponent;
  let fixture: ComponentFixture<AjaxTooltipsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxTooltipsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxTooltipsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
