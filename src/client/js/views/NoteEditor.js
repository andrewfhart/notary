define([
    'underscore',
    'jquery',
    'backbone',
    'notary'
], function (_, $, Backbone, Notary) {

    var NoteEditor = Backbone.View.extend({

        template: "<p>This is the note editor</p>",

        events: {

        },

        initialize: function () {

        },

        render: function () {

            this.$el.html(this.template);
            return this;

        }

    });

    return NoteEditor;

});
