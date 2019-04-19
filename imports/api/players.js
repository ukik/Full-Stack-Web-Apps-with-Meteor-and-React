import { Mongo } from 'meteor/mongo'

export const Players = new Mongo.Collection('players')
export const Enemies = new Mongo.Collection('enemies')
// Enemies.insert({
//     a: 'test'
// })