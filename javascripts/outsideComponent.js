customInputComponentApp
  .component('outsideComponent',{
    templateUrl: "../views/outsideComponent.html",
    controller: OutsideComponentCtrl
  });

function OutsideComponentCtrl($scope) {
  console.log('Outside Components');
  var ctrl = this;
  ctrl.label = "First Name";
  ctrl.type = "text";
  ctrl.firstName = "Raj";

  //
  // ctrl.label1 = "Choose Date";
  // ctrl.type1 = "date";
  //
  //  ctrl.label2 = "Choose time";
  // ctrl.type2 = "time";

  ctrl.specificAttr = {
    "fellan":"dhamkaan"
  };

  //DatePicker Model

  ctrl.datelabel = "Checkin Date";
  

  // ctrl.selectedData = "";
  ctrl.reflectValue = function(keyString,value) {
    ctrl[keyString] = value;
    console.log(keyString);
  };

}
