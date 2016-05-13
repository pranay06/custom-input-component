customInputComponentApp.
  component('multiSelectBox',{
    templateUrl: './multiSelect/nativeContent.html',
    controller:multiSelectBox,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function multiSelectBox($http)
 {
  var ctrl = this;
  console.log("Inside controller of multiSelectBoxCtrl");
  console.log("specific attributes are");
  console.log(ctrl.specificAttr);
  console.log(this);
  this.reflectValue = function(value) {
    console.log(value);
    this.reflectComponent({value:value});

  };
  console.log("Inside controller of multi select");

  console.log(ctrl.specificAttr);
  if(ctrl.specificAttr.domainList.length>0) {
    if(ctrl.specificAttr.domainList[0].constructor === Object)
      ctrl.listDataType="object";
    else {
      ctrl.listDataType="element";
    
    }
  }


 //start of code to get unique categories from list

  function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


var unique=[];
for(i=0;i<ctrl.specificAttr.domainList.length;i++)
{
  var temp=ctrl.specificAttr.domainList[i].category;
  if(!contains(unique,temp))
  {
    unique.push(temp);
  }
}
//end 
console.log("unique contains"+unique)

ctrl.unique=unique;

  console.log("List Data Type");


  console.log(ctrl.listDataType);
}