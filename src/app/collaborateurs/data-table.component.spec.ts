import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateursComponent } from './collaborateurs.component';

describe('DataTableComponent', () => {
  let component: CollaborateursComponent;
  let fixture: ComponentFixture<CollaborateursComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});