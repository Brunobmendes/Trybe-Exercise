const sum = require('./sum.js');

describe('Faz a soma de dois valores', () => {
  it('somar 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('somar 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('erro se somar 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('testa se o erro ao somar 4 e "5" é igual a "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
