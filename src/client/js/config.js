require.config({

    paths: {
        backbone: '../lib/backbone/backbone',
        'backbone.localStorage': '../lib/backbone.localstorage/backbone.localStorage-min',
        bootstrap: '../lib/bootstrap/dist/js/bootstrap.min',
        jquery: '../lib/jquery/dist/jquery.min',
        jsx: '../lib/jsx-requirejs-plugin/js/jsx',
        JSXTransformer: '../lib/jsx-requirejs-plugin/js/JSXTransformer-0.11.1',
        react: '../lib/jsx-requirejs-plugin/js/react-with-addons-0.11.1',
        text: '../lib/requirejs-text/text',
        underscore: '../lib/lodash/dist/lodash.compat.min'
    },


    shim: {

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone'
        },

        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },

        JSXTransformer: {
            exports: "JSXTransformer"
        },

        jquery: {
            exports: 'jquery'
        },

    },

    jsx: {
        fileExtension: '.jsx'
    }

});

require([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'collections/Notes',
    'models/Note',
    'views/Note',
    'views/NoteList',
    'views/NoteEditor'
    ], function (_, $, Backbone, Notary, NoteCollection, NoteModel, NoteView, NoteListView, NoteEditorView) {

    'use strict';

    // Define a global container for the application
    Notary.app = {};

    // Define a store to hold notes
    Notary.notes = new NoteCollection();
    Notary.notes.add(new NoteModel({key:1, title:'First Note!', body: '_this_ is my *first* note.'}));

    // Define routing for the application
    var NotaryRouter = Backbone.Router.extend({

        routes: {
            '': 'showAllNotes',
            ':id': 'viewNote',
            ':id/edit': 'editNote'
        },

        showAllNotes: function () {
            console.log('Using showAllNotes route...');

            new NoteListView({el: $("#app"), collection: Notary.notes}).render();
        },

        viewNote: function (noteId) {
            console.log('Using viewNote route with note ' + noteId);

            var noteModel = Notary.notes.get(noteId);
            new NoteView({el: $('#app'), model:noteModel}).render();
        },

        editNote: function (noteId) {
            console.log('Using editNote route with note ' + noteId);

            var noteModel = Notary.notes.get(noteId);
            var noteEditorView = new NoteEditorView({el: $('#app'), model: noteModel}).render();
        }

    });

    // Instantiate the router
    Notary.app.router = new NotaryRouter();

    // Start backbone history to enable the router
    console.log('Starting backbone history...');
    Backbone.history.start();

});
