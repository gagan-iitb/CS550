// Dummy Data
const my_data = [
  { id: 1, name: "India", cases: 800 },
  { id: 2, name: "Nepal", cases: 225 },
  { id: 3, name: "Africa", cases: 354 },
  { id: 4, name: "America", cases: 485 },
  { id: 5, name: "Canada", cases: 150 },
];

// Defining few constant values
const chart_height = 400;    // Height of the chart (Except margin)
const chart_width = 620;     // Width of the chart (Except margin)
const margin_vertical = 50;  // Margin at top & bottom
const margin_horizon = 70;   // Margin at left & right
const font_size = 18;        // Font ize of the axis ticks & texts
const corner_radius = 10;    // Amount of corner roundness of the bars

// Using the D3 Scale features to correlate actual data & rendering units
// "https://cdn.skypack.dev/d3-scale@4"

// Define X-Axis i.e. "name" values in our case
const x = d3
  .scaleBand()
  .domain(my_data.map((x) => x.name))
  .range([0, chart_width])
  .padding(0.3);

// Define Y-Axis i.e. "cases" values in our case
const y = d3
  .scaleLinear()
  .domain([0, d3.max(my_data, (x) => x.cases) + 200])
  .range([chart_height, 0]);

// Defining height & width of our chart i.e. <svg> element and name it as container
const container = d3
  .select("svg")
  .attr("height", chart_height + 2 * margin_vertical)
  .attr("width", chart_width + 2 * margin_horizon)
  .classed("container", true);

// <g> is a SVG group element, and it will hold all the bars present in our chart
const chart = container.append("g");

// This D3 chaining is responsible for creating the main bars in our chart using
// <rect>. Here, .enter() will check whether any <rect> is already present there
// or not. the obvious ans is NOT due to the HTML document, then enter() will create
// all the elements and put those in the <g> element.
chart
  .selectAll("rect")
  .data(my_data, (data) => data.id)
  .enter()
  .append("rect")
  .attr("width", x.bandwidth())
  .attr("height", (data) => chart_height - y(data.cases))
  .attr("x", (data) => x(data.name) + margin_horizon)
  .attr("y", (data) => y(data.cases) + margin_vertical)
  .attr("rx", `${corner_radius}px`)
  .attr("fill", "red");

// Here, we are appending the Case counts as <text> element
// in the similar fashion as previous.
chart
  .selectAll("text")
  .data(my_data, (data) => data.id)
  .enter()
  .append("text")
  .attr("x", (data) => x(data.name) + x.bandwidth() / 2 + margin_horizon)
  .attr("y", (data) => y(data.cases) - 8 + margin_vertical)
  .attr("style", `font-size:${font_size + 5}px;`)
  .attr("text-anchor", "middle")
  .text((data) => data.cases);


// Using the D3 Axis features to create X-Axis & Y-Axis ticks
// "https://cdn.skypack.dev/d3-axis@3"

// Now, here we are creating & positioning the X-Axis ticks
container
  .append("g")
  .call(d3.axisBottom(x))
  .attr("font-size", font_size + "px")
  .attr(
    "transform",
    `translate(${margin_horizon}, ${chart_height + margin_vertical})`
  );

// At the end we are creating & positioning the Y-Axis ticks
container
  .append("g")
  .call(d3.axisLeft(y))
  .attr("font-size", font_size + "px")
  .attr("transform", `translate(${margin_horizon}, ${margin_vertical})`);
