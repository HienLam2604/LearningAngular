import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCloneComponent } from './heroes-clone.component';

describe('HeroesCloneComponent', () => {
  let component: HeroesCloneComponent;
  let fixture: ComponentFixture<HeroesCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
