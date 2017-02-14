var React = require('react');

// var Song = require('../components/Song.jsx');

var SongList = React.createClass({
  getInitialState: function() {
    return {songs: []};
  },

  render: function() {
    return (
        <div className="song-list">
        <p>Hello</p>
        </div>
      )
  }
})

module.exports = SongList;