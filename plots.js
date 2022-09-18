d3.json("samples.json").then(function(data){
    console.log(data);
});

// display results in descending order and take out null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// print each key-value pair
// console.log(Object.entries(reasearcher1));

// print to the console each train and corresponding property
// reasearcher1.forEach(([first, second]) => console.log(first + ":" + second));

// skill drill Print all the metadata of the first person in the samples.json() dataset(ID 940)
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] 
//     }];
//     Plotly.newPlot("plot", data);
//   };
  
//   d3.selectAll("#dropdownMenu").on("change", updatePlotly);
//   function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");
  
//     var xData = [1, 2, 3, 4, 5];
//     var yData = [];
  
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };
  
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
//     Plotly.restyle("plot", trace);
//   };
  
//   init();


// function to create a dropdown menu of ID #s dynamnically.
  function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // optionChanged function  that is called from html
  // tasks need to be modularized(seperate)
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  };

  //declare buildMetadata function
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text("ID: " + result.id);
      PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
      PANEL.append("h6").text("Gender: " + result.gender);
      PANEL.append("h6").text("Age: " + result.age);
      PANEL.append("h6").text("Location: " + result.location);
      PANEL.append("h6").text("BBTYPE: " + result.bbtype);
      PANEL.append("h6").text("WFREQ: " + result.wfreq);
    });
  };



