angular.module('app.employee', ['ngNewRouter'])
    .controller('EmployeeController', ['$routeParams', EmployeeController]);

function EmployeeController ($routeParams) {
  this.id = $routeParams.id;
}