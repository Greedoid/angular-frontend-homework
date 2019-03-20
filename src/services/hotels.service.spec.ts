import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';
import { HttpClientModule } from '@angular/common/http';

describe('HotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: HotelsService = TestBed.get(HotelsService);
    expect(service).toBeTruthy();
  });
});
