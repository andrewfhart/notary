define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'jsx!components/NoteList'
], function (_, $, Backbone, Notary, React, NoteListCmpt) {

    var NoteList = Backbone.View.extend({

        template: '<div id="note-list-container"></div>',

        events: {

        },

        initialize: function () {
            this.listenTo(this.collection, "sync", this.render);
        },

        render: function () {
            this.$el.html(this.template);
            React.renderComponent(new NoteListCmpt({data: this.collection}), this.$('#note-list-container').get(0));
            return this;
        }

    });

    return NoteList;

});
