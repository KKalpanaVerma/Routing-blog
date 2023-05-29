import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChannelComponent } from './about-channel.component';

describe('AboutChannelComponent', () => {
  let component: AboutChannelComponent;
  let fixture: ComponentFixture<AboutChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChannelComponent]
    });
    fixture = TestBed.createComponent(AboutChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
