angular.module('myApp')

.controller('mainCtrl', function($scope, mainService) {


   $scope.friends = mainService.getData();

   $scope.sortPredicate = "name";
   $scope.sortDescend = false;
   $scope.predicate = function () {
    return $scope.sortDescend + $scope.sortPredicate;
};

   $scope.sortOptions = [{
                          "Name": "name",
                          "#Friends": "friend_count",
                          "City": "current_location.city",
                          "State": "current_location.state",
                          "Country": "current_location.country"
                         },
                         {
                          "Ascending": false,
                          "Descending": true
                         }];



});
