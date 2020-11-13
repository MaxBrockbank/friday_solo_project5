
import Galactic_Age from './../src/js/galactic-age.js';

describe('Galactic_Age class and all its methods', () => {
  let greg;
  beforeEach(() => {
    greg = new Galactic_Age("Greg", 21, 5, 10);
  });

  test('should properly create a Galactic_Age object with input name and age in Earths solar years', () => {
    expect(Object.values(greg)).toEqual(["Greg", 21, 77]);
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

  test('should check planet age passed in as argument against life expectancy of greg', () => {
    greg.mercury();
    greg.venus();
    greg.mars();
    greg.jupiter();
    const {mercuryAge, venusAge, marsAge, jupiterAge} = greg;
    let planetsAndAges = new Map([
      ['Mercury', mercuryAge],
      ['Venus', venusAge],
      ['Mars', marsAge],
      ['Jupiter', jupiterAge]
    ]);
    let keys = Array.from(planetsAndAges.keys());
    let values = Array.from(planetsAndAges.values());
    let results = greg.checkLifeExpectancy(keys, values);
    expect(results[0]).toEqual(`${greg.name} is ${values[0] - greg.expectedLife} years older than expected to live on ${keys[0]}.`);
    expect(results[1]).toEqual(`${greg.name} is expected to live ${greg.expectedLife - values[1]} more years on ${keys[1]}. Use them well.`);
    expect(results[2]).toEqual(`${greg.name} is expected to live ${greg.expectedLife - values[2]} more years on ${keys[2]}. Use them well.`);
    expect(results[3]).toEqual(`${greg.name} is expected to live ${greg.expectedLife - values[3]} more years on ${keys[3]}. Use them well.`);
  });
});