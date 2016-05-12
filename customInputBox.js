customInputComponentApp.
  component('customInputBox', {
    bindings: {
      type: "<",
      label: "<",
      specificAttr: '<',
      bindData: '<',
      reflectCustomInput: '&'
    },
    templateUrl: './views/customInputBox.html',
    controller: CustomInputBoxCtrl
  });

function CustomInputBoxCtrl($scope) {
  var ctrl = this;
  ctrl.a = 0;
  console.log("Inside CustomInputBoxCtrl");
  console.log($scope);
  console.log($scope.$parent.$ctrl.label);
  $scope.$parent.$ctrl.label = "Some HAHAH Label";
  console.log($scope.$parent.$ctrl.label);
  ctrl.reflectCustom = function(value) {
    console.log(value);
    ctrl.reflectCustomInput({value:value})
  }
}
