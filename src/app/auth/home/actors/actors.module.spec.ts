import { ActorsModule } from './actors.module';

describe('ActorsModule', () => {
  let actorsModule: ActorsModule;

  beforeEach(() => {
    actorsModule = new ActorsModule();
  });

  it('should create an instance', () => {
    expect(actorsModule).toBeTruthy();
  });
});
