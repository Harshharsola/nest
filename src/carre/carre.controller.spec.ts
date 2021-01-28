import { Test, TestingModule } from '@nestjs/testing';
import { CarreController } from './carre.controller';

describe('CarreController', () => {
  let controller: CarreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreController],
    }).compile();

    controller = module.get<CarreController>(CarreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
