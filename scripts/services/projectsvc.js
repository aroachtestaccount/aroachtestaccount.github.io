'use strict';

/**
 * @ngdoc service
 * @name ciscogithubioApp.ProjectSvc
 * @description
 * # ProjectSvc
 * Service in the ciscogithubioApp.
 */
angular.module('ciscogithubioApp')
  .service('ProjectSvc', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('http://ec2-52-87-200-36.compute-1.amazonaws.com/ghpages/repos.json');
  });
