(function($){function _createTemp(element){return element.clone().css({position:'absolute'});};function _splitHtmlWords(contents){var words=[];var splitContent;for(var c=0;c<contents.length;c++){if(contents[c].nodeName==='BR'){words.push('<br>');continue;}
if(contents[c].nodeType==3){splitContent=_splitWords(contents[c].textContent||contents[c].toString());}else{var tag=$(contents[c]).clone();splitContent=_splitHtmlWords(tag.contents());for(var t=0;t<splitContent.length;t++){tag.empty();splitContent[t]=tag.html(splitContent[t]).wrap('<p></p>').parent().html();}}
for(var w=0;w<splitContent.length;w++){if(splitContent[w]===''){continue;}
words.push(splitContent[w]);}}
return words;};function _splitWords(text){return text.split(/\s+/);}
function _markupContent(tag,html){tag='<div>'+tag;return $(tag).find('*:not(:has("*"))').html(html).parentsUntil().slice(-1).html();}
$.fn.splitLines=function(options){var settings={width:'auto',tag:'<div>',wrap:'',keepHtml:true};if(options){$.extend(settings,options);}
var newHtml=_createTemp(this);var contents=this.contents();var text=this.text();this.append(newHtml);newHtml.text('42');var maxHeight=newHtml.height()+2;newHtml.empty();var tempLine=_createTemp(newHtml);var width=settings.width;if(settings.width==='auto'){width=this[0].offsetWidth;}
tempLine.width(width);this.append(tempLine);var words=settings.keepHtml?_splitHtmlWords(contents):_splitWords(text);var prev;for(var w=0;w<words.length;w++){var html=tempLine.html();tempLine.html(html+words[w]+' ');if(tempLine.html()==prev){prev='';newHtml.append(_markupContent(settings.tag,tempLine.html()));tempLine.html('');continue;}
if(tempLine.height()>maxHeight){prev=tempLine.html();tempLine.html(html);newHtml.append(_markupContent(settings.tag,tempLine.html()));tempLine.html('');w--;}}
newHtml.append(_markupContent(settings.tag,tempLine.html()));this.html(newHtml.html());};})(jQuery);