import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerBinComponent } from './recycler-bin.component';

describe('RecyclerBinComponent', () => {
  let component: RecyclerBinComponent;
  let fixture: ComponentFixture<RecyclerBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecyclerBinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclerBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
