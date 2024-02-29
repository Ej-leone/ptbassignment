const { randomUUID } = require('crypto');
const { generateVoucherCode } = require('./generate-voucher'); 
jest.mock('crypto', () => ({
 randomUUID: jest.fn(),
}));

describe('generateVoucherCode', () => {
 it('should return a substring of the generated UUID', () => {
    randomUUID.mockReturnValue('123e4567-e89b-12d3-a456-426614174000');
    const result = generateVoucherCode();
    expect(result).toBe('3e456');
    expect(randomUUID).toHaveBeenCalled();
 });
});