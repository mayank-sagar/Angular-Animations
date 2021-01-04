import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticImagesComponent } from './static-images.component';

describe('StaticImagesComponent', () => {
  let component: StaticImagesComponent;
  let fixture: ComponentFixture<StaticImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
