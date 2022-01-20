/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.8 - Activity: Your first visualization!
 */
const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 };
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

d3.json("data/buildings.json")
  .then((data) => {
    data.forEach((d) => {
      d.height = Number(d.height);
    });

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.height)]) // typically will scale vertically
      .range([0, HEIGHT]); // typeically will scale horizontally
    // const x = d3.scalelog().domain([0, 828]).range([0, 400]).base();
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, WIDTH])
      .paddingInner(0.3)
      .paddingOuter(0.2);
    console.log(x("Burj Khalifa"));

    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

    const g = svg
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    const rects = g.selectAll("rect").data(data);

    rects
      .enter()
      .append("rect")
      .attr("y", 0)
      .attr("x", (d) => x(d.name))
      .attr("width", x.bandwidth)
      .attr("height", (d) => d.height)
      .attr("fill", "grey");
  })
  .catch((error) => {
    console.log(error);
  });
