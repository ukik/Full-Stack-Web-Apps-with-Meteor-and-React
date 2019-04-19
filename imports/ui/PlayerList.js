import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Player from './Player'

export default class PlayerList extends Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return <p>Add your first player to get started</p>
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            })
        }
    }
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}