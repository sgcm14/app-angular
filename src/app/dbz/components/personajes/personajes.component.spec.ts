import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from 'src/app/dbz/components/personajes/personajes.component';
import { DbzService } from '../services/dbz.service';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesComponent ],
      providers:[DbzService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
