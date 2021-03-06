/* eslint-disable no-undef */
const cpfValidator = require('../index');
const chai = require('chai');
const expect = chai.expect;
describe('index test', () => {
  describe('valid cpf in numbers', () => {
    it('should return true', () => {
      expect(cpfValidator.cpfValidator(13385420792)).to.equal(true);
    });
  });
  describe('valid cpf in string', () => {
    it('should return true', () => {
      expect(cpfValidator.cpfValidator('13385420792')).to.equal(true);
    });
  });
  describe('string with other characters', () => {
    it('should return true', () => {
      expect(cpfValidator.cpfValidator('133.854.207-92')).to.equal(true);
    });
  });
  describe('invalid cpf in numbers', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator(13385429782)).to.equal(false);
    });
  });
  describe('invalid cpf in string', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('13385429782')).to.equal(false);
    });
  });
  describe('invalid cpf with other characters', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('133.854.297-82')).to.equal(false);
    });
  });
  describe('invalid cpfs not covered by formula - number', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator(11111111111)).to.equal(false);
    });
  });
  describe('invalid cpfs not covered by formula - string', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
    });
  });
  describe('invalid cpfs not covered by formula - other characters', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('111.111.111-11')).to.equal(false);
    });
  });
  describe('empty string', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('')).to.equal(false);
    });
  });
  describe('input with less than 11 characters is invalid', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator(1338652079)).to.equal(false);
    });
  });
  describe('input of over 11 characters is invalid', () => {
    it('should return false', () => {
      expect(cpfValidator.cpfValidator('133854207923')).to.equal(false);
    })
  })
});