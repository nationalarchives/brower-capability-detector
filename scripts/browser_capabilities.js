"use strict";

function BrowserCapabilities() {
    this.capability_keys = [];
    this.capabilities = [];
    this.capabilities_output_string = '';
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
    this.$output = $("#app-output");
    this.detect_capability_keys();
    this.set_capabilities();
    this.set_capabilities_output_string();
    this.render_headline();
    this.render_detect_information_to_user();
    this.populate_detects_output();
    this.manage_user_events();
    this.apply_styles();
};

BrowserCapabilities.prototype.render_headline = function () {

    var $headline = $("<p>", {
        'text': 'JavaScript has run successfully and detected the browser capabilities shown in the text area below.'
    });

    var link_href = 'mailto:gwyn.jones@nationalarchives.gov.uk&body=' + encodeURI(this.capabilities_output_string);

    var $instructions = $("<p>Please copy the contents of the text area below and email it to <a href='mailto:gwyn.jones@nationalarchives.gsi.gov.uk" + link_href + "'>gwyn.jones@nationalarchives.gsi.gov.uk</a></p>");

    this.$app_container
        .append($headline)
        .append($instructions);
};

BrowserCapabilities.prototype.render_detect_information_to_user = function () {

    var $container = $('<div>');

    var $toggle = $('<button>', {
        'text': 'Show capability descriptions',
        'id': 'toggle-capabilities-list'
    });

    var $list = $("<ul id='capabilities-list'>").css({ 'display': 'none' });

    for (var i = 0; i < this.capabilities.length; i++) {
        var $item = $("<li><strong>" + this.capabilities[i].name + ":</strong> " + this.capabilities[i].description + "</li>");
        $list.append($item);
    }

    var $description = $('<p>', {
        'text' : 'Click the button below to view descriptions of all the capabilities detected'
    });

    $container
        .append($toggle)
        .append($list)
        .append($description);

    $container.insertAfter(this.$output);
};

BrowserCapabilities.prototype.populate_detects_output = function () {
    this.$output.val(this.capabilities_output_string);
};

BrowserCapabilities.prototype.set_capabilities_output_string = function () {
    var output = ['[START]'];

    for (var i = 0; i < this.capabilities.length; i++) {
        output.push(this.capabilities[i].name);
    }

    output.push('[' + this.capabilities.length + ' detects identified][END]');

    this.capabilities_output_string = output.join(',');
};

BrowserCapabilities.prototype.manage_user_events = function () {
    $(document).on('click', '#toggle-capabilities-list', function (e) {
        var text = $(e.target).text() === 'Show capability descriptions' ? 'Show capability descriptions' : 'Hide capability descriptions';
        $(e.target).text(text);

        $('#capabilities-list').slideToggle();
    })
};

BrowserCapabilities.prototype.apply_styles = function () {
    this.$output.css({
        'width': '100%',
        'height': '700px'
    });

    $('#toggle-capabilities-list').css({
        'height': '36px',
        'border': 'none',
        'background': '#008484',
        'color': '#fff',
        'font-size': '16px',
        'padding': '0 10px',
        'margin': '0.5em 0'
    })
};

$(document).ready(function () {

    // Remove the 'hidden' class from HTML because of conflict with TNA global styles
    $('html').removeClass('hidden');

    var bc = new BrowserCapabilities();
});

