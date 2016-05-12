customInputComponentApp
  .component('outsideComponent',{
    templateUrl: "./views/outsideComponent.html",
    controller: OutsideComponentCtrl
  });

function OutsideComponentCtrl($scope) {
  console.log('Outside Components');
  var ctrl = this;
  ctrl.label = "Some Nice Label";
  ctrl.type = "text";
  ctrl.label1 = "Choose Date";
  ctrl.type1 = "date";

   ctrl.label2 = "Choose time";
  ctrl.type2 = "time";
  
  ctrl.specificAttr = {
    "fellan":"dhamkaan"
  };
  ctrl.selectedData = "";
  ctrl.reflectOutside = function(value) {
    ctrl.selectedData = value;
  };
}
