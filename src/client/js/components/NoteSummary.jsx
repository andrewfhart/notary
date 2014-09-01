/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react'
], function (_, $, Backbone, Notary, React){

    'use strict';

    return React.createClass({
        getInitialState: function () {
            return {};
        },

        render: function () {
            return (
                <div className="note-summary">
                    <a href={'#' + this.props.key + '/edit'}>{this.props.title}</a>
                </div>
            );
        }
    });

});
