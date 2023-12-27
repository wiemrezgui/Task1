import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucardsComponent } from './menucards.component';

describe('MenucardsComponent', () => {
  let component: MenucardsComponent;
  let fixture: ComponentFixture<MenucardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenucardsComponent]
    });
    fixture = TestBed.createComponent(MenucardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
