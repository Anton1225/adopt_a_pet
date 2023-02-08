import React from 'react';
import {TrackList} from '../trackList/TrackList';
import './playlist.css';
export class PlayList2 extends React.Component {
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
              <input defaultValue={"Playlist2"} onChange={this.handleNameChange} />
              <TrackList tracks={this.props.playlistTracks2} onRemove2={this.props.onRemove} isRemoval={true} />  
              <button className="Playlistplay-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}