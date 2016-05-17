customInputComponentApp.
  component('checkBox',{
    templateUrl: './subCustomComponents/checkBox/nativeContent.html',
    controller: CheckBoxBoxCtrl,
    controllerAs: "CheckBoxBoxCtrl"
    ,
    bindings: {
      label: '@',
      ngChecked: '&',
      domainList: '<',
      required: '@'
    }
  });

function CheckBoxBoxCtrl($scope) {
  var ctrl = this;
  console.log("Inside CheckBoxBoxCtrl");
  console.log(ctrl);
  ctrl.selectedData = [];

  ctrl.toggle = function(item){
    console.log("Inside Toggle");
    var status = false;
    var idx = ctrl.selectedData.indexOf(item);
    console.log("Index ", idx);
    if (idx > -1 )
    {
      ctrl.selectedData.splice(idx,1);
    }
    else {
      status = true;
      ctrl.selectedData.push(item);
    }

    console.log("Status ", status);
    ctrl.ngChecked({currentSelectedItems: ctrl.selectedData});

    return status;
  };

  console.log("Inside CheckBoxBoxCtrl");
  console.log(CheckBoxBoxCtrl.domainList);
}
