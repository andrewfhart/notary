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
                            return <NoteSummaryCmpt key={note.get('id')} title={note.get('title')}>
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

        selectNote: function (event) {
            console.log(event.target);
        }


    });
});
