sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				maxFractionDigits: 0,
				groupingEnabled: true,
				groupingSeparator: ",",
				decimalSeparator: "."
			});

			return "$ " + oNumberFormat.format(sValue);
			//return parseFloat(sValue).toFixed(2);
		},

		formatDetailTitle: function(oStartdate, oEnddate) {
			return oStartdate + " - " + oEnddate;
		},

		tfnFormatter: function(oTfn) {

			if (oTfn) {
				return oTfn.substring(0, 3) + " " + oTfn.substring(3, 6) + " " + oTfn.substring(6, 9);
			} else {
				return null;
			}

		},
		formatAmtDesc: function(oAmtDescLong, oAmtDescShort, oDeviceIsPhone) {

			if (!oAmtDescShort) {
				return oAmtDescLong;
			} else {
				return (oDeviceIsPhone) ? oAmtDescShort : oAmtDescLong;
			}

		},

		formatETPAvailText: function(oIsETPAvail) {
			return (oIsETPAvail) ? this.getResourceBundle().getText("ETPAvailable") : "";
		},

		controlVisib: function(oVal) {
			return (oVal) ? true : false;
		},

		showAddress: function(oIsPhone) {

			return (oIsPhone) ? false : true;

		}
	};

});