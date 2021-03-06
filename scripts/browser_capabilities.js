"use strict";

function BrowserCapabilities() {
    this.capability_keys = [];
    this.capabilities = [];
    this.capability_ids_output = '';
    this.initialize();
}

BrowserCapabilities.prototype.initialize = function () {
    this.$app_container = $("#app-container");
    this.$output = $("#app-output");
    this.detect_capability_keys();
    this.set_capabilities();
    this.set_capability_ids_output();
    this.render_detect_information_to_user();
    this.populate_detects_output();
    this.apply_styles();
};

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
            break;
    }
};


BrowserCapabilities.prototype.set_capability_ids_output = function () {

    var output = ['[START]'];

    for (var i = 0; i < this.capabilities.length; i++) {
        output.push(this.capabilities[i].short_key);
    }

    output.push('[' + this.capabilities.length + ' detects identified][END]');

    this.capability_ids_output = output.join(',');
};

BrowserCapabilities.prototype.render_detect_information_to_user = function () {


    $('#javascript-unavailable').remove();

    var link_href = '?subject=Browser%20Capability%20Survey&body=' + encodeURI(this.capability_ids_output);

    var $call_to_action = $("<a>", {
        'text': 'Send browser information to The National Archives',
        'href': 'mailto:gwyn.jones@nationalarchives.gsi.gov.uk' + link_href,
        'class': 'send-email'
    });

    var $container = $('<div>');

    var $heading = $('<h3>', {
        'text': 'Full list of browser capabilities detected'
    });

    var $list = $("<ul id='capabilities-list'>");

    for (var i = 0; i < this.capabilities.length; i++) {
        var $item = $("<li><strong>" + this.capabilities[i].name + " (ID: " + this.capabilities[i].short_key + "):</strong> " + this.capabilities[i].description + "</li>");
        $list.append($item);
    }

    var $description = $('<p>', {
        'text': 'JavaScript has run successfully and detected ' + this.capabilities.length + ' browser capabilities. All detects are shown below. Please click the button below to open an email pre-populated with the ID for each detect and addressed to Gwyn Jones.'
    });

    $container
        .append($description)
        .append($call_to_action)
        .append($heading)
        .append($list);

    this.$output.append($container);
};

BrowserCapabilities.prototype.populate_detects_output = function () {
    this.$output.val(this.capability_ids_output);
};

BrowserCapabilities.prototype.apply_styles = function () {
    this.$output.css({
        'border': '1px solid #DDD',
        'background-color': 'rgb(253,253,253)',
        'padding': '0 1em'
    })
};

$(document).ready(function () {

    // Remove the 'hidden' class from HTML because of conflict with TNA global styles
    $('html').removeClass('hidden');

    var bc = new BrowserCapabilities();
});

