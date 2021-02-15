import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Check3Page } from './check3.page';

describe('Check3Page', () => {
  let component: Check3Page;
  let fixture: ComponentFixture<Check3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Check3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Check3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
