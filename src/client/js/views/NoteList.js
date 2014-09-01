define([
    'underscore',
    'jquery',
    'backbone',
    'notary'
], function (_, $, Backbone, Notary) {

    var NoteList = Backbone.View.extend({

        template: "<p>This is a list of all notes</p>",

        events: {

        },

        initialize: function () {
            this.listenTo(this.collection, "sync", this.render);
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        }

    });

    return NoteList;

});
