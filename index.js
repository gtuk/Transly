var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var script = "self.on('click', function (node, data) {" +
             "  var text = window.getSelection().toString();" +
             "  var language = window.navigator.userLanguage || window.navigator.language;" +
             "  window.open('https://translate.google.com/#auto/'+language+'/'+text, '_blank'); " +
             "});";

var menuItem = contextMenu.Item({
  label: "Translate",
  context: contextMenu.SelectionContext(),
  contentScript: script
});
