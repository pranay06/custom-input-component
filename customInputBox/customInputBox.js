  customInputComponentApp.
    component('customInputBox', {
      bindings: {
        type: '@',
        label: '@',
        specificAttr: '<',
        bindData: '<',
        bindDataKey:'@',
        reflectCustomInput: '&',
        required: '@',
        id: '@'
      },
      templateUrl: './customInputBox/customInputBox.html',
      controller: CustomInputBoxCtrl,
      controllerAs: "CustomInputBoxCtrl"
    });

  function CustomInputBoxCtrl($scope) {
    var ctrl = this;

    if(ctrl.specificAttr == undefined) {
      ctrl.specificAttr = {};
    }


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
      console.log("bind data key is ____________________");
      console.log(ctrl.bindDataKey);
      ctrl.reflectCustomInput({'keyString':ctrl.bindDataKey,'value':newValue, 'id':ctrl.id});
      console.log(ctrl.bindDataKey);
    }
  }
