

/* Services */

var searchServices = angular.module('searchServices', ['ngResource']);

searchServices.factory('search', function($http) {
  var term = "";
  var currentPage = 1;
  var info;
return {

    searchAPI: function(searchTerm){
        term = searchTerm;
        search = $http({method : 'GET',url : 'http://www.omdbapi.com/?s=' + searchTerm + '&page=1'});
        return search;
    },
    nextPage: function(currentPage){
      currentPage = currentPage;
        search = $http({method : 'GET',url : 'http://www.omdbapi.com/?s=' + term + '&page=' + currentPage});

        return search;
    },
    //returns promise so next page will load correctly
    getInfo: function(imdbID){
        var promise = $http({method : 'GET',url : 'http://www.omdbapi.com/?i=' + imdbID}).success(function (data, status) {
            info = data;
            return info;
        });
        return promise;
    },
    returnInfo: function(imdbID){
      console.log(info);
        return info;

    }



 };
 });
