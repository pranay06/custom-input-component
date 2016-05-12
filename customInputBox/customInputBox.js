customInputComponentApp.
  component('customInputBox', {
    bindings: {
      type: '@',
      label: '@',
      specificAttr: '<',
      bindData: '<',
      bindDataKey:'@',
      reflectCustomInput: '&'
    },
    templateUrl: './customInputBox/customInputBox.html',
    controller: CustomInputBoxCtrl
  });

function CustomInputBoxCtrl($scope) {
  var ctrl = this;
  ctrl.a = 0;
  console.log("Inside CustomInputBoxCtrl");
  console.log($scope);
  console.log($scope.$parent.$ctrl.label);
  // $scope.$parent.$ctrl.label = "Some HAHAH Label";
  // console.log($scope.$parent.$ctrl.label);
  // ctrl.reflectCustomBox = ctrl.reflectCustomInput;
  ctrl.reflectCustomBox = function(newValue) {
    console.log("In reflect Custom Box");
    console.log(newValue);
    ctrl.reflectCustomInput({'keyString':ctrl.bindDataKey,'value':newValue});
    console.log(ctrl.bindDataKey);
  }
}
