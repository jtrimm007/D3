/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.8 - Activity: Your first visualization!
 */

d3.csv("data/CHR 2010.csv")
  .then((data) => {
    data.forEach((d) => {
      d["College degrees CI low"] = isNaN(
        parseFloat(d["College degrees CI low"])
      )
        ? 0
        : parseFloat(d["College degrees CI low"]);
    });

    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", 1400)
      .attr("height", 400);

    const circles = svg.selectAll("circle").data(data);

    circles
      .enter()
      .append("circle")
      .attr("cx", (d, i) => i * 50 + 50)
      .attr("cy", 250)
      .attr("r", (d) => 100 * d["College degrees CI low"])
      .attr("fill", "red");
  })
  .catch((error) => {
    console.log(error);
  });
