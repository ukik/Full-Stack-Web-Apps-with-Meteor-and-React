import React from 'react'
import PropTypes from 'prop-types'

import { Players } from './../api/players'

export default class Player extends React.Component {
    render() {
        const player = this.props.player
        return (
        <p key={player._id}>
            {player.name} has {player.score} point(s)
            <button onClick={() => {
                Players.update(
                player._id, // shorhand version
                {
                    $inc: {
                        score: 1
                    }
                },
                )
            }
            }>
            +1
            </button>
            <button onClick={() => {
                Players.update(
                {
                    _id:player._id, // longhand version
                },
                {
                    $inc: {
                        score: -1
                    }
                },
                )
            }
            }>
            -1
            </button>
            <button onClick={() => {
                Players.remove({
                _id:player._id
                })
            }
            }>X</button>
        </p>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}