import { DramasModule } from './dramas.module';

describe('DramasModule', () => {
  let dramasModule: DramasModule;

  beforeEach(() => {
    dramasModule = new DramasModule();
  });

  it('should create an instance', () => {
    expect(dramasModule).toBeTruthy();
  });
});
