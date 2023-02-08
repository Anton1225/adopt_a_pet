import React from 'react';
import './App.css';
import {SearchBar} from '../searchBar/searchBar';
import {SearchResults} from '../searchResults/searchResults';
import {PlayList} from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';
import {PlayList2} from '../PlayList2/Playlist2'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
    {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, 
    {name: 'name3', artist: 'artist3', album: 'album3', id: 3}], my: 'send',  playlistName: 'myPlayList',
    playlistName2: 'mySecondPlaylist', 
    playlistTracks: [{name: 'name11', artist: 'artist11', album: 'album11', id: 11}, {name: 'name22', artist: 'artist22', album: 'album22', id: 22},
     {name: 'name33', artist: 'artist33', album: 'album33', id: 33}], 
    playlistTracks2: [{name: 'name11', artist: 'artist11', album: 'album11', id: 11}, {name: 'name22', artist: 'artist22', album: 'album22', id: 22},
     {name: 'name33', artist: 'artist33', album: 'album33', id: 33}]}
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
    
      }
  search(term) {
    console.log(term);
    // Spotify.search(term).then(response => this.setState({searchResults: response}))
    }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).
    then(() => this.setState({playlistTracks: []}, {playlistName: 'New PlayList'}))
    }
  
  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }
  addTrack(track) {
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        this.setState(state => state.playlistTracks.push(track))
    }
    else return;
  }
  removeTrack2(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }
  addTrack2(track) {
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        this.setState(state => state.playlistTracks.push(track))
    }
    else return;
  }
  render() {
  return  (
  <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar onUpdate={this.updatePlaylistName} onSearch={this.search} /> 
        <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} send={this.state.my} onAdd={this.addTrack} /> 
      <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
      onRemove={this.removeTrack} onChangeName={this.updatePlaylistName} onSave={this.savePlaylist} />
      <PlayList2 playlistName={this.state.playlistName2} playlistTracks2={this.state.playlistTracks2} 
      onRemove={this.removeTrack2} onChangeName={this.updatePlaylistName2} onSave={this.savePlaylist} />
        </div>
      </div>
  </div>
  )
  }
  
}


export default App;
