import { IsFutureDate } from './date-validator';

describe('IsFutureDate Validator', () => {
 it('should return true for future dates', () => {
    const validator = new IsFutureDate();
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24); // 1 day in the future
    expect(validator.validate(futureDate)).toBe(true);
 });

 it('should return false for past or current dates', () => {
    const validator = new IsFutureDate();
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24); // 1 day in the past
    const currentDate = new Date();
    expect(validator.validate(pastDate)).toBe(false);
    expect(validator.validate(currentDate)).toBe(false);
 });
});