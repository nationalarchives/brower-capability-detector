var all_features_detected_by_modernizr = [
    {
        'name': 'Ambient Light Events',
        'description': 'Detects support for the API that provides information about the ambient light levels, as detected by the device\'s light detector, in terms of lux units.',
        'key': 'ambientlight'
    },
    {
        'name': 'Application Cache',
        'description': 'Detects support for the Application Cache, for storing data to enable web-based applications run offline.',
        'key': 'applicationcache'
    },
    {
        'name': 'HTML5 Audio Element',
        'description': 'Detects the audio element',
        'key': 'audio'
    },
    {
        'name': 'Battery API',
        'description': 'Detect support for the Battery API, for accessing information about the system\'s battery charge level.',
        'key': 'batteryapi'
    },
    {
        'name': 'Blob constructor',
        'description': 'Detects support for the Blob constructor, for creating file-like objects of immutable, raw data.',
        'key': 'blobconstructor'
    },
    {
        'name': 'Canvas',
        'description': 'Detects support for the canvas element for 2D drawing.', 'key': 'canvas'
    },
    {
        'name': 'Canvas text',
        'description': 'Detects support for the text APIs for canvas elements.',
        'key': 'canvastext'
    },
    {
        'name': 'Content Editable',
        'description': 'Detects support for the contenteditable attribute of elements, allowing their DOM text contents to be edited directly by the user.',
        'key': 'contenteditable'
    },
    {
        'name': 'Context menus',
        'description': 'Detects support for custom context menus.',
        'key': 'contextmenu'
    },
    {
        'name': 'Cookies',
        'description': 'Detects whether cookie support is enabled.',
        'key': 'cookies'
    },
    {
        'name': 'Cross-Origin Resource Sharing',
        'description': 'Detects support for Cross-Origin Resource Sharing: method of performing XMLHttpRequests across domains.',
        'key': 'cors'
    },
    {
        'name': 'Web Cryptography',
        'description': 'Detects support for the cryptographic functionality available under window.crypto.subtle',
        'key': 'cryptography'
    },
    {
        'name': 'Custom Elements API',
        'description': 'Detects support for the Custom Elements API, to create custom html elements via js',
        'key': 'customelements'
    },
    {
        'name': 'Custom protocol handler',
        'description': 'Detects support for the window.registerProtocolHandler() API to allow websites to register themselves as possible handlers for particular protocols.',
        'key': 'customprotocolhandler'
    },
    { 'name': 'CustomEvent', 'description': 'Detects support for CustomEvent.', 'key': 'customevent' },
    {
        'name': 'Dart',
        'description': 'Detects native support for the Dart programming language.',
        'key': 'dart'
    },
    {
        'name': 'DataView',
        'description': 'Detects support for the DataView interface for reading data from an ArrayBuffer as part of the Typed Array spec.',
        'key': 'data'
    },
    {
        'name': 'Emoji',
        'description': 'Detects support for emoji character sets.',
        'key': 'emoji'
    },
    {
        'name': 'Event Listener', 'description': 'Detects native support for addEventListener',
        'key': 'eventlistener'
    },
    {
        'name': 'EXIF Orientation',
        'description': 'Detects support for EXIF Orientation in JPEG images.',
        'key': 'exiforientation'
    },
    {
        'name': 'Flash',
        'description': 'Detects Flash support as well as Flash-blocking plugins',
        'key': 'flash'
    },
    {
        'name': 'Force Touch Events',
        'description': 'Tests whether the browser supports the detection of Force Touch Events.',
        'key': 'forcetouch'
    },
    {
        'name': 'Fullscreen API',
        'description': 'Detects support for the ability to make the current website take over the user\'s entire screen',
        'key': 'fullscreen'
    },
    {
        'name': 'GamePad API',
        'description': 'Detects support for the Gamepad API, for access to gamepads and controllers.',
        'key': 'gamepads'
    },
    {
        'name': 'Geolocation API',
        'description': 'Detects support for the Geolocation API for users to provide their location to web applications.',
        'key': 'geolocation'
    },
    {
        'name': 'Hashchange event',
        'description': 'Detects support for the hashchange event, fired when the current location fragment changes.',
        'key': 'hashchange'
    },
    {
        'name': 'Hidden Scrollbar',
        'description': 'Detects overlay scrollbars (when scrollbars on overflowed blocks are visible). This is found most commonly on mobile and OS X.',
        'key': 'hiddenscroll'
    },
    {
        'name': 'History API',
        'description': 'Detects support for the History API for manipulating the browser session history.',
        'key': 'history'
    },
    {
        'name': 'HTML Imports',
        'description': 'Detects support for HTML import, a feature that is used for loading in Web Components.',
        'key': 'htmlimports'
    },
    {
        'name': 'IE8 compat mode',
        'description': 'Detects whether or not the current browser is IE8 in compatibility mode (i.e. acting as IE7).',
        'key': 'ie8compat'
    },
    {
        'name': 'IndexedDB',
        'description': 'Detects support for the IndexedDB client-side storage API (final spec).',
        'key': 'indexeddb'
    },
    {
        'name': 'IndexedDB Blob',
        'description': 'Detects if the browser can save File/Blob objects to IndexedDB',
        'key': 'indexeddbblob'
    },
    {
        'name': 'Input attributes',
        'description': 'Detects support for HTML5 input element attributes and exposes Boolean subproperties with the results:',
        'key': 'input'
    },
    {
        'name': 'input[search]',
        'description': 'There is a custom search event implemented in webkit browsers when using an input[search] element.',
        'key': 'search'
    },
    {
        'name': 'Form input types',
        'description': 'Detects support for HTML5 form input types and exposes Boolean subproperties with the results:',
        'key': 'inputtypes'
    },
    {
        'name': 'Internationalization API',
        'description': 'Detects support for the Internationalization API which allow easy formatting of number and dates and sorting string',
        'key': 'intl'
    },
    {
        'name': 'JSON',
        'description': 'Detects native support for JSON handling functions.',
        'key': 'json'
    },
    {
        'name': 'Font Ligatures',
        'description': 'Detects support for OpenType ligatures',
        'key': 'ligatures'
    },
    {
        'name': 'Reverse Ordered Lists',
        'description': 'Detects support for the reversed attribute on the ol element.',
        'key': 'olreversed'
    },
    {
        'name': 'MathML',
        'description': 'Detects support for MathML, for mathematic equations in web pages.',
        'key': 'mathml'
    },
    {
        'name': 'Message Channel',
        'description': 'Detects support for Message Channels, a way to communicate between different browsing contexts like iframes, workers, etc..',
        'key': 'MessageChannel'
    },
    {
        'name': 'Notification',
        'description': 'Detects support for the Notifications API',
        'key': 'notification'
    },
    {
        'name': 'Page Visibility API',
        'description': 'Detects support for the Page Visibility API, which can be used to disable unnecessary actions and otherwise improve user experience.',
        'key': 'pagevisibility'
    },
    {
        'name': 'Navigation Timing API',
        'description': 'Detects support for the Navigation Timing API, for measuring browser and connection performance.',
        'key': 'performance'
    },
    {
        'name': 'DOM Pointer Events API',
        'description': 'Detects support for the DOM Pointer Events API, which provides a unified event interface for pointing input devices, as implemented in IE10+.',
        'key': 'pointerevents'
    },
    {
        'name': 'Pointer Lock API',
        'description': 'Detects support the pointer lock API which allows you to lock the mouse cursor to the browser window.',
        'key': 'pointerlock'
    },
    {
        'name': 'postMessage',
        'description': 'Detects support for the window.postMessage protocol for cross-document messaging.',
        'key': 'postmessage'
    },
    {
        'name': 'Proximity API',
        'description': 'Detects support for an API that allows users to get proximity related information from the device\'s proximity sensor.',
        'key': 'proximity'
    },
    { 'name': 'QuerySelector', 'description': 'Detects support for querySelector.', 'key': 'queryselector' },
    {
        'name': 'Quota Storage Management API',
        'description': 'Detects the ability to request a specific amount of space for filesystem access',
        'key': 'quotamanagement'
    },
    {
        'name': 'requestAnimationFrame',
        'description': 'Detects support for the window.requestAnimationFrame API, for offloading animation repainting to the browser for optimized performance.',
        'key': 'requestanimationframe'
    },
    {
        'name': 'ServiceWorker API',
        'description': 'ServiceWorkers (formerly Navigation Controllers) are a way to persistently cache resources to built apps that work better offline.',
        'key': 'serviceworker'
    },
    {
        'name': 'SVG',
        'description': 'Detects support for SVG in embed or object elements.',
        'key': 'svg'
    },
    {
        'name': 'Template strings',
        'description': 'Template strings are string literals allowing embedded expressions.',
        'key': 'templatestrings'
    },
    {
        'name': 'Touch Events',
        'description': 'Indicates if the browser supports the W3C Touch Events API.',
        'key': 'touchevents'
    },
    {
        'name': 'Typed arrays',
        'description': 'Detects support for native binary data manipulation via Typed Arrays in JavaScript.',
        'key': 'typedarrays'
    },
    {
        'name': 'Unicode Range',
        'description': '',
        'key': 'unicoderange'
    },
    {
        'name': 'Unicode characters',
        'description': 'Detects if unicode characters are supported in the current document.',
        'key': 'unicode'
    },
    {
        'name': 'IE User Data API',
        'description': 'Detects support for IE userData for persisting data, an API similar to localStorage but supported since IE5.',
        'key': 'userdata'
    },
    {
        'name': 'Vibration API',
        'description': 'Detects support for the API that provides access to the vibration mechanism of the hosting device, to provide tactile feedback.',
        'key': 'vibrate'
    },
    {
        'name': 'HTML5 Video',
        'description': 'Detects support for the video element, as well as testing what types of content it supports.',
        'key': 'video'
    },
    {
        'name': 'VML',
        'description': 'Detects support for VML.',
        'key': 'vml'
    },
    {
        'name': 'WebGL',
        'description': '',
        'key': 'webgl'
    },
    {
        'name': 'Web Sockets Support',
        'description': '',
        'key': 'websockets'
    },
    {
        'name': 'Web Intents',
        'description': 'Detects native support for the Web Intents APIs for service discovery and inter-application communication.',
        'key': 'webintents'
    },
    {
        'name': 'Web Animation API',
        'description': 'Detects support for the Web Animation API, a way to create css animations in js',
        'key': 'animation'
    },
    {
        'name': 'XDomainRequest',
        'description': 'Detects support for XDomainRequest in IE9 & IE8',
        'key': 'xdomainrequest'
    },
    {
        'name': 'a[download] Attribute',
        'description': 'When used on an a, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigating to it.',
        'key': 'adownload'
    },
    {
        'name': 'Audio Loop Attribute',
        'description': 'Detects if an audio element can automatically restart, once it has finished',
        'key': 'audioloop'
    },
    {
        'name': 'Audio Preload',
        'description': 'Detects if audio can be downloaded in the background before it starts playing in the audio element',
        'key': 'audiopreload'
    },
    {
        'name': 'Web Audio API',
        'description': 'Detects the older non standard webaudio API, (as opposed to the standards based AudioContext API)',
        'key': 'webaudio'
    },
    {
        'name': 'Low Battery Level',
        'description': 'Enable a developer to remove CPU intensive CSS/JS when battery is low',
        'key': 'lowbattery'
    },
    {
        'name': 'canvas blending support',
        'description': 'Detects if Photoshop style blending modes are available in canvas.',
        'key': 'canvasblending'
    },
    {
        'name': 'canvas winding support',
        'description': 'Determines if winding rules, which controls if a path can go clockwise or counterclockwise',
        'key': 'canvaswinding'
    },
    {
        'name': 'canvas.toDataURL type support',
        'description': '',
        'key': 'todataurljpegtodataurlpngtodataurlwebp'
    },
    {
        'name': 'getRandomValues',
        'description': 'Detects support for the window.crypto.getRandomValues for generate cryptographically secure random numbers',
        'key': 'getrandomvalues'
    },
    {
        'name': 'cssall',
        'description': 'Detects support for the all css property, which is a shorthand to reset all css properties (except direction and unicode-bidi) to their original value',
        'key': 'cssall'
    },
    {
        'name': 'CSS Animations',
        'description': 'Detects whether or not elements can be animated using CSS',
        'key': 'cssanimations'
    },
    {
        'name': 'Appearance',
        'description': 'Detects support for the appearance css property, which is used to make an',
        'key': 'appearance'
    },
    {
        'name': 'Backdrop Filter',
        'description': 'Detects support for CSS Backdrop Filters, allowing for background blur effects like those introduced in iOS 7. Support for this was added to iOS Safari/WebKit in iOS 9.',
        'key': 'backdropfilter'
    },
    {
        'name': 'CSS Background Blend Mode',
        'description': 'Detects the ability for the browser to composite backgrounds using blending modes similar to ones found in Photoshop or Illustrator.',
        'key': 'backgroundblendmode'
    },
    {
        'name': 'CSS Background Clip Text',
        'description': 'Detects the ability to control specifies whether or not an element\'s background',
        'key': 'backgroundcliptext'
    },
    {
        'name': 'Background Position Shorthand',
        'description': 'Detects if you can use the shorthand method to define multiple parts of an',
        'key': 'bgpositionshorthand'
    },
    {
        'name': 'Background Position XY',
        'description': 'Detects the ability to control an element\'s background position using css',
        'key': 'bgpositionxy'
    },
    {
        'name': 'Background Repeat',
        'description': 'Detects the ability to use round and space as properties for background-repeat',
        'key': 'bgrepeatspacebgrepeatround'
    },
    {
        'name': 'Background Size',
        'description': '',
        'key': 'backgroundsize'
    },
    {
        'name': 'Background Size Cover',
        'description': '',
        'key': 'bgsizecover'
    },
    {
        'name': 'Border Image',
        'description': '',
        'key': 'borderimage'
    },
    {
        'name': 'Border Radius',
        'description': '',
        'key': 'borderradius'
    },
    {
        'name': 'Box Shadow',
        'description': '',
        'key': 'boxshadow'
    },
    {
        'name': 'Box Sizing',
        'description': '',
        'key': 'boxsizing'
    },
    {
        'name': 'CSS Calc',
        'description': 'Method of allowing calculated values for length units.',
        'key': 'csscalc'
    },
    {
        'name': 'CSS :checked pseudo-selector',
        'description': 'CSS :checked pseudo-selector',
        'key': 'checked'
    },
    {
        'name': 'CSS Font ch Units',
        'description': 'CSS Font ch Units',
        'key': 'csschunit'
    },
    {
        'name': 'CSS Columns',
        'description': 'CSS Columns',
        'key': 'csscolumns'
    },
    {
        'name': 'CSS Grid (old & new)',
        'description': 'CSS Grid (old & new)',
        'key': 'cssgridcssgridlegacy'
    },
    {
        'name': 'CSS Cubic Bezier Range',
        'description': 'CSS Cubic Bezier Range',
        'key': 'cubicbezierrange'
    },
    {
        'name': 'CSS Display run-in',
        'description': 'CSS Display run-in',
        'key': 'display-runin'
    },
    {
        'name': 'CSS Display table',
        'description': 'display: table and table-cell test. (both are tested under one name table-cell )',
        'key': 'displaytable'
    },
    {
        'name': 'CSS text-overflow ellipsis',
        'description': 'CSS text-overflow ellipsis'
    },
    {
        'name': 'CSS.escape()',
        'description': 'Tests for CSS.escape() support.',
        'key': 'cssescape'
    },
    {
        'name': 'CSS Font ex Units',
        'description': 'CSS Font ex Units',
        'key': 'cssexunit'
    },
    {
        'name': 'CSS Filters',
        'description': 'CSS Filters',
        'key': 'cssfilters'
    },
    {
        'name': 'Flexbox',
        'description': 'Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.',
        'key': 'flexbox'
    },
    {
        'name': 'Flexbox (legacy)',
        'description': 'Flexbox (legacy)',
        'key': 'flexboxlegacy'
    },
    {
        'name': 'Flexbox (tweener)',
        'description': 'Flexbox (tweener)',
        'key': 'flexboxtweener'
    },
    {
        'name': 'Flex Line Wrapping',
        'description': 'Detects support for the flex-wrap CSS property, part of Flexbox, which isn’t present in all Flexbox implementations (notably Firefox).',
        'key': 'flexwrap'
    },
    {
        'name': '@font-face',
        'description': '@font-face',
        'key': 'fontface'
    },
    {
        'name': 'CSS Generated Content',
        'description': 'CSS Generated Content',
        'key': 'generatedcontent'
    },
    {
        'name': 'CSS Gradients',
        'description': 'CSS Gradients',
        'key': 'cssgradients'
    },
    {
        'name': 'hairline',
        'description': 'Detects support for hidpi/retina hairlines, which are CSS borders with less than 1px in width, for being physically 1px on hidpi screens.',
        'key': 'hairline'
    },
    {
        'name': 'CSS HSLA Colors',
        'description': 'CSS HSLA Colors',
        'key': 'hsla'
    },
    {

        'name': 'CSS Hyphens',
        'description': 'CSS Hyphens',
        'key': 'csshyphenssofthyphenssofthyphensfind'
    },
    {
        'name': 'CSS :invalid pseudo-class',
        'description': 'Detects support for the \':invalid\' CSS pseudo-class.',
        'key': 'cssinvalid'
    },
    {
        'name': 'CSS :last-child pseudo-selector',
        'description': 'CSS :last-child pseudo-selector', 'key': 'lastchild'
    },
    {
        'name': 'CSS Mask',
        'description': 'CSS Mask', 'key': 'cssmask'
    },
    {
        'name': 'CSS Media Queries',
        'description': 'CSS Media Queries', 'key': 'mediaqueries'
    },
    {
        'name': 'CSS Multiple Backgrounds',
        'description': 'CSS Multiple Backgrounds', 'key': 'multiplebgs'
    },
    {
        'name': 'CSS :nth-child pseudo-selector',
        'description': 'Detects support for the \':nth-child()\' CSS pseudo-selector.',
        'key': 'nthchild'
    },
    {
        'name': 'CSS Object Fit',
        'description': 'CSS Object Fit',
        'key': 'objectfit'
    },
    {
        'name': 'CSS Opacity',
        'description': 'CSS Opacity',
        'key': 'opacity'
    },
    {
        'name': 'CSS Overflow Scrolling',
        'description': 'CSS Overflow Scrolling',
        'key': 'overflowscrolling'
    },
    {
        'name': 'CSS Pointer Events',
        'description': 'CSS Pointer Events',
        'key': 'csspointerevents'
    },
    {
        'name': 'CSS position: sticky',
        'description': 'CSS position: sticky',
        'key': 'csspositionsticky'
    },
    {
        'name': 'CSS Generated Content Animations',
        'description': 'CSS Generated Content Animations',
        'key': 'csspseudoanimations'
    },
    {
        'name': 'CSS Generated Content Transitions',
        'description': 'CSS Generated Content Transitions',
        'key': 'csspseudotransitions'
    },
    {
        'name': 'CSS Reflections',
        'description': 'CSS Reflections',
        'key': 'cssreflections'
    },
    {
        'name': 'CSS Regions',
        'description': 'CSS Regions',
        'key': 'regions'
    },
    {
        'name': 'CSS Font rem Units',
        'description': 'CSS Font rem Units',
        'key': 'cssremunit'
    },
    {
        'name': 'CSS UI Resize',
        'description': 'Test for CSS 3 UI "resize" property',
        'key': 'cssresize'
    },
    {
        'name': 'CSS rgba',
        'description': 'CSS rgba',
        'key': 'rgba'
    },
    {
        'name': 'CSS Stylable Scrollbars',
        'description': 'CSS Stylable Scrollbars',
        'key': 'cssscrollbar'
    },
    {
        'name': 'Scroll Snap Points',
        'description': 'Detects support for CSS Snap Points',
        'key': 'scrollsnappoints'
    },
    {
        'name': 'CSS Shapes',
        'description': 'CSS Shapes',
        'key': 'shapes'
    },
    {
        'name': 'CSS general sibling selector',
        'description': 'CSS general sibling selector',
        'key': 'siblinggeneral'
    },
    {
        'name': 'CSS Subpixel Fonts',
        'description': 'CSS Subpixel Fonts',
        'key': 'subpixelfont'
    },
    {
        'name': 'CSS Supports',
        'description': 'CSS Supports',
        'key': 'supports'
    },
    {
        'name': 'CSS :target pseudo-class',
        'description': 'Detects support for the \':target\' CSS pseudo-class.',
        'key': 'target'
    },
    {
        'name': 'CSS text-align-last',
        'description': 'CSS text-align-last',
        'key': 'textalignlast'
    },
    {
        'name': 'CSS textshadow',
        'description': 'CSS textshadow',
        'key': 'textshadow'
    },
    {
        'name': 'CSS Transforms',
        'description': 'CSS Transforms',
        'key': 'csstransforms'
    },
    {
        'name': 'CSS Transforms 3D',
        'description': 'CSS Transforms 3D',
        'key': 'csstransforms3d'
    },
    {
        'name': 'CSS Transforms Level 2',
        'description': 'CSS Transforms Level 2',
        'key': 'csstransformslevel2'
    },
    {
        'name': 'CSS Transform Style preserve-3d',
        'description': 'Detects support for transform-style: preserve-3d, for getting a proper 3D perspective on elements.',
        'key': 'preserve3d'
    },
    {
        'name': 'CSS Transitions',
        'description': 'CSS Transitions',
        'key': 'csstransitions'
    },
    {
        'name': 'CSS user-select',
        'description': 'CSS user-select',
        'key': 'userselect'
    },
    {
        'name': 'CSS :valid pseudo-class',
        'description': 'Detects support for the \':valid\' CSS pseudo-class.',
        'key': 'cssvalid'
    },
    {
        'name': 'CSS vh unit',
        'description': 'CSS vh unit',
        'key': 'cssvhunit'
    },
    {
        'name': 'CSS vmax unit',
        'description': 'CSS vmax unit',
        'key': 'cssvmaxunit'
    },
    {
        'name': 'CSS vmin unit',
        'description': 'CSS vmin unit',
        'key': 'cssvminunit'
    },
    {
        'name': 'CSS vw unit',
        'description': 'CSS vw unit',
        'key': 'cssvwunit'
    },
    {
        'name': 'will-change',
        'description': 'Detects support for the will-change css property, which formally signals to the browser that an element will be animating.',
        'key': 'willchange'
    },
    {
        'name': 'CSS wrap-flow',
        'description': 'CSS wrap-flow',
        'key': 'wrapflow'
    },
    {
        'name': 'classList',
        'description': 'classList',
        'key': 'classlist'
    },
    {
        'name': 'createElement with Attributes',
        'description': 'createElement with Attributes',
        'key': 'createelementattrs'
    },
    {
        'name': 'dataset API',
        'description': 'dataset API',
        'key': 'dataset'
    },
    {
        'name': 'Document Fragment',
        'description': 'Append multiple elements to the DOM within a single insertion.',
        'key': 'documentfragment'
    },
    {
        'name': '[hidden] Attribute',
        'description': 'Does the browser support the HTML5 [hidden] attribute?',
        'key': 'hidden'
    },
    { 'name': 'microdata', 'description': 'microdata', 'key': 'microdata' },
    {
        'name': 'DOM4 MutationObserver',
        'description': 'Determines if DOM4 MutationObserver support is available.',
        'key': 'mutationobserver'
    },
    {
        'name': 'Passive event listeners',
        'description': 'Detects support for the passive option to addEventListener.',
        'key': 'passiveeventlisteners'
    },
    {
        'name': 'bdi Element',
        'description': 'Detect support for the bdi element, a way to have text that is isolated from its possibly bidirectional surroundings',
        'key': 'bdi'
    },
    {
        'name': 'datalist Element',
        'description': 'datalist Element',
        'key': 'datalistelem'
    },
    {
        'name': 'details Element',
        'description': 'details Element',
        'key': 'details'
    },
    {
        'name': 'output Element',
        'description': 'output Element',
        'key': 'outputelem'
    },
    {
        'name': 'picture Element',
        'description': 'picture Element',
        'key': 'picture'
    },
    {
        'name': 'progress Element',
        'description': 'progress Element',
        'key': 'progressbarmeter'
    },
    {
        'name': 'ruby, rp, rt Elements',
        'description': 'ruby, rp, rt Elements',
        'key': 'ruby'
    },
    {
        'name': 'Template Tag',
        'description': 'Template Tag',
        'key': 'template'
    },
    {
        'name': 'time Element',
        'description': 'time Element',
        'key': 'time'
    },
    {
        'name': 'Track element and Timed Text Track',
        'description': 'Track element and Timed Text Track',
        'key': 'texttrackapitrack'
    },
    {
        'name': 'Unknown Elements',
        'description': 'Does the browser support HTML with non-standard / new elements?',
        'key': 'unknownelements'
    },
    {
        'name': 'ES5 Array',
        'description': 'Check if browser implements ECMAScript 5 Array per specification.',
        'key': 'es5array'
    },
    {
        'name': 'ES5 Date',
        'description': 'Check if browser implements ECMAScript 5 Date per specification.',
        'key': 'es5date'
    },
    {
        'name': 'ES5 Function',
        'description': 'Check if browser implements ECMAScript 5 Function per specification.',
        'key': 'es5function'
    },
    {
        'name': 'ES5 Object',
        'description': 'Check if browser implements ECMAScript 5 Object per specification.',
        'key': 'es5object'
    },
    {
        'name': 'ES5',
        'description': 'Check if browser implements everything as specified in ECMAScript 5.',
        'key': 'es5'
    },
    {
        'name': 'ES5 Strict Mode',
        'description': 'Check if browser implements ECMAScript 5 Object strict mode.',
        'key': 'strictmode'
    },
    {
        'name': 'ES5 String',
        'description': 'Check if browser implements ECMAScript 5 String per specification.',
        'key': 'es5string'
    },
    {
        'name': 'ES5 Syntax',
        'description': 'Check if browser accepts ECMAScript 5 syntax.',
        'key': 'es5syntax'
    },
    {
        'name': 'ES5 Immutable Undefined',
        'description': 'Check if browser prevents assignment to global undefined per ECMAScript 5.',
        'key': 'es5undefined'
    },
    {
        'name': 'ES6 Array',
        'description': 'Check if browser implements ECMAScript 6 Array per specification.',
        'key': 'es6array'
    },
    {
        'name': 'ES6 Arrow Functions',
        'description': 'Check if browser implements ECMAScript 6 Arrow Functions per specification.',
        'key': 'arrow'
    },
    {
        'name': 'ES6 Collections',
        'description': 'Check if browser implements ECMAScript 6 Map, Set, WeakMap and WeakSet',
        'key': 'es6collections'
    },
    {
        'name': 'ES5 String.prototype.contains',
        'description': 'Check if browser implements ECMAScript 6 String.prototype.contains per specification.',
        'key': 'contains'
    },
    {
        'name': 'ES6 Generators',
        'description': 'Check if browser implements ECMAScript 6 Generators per specification.',
        'key': 'generators'
    },
    {
        'name': 'ES6 Math',
        'description': 'Check if browser implements ECMAScript 6 Math per specification.',
        'key': 'es6math'
    },
    {
        'name': 'ES6 Number',
        'description': 'Check if browser implements ECMAScript 6 Number per specification.',
        'key': 'es6number'
    },
    {
        'name': 'ES6 Object',
        'description': 'Check if browser implements ECMAScript 6 Object per specification.',
        'key': 'es6object'
    },
    {
        'name': 'ES6 Promises',
        'description': 'Check if browser implements ECMAScript 6 Promises per specification.',
        'key': 'promises'
    },
    {
        'name': 'ES6 String',
        'description': 'Check if browser implements ECMAScript 6 String per specification.',
        'key': 'es6string'
    },
    {
        'name': 'Device Motion',
        'description': 'Device Motion Event support',
        'key': 'devicemotion'
    },
    {
        'name': 'Device Orientation',
        'description': 'Device Orientation Event support',
        'key': 'deviceorientation'
    },
    {
        'name': 'onInput Event',
        'description': 'oninput tests if the browser is able to detect the input event',
        'key': 'oninput'
    },
    {
        'name': 'File API',
        'description': 'filereader tests for the File API specification',
        'key': 'filereader'
    },
    {
        'name': 'Filesystem API',
        'description': 'Filesystem API',
        'key': 'filesystem'
    },
    {
        'name': 'input[capture] Attribute',
        'description': 'When used on an input, this attribute signifies that the resource it takes should be generated via device\'s camera, camcorder, sound recorder.',
        'key': 'capture'
    },
    {
        'name': 'input[file] Attribute',
        'description': 'Detects whether input type="file" is available on the platform',
        'key': 'fileinput'
    },
    {
        'name': 'input[directory] Attribute',
        'description': 'When used on an input type="file", the directory attribute instructs',
        'key': 'directory'
    },
    {
        'name': 'input[form] Attribute',
        'description': 'Detects whether input form="form_id" is available on the platform',
        'key': 'formattribute'
    },
    {
        'name': 'input[type="number"] Localization',
        'description': 'Detects whether input type="number" is capable of receiving and displaying localized numbers, e.g. with comma separator.',
        'key': 'localizednumber'
    },
    {
        'name': 'placeholder attribute',
        'description': 'Tests for placeholder attribute in inputs and textareas',
        'key': 'placeholder'
    },
    {
        'name': 'form.requestAutocomplete()',
        'description': 'When used with input[autocomplete] to annotate a form, form.requestAutocomplete() shows a dialog in Chrome that speeds up checkout flows (payments specific for now)',
        'key': 'requestautocomplete'
    },
    {
        'name': 'Form Validation',
        'description': 'This implementation only tests support for interactive form validation.',
        'key': 'formvalidation'
    },
    {
        'name': 'iframe[sandbox] Attribute',
        'description': 'Test for sandbox attribute in iframes.',
        'key': 'sandbox'
    },
    {
        'name': 'iframe[seamless] Attribute',
        'description': 'Test for seamless attribute in iframes.',
        'key': 'seamless'
    },
    {
        'name': 'iframe[srcdoc] Attribute',
        'description': 'Test for srcdoc attribute in iframes.',
        'key': 'srcdoc'
    },
    {
        'name': 'Animated PNG',
        'description': 'Animated PNG',
        'key': 'apng'
    },
    {
        'name': 'Image crossOrigin',
        'description': 'Detects support for the crossOrigin attribute on images, which allow for cross domain images inside of a canvas without tainting it',
        'key': 'imgcrossorigin'
    },
    {
        'name': 'JPEG 2000',
        'description': 'Test for JPEG 2000 support',
        'key': 'jpeg2000'
    },
    {
        'name': 'JPEG XR (extended range)',
        'description': 'JPEG XR (extended range)',
        'key': 'jpegxr'
    },
    {
        'name': 'sizes attribute',
        'description': 'Test for the sizes attribute on images',
        'key': 'sizes'
    },
    {
        'name': 'srcset attribute',
        'description': 'Test for the srcset attribute of images',
        'key': 'srcset'
    },
    {
        'name': 'Webp Alpha',
        'description': 'Tests for transparent webp support.',
        'key': 'webpalpha'
    },
    {
        'name': 'Webp Animation',
        'description': 'Tests for animated webp support.',
        'key': 'webpanimation'
    },
    {
        'name': 'Webp Lossless',
        'description': 'Tests for non-alpha lossless webp support.',
        'key': 'webplosslesswebp-lossless'
    },
    {
        'name': 'Webp',
        'description': 'Tests for lossy, non-alpha webp support.',
        'key': 'webp'
    },
    {
        'name': 'input formaction',
        'description': 'Detect support for the formaction attribute on form inputs',
        'key': 'inputformaction'
    },
    {
        'name': 'input formenctype',
        'description': 'Detect support for the formenctype attribute on form inputs, which overrides the form enctype attribute',
        'key': 'inputformenctype'
    },
    {
        'name': 'input formmethod',
        'description': 'Detect support for the formmethod attribute on form inputs',
        'key': 'inputformmethod'
    },
    {
        'name': 'input formtarget',
        'description': 'Detect support for the formtarget attribute on form inputs, which overrides the form target attribute',
        'key': 'inputformtarget'
    },
    {
        'name': 'Hover Media Query',
        'description': 'Detect support for Hover based media queries',
        'key': 'hovermq'
    },
    {
        'name': 'Pointer Media Query',
        'description': 'Detect support for Pointer based media queries',
        'key': 'pointermq'
    },
    {
        'name': 'Beacon API',
        'description': 'Detects support for an API that allows for asynchronous transfer of small HTTP data from the client to a server.',
        'key': 'beacon'
    },
    {
        'name': 'Low Bandwidth Connection',
        'description': 'Tests for determining low-bandwidth via navigator.connection',
        'key': 'lowbandwidth'
    },
    {
        'name': 'Server Sent Events',
        'description': 'Tests for server sent events aka eventsource.',
        'key': 'eventsource'
    },
    {
        'name': 'Fetch API',
        'description': 'Detects support for the fetch API, a modern replacement for XMLHttpRequest.',
        'key': 'fetch'
    },
    {
        'name': 'XHR responseType=\'arraybuffer\'',
        'description': 'Tests for XMLHttpRequest xhr.responseType=\'arraybuffer\'.',
        'key': 'xhrresponsetypearraybuffer'
    },
    {
        'name': 'XHR responseType=\'blob\'',
        'description': 'Tests for XMLHttpRequest xhr.responseType=\'blob\'.',
        'key': 'xhrresponsetypeblob'
    },
    {
        'name': 'XHR responseType=\'document\'',
        'description': 'Tests for XMLHttpRequest xhr.responseType=\'document\'.',
        'key': 'xhrresponsetypedocument'
    },
    {
        'name': 'XHR responseType=\'json\'',
        'description': 'Tests for XMLHttpRequest xhr.responseType=\'json\'.',
        'key': 'xhrresponsetypejson'
    },
    {
        'name': 'XHR responseType=\'text\'',
        'description': 'Tests for XMLHttpRequest xhr.responseType=\'text\'.',
        'key': 'xhrresponsetypetext'
    },
    {
        'name': 'XHR responseType',
        'description': 'Tests for XMLHttpRequest xhr.responseType.',
        'key': 'xhrresponsetype'
    },
    {
        'name': 'XML HTTP Request Level 2 XHR2',
        'description': 'Tests for XHR2.',
        'key': 'xhr2'
    },
    {
        'name': 'script[async]',
        'description': 'Detects support for the async attribute on the script element.',
        'key': 'scriptasync'
    },
    {
        'name': 'script[defer]',
        'description': 'Detects support for the defer attribute on the script element.',
        'key': 'scriptdefer'
    },
    {
        'name': 'Speech Recognition API',
        'description': 'Speech Recognition API',
        'key': 'speechrecognition'
    },
    {
        'name': 'Speech Synthesis API',
        'description': 'Speech Synthesis API',
        'key': 'speechsynthesis'
    },
    {
        'name': 'Local Storage',
        'description': 'Local Storage',
        'key': 'localstorage'
    },
    {
        'name': 'Session Storage',
        'description': 'Session Storage',
        'key': 'sessionstorage'
    },
    {
        'name': 'Web SQL Database',
        'description': 'Web SQL Database',
        'key': 'websqldatabase'
    },
    {
        'name': 'style[scoped]',
        'description': 'Support for the scoped attribute of the style element.',
        'key': 'stylescoped'
    },
    {
        'name': 'SVG as an img tag source',
        'description': 'SVG as an img tag source',
        'key': 'svgasimg'
    },
    {
        'name': 'SVG clip paths',
        'description': 'Detects support for clip paths in SVG (only, not on HTML content).',
        'key': 'svgclippaths'
    },
    {
        'name': 'SVG filters',
        'description': 'SVG filters',
        'key': 'svgfilters'
    },
    {
        'name': 'SVG foreignObject',
        'description': 'Detects support for foreignObject tag in SVG.',
        'key': 'svgforeignobject'
    },
    {

        'name': 'Inline SVG', 'description':
        'Detects support for inline SVG in HTML (not within XHTML).',
        'key': 'inlinesvg'
    },
    {
        'name': 'SVG SMIL animation',
        'description': 'SVG SMIL animation',
        'key': 'smil'
    },
    {
        'name': 'textarea maxlength',
        'description': 'Detect support for the maxlength attribute of a textarea element',
        'key': 'textareamaxlength'
    },
    {
        'name': 'Blob URLs',
        'description': 'Detects support for creating Blob URLs',
        'key': 'bloburls'
    },
    {
        'name': 'Data URI',
        'description': 'Detects support for data URIs. Provides a subproperty to report support for data URIs over 32kb in size:',
        'key': 'datauri'
    },
    {
        'name': 'URL parser',
        'description': 'Check if browser implements the URL constructor for parsing URLs.',
        'key': 'urlparser'
    },
    {
        'name': 'URLSearchParams API',
        'description': 'Detects support for an API that provides utility methods for working with the query string of a URL.',
        'key': 'urlsearchparams'
    },
    {
        'name': 'Video Autoplay',
        'description': 'Checks for support of the autoplay attribute of the video element.',
        'key': 'videoautoplay'
    },
    {
        'name': 'Video crossOrigin',
        'description': 'Detects support for the crossOrigin attribute on video tag',
        'key': 'videocrossorigin'
    },
    {
        'name': 'Video Loop Attribute',
        'description': 'Video Loop Attribute',
        'key': 'videoloop'
    },
    {
        'name': 'Video Preload Attribute',
        'description': 'Video Preload Attribute',
        'key': 'videopreload'
    },
    {
        'name': 'WebGL Extensions',
        'description': 'Detects support for OpenGL extensions in WebGL. It\'s true if the WebGL extensions API is supported, then exposes the supported extensions as subproperties',
        'key': 'webglextensions'
    },
    {
        'name': 'RTC Data Channel',
        'description': 'Detect for the RTCDataChannel API that allows for transfer data directly from one peer to another',
        'key': 'datachannel'
    },
    {
        'name': 'getUserMedia',
        'description': 'getUserMedia',
        'key': 'getusermedia'
    },
    {
        'name': 'RTC Peer Connection',
        'description': 'RTC Peer Connection',
        'key': 'peerconnection'
    },
    {
        'name': 'Binary WebSockets',
        'description': 'Binary WebSockets',
        'key': 'websocketsbinary'
    },
    {
        'name': 'Base 64 encoding/decoding',
        'description': 'Detects support for WindowBase64 API (window.atob && window.btoa).',
        'key': 'atobbtoa'
    },
    {
        'name': 'Framed window',
        'description': 'Tests if page is iframed.',
        'key': 'framed'
    },
    {
        'name': 'matchMedia',
        'description': 'Detects support for matchMedia.',
        'key': 'matchmedia'
    },
    {
        'name': 'Workers from Blob URIs',
        'description': 'Detects support for creating Web Workers from Blob URIs.',
        'key': 'blobworkers'
    },
    {
        'name': 'Workers from Data URIs',
        'description': 'Detects support for creating Web Workers from Data URIs.',
        'key': 'dataworkers'
    },
    {
        'name': 'Shared Workers',
        'description': 'Detects support for the SharedWorker API from the Web Workers spec.',
        'key': 'sharedworkers'
    },
    {
        'name': 'Transferables Objects',
        'description': 'Detects whether web workers can use transferables objects.',
        'key': 'transferables'
    },
    {
        'name': 'Web Workers',
        'description': 'Detects support for the basic Worker API from the Web Workers spec. Web Workers provide a simple means for web content to run scripts in background threads.',
        'key': 'webworkers'
    }];