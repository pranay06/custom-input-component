customInputComponentApp.
  component('textBox',{
    templateUrl: './views/textBoxContent.html',
    controller: TextBoxCtrl
  });

function TextBoxCtrl()
{
    console.log("Inside controller of textBoxCtrl");
}
