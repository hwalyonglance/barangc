import { TestBed, inject } from '@angular/core/testing';

import { CSSService } from './css.service';

describe('CSSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CSSService]
    });
  });

  it('should be created', inject([CSSService], (service: CSSService) => {
    expect(service).toBeTruthy();
  }));
});
