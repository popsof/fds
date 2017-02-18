
var row = document.querySelector('.row');

var col0 = document.createElement('div');
var col1 = document.createElement('div');
var col2 = document.createElement('div');

var textNode = document.createTextNode('My Text');
var attr = document.createAttribute('class');
attr.nodeValue="sm-col-2";

col0.setAttributeNode(attr);
col1.setAttribute("class", "sm-col-1");
col2.setAttribute("class", "sm-col-1");

col0.appendChild(textNode);
col1.appendChild( document.createTextNode('Text on the fly1'));
col2.appendChild( document.createTextNode('Text on the fly2'));


col0.insertBefore
col0.removeChild
col0.replaceChild
col0.cloneNode
col0.innerHTML