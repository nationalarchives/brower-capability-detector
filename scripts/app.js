"use strict";

function BrowserCapabilities() {
    this.capabilities = [];
    this.initialize();
}

BrowserCapabilities.prototype.detect_capabilities = function () {
    for (var detect in Modernizr) {
        if (Modernizr[detect] === true) {
            this.capabilities.push(detect);
        }
    }
};

BrowserCapabilities.prototype.initialize = function () {
    this.$app_container = $("#app-container");
    this.detect_capabilities();
    this.render_headline();
};

BrowserCapabilities.prototype.render_headline = function () {
    var $headline = $('<h2>', {
        text: "The current browser has " + this.capabilities.length + " detected capabilities"
    });
    this.$app_container.append($headline);
};

var bc = new BrowserCapabilities();