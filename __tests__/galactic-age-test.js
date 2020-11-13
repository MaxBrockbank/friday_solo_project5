
import Galactic_Age from './../src/js/galactic-age.js';

describe('Galactic_Age class and all its methods', () => {
  let greg;
  beforeEach(() => {
    greg = new Galactic_Age("Greg", 21);
  });

  test('should properly create a Galactic_Age object with input name and age in Earths solar years', () => {
    expect(Object.values(greg)).toEqual(["Greg", 21]);
  });

  test('should properly create the mercuryAge property for our greg object', () => {
    greg.mercuryAge();
    expect(greg.mercuryAge).toEqual(87);
  });
});