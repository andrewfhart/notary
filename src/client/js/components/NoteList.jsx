/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'jsx!components/NoteSummary',
    'models/Note'
], function (_, $, Backbone, Notary, React, NoteSummaryCmpt, NoteModel) {

    'use strict';

    return React.createClass({

        getInitialState: function () {
            return {};
        },

        render: function () {
            var that = this;
            return (
                <div>
                    <div className="note-list">
                        {this.props.collection.map( function (note) {
                            return <NoteSummaryCmpt 
                                key={note.get('id')} 
                                title={note.get('title')}
                                onDelete={that.deleteNote}>
                                {note.get('body')}
                            </NoteSummaryCmpt>
                        })}
                    </div>
                    <input type="button" className="btn btn-large" onClick={this.createNote} value="Create Note"/>
                </div>
            );
        },

        createNote: function () {

            // Create a new model object
            var model = new NoteModel({
                id: this.props.collection.nextId(),   // Get the next available id
            });

            // Add it to the collection
            this.props.collection.add(model);

            // Transition to the editor view
            Notary.app.router.navigate('#' + model.get('id') + '/edit', {trigger: true});

        },

        deleteNote: function (event) {

            event.stopPropagation();
            event.preventDefault();

            var that = this;

            var noteId = $(event.target).attr('href').substr(1);

            if (confirm('This action can not be undone. Continue?')) {
                console.log(this.props.collection.length);
                var model = this.props.collection.get(noteId);
                model.destroy({
                    success: function (model, response) {
                        that.props.collection.remove(model);
                        that.forceUpdate();
                    }
                });
            }
        }
    });
});
