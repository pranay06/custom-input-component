customInputComponentApp.
  component('textBox',{
    templateUrl: './text/nativeContent.html',
    controller: TextBoxCtrl,
    bindings: {
      label: "<",
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function TextBoxCtrl()
{
    console.log("Inside controller of textBoxCtrl");
    console.log(this);
    this.reflect = function(value) {
      console.log(value);
      this.reflectComponent({value:value});
    };
}
