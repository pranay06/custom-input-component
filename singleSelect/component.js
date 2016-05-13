customInputComponentApp.
  component('singleSelectBox',{
    templateUrl: './singleSelect/nativeContent.html',
    controller:singleSelectBox,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function singleSelectBox()
 {
  var ctrl = this;
  console.log("Inside controller of singleSelectBoxCtrl");
  console.log("specific attributes are");
  console.log(ctrl.specificAttr);
  console.log(this);
  this.reflectValue = function(value) {
    console.log(value);
    this.reflectComponent({value:value});

  };
  console.log("Inside controller of single select");

  console.log(ctrl.specificAttr);
  if(ctrl.specificAttr.domainList.length>0) {
    if(ctrl.specificAttr.domainList[0].constructor === Object)
      ctrl.listDataType="object";
    else {
      ctrl.listDataType="element";
    
    }
  }

  console.log("List Data Type");


  console.log(ctrl.listDataType);
}