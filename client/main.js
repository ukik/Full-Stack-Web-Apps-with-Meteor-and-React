import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayerPositions } from './../imports/api/players'

import App from './../imports/ui/App'

import './main.html'

Meteor.startup(() => {
  Tracker.autorun(() => {

    let players = Players.find({}, {
      sort: {
        score: -1,
      }
    }).fetch()

    console.log(players)

    let title = 'Score Keep'
    let positionedPlayer = calculatePlayerPositions(players)

    ReactDOM.render(<App title={title} players={positionedPlayer} />, document.getElementById('app'))  

    // jangan taruh insert disini (di dalam autorun), atau akan infinity loop insert
  })  
})