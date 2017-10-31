var current_browser_capabilities = [];

for (var detect in Modernizr) {
    if (Modernizr[detect] === true) {
        current_browser_capabilities.push(detect);
    }
}

document.write(current_browser_capabilities.length);