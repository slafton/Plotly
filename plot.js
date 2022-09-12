console.log(cityGrowths);

// sort cities by growth
var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse();

// select only top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// create an array of city names
var topFiveCityNames = cityGrowths.map(city,City);

// create an array of corresponding population grows
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// create a bar chart with the arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);