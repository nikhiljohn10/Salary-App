var salaryApp = angular.module('salaryApp', []);

salaryApp.controller('mainController', function($scope) {
  $scope.user = {
    name: 'Johny K V',
    id: 'johnykv',
    permissions: '111'
  };
  // this.amc = 4;
});
