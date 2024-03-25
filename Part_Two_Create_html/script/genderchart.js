var MenData = window.MenData;
var WomenData = window.WomenData;
// Log data after variable declarations
console.log(MenData);
console.log(WomenData);
// Convert percentages to actual values for men
const convertedMenData = MenData.map(d => ({
  ...d,
  Employer: +d.Employer * 100,
  "Non-Group": +d["Non-Group"] * 100,
  Medicaid: +d.Medicaid * 100,
  Medicare: +d.Medicare * 100,
  Military: +d.Military * 100,
  Uninsured: +d.Uninsured * 100,
}));
// Convert percentages to actual values for women
const convertedWomenData = WomenData.map(d => ({
  ...d,
  Employer: +d.Employer * 100,
  "Non-Group": +d["Non-Group"] * 100,
  Medicaid: +d.Medicaid * 100,
  Medicare: +d.Medicare * 100,
  Military: +d.Military * 100,
  Uninsured: +d.Uninsured * 100,
}));

// Set up chart dimensions
const width = 450;
const height = 300;

// Create SVG container
const svg = d3.select("#healthcaregenderChart")
  .append("svg")
  .attr("width", width * 2 + 50) // Changed width to accommodate both treemaps
  .attr("height", height * 1.5);

// Create dropdown menu
const statesDropdown = d3.select("#healthcaregenderChart")
  .append("select")
  .attr("id", "stateDropdown")
  .style("margin", "10px");


// Populate dropdown with state options from male data
statesDropdown.selectAll("option")
  .data(convertedMenData.map(d => d.Location))
  .enter()
  .append("option")
  .text(d => d);

// Initial state selection
const initialState = convertedMenData[0].Location;

// Initialize treemaps with initial state
updateTreemaps(initialState);

// Event listener for dropdown change
statesDropdown.on("change", function () {
  const selectedState = this.value;
  updateTreemaps(selectedState);
});

// Function to update the treemaps based on the selected state
function updateTreemaps(selectedState) {
  // Filter data for the selected state for men
  const selectedStateMenData = convertedMenData.find(d => d.Location === selectedState);

  // Convert data to hierarchical structure for men treemap
  const rootMen = d3.hierarchy({
    children: [
      {
        name: selectedState,
        children: Object.entries(selectedStateMenData)
          .filter(([key, value]) => key !== "Location") // Exclude Location from treemap
          .map(([category, value]) => ({ name: category, value })),
      },
    ],
  })
    .sum(d => d.value);

  // Filter data for the selected state for women
  const selectedStateWomenData = convertedWomenData.find(d => d.Location === selectedState);

  // Convert data to hierarchical structure for women treemap
  const rootWomen = d3.hierarchy({
    children: [
      {
        name: selectedState,
        children: Object.entries(selectedStateWomenData)
          .filter(([key, value]) => key !== "Location") // Exclude Location from treemap
          .map(([category, value]) => ({ name: category, value })),
      },
    ],
  })
    .sum(d => d.value);

  // Adjusted width and height for slightly smaller treemaps
  const treemapWidth = 400;
  const treemapHeight = 300;

  // Create treemap layout for men
  const treemapMen = d3.treemap()
    .size([treemapWidth, treemapHeight])
    .padding(1)
    .round(true);

  // Create treemap layout for women
  const treemapWomen = d3.treemap()
    .size([treemapWidth, treemapHeight])
    .padding(1)
    .round(true);

  // Generate treemap nodes for men
  const treemapDataMen = treemapMen(rootMen);

  // Generate treemap nodes for women
  const treemapDataWomen = treemapWomen(rootWomen);

  // Set up colors for men treemap
  const stateColorsMen = d3.scaleOrdinal(d3.schemeCategory10);

  // Set up colors for women treemap
  const stateColorsWomen = d3.scaleOrdinal(d3.schemeCategory10); // Using the same color palette for women as men

  // Remove existing treemap and legend elements
  svg.selectAll("*").remove();

  // Add title for men treemap
  svg.append("text")
    .attr("x", treemapWidth / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Healthcare Coverage Providers for Men");

  // Add title for women treemap
  svg.append("text")
    .attr("x", treemapWidth / 2 + 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Healthcare Coverage Providers for Women");

  // Create treemap rectangles for men
  const treemapRectanglesMen = svg.selectAll(".maleRect")
    .data(treemapDataMen.leaves())
    .enter()
    .append("rect")
    .attr("class", "maleRect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0 + 50) // Adjusted y-coordinate for men treemap
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => stateColorsMen(d.data.name))
    .attr("stroke", "white");

  // Add text labels for men treemap
  svg.selectAll(".maleText")
    .data(treemapDataMen.leaves())
    .enter()
    .append("text")
    .attr("class", "maleText")
    .attr("x", d => d.x0 + 5)
    .attr("y", d => d.y0 + 65) // Adjusted y-coordinate for text
    .style("font-size", "10px")
    .style("fill", "black")
    .text(d => `${d.data.value.toFixed(2)}%`);

  // Create treemap rectangles for women
  const treemapRectanglesWomen = svg.selectAll(".femaleRect")
    .data(treemapDataWomen.leaves())
    .enter()
    .append("rect")
    .attr("class", "femaleRect")
    .attr("x", d => d.x0 + treemapWidth + 50) // Adjusted x-coordinate for women treemap
    .attr("y", d => d.y0 + 50) // Adjusted y-coordinate for women treemap
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => stateColorsWomen(d.data.name))
    .attr("stroke", "white");

  // Add text labels for women treemap
  svg.selectAll(".femaleText")
    .data(treemapDataWomen.leaves())
    .enter()
    .append("text")
    .attr("class", "femaleText")
    .attr("x", d => d.x0 + treemapWidth + 55) // Adjusted x-coordinate for text
    .attr("y", d => d.y0 + 65) // Adjusted y-coordinate for text
    .style("font-size", "10px")
    .style("fill", "black")
    .text(d => `${d.data.value.toFixed(2)}%`);

  // Add legend for men treemap
  const legendMen = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${treemapWidth / 4}, ${treemapHeight + 60})`);

  const legendRectsMen = legendMen.selectAll(".legendRect")
    .data(stateColorsMen.domain())
    .enter()
    .append("rect")
    .attr("class", "legendRect")
    .attr("x", (d, i) => i * 100)
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", d => stateColorsMen(d));

  const legendTextsMen = legendMen.selectAll(".legendText")
    .data(stateColorsMen.domain())
    .enter()
    .append("text")
    .attr("class", "legendText")
    .attr("x", (d, i) => i * 100 + 18)
    .attr("y", 15)
    .text(d => d);

  // Hide legend for women treemap
  const legendWomen = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width + treemapWidth / 4 + 50}, ${treemapHeight + 60})`);

  const legendRectsWomen = legendWomen.selectAll(".legendRect")
    .data(stateColorsWomen.domain())
    .enter()
    .append("rect")
    .attr("class", "legendRect")
    .attr("x", (d, i) => i * 100)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => stateColorsWomen(d))
    .style("display", "none");

  const legendTextsWomen = legendWomen.selectAll(".legendText")
    .data(stateColorsWomen.domain())
    .enter()
    .append("text")
    .attr("class", "legendText")
    .attr("x", (d, i) => i * 100 + 30)
    .attr("y", 15)
    .text(d => d)
    .style("display", "none");
}