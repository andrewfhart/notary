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
            var initialText = this.props.initialText;
            return {
                rawText: initialText,
                processedText: this.processText(initialText)
            };
        },

        render: function () {
            return (
                <div>
                    <label>Preview</label>
                    <div className="well note-editor-preview">
                        <p>{this.state.processedText}</p>
                    </div>
                </div>
            );
        },

        processText: function (input) {
            var output = input;
            return output;
        },

        generatePreview: function (text) {
            this.setState({
                rawText: text,
                processedText: this.processText(text)
            });
        }

    });
});
