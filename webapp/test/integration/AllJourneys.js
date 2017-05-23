jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PeriodsSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"qldh/mypaysumm/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"qldh/mypaysumm/test/integration/pages/App",
	"qldh/mypaysumm/test/integration/pages/Browser",
	"qldh/mypaysumm/test/integration/pages/Master",
	"qldh/mypaysumm/test/integration/pages/Detail",
	"qldh/mypaysumm/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "qldh.mypaysumm.view."
	});

	sap.ui.require([
		"qldh/mypaysumm/test/integration/MasterJourney",
		"qldh/mypaysumm/test/integration/NavigationJourney",
		"qldh/mypaysumm/test/integration/NotFoundJourney",
		"qldh/mypaysumm/test/integration/BusyJourney",
		"qldh/mypaysumm/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});