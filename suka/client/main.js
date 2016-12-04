

import angular from 'angular';

import angularMeteor from 'angular-meteor';

import todosList from '../imports/components/todosList/todosList';

import '../imports/api/tasks.js';

angular.module('suka', [

  angularMeteor,
  todosList.name

]);


