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
  ctrl.specificAttr = {
    "fellan":"dhamkaan"
  };
  ctrl.inputData = "Raj";
  ctrl.reflectOutside = function(value) {
    ctrl.inputData = value;
  };
}
