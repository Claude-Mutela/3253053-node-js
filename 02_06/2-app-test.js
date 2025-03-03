//importation des modules des test
const myTest = require('node:test');
//module d'insertion
const assert = require('node:assert/strict');
//importation module opération
const myOperation = require('./1-operations');
//Définition d'un test

myTest.test('Test addition', () => {
    //initialiser les variables
    const operations = new myOperation.operations();
    //Effectuer l'action
    const result = operations.add(1, 2);
    //Etablir l'assertion
    assert.strictEqual(result, 3); //vérifier si le résultat est égal à 3
})