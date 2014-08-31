/** @jsx React.DOM */

var Notary = Notary || {};

(function () {

    'use strict';


    var BackboneMixin = {

        componentDidMount: function () {

            var that = this;

            // Trigger reconciliation whenever the underlying Backbone model changes
            _.each(this.getBackboneCollections(), function (collection) {

                // Explicitly bind `null` to `forceUpdate`, as it demands a callback and
                // React validates that it's a function. `collection` events pass
                // additional arguments that are not functions.
                collection.on('add remove change', that.forceUpdate.bind(that, null));

            });

        },

        componentWillUnmount: function () {

            var that = this;

            // Ensure that any dangling references are removed when the component is
            // destroyed.
            _.each(this.getBackboneCollections(), function (collection) {

                collection.off(null, null, that);

            });

        }

    };


    Notary.App = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.notes];
        },

        getInitialState: function () {
            return {};
        },

        componentDidMount: function () {

            var Router = Backbone.Router.extend({
                routes: {
                    '': 'all',
                    ':id/edit': 'edit'
                },

                all:  function () {
                    console.log('Using \'all\' route');
                    //this.setState({currentNote: false});
                },

                edit: function (noteId) {
                    console.log('Using \'edit\' route with note id: ' + noteId);
                    //this.setState({currentNote: noteId});
                },
            });

            new Router();

            Backbone.history.start();

        },

        componentDidUpdate: function () {

        },

        saveNote: function (note, title, body) {
            note.save({title: title, body: body});
        },

        render: function () {

            return (

                <div>
                    <h1>Notary</h1>
                    <Notary.NoteList data={this.props.notes} />
                </div>

            );
        }

    });

    console.log('Creating fake note...');
    Notary.notes.add(new Notary.Note({id: 1, title: 'foo', body: 'once upon a _time_'}));

    console.log('About to render...');

    React.renderComponent(
        <Notary.App notes={Notary.notes} />,
        document.getElementById('content')
    );


})();
