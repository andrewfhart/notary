/** @jsx React.DOM */

var Notary = Notary || {};

(function () {

    'use strict';

    Notary.NoteSummary = React.createClass({

        getInitialState: function () {
            return {};
        },

        handleSave: function () {
            return false;
        },

        render: function () {

            return (
                <div className="noteSummary">
                    <p>{this.props.title}</p>
                </div>
            );

        }

    });

})();