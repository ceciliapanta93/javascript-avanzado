const app = angular.module("myApp", []);

app.controller("myCtrl", ($scope) => {
  $scope.handleChange = (e) => {
    const distance = $scope.distance;
    const payment = getTotalPayment(distance)
    $scope.result = distance > 500 ? payment * 0.9 : payment ;
  };

  const getTotalPayment = (distance) => {
    let result = 0;
    if (distance > 1000) {
      result =
        (distance - 1000) * 0.2 +
        (distance - (distance - 1000) - 300) * 0.3 +
        250;
      return result;
    }
    if (distance > 300 && distance <= 1000) {
      result = 250 + (distance - 300) * 0.3;
      return result;
    }
    if (distance <= 300) {
      return 250;
    }
  };
});
