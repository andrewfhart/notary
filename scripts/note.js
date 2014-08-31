/** @jsx React.DOM */

var Notary = Notary || {};

(function () {

    'use strict';

    Notary.Note = Backbone.Model.extend({

        defaults: {
            title: 'Untitled Note',
            body: ''
        },

    });

})();