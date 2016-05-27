customInputComponentApp
.component('outsideComponent',{
  templateUrl: "../views/outsideComponent.html",
  controller: OutsideComponentCtrl
});


var setObj = function(obj, keyString,value) {
  console.log("Before Replace ", keyString)
  keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  console.log("After first replace", keyString);
  keyString = keyString.replace(/^\./, '');           // strip a leading dot
  console.log("After second replace", keyString);
  var hierarchyWiseKeysArray = keyString.split('.');

  while (hierarchyWiseKeysArray.length > 1)
  obj = obj[hierarchyWiseKeysArray.shift()];
  return obj[hierarchyWiseKeysArray.shift()] = value;

}

function OutsideComponentCtrl($scope,$http,$timeout, $q) {
  console.log('Outside Components');
  var ctrl = this;

  //Since One way binding has been followed in it,
  //hence changes in the children elements will be reflected in the corresponding parents elements using this exposed function.

  ctrl.reflectValue = function(keyString,value, id) {
    console.log("Inside Reflect Value");
    console.log(keyString);
    console.log(value);
    console.log(id);
    // setObj(ctrl, keyString, value);

  };


  //Text input Data
  ctrl.textInput = {};
  ctrl.textInput.label = "Some Nice Label";
  ctrl.textInput.data = "Some Nice Data";
  ctrl.textInput.specificAttr = {
    "ngPattern": "/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/",
    "ngHint": "###-##-####",
    "ngMessage": "###-##-#### - Please enter a valid SSN."
  }

  //checkBox input Data
  ctrl.checkBoxInput = {};
  ctrl.checkBoxInput.label = "Select your super hero";
  ctrl.checkBoxInput.specificAttr = {
    // "domainList": ["Superman", "Batman", "Spiderman", "Ironman"]
    "domainList": {
      "superman":"superman",
      "batman":"Batman",
      "niceman": "Niceman"
    }
  };
  ctrl.checkBoxInput.specificAttr.operateOnSelecteditems = function(currentSelectedItems) {
    console.log("Inside operateOnSelecteditems");
    console.log(currentSelectedItems);
  }

  //singleSelect input data
  ctrl.singleSelectInput = {};
  ctrl.singleSelectInput.label = "Best Food";
  ctrl.singleSelectInput.selectedData = "pizza";
  ctrl.singleSelectInput.specificAttr = {
    "listLabelKey":'label',
    "listValueKey":'value',
    // "domainList": [
    //   {"label":"Pizza","value":"pizza"},
    //   {"label":"Burger","value":"burger"},
    //   {"label":"Salad","value":"salad"}
    // ]
    "domainList": {
      "pizza": "Pizza",
      "burger": "Burger",
      "salad": "Salad"
    }
    //  "domainList":[{"pizza":"Pizza"},{"burger":"Burger"}, {"salad":"Salad"}]
    /*, "domainList":["pizza","burger","ice-cream"]*/
    // The consuming component can take array as well as atomic objects as domainList

  };

  //multiSelect Input Data
  ctrl.multiSelectInput = {
    "required": true,
    "label": "Food",
    "specificAttr":{
      "listLabelKey":'category',
      "listValueKey":'name',
      //  "domainList":["pizza","burger","ice-cream"]


      "domainList": [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' },
        { category: 'veg', name: 'Burger' }
      ]

    }
  };

  // ctrl.multiSelectInput.data;





  //DatePicker Model

  ctrl.datelabel = "Checkin Date";
  //slider
  ctrl.selectedSliderValue=null;
  ctrl.sliderData={

    "required": true,
    "label": "Slider",
    "id": "slider",
    "type": "slider",
    "specificAttr":{
      "min":1,
      "max":10
    }

  }


  // ctrl.selectedData = "";



  ctrl.autoCompleteInput={

    "required":true,
    "label": "states",
    "type":"autoComplete",
    "specificAttr":{
      "minLength":2,
      "maxLength":18

    }
  }
  ctrl.selectedAuto=null;
  ctrl.autoCompleteInput.selectedAutocompleteData=null;
  states = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
  Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
  Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
  Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
  North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
  South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
  Wisconsin, Wyoming';

  ctrl.states= loadAll();


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

  // ctrl.search =function()
  // {
  //
  //   $http.get("autoComplete.json").success(function(data){
  //     console.log("http requested data");
  //     console.log(data);
  //     ctrl.data1= data;
  //
  //
  //   });
  // }


  //autoComplete

  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {

    return (angular.lowercase(state).indexOf(lowercaseQuery) === 0);
    };
  }
   ctrl.available=[];

  ctrl.querySearch=function (query) {
    console.log("inside query search");
    console.log(ctrl.available);
    console.log(query);

    //
    // var results = query ? ctrl.available.filter( createFilterFor(query) ) : [];
    // return results

    var results = query ? ctrl.available.filter( createFilterFor(query) ) : [];
          return results;
  }

  ctrl.autoCompleteInput.specificAttr.url="autoComplete.json";

ctrl.autoCompleteInput.specificAttr.querySearch =function(searchText,url,callBack)
  {
    console.log(searchText);
    $http({
      method: 'GET',
      // url: 'autoComplete.json'
      url:url,
    }).then(function successCallback(response) {
      ctrl.available=response.data;
      console.log("url is");
      console.log(url);
      console.log(" first inside sucess callback");
      console.log(response);
      console.log("inside sucess callback");
      console.log(ctrl.available.states);

  // //  ctrl.querySearch(searchText);
  // var output=response.createFilterFor(searchText)
  var results = searchText ?ctrl.available.states.filter( createFilterFor(searchText) ) : [];
     console.log("results are");
     console.log(results);
     callBack(results);

     //filteredData(results);
      }, function errorCallback(response) {

      });
    }
    // $http.get(url).succes(function(data){
    //   ctrl.allData=data
    //   console.log("http requested data");
    //   console.log(data);
    //   ctrl.available=ctrl.allData.split(/, +/g).map( function (state) {
    //     return {
    //       value: state.toLowerCase(),
    //       display: state
    //     };
    //   })




    //

  //   matchedData=querySearch(searchText);
  //   filteredData(matchedData);
  //
  // }
  //CheckBox

  ctrl.selectedCheckBoxData = [];

  ctrl.checkBoxLabel = "Check Box";

  // function exists(item, selected) {
  //   return list.indexOf(item) > -1;
  // }
  //
  // var toggle = function (item, list) {
  //       var idx = list.indexOf(item);
  //       if (idx > -1) list.splice(idx, 1);
  //       else list.push(item);
  //     };
  // ctrl.checkBoxData = {};
  // ctrl.checkBoxData.specificAttr = {
  //   "domainList": ["Pizza", "Burgers", "Sandwich"],
  //
  // }
  // ctrl.checkBoxData.specificAttr.operateOnSelecteditems = function(currentSelectedItems) {
  //   console.log("Inside operateOnSelecteditems");
  //   console.log(currentSelectedItems);
  // }

}
