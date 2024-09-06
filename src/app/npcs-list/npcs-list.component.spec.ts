import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcsListComponent } from './npcs-list.component';

describe('NpcsListComponent', () => {
  let component: NpcsListComponent;
  let fixture: ComponentFixture<NpcsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NpcsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
