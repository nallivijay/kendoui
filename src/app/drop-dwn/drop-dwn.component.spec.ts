import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDwnComponent } from './drop-dwn.component';

describe('DropDwnComponent', () => {
  let component: DropDwnComponent;
  let fixture: ComponentFixture<DropDwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDwnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
