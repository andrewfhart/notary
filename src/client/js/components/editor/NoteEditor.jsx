/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'jsx!components/editor/NoteEditorForm',
    'jsx!components/editor/NoteEditorPreview'
], function (_, $, Backbone, Notary, React, EditorFormCmpt, EditorPreviewCmpt) {

    'use strict';

    return React.createClass({

        getInitialState: function () {
            return {};
        },

        handleSave: function () {
            return false;
        },

        render: function () {
            return (
                <div className="note-editor row">
                    <div className="note-editor-form-container col-md-6">
                        <EditorFormCmpt/>
                    </div>
                    <div className="note-editor-preview-container col-md-6">
                        <EditorPreviewCmpt/>
                    </div>
                </div>
            );
        }
    });
});
