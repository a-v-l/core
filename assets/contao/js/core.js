/* Contao Open Source CMS, (c) 2005-2013 Leo Feyer, LGPL license */
var AjaxRequest={toggleNavigation:function(e,t){e.blur();var n=$(t),r=$(e).getFirst("img");return n?(n.getStyle("display")=="none"?(n.setStyle("display","inline"),r.src=r.src.replace("modPlus.gif","modMinus.gif"),$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao).post({action:"toggleNavigation",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(n.setStyle("display","none"),r.src=r.src.replace("modMinus.gif","modPlus.gif"),$(e).store("tip:title",Contao.lang.expand),(new Request.Contao).post({action:"toggleNavigation",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(i,s){n=(new Element("li",{id:t,"class":"tl_parent",html:i,styles:{display:"inline"}})).inject($(e).getParent("li"),"after"),$(e).store("tip:title",Contao.lang.collapse),r.src=r.src.replace("modPlus.gif","modMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadNavigation",id:t,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleStructure:function(e,t,n,r){e.blur();var i=$(t),s=$(e).getFirst("img");return i?(i.getStyle("display")=="none"?(i.setStyle("display","inline"),s.src=s.src.replace("folPlus.gif","folMinus.gif"),$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao({field:e})).post({action:"toggleStructure",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(i.setStyle("display","none"),s.src=s.src.replace("folMinus.gif","folPlus.gif"),$(e).store("tip:title",Contao.lang.expand),(new Request.Contao({field:e})).post({action:"toggleStructure",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(i,o){var u=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}}),a=(new Element("ul",{"class":"level_"+n,html:i})).inject(u,"bottom");if(r==5)u.inject($(e).getParent("li"),"after");else{var f=!1,l=$(e).getParent("li");while(typeOf(l)=="element"&&(next=l.getNext("li"))){l=next;if(l.hasClass("tl_folder")){f=!0;break}}f?u.inject(l,"before"):u.inject(l,"after")}$(e).store("tip:title",Contao.lang.collapse),s.src=s.src.replace("folPlus.gif","folMinus.gif"),window.fireEvent("structure"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadStructure",id:t,level:n,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFileManager:function(e,t,n,r){e.blur();var i=$(t),s=$(e).getFirst("img"),o=$(e).getNext("img");return i?(i.getStyle("display")=="none"?(i.setStyle("display","inline"),s.src=s.src.replace("folPlus.gif","folMinus.gif"),o.src=o.src.replace("folderC","folderO"),$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao({field:e})).post({action:"toggleFileManager",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(i.setStyle("display","none"),s.src=s.src.replace("folMinus.gif","folPlus.gif"),o.src=o.src.replace("folderO","folderC"),$(e).store("tip:title",Contao.lang.expand),(new Request.Contao({field:e})).post({action:"toggleFileManager",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(n,i){var u=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}}),a=(new Element("ul",{"class":"level_"+r,html:n})).inject(u,"bottom");u.inject($(e).getParent("li"),"after"),$(e).store("tip:title",Contao.lang.collapse),s.src=s.src.replace("folPlus.gif","folMinus.gif"),o.src=o.src.replace("folderC.gif","folderO.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFileManager",id:t,level:r,folder:n,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},togglePagetree:function(e,t,n,r,i){e.blur();var s=$(t),o=$(e).getFirst("img");return s?(s.getStyle("display")=="none"?(s.setStyle("display","inline"),o.src=o.src.replace("folPlus.gif","folMinus.gif"),$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao({field:e})).post({action:"togglePagetree",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(s.setStyle("display","none"),o.src=o.src.replace("folMinus.gif","folPlus.gif"),$(e).store("tip:title",Contao.lang.expand),(new Request.Contao({field:e})).post({action:"togglePagetree",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(n,r){var s=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}}),u=(new Element("ul",{"class":"level_"+i,html:n})).inject(s,"bottom");s.inject($(e).getParent("li"),"after"),$(e).store("tip:title",Contao.lang.collapse),o.src=o.src.replace("folPlus.gif","folMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadPagetree",id:t,level:i,field:n,name:r,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFiletree:function(e,t,n,r,i){e.blur();var s=$(t),o=$(e).getFirst("img");return s?(s.getStyle("display")=="none"?(s.setStyle("display","inline"),o.src=o.src.replace("folPlus.gif","folMinus.gif"),$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao({field:e})).post({action:"toggleFiletree",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(s.setStyle("display","none"),o.src=o.src.replace("folMinus.gif","folPlus.gif"),$(e).store("tip:title",Contao.lang.expand),(new Request.Contao({field:e})).post({action:"toggleFiletree",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(n,r){var s=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}}),u=(new Element("ul",{"class":"level_"+i,html:n})).inject(s,"bottom");s.inject($(e).getParent("li"),"after"),$(e).store("tip:title",Contao.lang.collapse),o.src=o.src.replace("folPlus.gif","folMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFiletree",id:t,level:i,field:n,name:r,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleSubpalette:function(e,t,n){e.blur();var r=$(t);if(r){e.value?(e.value="",e.checked="",r.setStyle("display","none"),(new Request.Contao({field:e})).post({action:"toggleSubpalette",id:t,field:n,state:0,REQUEST_TOKEN:Contao.request_token})):(e.value=1,e.checked="checked",r.setStyle("display","block"),(new Request.Contao({field:e})).post({action:"toggleSubpalette",id:t,field:n,state:1,REQUEST_TOKEN:Contao.request_token}));return}(new Request.Contao({field:e,evalScripts:!1,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(n,r){var i=(new Element("div",{id:t,html:n,styles:{display:"block"}})).inject($(e).getParent("div").getParent("div"),"after");r.javascript&&$exec(r.javascript),e.value=1,e.checked="checked",AjaxRequest.hideBox(),Backend.addInteractiveHelp(),Backend.addColorPicker(),window.fireEvent("subpalette"),window.fireEvent("ajax_change")}})).post({action:"toggleSubpalette",id:t,field:n,load:1,state:1,REQUEST_TOKEN:Contao.request_token})},toggleVisibility:function(e,t,n){e.blur();var r=null,i=$(e).getFirst("img"),s=i.src.indexOf("invisible")!=-1,o=e.getParent("div");o.hasClass("tl_right")?r=o.getPrevious("div").getElement("img"):o.hasClass("tl_listing_container")?(r=e.getParent("td").getPrevious("td").getFirst("div.list_icon"),r==null&&(r=e.getParent("td").getPrevious("td").getElement("div.cte_type")),r==null&&(r=e.getParent("tr").getFirst("td").getElement("div.list_icon_new"))):(next=o.getNext("div"))&&next.hasClass("cte_type")&&(r=next);if(r!=null)if(r.nodeName.toLowerCase()=="img")if(r.getParent("ul.tl_listing").hasClass("tl_tree_xtnd"))s?r.src=r.src.replace(/_\.(gif|png|jpe?g)/,".$1"):r.src=r.src.replace(/\.(gif|png|jpe?g)/,"_.$1");else{r.src.match(/folPlus|folMinus/)&&(r.getParent("a").getNext("a")?r=r.getParent("a").getNext("a").getFirst("img"):r=new Element("img"));if(s){var u=r.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");r.src=r.src.replace(/_[0-9]\.(gif|png|jpe?g)/,(u.toInt()==1?"":"_"+(u.toInt()-1))+".$1")}else{var u=r.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");r.src=r.src.replace(/(_[0-9])?\.(gif|png|jpe?g)/,(u==r.src?"_1":"_"+(u.toInt()+1))+".$2")}}else r.hasClass("cte_type")?s?(r.addClass("published"),r.removeClass("unpublished")):(r.addClass("unpublished"),r.removeClass("published")):s?r.setStyle("background-image",r.getStyle("background-image").replace(/_\.(gif|png|jpe?g)/,".$1")):r.setStyle("background-image",r.getStyle("background-image").replace(/\.(gif|png|jpe?g)/,"_.$1"));return n=="tl_style"&&o.getParent("div").getElement("pre").toggleClass("disabled"),s?(i.src=i.src.replace("invisible.gif","visible.gif"),(new Request({url:window.location.href})).get({tid:t,state:1})):(i.src=i.src.replace("visible.gif","invisible.gif"),(new Request({url:window.location.href})).get({tid:t,state:0})),!1},toggleFeatured:function(e,t){e.blur();var n=$(e).getFirst("img"),r=n.src.indexOf("featured_")==-1;return r?(n.src=n.src.replace("featured.gif","featured_.gif"),(new Request.Contao).post({action:"toggleFeatured",id:t,state:0,REQUEST_TOKEN:Contao.request_token})):(n.src=n.src.replace("featured_.gif","featured.gif"),(new Request.Contao).post({action:"toggleFeatured",id:t,state:1,REQUEST_TOKEN:Contao.request_token})),!1},toggleFieldset:function(e,t,n){e.blur();var r=$("pal_"+t);return r.hasClass("collapsed")?(r.removeClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:t,table:n,state:1,REQUEST_TOKEN:Contao.request_token})):(r.addClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:t,table:n,state:0,REQUEST_TOKEN:Contao.request_token})),!1},toggleCheckboxGroup:function(e,t){e.blur();var n=$(t),r=$(e).getFirst("img");return n?(n.getStyle("display")!="block"?(n.setStyle("display","block"),r.src=r.src.replace("folPlus.gif","folMinus.gif"),(new Request.Contao).post({action:"toggleCheckboxGroup",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(n.setStyle("display","none"),r.src=r.src.replace("folMinus.gif","folPlus.gif"),(new Request.Contao).post({action:"toggleCheckboxGroup",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!0):!1},liveUpdate:function(e,t){var n=$(t);if(!n)return;(new Request.Contao({onRequest:$("lu_message").set("html",'<p class="tl_info">Connecting to the Live Update server</p>'),onSuccess:function(t,n){t?$("lu_message").set("html",n.content):$(e).submit()}})).post({action:"liveUpdate",id:n.value,REQUEST_TOKEN:Contao.request_token})},displayBox:function(e){var t=$("tl_ajaxBox"),n=$("tl_ajaxOverlay"),r=window.getScroll();n==null&&(n=(new Element("div",{id:"tl_ajaxOverlay"})).inject($(document.body),"bottom")),n.set({styles:{display:"block",top:r.y+"px"}}),t==null&&(t=(new Element("div",{id:"tl_ajaxBox"})).inject($(document.body),"bottom")),t.set({html:e,styles:{display:"block",top:r.y+100+"px"}})},hideBox:function(){var e=$("tl_ajaxBox"),t=$("tl_ajaxOverlay");t&&t.setStyle("display","none"),e&&e.setStyle("display","none")},reloadFiletrees:function(){$$(".filetree").each(function(e){var t=e.id,n=t.replace(/_[0-9]+$/,"");(new Request.Contao({evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(t,n){var r=$(e.id+"_parent").getFirst("ul"),i=r.getLast("li");r.set("html",t),i.inject(r,"bottom"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFiletree",field:n,name:t,REQUEST_TOKEN:Contao.request_token})})}},Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,getMousePosition:function(e){Backend.xMousePosition=e.client.x,Backend.yMousePosition=e.client.y},openWindow:function(e,t,n){e.blur(),t=Browser.ie?t+40:t+17,n=Browser.ie?n+30:n+17,Backend.popupWindow=window.open(e.href,"","width="+t+",height="+n+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")},openModalWindow:function(e,t,n){(new SimpleModal({width:e,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}})).show({title:t,contents:n})},openModalImage:function(e){var t=e||{},n=new SimpleModal({width:t.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});n.show({title:t.title,contents:'<img src="'+t.url+'" alt="">'})},openModalIframe:function(e){var t=e||{},n=(window.getSize().y-180).toInt();if(!t.height||t.height>n)t.height=n;var r=new SimpleModal({width:t.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});r.show({title:t.title,contents:'<iframe src="'+t.url+'" width="100%" height="'+t.height+'" frameborder="0"></iframe>'})},openModalSelector:function(e){var t=e||{},n=(window.getSize().y-180).toInt();if(!t.height||t.height>n)t.height=n;var r=new SimpleModal({width:t.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});r.addButton(Contao.lang.close,"btn",function(){this.hide()}),r.addButton(Contao.lang.apply,"btn primary",function(){var e=[],n=[],r=t.id.replace(/_[0-9]+$/,"")+"_parent",i=null,s=window.frames;for(var o=0;o<s.length;o++)if(s[o].name=="simple-modal-iframe"){i=s[o];break}if(i===null){alert("Could not find the SimpleModal frame");return}var u=i.document.getElementById(r).getElementsByTagName("input");for(var o=0;o<u.length;o++){if(!u[o].checked||u[o].id.match(/^check_all_/))continue;if(!u[o].id.match(/^reset_/)){var a=u[o].getParent("li").getFirst("div");n.push('<img src="'+a.getFirst("img").src+'" width="18" height="18" alt=""> '+a.getFirst("label").get("title")),e.push(u[o].get("value"))}}if(t.tag)$(t.tag).value=e.join(","),t.url.match(/page\.php/)&&($(t.tag).value="{{link_url::"+$(t.tag).value+"}}"),t.self.set("href",t.self.get("href").replace(/&value=[^&]*/,"&value="+e.join(",")));else{$("ctrl_"+t.id).value=e.join(","),$("target_"+t.id).getFirst("ul").removeClass("sgallery").set("html","<li>"+n.join("</li><li>")+"</li>");var f=$("target_"+t.id).getElement("a");f.set("href",f.get("href").replace(/&value=[^&]*/,"&value="+e.join(",")))}this.hide()}),r.show({title:t.title,contents:'<iframe src="'+t.url+'" name="simple-modal-iframe" width="100%" height="'+t.height+'" frameborder="0"></iframe>',model:"modal"})},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScroll().y+"; path="+(Contao.path||"/")},autoSubmit:function(e){Backend.getScrollOffset();var t=new Element("input",{type:"hidden",name:"SUBMIT_TYPE",value:"auto"}),n=$(e);t.inject(n,"bottom"),n.submit()},vScrollTo:function(e){window.addEvent("load",function(){window.scrollTo(null,parseInt(e))})},showTreeBody:function(e,t){e.blur(),$(t).setStyle("display",$(e).checked?"inline":"none")},hideTreeBody:function(){var e=$$("ul"),t=null;for(var n=0;n<e.length;n++)e[n].hasClass("mandatory")?$("ctrl_"+e[n].id).checked="checked":e[n].hasClass("tl_listing")&&(t=e[n].getFirst("li").getNext("li"))&&t.hasClass("parent")&&t.setStyle("display","none")},limitPreviewHeight:function(){var e=null,t=null,n="",r=0;$$("div.limit_height").each(function(i){e=i.getCoordinates(),r==0&&(r=i.className.replace(/[^0-9]*/,"").toInt());if(!$chk(r))return;i.setStyle("height",r);var s=Contao.script_url+"system/themes/"+Contao.theme+"/images/";t=new Element("img",{"class":"limit_toggler",alt:"",width:20,height:24});if(e.height<r){t.src=s+"expand_.gif",t.inject(i,"after");return}t.src=s+"expand.gif",t.setStyle("cursor","pointer"),t.addEvent("click",function(){n=this.getPrevious("div").getStyle("height").toInt(),this.getPrevious("div").setStyle("height",n>r?r:""),this.src=this.src.indexOf("expand.gif")!=-1?s+"collapse.gif":s+"expand.gif"}),t.inject(i,"after")})},toggleCheckboxes:function(e,t){var n=$$("input"),r=e.checked?"checked":"";for(var i=0;i<n.length;i++){if(n[i].type.toLowerCase()!="checkbox")continue;if(t&&n[i].id.substr(0,t.length)!=t)continue;n[i].checked=r}},toggleCheckboxGroup:function(e,t){var n=$(e).className,r=$(e).checked?"checked":"";if(n=="tl_checkbox"){var i=$(t)?$$("#"+t+" .tl_checkbox"):$(e).getParent("fieldset").getElements(".tl_checkbox");i.each(function(e){e.checked=r})}else n=="tl_tree_checkbox"&&$$("#"+t+" .parent .tl_tree_checkbox").each(function(e){e.checked=r});Backend.getScrollOffset()},toggleCheckboxElements:function(e,t){var n=$(e).checked?"checked":"";$$("."+t).each(function(e){e.hasClass("tl_checkbox")&&(e.checked=n)}),Backend.getScrollOffset()},toggleWrap:function(e){var t=$(e),n=t.getProperty("wrap")=="off"?"soft":"off";t.setProperty("wrap",n)},toggleUnchanged:function(){$$("#result-list .tl_confirm").each(function(e){e.toggleClass("hidden")})},blink:function(){},addColorPicker:function(){return!0},pickPage:function(e){var t=320,n=112;Backend.currentId=e,Backend.ppValue=$(e).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/page.php?value="+Backend.ppValue,"","width="+t+",height="+n+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-t/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-n/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},pickFile:function(e,t){var n=320,r=112;Backend.currentId=e,Backend.ppValue=$(e).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/file.php?value="+Backend.ppValue+"&filter="+t,"","width="+n+",height="+r+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-n/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-r/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},collapsePalettes:function(e){$$("fieldset.hide").each(function(e){e.addClass("collapsed")}),$$("label.error","label.mandatory").each(function(e){(fs=e.getParent("fieldset"))&&fs.removeClass("collapsed")})},addInteractiveHelp:function(){new Tips.Contao("p.tl_tip",{offset:{x:9,y:21},text:function(e){return e.get("html")}}),["a[title]","input[title]"].each(function(e){new Tips.Contao($$(e).filter(function(e){return e.title!=""}),{offset:{x:0,y:26}})}),$$("img[title]").filter(function(e){return e.title!=""}).each(function(e){new Tips.Contao(e,{offset:{x:0,y:e.get("class")=="gimage"?60:30}})})},makeParentViewSortable:function(e){var t=new Scroller(document.getElement("body"),{onChange:function(e,t){var n=this.element.getScroll();this.element.scrollTo(n.x,t)}}),n=new Sortables(e,{contstrain:!0,opacity:.6,onStart:function(){t.start()},onComplete:function(){t.stop()},handle:".drag-handle"});n.active=!1,n.addEvent("start",function(){n.active=!0}),n.addEvent("complete",function(e){if(!n.active)return;if(e.getPrevious("li")){var t=e.get("id").replace(/li_/,""),r=e.getPrevious("li").get("id").replace(/li_/,""),i=window.location.search.replace(/id=[0-9]*/,"id="+t)+"&act=cut&mode=1&pid="+r,s=window.location.href.replace(/\?.*$/,"");(new Request({url:s+i})).get()}else if(e.getParent("ul")){var t=e.get("id").replace(/li_/,""),r=e.getParent("ul").get("id").replace(/ul_/,""),i=window.location.search.replace(/id=[0-9]*/,"id="+t)+"&act=cut&mode=2&pid="+r,s=window.location.href.replace(/\?.*$/,"");(new Request({url:s+i})).get()}})},makeMultiSrcSortable:function(e,t){var n=(new Sortables($(e),{contstrain:!0,opacity:.6})).addEvent("complete",function(){var n=[],r=$(e).getChildren("li");for(i=0;i<r.length;i++)n.push(r[i].get("data-id"));$(t).value=n.join(",")});n.fireEvent("complete")},makeWizardsSortable:function(e){$$(".tl_listwizard").each(function(e){new Sortables(e,{contstrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_tablewizard").each(function(e){var t=e.getElement(".sortable");new Sortables(t,{contstrain:!0,opacity:.6,handle:".drag-handle",onComplete:function(){Backend.tableWizardResort(t)}})}),$$(".tl_modulewizard").each(function(e){new Sortables(e.getElement(".sortable"),{contstrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_optionwizard").each(function(e){new Sortables(e.getElement(".sortable"),{contstrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_checkbox_wizard").each(function(e){var t=e.getElement(".sortable");if(t.hasClass("sortable-done"))return;new Sortables(t,{contstrain:!0,opacity:.6,handle:".drag-handle"}),t.addClass("sortable-done")})},listWizard:function(e,t,n){var r=$(n),i=$(e).getParent("li"),s=r.getChildren();Backend.getScrollOffset();switch(t){case"copy":var o=i.clone(!0).inject(i,"before");if(input=i.getFirst("input"))o.getFirst("input").value=input.value;break;case"up":(previous=i.getPrevious("li"))?i.inject(previous,"before"):i.inject(r,"bottom");break;case"down":(next=i.getNext("li"))?i.inject(next,"after"):i.inject(r.getFirst("li"),"before");break;case"delete":s.length>1&&i.destroy()}rows=r.getChildren();var u=1;for(var a=0;a<rows.length;a++)(input=rows[a].getFirst('input[type="text"]'))&&input.set("tabindex",u++)},tableWizard:function(e,t,n){var r=$(n),i=r.getElement("tbody"),s=i.getChildren(),o=$(e).getParent("td"),u=o.getParent("tr"),a=u.getChildren(),f=0,l,c;for(var h=0;h<a.length;h++){if(a[h]==o)break;f++}Backend.getScrollOffset();switch(t){case"rcopy":var p=new Element("tr");for(var h=0;h<a.length;h++){var c=a[h].clone(!0).inject(p,"bottom");if(textarea=a[h].getFirst("textarea"))c.getFirst("textarea").value=textarea.value}p.inject(u,"after");break;case"rup":(l=u.getPrevious("tr"))?u.inject(l,"before"):u.inject(i,"bottom");break;case"rdown":(c=u.getNext("tr"))?u.inject(c,"after"):u.inject(i,"top");break;case"rdelete":s.length>1&&u.destroy();break;case"ccopy":for(var h=0;h<s.length;h++){var d=s[h].getChildren()[f],c=d.clone(!0).inject(d,"after");if(textarea=d.getFirst("textarea"))c.getFirst("textarea").value=textarea.value}break;case"cmovel":if(f>0)for(var h=0;h<s.length;h++){var d=s[h].getChildren()[f];d.inject(d.getPrevious(),"before")}else for(var h=0;h<s.length;h++){var d=s[h].getChildren()[f];d.inject(s[h].getLast(),"before")}break;case"cmover":if(f<a.length-2)for(var h=0;h<s.length;h++){var d=s[h].getChildren()[f];d.inject(d.getNext(),"after")}else for(var h=0;h<s.length;h++){var d=s[h].getChildren()[f];d.inject(s[h].getFirst(),"before")}break;case"cdelete":if(a.length>2)for(var h=0;h<s.length;h++)s[h].getChildren()[f].destroy()}Backend.tableWizardResort(i),Backend.tableWizardResize()},tableWizardResort:function(e){rows=e.getChildren();var t=1;for(var n=0;n<rows.length;n++){var r=rows[n].getChildren();for(var i=0;i<r.length;i++)if(textarea=r[i].getFirst("textarea"))textarea.set("tabindex",t++),textarea.name=textarea.name.replace(/\[[0-9]+\][[0-9]+\]/g,"["+n+"]["+i+"]")}},tableWizardResize:function(e){var t=Cookie.read("BE_CELL_SIZE");if(t==null&&e==null)return;if(e!=null){var t="";$$(".tl_tablewizard textarea").each(function(n){n.setStyle("width",(n.getStyle("width").toInt()*e).round().limit(142,284)),n.setStyle("height",(n.getStyle("height").toInt()*e).round().limit(66,132)),t==""&&(t=n.getStyle("width")+"|"+n.getStyle("height"))}),Cookie.write("BE_CELL_SIZE",t)}else if(t!=null){var n=t.split("|");$$(".tl_tablewizard textarea").each(function(e){e.setStyle("width",n[0]),e.setStyle("height",n[1])})}},moduleWizard:function(e,t,n){var r=$(n),i=r.getElement("tbody"),s=$(e).getParent("tr"),o=i.getChildren();Backend.getScrollOffset();switch(t){case"copy":var u=new Element("tr"),a=s.getChildren();for(var f=0;f<a.length;f++){var l=a[f].clone(!0).inject(u,"bottom");if(select=a[f].getFirst("select"))l.getFirst("select").value=select.value}u.inject(s,"after"),u.getElement(".chzn-container").destroy(),new Chosen(u.getElement("select.tl_select")),Stylect.convertSelects();break;case"up":(u=s.getPrevious("tr"))?s.inject(u,"before"):s.inject(i,"bottom");break;case"down":(u=s.getNext("tr"))?s.inject(u,"after"):s.inject(i,"top");break;case"delete":o.length>1&&s.destroy()}o=i.getChildren();var c=1;for(var f=0;f<o.length;f++){var a=o[f].getChildren();for(var h=0;h<a.length;h++)if(select=a[h].getFirst("select"))select.set("tabindex",c++),select.name=select.name.replace(/\[[0-9]+\]/g,"["+f+"]")}},optionsWizard:function(e,t,n){var r=$(n),i=r.getElement("tbody"),s=$(e).getParent("tr"),o=i.getChildren();Backend.getScrollOffset();switch(t){case"copy":var u=new Element("tr"),a=s.getChildren();for(var f=0;f<a.length;f++){var l=a[f].clone(!0).inject(u,"bottom");if(input=a[f].getFirst("input"))l.getFirst("input").value=input.value,input.type=="checkbox"&&(l.getFirst("input").checked=input.checked?"checked":"")}u.inject(s,"after");break;case"up":(u=s.getPrevious("tr"))?s.inject(u,"before"):s.inject(i,"bottom");break;case"down":(u=s.getNext("tr"))?s.inject(u,"after"):s.inject(i,"top");break;case"delete":o.length>1&&s.destroy()}o=i.getChildren();var c=1;for(var f=0;f<o.length;f++){var a=o[f].getChildren();for(var h=0;h<a.length;h++)if(input=a[h].getFirst("input"))input.set("tabindex",c++),input.name=input.name.replace(/\[[0-9]+\]/g,"["+f+"]"),input.type=="checkbox"&&(input.id=input.name.replace(/\[[0-9]+\]/g,"").replace(/\[/g,"_").replace(/\]/g,"")+"_"+f,input.getNext("label").set("for",input.id))}},keyValueWizard:function(e,t,n){var r=$(n),i=r.getElement("tbody"),s=$(e).getParent("tr"),o=i.getChildren();Backend.getScrollOffset();switch(t){case"copy":var u=new Element("tr"),a=s.getChildren();for(var f=0;f<a.length;f++){var l=a[f].clone(!0).inject(u,"bottom");if(input=a[f].getFirst("input"))l.getFirst().value=input.value}u.inject(s,"after");break;case"up":(u=s.getPrevious("tr"))?s.inject(u,"before"):s.inject(i,"bottom");break;case"down":(u=s.getNext("tr"))?s.inject(u,"after"):s.inject(i,"top");break;case"delete":o.length>1&&s.destroy()}o=i.getChildren();var c=1;for(var f=0;f<o.length;f++){var a=o[f].getChildren();for(var h=0;h<a.length;h++)if(input=first=a[h].getFirst("input"))input.set("tabindex",c++),input.name=input.name.replace(/\[[0-9]+\]/g,"["+f+"]")}},checkboxWizard:function(e,t,n){var r=$(n).getElement(".sortable"),i=$(e).getParent("span"),s;Backend.getScrollOffset();switch(t){case"up":(s=i.getPrevious("span"))?i.inject(s,"before"):i.inject(r,"bottom");break;case"down":(s=i.getNext("span"))?i.inject(s,"after"):i.inject(r,"top")}},metaWizard:function(e,t){var n=e.getParent("div").getElement("select");if(n.value=="")return;var r=$(t).getLast("li").clone(),i=r.getElement("span"),s=i.getElement("img");r.setProperty("data-language",n.value),i.set("text",n.options[n.selectedIndex].text+" "),s.inject(i,"bottom"),r.getElements("input").each(function(e){e.value="",e.name=e.name.replace(/\[[a-z]{2}(_[A-Z]{2})?\]/,"["+n.value+"]");var t=e.getPrevious("label"),r=parseInt(t.get("for").replace(/ctrl_[^_]+_/,""));t.set("for",t.get("for").replace(r,r+1)),e.id=t.get("for")}),r.className=r.className=="even"?"odd":"even",r.inject($(t),"bottom"),e.getParent("div").getElement('input[type="button"]').setProperty("disabled",!0),n.options[n.selectedIndex].setProperty("disabled",!0),n.value="",n.fireEvent("liszt:updated")},metaDelete:function(e){var t=e.getParent("li"),n=e.getParent("div").getElement("select");t.getPrevious()===null&&t.getNext()===null?t.getElements("input").each(function(e){e.value=""}):(n.getElement("option[value="+t.getProperty("data-language")+"]").removeProperty("disabled"),t.destroy(),n.fireEvent("liszt:updated")),$$("div.tip-wrap").destroy()},toggleAddLanguageButton:function(e){var t=e.getParent("div").getElement('input[type="button"]');e.value!=""?t.removeProperty("disabled"):t.setProperty("disabled",!0)},updateModuleLink:function(e){var t=e.getParent("td").getNext("td"),n=t.getElement("a.module_link");n.href=n.href.replace(/id=[0-9]+/,"id="+e.value),e.value>0?(t.getElement("a.module_link").setStyle("display","inline"),t.getElement("img.module_image").setStyle("display","none")):(t.getElement("a.module_link").setStyle("display","none"),t.getElement("img.module_image").setStyle("display","inline"))}};document.addEvent("mousedown",function(e){Backend.getMousePosition(e)}),window.addEvent("domready",function(){$(document.body).addClass("js"),Elements.chosen!=undefined&&$$("select.tl_chosen").chosen(),$$("textarea.monospace").each(function(e){Backend.toggleWrap(e)}),Backend.collapsePalettes(),Backend.addInteractiveHelp(),Backend.addColorPicker(),Backend.makeWizardsSortable()}),window.addEvent("load",function(){Backend.limitPreviewHeight()}),window.addEvent("ajax_change",function(){Elements.chosen!=undefined&&$$("select.tl_chosen").filter(function(e){return e.getStyle("display")!="none"}).chosen(),Backend.addInteractiveHelp(),Backend.makeWizardsSortable()});var TinyCallback={getScrollOffset:function(e){tinymce.dom.Event.add(tinymce.isGecko?e.getDoc():e.getWin(),"focus",function(){Backend.getScrollOffset()})}};