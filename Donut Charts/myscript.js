var xArray = ["Indonesia", "France", "Canada", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];
//Define Layout
var layout= {title: "World Wide Wine Production"};
//define data
var data = [{Labels:xArray, values:yArray, hole:.4, type:"pie"}];
//display using plotly
Plotly.newPlot("myPlot", data, layout);