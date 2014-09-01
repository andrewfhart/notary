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
            return {};
        },

        handleSave: function () {
            return false;
        },

        render: function () {

            return (
                <form className="form note-editor-form">
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input className="form-control" type="text" placeholder="Note title..." ref="title" />
                    </div>
                    <div className="form-group">
                        <label for="body">Note Text</label>
                        <textarea className="form-control" placeholder="Type note here..." ref="body" />
                    </div>
                    <input className="btn btn-default" type="submit" value="Save" />
                </form>
            );

        }

    });

});
