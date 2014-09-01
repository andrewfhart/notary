define([
    'underscore',
    'jquery',
    'backbone',
    'notary'
], function (_, $, Backbone, Notary) {

    var Note = Backbone.View.extend({

        template: "<p>This is the note viewer</p>",

        events: {

        },

        initialize: function () {

        },

        render: function () {

            this.$el.html(this.template);
            return this;

        }

    });

    return Note;

});
