import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Players } from './../imports/api/players'

Tracker.autorun(() => {
  console.log('fetch from Tracker.autorun()', Players.find().fetch());
})

setTimeout(() => {
  console.log('fetch from setTimeout()', Players.find().fetch());
},1000)

import './main.html'

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99,
},{
  _id: '2',
  name: 'Cory',
  score: -1,
},{
  _id: '3',
  name: 'Andrew',
  score: -12,
}]

const renderPlayers = (playersList) => {
  // let numbers = [
  //   {val:1},
  //   {val:2},
  //   {val:3},
  // ]

  // let newNumbers = numbers.map((number) => {
  //   return <p key={number.val}>{number.val}</p>
  // })
  // console.log(newNumbers)
  // return newNumbers
  
  // return [
  //   <p key="1">1</p>,
  //   <p key="2">2</p>,
  //   <p key="3">3</p>,
  // ]

  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>
  })
}

Meteor.startup(() => {
  let title = 'Score Keep'
  let name = 'Muhamad Duki'
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello { name }</p>
      <p>This is my second p.</p>
      { renderPlayers(players) }
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'))
})