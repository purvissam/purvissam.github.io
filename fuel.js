const data = await d3.csv("https://flunky.github.io/cars2017.csv");

var x = d3.scaleLog().base(10).domain([10,150]).range([0,200])  
var y = d3.scaleLog().base(10).domain([10,150]).range([200,0])

d3.select("svg")
    .append("g")
    .attr("transform","translate(50,50)")
    .selectAll().data(data).enter().append("circle")
       .attr("cx", function(d) { return x(d.AverageCityMPG)})
       .attr("cy", function(d){return y(d.AverageHighwayMPG)})
       .attr("r", function(d){ return 2 + parseInt(d.EngineCylinders)})    
     

d3.select("svg")
  .append("g")
  .attr("transform","translate(50,50)")
  .call(d3.axisLeft(y)
       .tickValues([10,20,50,100])
       .tickFormat(d3.format("~s")));

d3.select("svg")
  .append("g")
  .attr("transform","translate(50,250)")
  .call(d3.axisBottom(x)
        .tickValues([10,20,50,100])
        .tickFormat(d3.format("~s")));










