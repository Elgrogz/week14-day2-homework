var React = require('react');
var ReactDOM = require('react-dom');

var SongList = require('./containers/SongList.jsx');

window.onload = function(){
  ReactDOM.render(
    <SongList />,
    document.getElementById('app')
  );
}
