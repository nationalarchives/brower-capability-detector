# Browser capability detector

A simple tool to detect the capabilities of a user's browser and provide an easy mechanism for them to send this information to us.

## Development environment

This is a very simple application which does not rely on any new language features or techniques. Simply clone the repository and run `php -S localhost:8000` from the project root. You will then be able to see the contents of `index.php` by visiting `http://localhost:8000`

### Changing Modernizr options

The build of `scripts/modernizr.js` is configured by `modernizr-config.json`. To run this you'll need to install Modernizr globally and run `modernizr -c ../modernizr-config.json` from the `/scripts/` directory.