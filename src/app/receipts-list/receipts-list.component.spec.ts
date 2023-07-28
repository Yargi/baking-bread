import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsListComponent } from './receipts-list.component';

describe('ReceiptsListComponent', () => {
  let component: ReceiptsListComponent;
  let fixture: ComponentFixture<ReceiptsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
