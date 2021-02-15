import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuppPage } from './supp.page';

describe('SuppPage', () => {
  let component: SuppPage;
  let fixture: ComponentFixture<SuppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
