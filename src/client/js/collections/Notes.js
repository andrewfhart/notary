define([
    'underscore',
    'jquery',
    'backbone',
    'backbone.localStorage',
    'notary',
    'models/Note'
], function (_, $, Backbone, BackboneLocalStorage, Notary, NoteModel) {

    'use strict';

    // ---------------
    // Note Collection
    // ---------------

    var Notes = Backbone.Collection.extend({

        model: NoteModel,

        localStorage: new BackboneLocalStorage('notary'),

        nextId: function () {

            return this.length 
                ? this.last().get('id') + 1
                : 1;
        },

        comparator: 'id'

    });

    return Notes;

});
