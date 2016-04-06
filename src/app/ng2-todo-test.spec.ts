import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2TodoTestApp} from '../app/ng2-todo-test';

beforeEachProviders(() => [Ng2TodoTestApp]);

describe('App: Ng2TodoTest', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2TodoTestApp], (app: Ng2TodoTestApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2TodoTestApp], (app: Ng2TodoTestApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

