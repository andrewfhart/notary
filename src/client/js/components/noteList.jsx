/** @jsx React.DOM */

var Notary = Notary || {};

(function () {

    'use strict';

    Notary.NoteList = React.createClass({

        getInitialState: function () {
            return {};
        },

        handleSave: function () {
            return false;
        },

        render: function () {

            var noteNodes = this.props.data.map( function (note) {
                return (

                    <Notary.NoteSummary title={note.get('title')}>
                        {note.get('body')}
                    </Notary.NoteSummary>

                );

            });

            return (

                <div className="noteList">
                    {noteNodes}
                </div>

            );

        }

    });

})();