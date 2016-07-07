import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: SG-CONF', () => {
  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'SG-CONF Rocks!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('SG-CONF Rocks!');
    }));
});
