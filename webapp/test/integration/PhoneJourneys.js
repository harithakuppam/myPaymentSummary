jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"qldh/mypaysumm/test/integration/NavigationJourneyPhone",
		"qldh/mypaysumm/test/integration/NotFoundJourneyPhone",
		"qldh/mypaysumm/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});