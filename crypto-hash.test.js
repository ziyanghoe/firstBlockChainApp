const crytoHash = require('./crypto-hash');

describe('crytoHash()', () => {
    
    it('generate SHA-356 hashed output', () => {
        expect(crytoHash('foo')).toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
    });
    it('produces the same ash with the same input arguments in any order', () => {
        expect(crytoHash('one','two','three')).toEqual(crytoHash('two','one','three'));
    });
});

describe('crytoHash()', () => {
    
    it('generate SHA-356 hashed output', () => {
        expect(crytoHash('foo')).toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
    });
    it('produces the same ash with the same input arguments in any order', () => {
        expect(crytoHash('one','two','three')).toEqual(crytoHash('two','one','three'));
    });
});