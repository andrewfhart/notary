/** @jsx React.DOM */

define([
    'underscore',
    'jquery',
    'backbone',
    'notary',
    'react',
    'jsx!components/NoteSummary'
], function (_, $, Backbone, Notary, React, NoteSummaryCmpt) {

    'use strict';

    return React.createClass({
        getInitialState: function () {
            return {};
        },

        render: function () {
            return (
                <div className="note-list">
                    {this.props.data.map( function (note) {
                        return <NoteSummaryCmpt key={note.get('id')} title={note.get('title')}>
                            {note.get('body')}
                        </NoteSummaryCmpt>
                    })}
                </div>
            );
        }
    });
});
