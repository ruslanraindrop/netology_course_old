import healthStatus from '../app';

test('should status healthy', () => {
  const received = healthStatus({ name: 'name', health: 60 });
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('should status wounded', () => {
  const received = healthStatus({ name: 'name', health: 50 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status wounded', () => {
  const received = healthStatus({ name: 'name', health: 30 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status wounded', () => {
  const received = healthStatus({ name: 'name', health: 15 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status critical', () => {
  const received = healthStatus({ name: 'name', health: 10 });
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('should status undefined', () => {
  const received = healthStatus({ name: 'name', health: -1 });
  const expected = undefined;
  expect(received).toBe(expected);
});

test('should status undefined', () => {
  const received = healthStatus({});
  const expected = undefined;
  expect(received).toBe(expected);
});
