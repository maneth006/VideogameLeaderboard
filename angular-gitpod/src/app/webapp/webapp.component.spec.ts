import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappComponent } from './webapp.component';

describe('WebappComponent', () => {
  let component: WebappComponent;
  let fixture: ComponentFixture<WebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
