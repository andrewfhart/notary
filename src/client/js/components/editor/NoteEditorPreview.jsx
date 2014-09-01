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
                <div>
                    <label>Preview</label>
                    <div className="well note-editor-preview">
                        <p>Note editor preview pane</p>
                    </div>
                </div>
            );
        }
    });
});
