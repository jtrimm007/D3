# D3
 Practice with data visulization

 ## npm packages
 [http-server](https://www.npmjs.com/package/http-server)

 ## SVG
 * inside svg tags shapes can be defined
   * line, rec, text, path...
   * https://www.w3schools.com/graphics/svg_rect.asp
 * Most of the time svg's will be added with js

## JavaScript
* use method chaining instead of defining individually
* need to use .then for promises
* When comparing NaN is the JavaScript method isNaN(x)

## attr functions
.attr("cx", (d, i) => {})

## Scaling a framed area
* Domain and range
* Defining Domain
  * d3.min, max, extend
* data.map


## Time Scales
* d3.scaleTime().domain([new Date(2000, 0, 1), new Date(2001, 0, 1)]).range([0, 400])

## Log Scales
* d3.scaleLog().domain([300, 15000]).range([0, 400]).base(10)
![image](https://user-images.githubusercontent.com/16611773/150375719-47afe317-8553-4387-9601-6490cd386188.png)

## Ordinal Scales
* d3 has color schemes: 
  * d3.schemeCategory10<>
  * d3.schemeCategory20<>
  * d3.schemeCategory20b<>
  * d3.schemeCategory20c<>
* d3.scaleOrdinal().domain([ARRAY OF DATA POINTS]).range(d3.schemeCategory10)

## Band Scales
* Used to space out categories based on how many elements it has. 
* d3.scaleBand().domain([ARRAY OF DATA POINTS]).range([0, 400]).paddingInner(0.3). paddingOuter(0.2)


## SVG Groups
* used to bundle graphical elements together
* transformation attr can move the whole group
