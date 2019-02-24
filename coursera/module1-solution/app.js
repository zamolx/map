(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.totalItems = 0;
  $scope.message = "";
  $scope.stateOfBeing = "";
  $scope.border = "";
  $scope.numberItems= function (){
    $scope.totalItems = calculateNumbersItems($scope.items);
  }
  $scope.checkItems = function() {
    var message = "";
    var style = "";
    var border = "";
    if ($scope.totalItems > 3) {message = "Too much !"; style = "full";border = "border_full";}
    if ($scope.totalItems >0 && $scope.totalItems<=3) { message = "Enjoy!"; style = "less";border = "border_full";}
    if ($scope.totalItems === 0) {message = "Please enter data first!";style = "empty";border = "border_empty"}
  $scope.message = message;
  $scope.border = border;
  $scope.stateOfBeing = style;
  };
  function calculateNumbersItems(string) {
    var totalItems = 0;
    var words = string.split(',');
    for(var i = 0; i<words.length; i++)
    {
        if (words[i] !="" && words[i]!=" ") {
          totalItems +=1;
        }
    }
    return totalItems;
  }
}

})();
