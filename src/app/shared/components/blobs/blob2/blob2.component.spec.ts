import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Blob2Component } from './blob2.component';

describe('Blob2Component', () => {
  let component: Blob2Component;
  let fixture: ComponentFixture<Blob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blob2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Blob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
