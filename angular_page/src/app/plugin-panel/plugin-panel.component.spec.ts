import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPanelComponent } from './plugin-panel.component';

describe('PluginPanelComponent', () => {
  let component: PluginPanelComponent;
  let fixture: ComponentFixture<PluginPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
