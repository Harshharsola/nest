import { Test, TestingModule } from '@nestjs/testing';
import { CarreService } from './carre.service';

describe('CarreService', () => {
  let service: CarreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreService],
    }).compile();

    service = module.get<CarreService>(CarreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
