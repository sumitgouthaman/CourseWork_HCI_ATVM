function atvmController($scope) {
    $scope.source = 5;
    $scope.noOfAdults = 1;
    $scope.noOfChildren = 0;
    $scope.selectedStation = 0;
    $scope.selectedMainStation = 0;

    $scope.title = "Mumbai Metro";
    $scope.returnTicket = false;

    $scope.range = function (num) {
        return new Array(num);
    }

    $scope.getSelectedStationStyle = function (index) {
        if ($scope.source == index) {
            return "grayed";
        } else {
            return "";
        }
    }
    $scope.getSelectedStationStylePrimary = function (index) {
        if ($scope.source == index) {
            return "grayed";
        } else if ($scope.selectedStation == index) {
            return "btn-success";
        } else {
            return "";
        }
    }
    $scope.getStation = function (index) {
        return $scope.stations[index].name;
    }

    $scope.setSelectedStation = function (index) {
        for (var i = 0; i < $scope.mainStations.length; i++) {
            if ($scope.mainStations[i + 1] > index) {
                $scope.selectedMainStation = i;
                break;
            }
        }
        $scope.selectedStation = index;
    }
    $scope.setSelectedMainStation = function (index) {
        $scope.selectedMainStation = index;
        $scope.selectedStation = $scope.mainStations[index];
    }

    $scope.getSubstations = function (index) {
        var startIndex = $scope.mainStations[index];
        var endIndex = 0;
        if (index + 1 == $scope.mainStations.length) {
            endIndex = -1;
        } else {
            endIndex = $scope.mainStations[index + 1] - 1;
        }
        //return [startIndex, endIndex];
        if (endIndex == -1) {
            return [[$scope.stations[startIndex].name, startIndex]];
        } else {
            var arr = new Array();
            for (var i = startIndex; i <= endIndex; i++) {
                arr.push([$scope.stations[i].name, i])
            }
            return arr;
        }
    }

    $scope.getSingleClass = function () {
        if (!$scope.returnTicket)
            return "";
        else
            return "opaque";
    }

    $scope.getReturnClass = function () {
        if (!$scope.returnTicket)
            return "opaque";
        else
            return "";
    }

    $scope.getPersonClass = function (index, number) {
        if (index < number) {
            return "";
        } else {
            return "opaque";
        }
    }
    $scope.setNoOfAdults = function (num) {
        $scope.noOfAdults = num;
    }
    $scope.setNoOfChildren = function (num) {
        $scope.noOfChildren = num;
    }

    $scope.getTotal = function (dest, ret, ad, ch) {
        var total = 0;
        total = $scope.stations[$scope.source].costs[dest];
        if (ret) {
            total = total * 2;
        }
        total = total * ad + total * ch * 0.5;
        return total;
    }

    $scope.mainStations = [0, 5, 9, 12, 16, 20];

    $scope.stations = [
        {
            "name": "Borivali",
            "costs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Kandivali",
            "costs": [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Malad",
            "costs": [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Goregaon",
            "costs": [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]
 },

        {
            "name": "Jogeshwari",
            "costs": [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Andheri",
            "costs": [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Vile Parle",
            "costs": [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Santacruz",
            "costs": [0, 1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [0, 1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Khar Road",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Bandra",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Mahim",
            "costs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]
 },

        {
            "name": "Matunga",
            "costs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Dadar",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Elphinstone Road",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 14, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 14, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Lower Parel",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15, 16, 17, 18, 19, 20]
 },

        {
            "name": "Mahalakshmi",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 16, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 16, 17, 18, 19, 2]
 },

        {
            "name": "Mumbai Cent",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 17, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 17, 18, 19, 20]
 },

        {
            "name": "Grant Road",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 19, 20]
 },

        {
            "name": "Charni Road",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 0, 19, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 0, 19, 2]
 },

        {
            "name": "Marine Lines",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 20],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 20]
 },

        {
            "name": "Churchgate",
            "costs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0],
            "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0]
 }

];
    $scope.range = function (num) {
        return new Array(num);
    }
}