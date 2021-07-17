'use strict';

import { ServiceBroker } from 'moleculer';
import HelloService from '@services/hello';
import ContextFactory from '@utils/context';

describe("Test 'greeter' service", () => {
  let broker = new ServiceBroker({
    ContextFactory,
    logger: false,
  });
  broker.createService(HelloService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  describe("Test 'greeter.hello' action", () => {
    it("should return with 'Hello Moleculer'", async () => {
      const res = await broker.call('hello.greeter');
      expect(res).toBe('Hello, Goby');
    });
  });
});
