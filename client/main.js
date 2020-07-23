import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Mongo } from 'meteor/mongo';
 Tasks = new Mongo.Collection('tasks');

Template.body.events({
  'submit.task':function(event){
    event.preventDefault();
    const target = event.target.question.value;
    console.log(target);
    if(Meteor.user()){
    Tasks.insert({content:target,owner:Meteor.userId()});
  }
  else{
    alert('you need to login');
  }
}
});
Template.body.helpers({
  content(){
  
    return Tasks.find({owner: Meteor.userId()});
  }
    
});
