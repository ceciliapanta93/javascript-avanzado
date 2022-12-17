const app = angular.module("app", []);

app.controller("formCtrl", ($scope, $http) => {
  $scope.handleSubmit = () => {
    $http.get("http://localhost:9000/api/clientes")
    .then(function(response) {
        console.log(response)
        $scope.response = JSON.stringify(response.data, null, 2)
    });
  };
  $scope.handleClick = () => {
    console.log($scope.id)
    $http.get(`http://localhost:9000/api/clientes/${$scope.id}`)
    .then(function(response) {
        $scope.response = JSON.stringify(response.data, undefined, 4)
    });
  };
});
