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
  url: "https://github.com/nugroha/test_uservoice/blob/master/test_uservoice.js"
  label: "@{VIS_LABEL}"
}
