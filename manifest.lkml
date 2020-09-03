project_name: "viz-test_uservoice-marketplace"

constant: VIS_LABEL {
  value: "Test UserVoice"
  export: override_optional
}

constant: VIS_ID {
  value: "test_uservoice-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://marketplace-api.looker.com/viz-dist/aster_plot.js"
  label: "@{VIS_LABEL}"
  dependencies: ["https://d3js.org/d3.v3.min.js","https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.9.1/d3-tip.min.js"]
}
