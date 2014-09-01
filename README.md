# Notary

Notary is a simple, experimental attempt at creating a lightweight, dynamic note taking application. It is implemented as a single page application that features a side-by-side live Markdown preview of the current note, as it is being edited.

Notary is a proof-of-concept integration of several modern web technologies:

* The server-side component uses [Node.js](http://nodejs.org) and [Express](http://expressjs.com)
* The client-side component uses [Backbone](http://backbonejs.org) for Models, Collections, and Routing
* The client-side component uses [React](http://facebook.github.io/react) for front-end UI Components
* The client-side component uses [Backbone LocalStorage](https://github.com/jeromegn/Backbone.localStorage) for persistence
* Client-side JavaScript libraries are managed with [Bower](http://bower.io)
* Server-side JavaScript libraries are managed with [NPM](http://npmjs.org)
* The build process is managed with [Gulp](https://github.com/gulpjs/gulp/), a streaming version of [Grunt](http://gruntjs.com)

## Installation

Installing Notary is straightforward, provided your system meets the minimum requirements:

* `npm` Node Package Manager tool (included with [Nodejs](http://nodejs.org))

```
git clone https://github.com/andrewfhart/notary
cd notary
npm install && npm run install_libs
```

## Development

Notary uses [Gulp](https://github.com/gulpjs/gulp/), a streaming version of the [Grunt](http://gruntjs.com) task runner to manage the build process. Gulp will be automatically installed and configured for Notary by the installation scripts (see Installation). To build a development environment, simply run:

```
npm run dev
```

Then, visit http://localhost:3000/

Optionally, you may wish to have Gulp watch for relevant filesystem changes. To enable this, run:

```
gulp watch
```

## Deployment

Notary is, at present at least, a technology experiment. It was implemented as a way to gain familiarity with the tools listed above, and to practice tying them together in a way that supports rapid development of modular, extensible web applications. 

There are a number of additional steps that should be taken before deploying Notary on any publicly-accessible site:

* Switch from Backbone LocalStorage to a persistent store. There are API stubs for this in the server component, but they need to be flushed out, and the front-end needs to be modified to use them.

* Concatenate and minify JavaScript resources. There are several steps to this: use r.js to uglify/concatenate requirejs modules, employ a JSX compiler to precompile React components during the build step, update the gulp build process to tie all of these optimizations together.

* Do a security audit. The focus of Notary was to explore integrating multiple complementary web technologies and frameworks, not providing a user-facing web application. No guarantees exist or should be inferred with respect to the fitness of this code for any particular purpose.

