import { Test, TestingModule } from '@nestjs/testing';
import { AmqpContractsService } from './amqp-contracts.service';

describe('AmqpContractsService', () => {
  let service: AmqpContractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmqpContractsService],
    }).compile();

    service = module.get<AmqpContractsService>(AmqpContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
