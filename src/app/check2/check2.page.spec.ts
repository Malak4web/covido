import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Check2Page } from './check2.page';

describe('Check2Page', () => {
  let component: Check2Page;
  let fixture: ComponentFixture<Check2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Check2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Check2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
