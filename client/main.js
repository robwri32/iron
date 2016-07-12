import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Router.route('/', function () {
  this.layout('ApplicationLayout');
    this.render('Home');
});

Router.route('/about/', function () {
  this.layout('ApplicationLayout');
    this.render('about');
});

Router.route('/leaderboard/', function () {
  this.layout('ApplicationLayout');
    this.render('leaderboard');
});


Router.route('/addpup/', function () {
  this.layout('ApplicationLayout');
    this.render('addpup');
});

Router.route('/sponsor/', function () {
  this.layout('ApplicationLayout');
    this.render('sponsor');
});
Router.route('/profile/', function () {
  this.layout('ApplicationLayout');
    this.render('profile');
});
