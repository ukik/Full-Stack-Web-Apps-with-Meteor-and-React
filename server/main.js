import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players'

// khusus untuk client DDP
// ----------------------------------------------
Meteor.methods({
  clientProcessData: function (data) {
    console.log(data);
  
    Players.insert(
      {
        name: data,
        score: 3,
      }
    )    
    // Meteor post data to MongoDB code here
  }
})

if(Meteor.isServer) {
  Meteor.publish('players', function() {
     return Players.find();
  })
}

if (Meteor.isClient) {
    Meteor.subscribe('players');
};

Meteor.setTimeout(function() {
    var myLog = Players.find().fetch();
    console.log(myLog);
}, 1000);
// ----------------------------------------------


Meteor.startup(() => {
  // let obj = {
  //   name: 'Andrew',
  //   printName() {
  //     console.log(`Name: ${this.name}`);
  //   }
  // }

  // setTimeout(() => {
  //   obj.printName.bind(obj)
  // }, 1000);
})