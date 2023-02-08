import React from 'react';
import {TrackList} from '../trackList/TrackList';
import './playlist.css';
export class PlayList extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    handleNameChange(e) {
        let name = e.target.value;
        this.props.onChangeName(name);
    }
    render() {
        return (
            <div className="Playlist">
              <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
              <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} /> 
              <button className="Playlistplay-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}