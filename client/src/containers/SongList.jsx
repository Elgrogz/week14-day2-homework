var React = require('react');

// var Song = require('../components/Song.jsx');

var SongList = React.createClass({
  getInitialState: function() {
    return {songs: []};
  },

  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {
        var data =JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
      }
    }.bind(this);
    request.send();
  },

  render: function() {
    return (
        <div className="song-list">

        </div>
      )
  }
})

module.exports = SongList;