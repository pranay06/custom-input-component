customInputComponentApp.
  component('sliderBox',{
    templateUrl: './slider/nativeContent.html',
    controller: TextBoxCtrl,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function TextBoxCtrl()
{
    var ctrl = this;
    console.log("Inside controller of textBoxCtrl");
    console.log(this);
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };
}
