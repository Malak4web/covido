import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Check4Page } from './check4.page';

describe('Check4Page', () => {
  let component: Check4Page;
  let fixture: ComponentFixture<Check4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Check4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Check4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
