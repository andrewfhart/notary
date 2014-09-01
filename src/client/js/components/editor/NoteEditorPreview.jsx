/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'showdown',
], function (_, $, Backbone, Notary, React, Showdown) {

    'use strict';

    return React.createClass({

        /* Will hold the Showdown converter */
        converter: null,

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
                        <p dangerouslySetInnerHTML={{__html: this.state.processedText}}></p>
                    </div>
                </div>
            );
        },

        processText: function (input) {
            if (!this.converter) {
                this.converter = new Showdown.converter();
            }

            return this.converter.makeHtml(input);
        },

        generatePreview: function (text) {
            this.setState({
                rawText: text,
                processedText: this.processText(text)
            });
        }

    });
});
