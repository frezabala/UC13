"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * Getter $name
     * @return {string}
     */
    Pessoa.prototype.getName = function () {
        return this.name;
    };
    /**
     * Setter $name
     * @param {string} value
     */
    Pessoa.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * Getter $age
     * @return {number}
     */
    Pessoa.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Setter $age
     * @param {number} value
     */
    Pessoa.prototype.setAage = function (value) {
        this.age = value;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
