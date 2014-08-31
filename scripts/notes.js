/** @jsx React.DOM */

var Notary = Notary || {};

(function () {

    'use strict';

    // ---------------
    // Note Collection
    // ---------------

    var Notes = Backbone.Collection.extend({

        model: Notary.Note,

        localStorage: new Backbone.LocalStorage('notary'),

        nextId: function () {

            return this.length 
                ? this.last().get('id') + 1
                : 1;
        },

        comparator: 'id'

    });

    Notary.notes = new Notes();

})();