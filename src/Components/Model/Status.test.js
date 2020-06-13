import Status from './Status';

it('return value is an object', () => {
  const status = new Status();

  status.setStatusCode(0);
  expect(typeof status.getStatusCode()).toBe("object");

  status.setStatusCode(1);
  expect(typeof status.getStatusCode()).toBe("object");

  status.setStatusCode(2);
  expect(typeof status.getStatusCode()).toBe("object");

  status.setStatusCode(3);
  expect(typeof status.getStatusCode()).toBe("object");

  status.setStatusCode(4);
  expect(status.getStatusCode()).toBe(null);

  expect(status.setStatusCode(4)).toBe("Onbekende fout");
});