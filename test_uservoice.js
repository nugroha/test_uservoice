
/**
 * Welcome to the Looker Visualization Builder! Please refer to the following resources 
 * to help you write your visualization:
 *  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
 *  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
 **/

const testUserVoice = {
        /**
         * Configuration options
         *
         **/

        options: {
        },
        /**
         * The create function gets called when the visualization is mounted but before any
         * data is passed to it.
         **/
        create: function (element, config) {
            // Insert Bootstrap and DataTables css file
            element.innerHTML =
                '<h1>ready!</h1>';

            // Create a container element to let us center the text.
            this._vizContainer = element.appendChild(document.createElement("div"));
            // this._vizContainer.className = "container-fluid";
        },

        /**
         * UpdateAsync is the function that gets called (potentially) multiple times. It receives
         * the data and should update the visualization with the new data.
         **/
        updateAsync: function (
            data,
            element,
            config,
            queryResponse,
            details,
            doneRendering
        ) {
            // Clear any errors from previous updates
            this.clearErrors();

            var html = '<h1>ready!!</h1>';
            // Insert the generated html into the page
            this._vizContainer.innerHTML = html;

            $(document).ready(function () {
              UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='https://autodeskbuildinsights.uservoice.com/widget_environment/Id7CEezkk2ryuCR2MPmg.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();
              UserVoice.push(['set', {
                accent_color: '#2B78C5',
                trigger_color: 'white',
                trigger_background_color: 'rgba(46, 49, 51, 0.6)'
              }]);

              UserVoice.push(['identify', {}]);
              UserVoice.push(['addTrigger', {mode: 'feedback', trigger_position: 'bottom-right' }]);
              //UserVoice.push(['addTrigger', '#id', { mode: 'feedback' }]);
              UserVoice.push(['autoprompt', {}]);
            });
            doneRendering();
        }
    }
;

looker.plugins.visualizations.add(testUserVoice);
