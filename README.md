# Simo Soundboard

Legendary Simo Soundboard. Ember.js app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Ruby](https://www.ruby-lang.org/en/)
* [ejson](https://github.com/Shopify/ejson)

## Development

* `git clone https://github.com/Darep/simo-soundboard.git`
* `cd simo-soundboard`
* `npm i && bower i`
* `ember server`
* Open [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Get the ejson private key from Darep
* `gem install ejson`
* `ember deploy production`
