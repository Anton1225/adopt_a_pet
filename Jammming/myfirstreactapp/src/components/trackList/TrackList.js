import React from "react";
import {Track} from '../track/track';

export class TrackList extends React.Component {
    constructor(props) {
    super(props)
    }
    render() {
        return (
            <div className="TrackList">
            {this.props.tracks.map(track => <Track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} onRemove2={this.props.onRemove2} />) }
            </div>
        )
    }
}