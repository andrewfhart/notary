define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'jsx!components/editor/NoteEditor'
], function (_, $, Backbone, Notary, React, NoteEditorCmpt) {

    return Backbone.View.extend({

        template: '<div id="note-editor-container"></div>',

        events: {

        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
            React.renderComponent(new NoteEditorCmpt({
                note: this.model,
            }), this.$('#note-editor-container').get(0));
            return this;
        },


    });
});
