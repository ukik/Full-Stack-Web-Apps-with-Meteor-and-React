import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players'

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name
      this.age = age
    }
    getGreeting() {
      return `Hi! I am ${this.name}`
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old`
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      // digunakan untuk mengakses parent class
      super(name, age)
      
      this.title = title
    }
    getGreeting() {
      if(this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}`
      } else {
        // call parent class instead
        // menjadikan class getGreeting() parent sebagai default
        return super.getGreeting()
      }
    }
    hasJob() {
      return !!this.title // casting as bool
    }
  }

  let me = new Person('Ukik')
  console.log(me.getGreeting())
  // console.log(me.hasJob());
  
  
  let person = new Person('Jagon', 25)
  console.log(person.getGreeting())
  // console.log(person.getPersonDescription());
  // console.log(person.hasJob());
  
  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
      super(name, age)
      this.preferredLanguage = preferredLanguage
    }
    getGreeting() {
      return `Hi! I am ${this.name}. I work as a ${this.preferredLanguage}`
    }
  }
  
  let userOne = new Programmer('Stardust', 25,'JavaScript')
  console.log(userOne.getGreeting());
  
})