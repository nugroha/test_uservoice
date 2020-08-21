looker.plugins.visualizations.add({
  // Id and Label are legacy properties that no longer have any function besides documenting
  // what the visualization used to have. The properties are now set via the manifest
  // form within the admin/visualizations page of Looker
  id: "test_uservoice",
  label: "Test UserVoice",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [
        {"Large": "large"},
        {"Small": "small"}
      ],
      display: "radio",
      default: "large"
    }
  },
  // Set up the initial state of the visualization
  create: function(element, config) {

    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .hello-world-vis {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .hello-world-text-large {
          font-size: 72px;
        }
        .hello-world-text-small {
          font-size: 18px;
        }
      </style>`;

	  
    UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//autodeskbuildinsights.uservoice.com/widget_environment/Id7CEezkk2ryuCR2MPmg.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

    UserVoice.push(['set', {
      accent_color: '#2B78C5',
      trigger_color: 'white',
      trigger_background_color: 'rgba(46, 49, 51, 0.6)'
    }]);

    UserVoice.push(['identify', {}]);
    UserVoice.push(['addTrigger', {mode: 'feedback', trigger_position: 'bottom-right' }]);
    //UserVoice.push(['addTrigger', '#id', { mode: 'feedback' }]);
    UserVoice.push(['autoprompt', {}]);
	  
    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));

  },
  // Render in response to the data or settings changing
  updateAsync: function(data, element, config, queryResponse, details, done) {
    this.clearErrors();
    done()
  }
});
