import Status from './Status';

// Test of de return value een object is
it('return value is an object 1', () => {
  const status = new Status();

  status.setStatusCode(0);
  expect(typeof status.getStatusCode()).toBe("object");
});

it('return value is an object 2', () => {
  const status = new Status();

  status.setStatusCode(1);
  expect(typeof status.getStatusCode()).toBe("object");
})

it('return value is an object 3', () => {
  const status = new Status();

  status.setStatusCode(2);
  expect(typeof status.getStatusCode()).toBe("object");
})

it('return value is an object 4', () => {
  const status = new Status();

  status.setStatusCode(3);
  expect(typeof status.getStatusCode()).toBe("object");
})

// Test of de return value een onbekende fout is
it ('return value is Onbekende fout', () => {
  const status = new Status();

  status.setStatusCode(4);
  expect(status.getStatusCode().message).toBe("Onbekende fout");
})