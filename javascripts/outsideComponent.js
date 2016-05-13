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

   ctrl.selectedsingleSelectedData=null,
   ctrl.singleSelectData = {
                    
                    "required": true,
                    "label": "Food",
                    "id": "Food",
                    "type": "singleSelect",
                    "specificAttr":{
                    "listLabelKey":'label',
                    "listValueKey":'value',
                   /* "domainList":["pizza","burger","ice-cream"]*/


                      "domainList": [
                               {"label":"Pizza","value":"pizza"},
                               {"label":"Burger","value":"burger"},
                                 {"label":"Salad","value":"salad"}
                                    ]

                     /* "domainList":[
                                { category: 'meat', name: 'Pepperoni' },
                                { category: 'meat', name: 'Sausage' },
                                { category: 'meat', name: 'Ground Beef' },
                                { category: 'meat', name: 'Bacon' },
                                { category: 'veg', name: 'Mushrooms' },
                                { category: 'veg', name: 'Onion' },
                                { category: 'veg', name: 'Green Pepper' },
                                { category: 'veg', name: 'Green Olives' }
                              ]
*/
                     
                      }

                    }

  ctrl.selectedmultiSelectedData=null,
   ctrl.multiSelectData = {
                    
                    "required": true,
                    "label": "Food",
                    "id": "Food",
                    "type": "multiSelect",
                    "specificAttr":{
                    "listLabelKey":'category',
                    "listValueKey":'name',
                  /* "domainList":["pizza","burger","ice-cream"]*/

/*
                      "domainList": [
                               {"label":"Pizza","value":"pizza"},
                               {"label":"Burger","value":"burger"},
                                 {"label":"Salad","value":"salad"}
                                    ]*/

                      "domainList":[
                                { category: 'meat', name: 'Pepperoni' },
                                { category: 'meat', name: 'Sausage' },
                                { category: 'meat', name: 'Ground Beef' },
                                { category: 'meat', name: 'Bacon' },
                                { category: 'veg', name: 'Mushrooms' },
                                { category: 'veg', name: 'Onion' },
                                { category: 'veg', name: 'Green Pepper' },
                                { category: 'veg', name: 'Green Olives' }
                              ]

                     
                      }

                    }




  ctrl.autoCompleteData={
      "selectedAutocompleteData":null,
      "required":true,
      "label": "states",
      "type":"autoComplete",
      "specificAttr":{
             "minLength":2,
             "maxLength":18

      }
  }

      states = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
       Wisconsin, Wyoming';
      function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
          };

        }
        ctrl.states= loadAll();
      ctrl.autoCompleteData.specificAttr.querySearch =  function  (query) {

        var results = query ? ctrl.states.filter( createFilterFor(query) ) : [];
        return results;
      }

  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    console.log("inside loadAll")
    //
    // $http.get("autoComplete/states.json").success(function(response, error){
    //   console.log("inside http get");
    //   console.log(response);
    //   allStates = response;
    //   console.log(error);
    // });
    // console.log(ctrl.specificAttr.domainList)
    // var allStates =ctrl.specificAttr.domainList;
  //   console.log(allStates);
   //
   a=states.split(/, +/g).map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });

   console.log("a is");
   console.log(a);

    return a;
  }


}
