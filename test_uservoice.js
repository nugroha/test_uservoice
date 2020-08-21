/**
 * Welcome to the Looker Visualization Builder! Please refer to the following resources 
 * to help you write your visualization:
 *  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
 *  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
 **/

const visObject = {
 /**
  * Configuration options for your visualization. In Looker, these show up in the vis editor
  * panel but here, you can just manually set your default values in the code.
  **/
  options: {
    first_option: {
    	type: "string",
      label: "My First Option",
      default: "Default Value"
    },
    second_option: {
    	type: "number",
      label: "My Second Option",
      default: 42
    }
  },
 
 /**
  * The create function gets called when the visualization is mounted but before any
  * data is passed to it.
  **/
	create: function(element, config){
		element.innerHTML = "<h1>Ready to render!</h1>";
	},

 /**
  * UpdateAsync is the function that gets called (potentially) multiple times. It receives
  * the data and should update the visualization with the new data.
  **/
	updateAsync: function(data, element, config, queryResponse, details, doneRendering){
    // set the dimensions and margins of the graph

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
		doneRendering()
	}
};

looker.plugins.visualizations.add(visObject);
