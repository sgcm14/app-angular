import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComponent } from 'src/app/dbz/components/agregar/agregar.component';
import { DbzService } from '../services/dbz.service';

describe('AgregarComponent', () => {
  let component: AgregarComponent;
  let fixture: ComponentFixture<AgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarComponent ],
      providers:[DbzService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
