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
            return {}
        },

        handleSave: function () {
            return false;
        },

        updatePreview: function (rawText) {
            this.refs.preview.generatePreview(rawText);
        },

        render: function () {
            return (
                <div className="note-editor row">
                    <div className="note-editor-form-container col-md-6">
                        <EditorFormCmpt note={this.props.note} onBodyChangeHandler={this.updatePreview} ref="form"/>
                    </div>
                    <div className="note-editor-preview-container col-md-6">
                        <EditorPreviewCmpt ref="preview" initialText={this.props.note.get('body')}/>
                    </div>
                </div>
            );
        }
    });
});
