function atvmController($scope) {
    $scope.source = 9;
    $scope.destinations = [
        //Add station details
    ];

    $scope.noOfAdults = 1;
    $scope.noOfChildren = 0;

    $scope.title = "Western Railway";
    $scope.returnTicket = false;
    
    $scope.range = function(num){
        return new Array(num);
    }
}