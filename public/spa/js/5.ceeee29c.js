(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticStyle:{"background-color":"#734f96"},attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",{staticStyle:{color:"white"}},[e._v("\n       CB\n      ")]),a("div",[a("q-btn",{attrs:{color:"white",flat:"",icon:"account_circle",label:"Login Admin"},on:{click:function(t){e.login_admin=!0}}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"white"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n      Items\n      ")]),e._l(e.essentialLinks,(function(t){return a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{top:"",avatar:""}},[a("q-avatar",{attrs:{color:"white",outlined:"","text-color":"grey",icon:"eco"}})],1),a("q-item-section",[a("q-item-label",{staticStyle:{color:"#734f96","font-size":"20px"}},[e._v(e._s(t.title))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[e._v(e._s(t.caption))])],1),a("q-item-section",{attrs:{side:"",top:""}})],1)}))],2)],1),a("q-page-container",[a("router-view")],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.login_admin,callback:function(t){e.login_admin=t},expression:"login_admin"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-input",{staticStyle:{"margin-bottom":"10px",width:"100%"},attrs:{type:"text",label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("q-input",{staticStyle:{"margin-bottom":"10px",width:"100%"},attrs:{type:"text",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Turn on Wifi",color:"primary"}})],1)],1)],1)],1)},n=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(o),c=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"MainLayout",data:function(){return{leftDrawerOpen:!1,login_admin:!1}},computed:s({},Object(c["b"])(["essentialLinks"]))},u=p,b=a("2877"),d=a("eebe"),f=a.n(d),m=a("4d5a"),w=a("e359"),v=a("65c6"),q=a("9c40"),y=a("6ac5"),O=a("9404"),g=a("1c1c"),Q=a("0170"),h=a("66e5"),_=a("4074"),j=a("cb32"),k=a("0016"),x=a("09e3"),D=a("24e8"),P=a("f09f"),C=a("a370"),S=a("27f9"),L=a("4b7e"),I=a("7f67"),T=Object(b["a"])(u,r,n,!1,null,null,null);t["default"]=T.exports;f()(T,"components",{QLayout:m["a"],QHeader:w["a"],QToolbar:v["a"],QBtn:q["a"],QToolbarTitle:y["a"],QDrawer:O["a"],QList:g["a"],QItemLabel:Q["a"],QItem:h["a"],QItemSection:_["a"],QAvatar:j["a"],QIcon:k["a"],QPageContainer:x["a"],QDialog:D["a"],QCard:P["a"],QCardSection:C["a"],QInput:S["a"],QCardActions:L["a"]}),f()(T,"directives",{ClosePopup:I["a"]})}}]);