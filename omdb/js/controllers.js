'use strict';

/* Controllers */

var movieControllers = angular.module('movieCntl', []);

function searchCntl($scope, $http, $location,$window, search){
    $scope.searchTerm = "";
    $scope.currentPage = 1;
    $scope.noResults = "";
    //calls a service and gets results for the search
    $scope.search = function () {
        search.searchAPI($scope.searchTerm).success(function (data, status) {
            $scope.searchList = data;

            if($scope.searchList.Response === 'False'){
              $scope.noResults = "No Results for " + $scope.searchTerm + " try searching again";
            }
            else{$scope.noResults = "";}
        });
      //calls a service to get next pages result
      $scope.next = function () {
        $scope.currentPage += 1;

          search.nextPage($scope.currentPage).success(function (data, status) {
              $scope.searchList = data;
          });
}
      //calls a service to get the previous pages result
      $scope.previous = function () {
        $scope.currentPage -= 1;

          search.nextPage($scope.currentPage).success(function (data, status) {
              $scope.searchList = data;
          });
      }
      $scope.getMoreInfo = function (index) {
          $scope.imdbID = $scope.searchList.Search[index].imdbID;

          search.getInfo($scope.imdbID).success(function (data, status) {
            $location.path("/info");
        });

    };
}
}

function infoCntl($scope, $http, $location, search){
  $scope.info = search.returnInfo();
}
