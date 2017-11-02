"use strict";

function BrowserCapabilities() {
    this.capability_keys = [];
    this.capabilities = [];
    this.initialize();
}

BrowserCapabilities.prototype.detect_capability_keys = function () {
    for (var detect in Modernizr) {
        if (Modernizr[detect] === true) {
            if (all_features_detected_by_modernizr[detect] === undefined) {
                this.capture_undefined_detects(detect)
            } else {
                this.capability_keys.push(detect);
            }
        }
    }
};

BrowserCapabilities.prototype.set_capabilities = function () {

    var unique_capabilities = [];

    // This for loop effectively de-dupes the capabilities identified by Modernizr

    for (var i = 0; i < this.capability_keys.length; i++) {

        var found = false;

        for (var j = 0; j < unique_capabilities.length; j++) {
            if (unique_capabilities[j] === this.capability_keys[i]) {
                found = true;
            }
        }

        if (found === false) {
            unique_capabilities.push(this.capability_keys[i]);
        }
    }

    // Each index of unique_capabilities is looked up and inserted as a unique capability

    for (var i = 0; i < unique_capabilities.length; i++) {
        this.capabilities.push(all_features_detected_by_modernizr[unique_capabilities[i]]);
    }
};

BrowserCapabilities.prototype.capture_undefined_detects = function (detect) {
    switch (detect) {
        case 'blob-constructor':
            this.capability_keys.push('blobconstructor');
            break;
        case 'crypto':
            this.capability_keys.push('cryptography');
            break;
        case 'inputsearchevent':
            this.capability_keys.push('search');
            break;
        case 'messagechannel':
            this.capability_keys.push('MessageChannel');
            break;
        case 'raf':
            this.capability_keys.push('requestanimationframe');
            break;
        case 'webanimations':
            this.capability_keys.push('animation');
            break;
        case 'cssgrid':
            this.capability_keys.push('cssgridcssgridlegacy');
            break;
        case 'display-table':
            this.capability_keys.push('displaytable');
            break;
        case 'object-fit':
            this.capability_keys.push('objectfit');
            break;
        case 'fileinputdirectory':
            this.capability_keys.push('directory');
            break;
        case 'input-formaction':
            this.capability_keys.push('inputformaction');
            break;
        case 'input-formenctype':
            this.capability_keys.push('inputformenctype');
            break;
        case 'atob-btoa':
            this.capability_keys.push('atobbtoa');
            break;
        default:
            console.log(detect);
            break;
    }
};

BrowserCapabilities.prototype.initialize = function () {
    this.$app_container = $("#app-container");
    this.detect_capability_keys();
    this.set_capabilities();
    this.render_headline();
    this.render_detect_information_to_user();
};

BrowserCapabilities.prototype.render_headline = function () {
    var $headline = $("<h2>", {
        text: this.capabilities.length + " features detected in your browser"
    });
    this.$app_container.append($headline);
};

BrowserCapabilities.prototype.render_detect_information_to_user = function () {
    var $list = $("<ul>");

    for (var i = 0; i < this.capabilities.length; i++) {
        var $item = $("<li><strong>" + this.capabilities[i].name + "</strong> " + this.capabilities[i].description + "</li>");
        $list.append($item);
    }

    this.$app_container.append($list);
};

$(document).ready(function () {

    // Remove the 'hidden' class from HTML because of conflict with TNA global styles
    $('html').removeClass('hidden');

    var bc = new BrowserCapabilities();
});

