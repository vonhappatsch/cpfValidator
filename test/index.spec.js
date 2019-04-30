// import { expect } from 'chai';
const cpfValidator = require('../index');
const chai = require('chai')
const expect = chai.expect


describe ('index test', () => {
    describe('valid cpf in numbers', () => {
        it('should return true', () => {
            // const validCpfNumbers = cpfValidator(133985420792);
            expect(cpfValidator.cpfValidator(13385420792)).to.equal(true);
        });
    });
    describe('valid cpf in string', () => {
        it('should return true', () => {
            const validCpfString = cpfValidator("13385420792");
            expect(validCpfString).to.equal(true);
        });
    });
    describe('valid cpf with other characters', () => {
        it('should return true', () => {
            const validCpfChar = cpfValidator("133.854.207-92");
            expect(validCpfChar).to.equal(true);
        });
    });
    describe('invalid cpf in numbers', () => {
        it('should return false', () => {
            const invalidCpfNumbers = cpfValidator(13385429782);
            expect(invalidCpfNumbers).to.equal(false);
        });
    });
    describe('invalid cpf in string', () => {
        it('should return false', () => {
            const invalidCpfString = cpfValidator("13385429782");
            expect(invalidCpfString).to.equal(false);
        });
    });
    describe('invalid cpf with other characters', () => {
        it('should return false', () => {
            const invalidCpfChar = cpfValidator("133.854.297-82");
            expect(invalidCpfChar).to.equal(false);
        });
    });
    describe('invalid cpfs not covered by formula - number', () => {
        it('should return false', () => {
            const invalidEqualNumbers = cpfValidator(11111111111);
            expect(invalidEqualNumbers).to.equal(false);
        });
    });
    describe('invalid cpfs not covered by formula - string', () => {
        it('should return false', () => {
            const invalidEqualString = cpfValidator("11111111111");
            expect(invalidEqualString).to.equal(false);
        });
    });
    describe('invalid cpfs not covered by formula - other characters', () => {
        it('should return false', () => {
            const invalidEqualChar = cpfValidator("111.111.111-11");
            expect(invalidEqualChar).to.equal(false);
        });
    });
})