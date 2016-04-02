const modals = {};

//  TODO
// add lodash merge method

modals.registrationModal = function create($scope) {
  return {
    scope: $scope,
    templateUrl: 'templates/modals/registration-modal.tmpl.html',
    show: false,
    animation: 'am-fade-and-slide-top',
  };
};

modals.authorizationModal = function create($scope) {
  return {
    scope: $scope,
    templateUrl: 'templates/modals/auth-modal.tmpl.html',
    show: false,
    animation: 'am-fade-and-slide-top'
  };
};

modals.newListModal = function create($scope) {
  return {
    scope: $scope,
    templateUrl: 'templates/modals/newList-modal.tmpl.html',
    show: false,
    animation: 'am-fade-and-slide-top'
  };
};

modals.settingsModal = function create($scope) {
  return {
    scope: $scope,
    templateUrl: 'templates/modals/settings-modal.tmpl.html',
    show: false,
    animation: 'am-fade-and-slide-top'
  };
};

module.exports = modals;
