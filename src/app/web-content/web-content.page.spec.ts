import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebContentPage } from './web-content.page';

describe('WebContentPage', () => {
  let component: WebContentPage;
  let fixture: ComponentFixture<WebContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
