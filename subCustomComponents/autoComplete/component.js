customInputComponentApp.
  component('autocompleteBox',{
    templateUrl: './autoComplete/nativeContent.html',
    controller:autocompleteBox,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function autocompleteBox($http)
{
    var ctrl = this;
    console.log("Inside controller of autoCompleteBoxCtrl");
    console.log("specific attributes are");
    console.log(ctrl.specificAttr);
    console.log(this);
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };

    // ctrl.states= loadAll($http);
    ctrl.selectedItem;
    ctrl.searchText;
    // ctrl.querySearch= querySearch;



    console.log("states is ..............");
    // console.log(ctrl.states);

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */

    /**
     * Create filter function for a query string
     */

}
