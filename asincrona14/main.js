const app = angular.module("app", []);

app.controller("formCtrl", ($scope) => {
  $scope.salaryBasic = 0
  $scope.discount = 0
  $scope.salaryNeto = 0
  $scope.handleSubmit = () => {
    $scope.salaryBasic = $scope.hour * $scope.priceHour
    $scope.discount = getDiscount($scope.salaryBasic)
    $scope.salaryNeto = $scope.salaryBasic - $scope.discount
  };
});

const getDiscount = (salary) => {
  if (salary <= 500) {
    return 0
  } else if (salary > 500 && salary <= 1000) {
    return salary * 0.02
  } else if (salary > 1000 && salary <= 4000) {
    return salary * 0.08
  } else if (salary > 4000 && salary <= 8000) {
    return salary * 0.15
  } else if (salary > 8000 && salary <= 10000) {
    return salary * 0.21
  } else if (salary > 10000) {
    return salary * 0.3
  }
}