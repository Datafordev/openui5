sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.LinkEmphasized.Component", {

		metadata : {
			rootView : "sap.m.sample.LinkEmphasized.Link",
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					files : [
						"Link.view.xml",
						"Link.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
