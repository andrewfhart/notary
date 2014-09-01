/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
], function (_, $, Backbone, Notary, React) {

    'use strict';

    return React.createClass({

        getInitialState: function () {
            return {
                id:    this.props.note.get('id'),
                title: this.props.note.get('title'),
                body:  this.props.note.get('body')
            };
        },

        onTitleChange: function () {
            // Persist the current value into the component state
            this.setState({title: this.refs.title.getDOMNode().value});
        },

        onBodyChange: function () {
            // Obtain the current text
            var currentText = this.refs.body.getDOMNode().value;
            // Update our own local state
            this.setState({body: currentText});
            // Pass control up to the parent component for processing
            this.props.onBodyChangeHandler(currentText);
        },

        onSave: function () {
            // Pass control up to the parent component
            this.props.onSave(this.state);
        },

        onCancel: function () {
            // Pass control up to the parent component
            this.props.onCancel(this.state);
        },

        render: function () {

            return (
                <form className="form note-editor-form">
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input  type="text"
                                className="form-control"
                                placeholder="Note title..." 
                                ref="title" 
                                value={this.state.title}
                                onChange={this.onTitleChange} />
                                
                    </div>
                    <div className="form-group">
                        <label for="body">Note Text</label>
                        <textarea className="form-control" 
                                  placeholder="Type note here..." 
                                  ref="body"
                                  value={this.state.body}
                                  onChange={this.onBodyChange} />
                    </div>
                    <input  className="btn btn-default" 
                            type="submit" 
                            value="Save"
                            onClick={this.onSave} />
                    <input  className="btn btn-default"
                            type="button"
                            value="Cancel"
                            onClick={this.onCancel} />
                </form>
            );

        }

    });

});
