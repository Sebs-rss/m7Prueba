// Luego de instalar jest con npm install --save-dev jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest @vue/test-utils, se crea este archivo llamado jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom', // Define el entorno para las pruebas
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // Archivos .vue serán procesados con @vue/vue3-jest
    '^.+\\.js$': 'babel-jest'       // Archivos .js serán procesados con babel-jest
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$', // Archivos de prueba que coincidan con .test.js o .spec.js
  moduleFileExtensions: ['vue', 'js'], // Extensiones válidas para módulos
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // Resolver rutas alias (@) hacia src
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'], // Ignorar estas rutas al generar cobertura
  coverageReporters: ['text', 'json-summary'], // Formatos para los reportes de cobertura
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'] // Opciones adicionales para el entorno de pruebas
  }
};
