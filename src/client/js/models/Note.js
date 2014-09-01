define([
    'underscore',
    'jquery',
    'backbone',
    'notary'
], function (_, $, Backbone, Notary) {

    'use strict';

    var Note = Backbone.Model.extend({

        defaults: {
            title: 'Untitled Note',
            body: ''
        },

    });

    return Note;

});
