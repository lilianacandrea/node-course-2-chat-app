const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string witn only spaces', () => {
    var res = isRealString('      ');
    expect(res).toBe(false);
  });

  it('should allow strings with non-spaces characters', () => {
    var res = isRealString('   Lili   ');
    expect(res).toBe(true);
  });
}) ;
