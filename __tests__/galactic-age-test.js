
import Galactic_Age from './../src/js/galactic-age.js';

describe('Galactic_Age class and all its methods', () => {
  let greg;
  beforeEach(() => {
    greg = new Galactic_Age("Greg", 21);
  });

  test('should properly create a Galactic_Age object with input name and age in Earths solar years', () => {
    expect(Object.values(greg)).toEqual(["Greg", 21, 72]);
  });

  test('should properly create the mercuryAge property for greg', () => {
    greg.mercury();
    expect(greg.mercuryAge).toEqual(87);
  });

  test('should properly create the venusAge property for greg', () => {
    greg.venus();
    expect(greg.venusAge).toEqual(34);
  });
  

  test('should properly create the marsAge property for greg', () => {
    greg.mars();
    expect(greg.marsAge).toEqual(11);
  });

  test('should properly create the marsAge property for greg', () => {
    greg.jupiter();
    expect(greg.jupiterAge).toEqual(1);
  });

});