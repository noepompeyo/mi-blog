module.exports = {
  env: {
    //enviroments que vamos a usar
    browser: true, // Variables globales del navegador
    amd: true, // Define require() y define () como varibles globales
    node: true, //Variables globales de Node.js y alcanse de Node.js
    es6: true, // Habilita todas las caracteristicas de ECMAScript 6 excepto los módulos
  },
  // extender las configuraciones que hemos agregado como plugin
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    // agregar las reglas
    semi: ['error', 'always'],
  },
};
