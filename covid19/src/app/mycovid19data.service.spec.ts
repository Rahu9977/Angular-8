import { TestBed } from '@angular/core/testing';

import { Mycovid19dataService } from './mycovid19data.service';

describe('Mycovid19dataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mycovid19dataService = TestBed.get(Mycovid19dataService);
    expect(service).toBeTruthy();
  });
});
