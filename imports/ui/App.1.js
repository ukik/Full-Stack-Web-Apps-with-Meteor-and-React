import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle={'Yeah'}/>
        {/* <p>Hello { name }</p> */}
        {/* <p>This is my second p.</p> */}
        {/* { renderPlayers(players) } */}
        <PlayerList players={this.props.players}/>
        <AddPlayer score={100}/>
      </div>
    )
  }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
}