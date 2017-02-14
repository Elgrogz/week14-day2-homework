var React = require('react');

var Song = function(props) {

  if (!props.songs) {
    return
  }

  var songDetails = props.songs.map(function(song, index) {
    console.log(song.title.label)
    return (
      <div key={index}>
      <p> Song: {song.title.label}</p>
      <p> Chart Position: {index + 1}</p>
      </div>
      )

  })
    console.log(songDetails)

  return (
    <div>{songDetails}</div>
    )

};

module.exports = Song;
