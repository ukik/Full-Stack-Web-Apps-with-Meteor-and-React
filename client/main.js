import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

// import TitleBar from './../imports/ui/TitleBar'
// import AddPlayer from './../imports/ui/AddPlayer'
// import Player from './../imports/ui/Player'
// import PlayerList from './../imports/ui/PlayerList'
import App from './../imports/ui/App'

import './main.html'

// const renderPlayers = (playersList) => {
//   return playersList.map((player) => {
//     return (
//       <p key={player._id}>
//         {player.name} has {player.score} point(s)
//         <button onClick={() => {
//             Players.update(
//               player._id, // shorhand version
//               {
//                 $inc: {
//                     score: 1
//                 }
//               },
//             )
//           }
//         }>
//         +1
//         </button>
//         <button onClick={() => {
//             Players.update(
//               {
//                 _id:player._id, // longhand version
//               },
//               {
//                 $inc: {
//                     score: -1
//                 }
//               },
//             )
//           }
//         }>
//         -1
//         </button>
//         <button onClick={() => {
//             Players.remove({
//               _id:player._id
//             })
//           }
//         }>X</button>
//       </p>
//     )
//   })
// }

// const renderPlayers = (playersList) => {
//   return playersList.map((player) => {
//     return <Player key={player._id} player={player} />
//   })
// }

// let insertPlayer = (data) => {
//   Players.insert(
//     {
//       name: data.name, 
//       score: data.score,
//     }
//   )  
// }

// const handleSubmit = (e) => {
//   let playerName = e.target.playerName.value

//   e.preventDefault()

//   if (playerName) {
//     e.target.playerName.value = ''
//     insertPlayer({
//       name: playerName,
//       score: 0,
//     })
//   }
// }


Meteor.startup(() => {
  Tracker.autorun(() => {
    // console.log('fetch from Tracker.autorun()', Players.find().fetch());

    // let players = Players.find().fetch()
    let players = Players.find({}, {
      sort: {
        name: -1,
      }
    }).fetch()
    let title = 'Score Keep'

    // let name = 'Muhamad Duki'
    // let jsx = (
    //   <div>
        {/* <TitleBar title={'My App'} subtitle={'Yeah'}/> */}
        {/* <p>Hello { name }</p> */}
        {/* <p>This is my second p.</p> */}
        {/* { renderPlayers(players) } */}
        {/* <PlayerList players={players}/> */}
        {/* <AddPlayer score={100}/> */}
    //   </div>
    // )
      
    ReactDOM.render(<App title={title} players={players} />, document.getElementById('app'))  

    // jangan taruh insert disini (di dalam autorun), atau akan infinity loop insert
  })  

  // insert into mongoDB
  // Players.insert(
  //   {
  //     name: 'Master Bu',
  //     score: Math.random()*1000,
  //   }      
  // )  
})