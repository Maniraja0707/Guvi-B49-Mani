let countries = [];

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    countries = data;
    //console.log(countries);

    // Get all the countries from Asia continent /region using Filter function
    let asiaCountries = countries.filter(country => country.region === "Asia");
    console.log(asiaCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    let minPopulation = countries.filter(pop => pop.population < 200000);
    console.log(minPopulation);

    // Print the following details name, capital, flag using forEach function
    countries.forEach((country) => {
      console.log("Name: ", country.name.official);
      if (country.capital) {
        console.log("Capital: ", country.capital[0]);
      } else {
        console.log("Capital: N/A");
      }
      console.log("Flag: ", country.flag);
    });
    //Print the total population of countries using reduce function
    let totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population:', totalPopulation);
    //Print the country which uses US Dollars as currency.
    let usdCountries = countries.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries that use USD as currency:', usdCountries);


  });
