var React = require('react');

var Song = function(props) {

  if (!props.song) {
    return
  }

  return (
    <div className="song-details">
    <h4>Song title: </h4>
    <h4>Chart Position: </h4>
    <h4>Artist: </h4>
    </div>
    )

}

module.exports = Song;