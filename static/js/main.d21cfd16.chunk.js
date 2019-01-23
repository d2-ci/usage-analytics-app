(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){e.exports=t(326)},110:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},287:function(e,a,t){},291:function(e,a,t){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(95),s=t.n(l),c=(t(110),t(1)),o=t.n(c),i=t(6),u=t(102),v=t.n(u),d=t(21),b=t(97),g=(t(115),"LOADING"),E="READY",h="ERROR",m="APP_LOAD_SUCCESS",p="APP_LOAD_ERROR",f="USAGE_DATA_REQUESTED",y="USAGE_DATA_RECEIVED",D="USAGE_DATA_ERRORED",O="FILTER_UPDATED";var A,S=t(4),k=t(17),j="FAVORITE_VIEWS",C="TOP_FAVORITES",T=(A={},Object(S.a)(A,j,{value:j,label:o.a.t("Favorite views"),subtitle:o.a.t("Number of times users looked at analysis favorites")}),Object(S.a)(A,"FAVORITES_SAVED",{value:"FAVORITES_SAVED",label:o.a.t("Favorites saved"),subtitle:o.a.t("Number of analysis favorites created by users")}),Object(S.a)(A,"USERS",{value:"USERS",label:o.a.t("Users"),subtitle:o.a.t("Number of users in the system")}),Object(S.a)(A,C,{value:C,label:o.a.t("Top favorites")}),Object(S.a)(A,"DATA_VALUES",{value:"DATA_VALUES",label:o.a.t("Data values"),subtitle:o.a.t("Number of data values saved in the system")}),A),w=[T.FAVORITE_VIEWS,T.FAVORITES_SAVED,T.USERS,T.TOP_FAVORITES,T.DATA_VALUES],R="DAY",V="WEEK",N="MONTH",_="YEAR",U=[{value:R,label:o.a.t("Day")},{value:V,label:o.a.t("Week")},{value:N,label:o.a.t("Month")},{value:_,label:o.a.t("Year")}],F="SUM",L=[{value:F,label:o.a.t("Sum")},{value:"AVERAGE",label:o.a.t("Average")}],I="TOTAL",P=[{value:"ALL",label:o.a.t("All")},{value:I,label:o.a.t("Total")}],M="CHART_VIEW",x=[{value:M,label:o.a.t("Chart")},{value:"MAP_VIEW",label:o.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:o.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:o.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:o.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:o.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:o.a.t("Data set report")}],W="ASC",z=[{value:W,label:o.a.t("Ascending")},{value:"DESC",label:o.a.t("Descending")}];function G(e){var a=e.getFullYear(),t=""+(e.getMonth()+1),n=""+e.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")}var J=[b.a];var H=Object(d.c)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case m:return E;case p:return h;default:return e}},locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case m:return n.locale;default:return e}},usageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case f:return g;case m:return n.usageData;case y:return n;case D:return h;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:j,startDate:G(a),endDate:G(e),interval:V,aggregationLevel:F,chartType:I,eventType:M,pageSize:25,sortOrder:W}}(new Date),a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case O:return Object(k.a)({},e,Object(S.a)({},n.key,n.value));default:return e}}}),Y=Object(d.d)(H,d.a.apply(void 0,J)),B=t(44),K=t(45),Q=t(48),$=t(46),q=t(47),X=t(19),Z=t.n(X),ee=t(32),ae=t.n(ee),te=t(67),ne=t(103),re=t(63),le=t(62),se=t(61),ce=t.n(se),oe=t(98);ce.a.locale("en"),o.a.addResources("en","usage-analytics-app",oe),o.a.setDefaultNamespace("usage-analytics-app"),o.a.changeLanguage("en");var ie=o.a;var ue={initApp:ve,getUsageData:de,getFavorites:function(e){var a=e.eventType,t=e.pageSize,n=e.sortOrder,r="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(n,"&_=").concat(Date.now());return ue.getJSON("dataStatistics/favorites?".concat(r))},getDataStatistics:function(e){var a=e.startDate,t=e.endDate,n=e.interval,r="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(n,"&_=").concat(Date.now());return ue.getJSON("dataStatistics?".concat(r))},getUserLocale:function(){return ue.getJSON("userSettings").then(function(e){return e.keyUiLocale})},getJSON:function(e){return Object(re.get)(e).then(function(e){return e.json()}).then(be)},handleJSON:be};function ve(e){var a=e.filter;return Promise.all([ue.getUserLocale(),ue.getUsageData(a)]).then(function(e){var a=Object(ne.a)(e,2),t=a[0],n=a[1];return function(e){ie.changeLanguage(e),Object(le.setDocDir)(e)}(t),{usageData:n,locale:t}})}function de(e){return e.category===C?ue.getFavorites(e):ue.getDataStatistics(e)}function be(e){if("ERROR"===e.status)throw new Error(e.message);return e}var ge=function(e,a){return function(t,n){return t(Ee(e,a)),he(n().filter,t)}},Ee=function(e,a){return pe(O,{key:e,value:a})};function he(e,a){return me.apply(this,arguments)}function me(){return(me=Object(te.a)(ae.a.mark(function e(a,t){var n;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe(f)),e.prev=1,e.next=4,de(a);case 4:n=e.sent,t(pe(y,n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t(pe(D,e.t0));case 12:case"end":return e.stop()}},e,this,[[1,8]])}))).apply(this,arguments)}function pe(e,a){return{type:e,payload:a}}t(118);var fe=function(e){var a=e.message;return r.a.createElement("div",{className:"uaa-error"},a)},ye=t(64),De=t.n(ye);t(119);var Oe,Ae=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"}],Se=(Oe=De.a,function(e){return r.a.createElement("div",{className:"uaa-fieldwrap"},r.a.createElement(Oe,e))}),ke=t(104),je=t(20),Ce=t(99),Te=t.n(Ce),we=(t(147),o.a.t("Please use the format yyyy-mm-dd")),Re=o.a.t("End date is before start date"),Ve=o.a.t("Start date is after end date"),Ne=function(e){function a(e){var t;return Object(B.a)(this,a),(t=Object(Q.a)(this,Object($.a)(a).call(this,e))).state={startDateError:null,endDateError:null},t.onStartDateChange=t.onStartDateChange.bind(Object(je.a)(Object(je.a)(t))),t.onEndDateChange=t.onEndDateChange.bind(Object(je.a)(Object(je.a)(t))),t.updateUsageData=Te()(e.updateUsageData,250),t}return Object(q.a)(a,e),Object(K.a)(a,[{key:"onStartDateChange",value:function(e){this.onChange("startDate",e.target.value)}},{key:"onEndDateChange",value:function(e){this.onChange("endDate",e.target.value)}},{key:"onChange",value:function(e,a){var t,n=this.props,r=n.updateFilter,l=(n.updateUsageData,Object(ke.a)(n,["updateFilter","updateUsageData"])),s="".concat(e,"Error"),c="".concat("startDate"===e?"endDate":"startDate","Error"),o=this.getError(Object(k.a)({},l,Object(S.a)({},e,a)),e),i=this.state[c]===we?we:null;this.state[s]!==o&&this.setState((t={},Object(S.a)(t,s,o),Object(S.a)(t,c,i),t));r(e,a),o||this.updateUsageData()}},{key:"getError",value:function(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.endDate<e.startDate?"startDate"===a?Ve:Re:null:we}},{key:"render",value:function(){var e=this.props,a=e.startDate,t=e.endDate,n=this.state,l=n.startDateError,s=n.endDateError;return r.a.createElement("div",{className:"uaa-date-range"},r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,o.a.t("Start Date")),r.a.createElement("input",{className:"startDate",type:"date",value:a,onChange:this.onStartDateChange}),l&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("startDate")},l)),r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,o.a.t("End date")),r.a.createElement("input",{className:"endDate",type:"date",value:t,onChange:this.onEndDateChange}),s&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("endDate")},s)))}}]),a}(n.Component),_e=Object(i.b)(We("category"),{onChange:function(e,a){return function(t,n){var r=n().filter,l=r.category;if(t(Ee(e,a)),function(e,a){return e!==a&&(a===C&&e!==C||e===C&&a!==C)}(l,a))return he(Object(k.a)({},r,{category:a}),t)}}})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"category",list:w,label:o.a.t("Category"),kind:"filled"}))}),Ue=Object(i.b)(function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}},{updateFilter:Ee,updateUsageData:function(){return function(e,a){return he(a().filter,e)}}})(Ne),Fe=Object(i.b)(We("interval"),{onChange:ge})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"interval",list:U,label:o.a.t("Interval"),kind:"filled"}))}),Le=Object(i.b)(We("aggregationLevel"),{onChange:Ee})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"aggregationLevel",list:L,label:o.a.t("Aggregation Level"),kind:"filled"}))}),Ie=Object(i.b)(We("chartType"),{onChange:Ee})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"chartType",list:P,label:o.a.t("Chart Type"),kind:"filled"}))}),Pe=Object(i.b)(We("eventType"),{onChange:ge})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"eventType",list:x,label:o.a.t("Event Type"),kind:"filled"}))}),Me=Object(i.b)(We("pageSize"),{onChange:ge})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"pageSize",list:Ae,label:o.a.t("Page Size"),kind:"filled"}))}),xe=Object(i.b)(We("sortOrder"),{onChange:ge})(function(e){return r.a.createElement(Se,Object.assign({},e,{name:"sortOrder",list:z,label:o.a.t("Sort Order"),kind:"filled"}))});function We(e){return function(a){return{value:a.filter[e]}}}t(148);var ze,Ge,Je,He,Ye,Be,Ke=Object(i.b)(function(e){var a=e.filter.category;return{showDateFields:a!==C,showTopFavoritesFields:a===C,showFavoriteViewsFields:a===j}})(function(e){var a=e.showDateFields,t=e.showFavoriteViewsFields,l=e.showTopFavoritesFields;return r.a.createElement("aside",{className:"uaa-filter-sidebar"},r.a.createElement("h1",{className:"uaa-app-header"},o.a.t("Usage Analytics")),r.a.createElement(_e,null),a&&r.a.createElement(n.Fragment,null,r.a.createElement(Ue,null),r.a.createElement(Fe,null)),t&&r.a.createElement(n.Fragment,null,r.a.createElement(Le,null),r.a.createElement(Ie,null)),l&&r.a.createElement(n.Fragment,null,r.a.createElement(Pe,null),r.a.createElement(Me,null),r.a.createElement(xe,null)))}),Qe=t(100),$e={key:"date",label:o.a.t("Date")},qe={key:"mapViews",label:o.a.t("Map")},Xe={key:"chartViews",label:o.a.t("Chart")},Ze={key:"pivotTableViews",label:o.a.t("Pivot Table")},ea={key:"eventReportViews",label:o.a.t("Event Report")},aa={key:"eventChartViews",label:o.a.t("Event Chart")},ta={key:"dashboardViews",label:o.a.t("Dashboard")},na={key:"dataSetReportViews",label:o.a.t("Data Set Report")},ra={key:"totalViews",label:o.a.t("Total")},la={key:"averageMapViews",label:o.a.t("Average Map")},sa={key:"averageChartViews",label:o.a.t("Average Chart")},ca={key:"averagePivotTableViews",label:o.a.t("Average Pivot Table")},oa={key:"averageEventReportViews",label:o.a.t("Average Event Report")},ia={key:"averageEventChartViews",label:o.a.t("Average Event Chart")},ua={key:"averageDashboardViews",label:o.a.t("Average Dashboard")},va={key:"averageViews",label:o.a.t("Average")},da={key:"savedMaps",label:o.a.t("Maps")},ba={key:"savedCharts",label:o.a.t("Charts")},ga={key:"savedPivotTables",label:o.a.t("Pivot Tables")},Ea={key:"savedEventReports",label:o.a.t("Event Reports")},ha={key:"savedEventCharts",label:o.a.t("Event Charts")},ma={key:"savedDashboards",label:o.a.t("Dashboards")},pa={key:"savedIndicators",label:o.a.t("Indicators")},fa={key:"activeUsers",label:o.a.t("Active Users")},ya={key:"users",label:o.a.t("Total Users")},Da={key:"position",label:o.a.t("Position")},Oa={key:"name",label:o.a.t("Name")},Aa={key:"views",label:o.a.t("Views")},Sa={key:"id",label:o.a.t("ID")},ka={key:"created",label:o.a.t("Created")},ja={key:"savedDataValues",label:o.a.t("Data Values")},Ca=[qe,Xe,Ze,ea,aa,ta,na],Ta=[la,sa,ca,oa,ia,ua],wa=[da,ba,ga,Ea,ha,ma,pa],Ra=[fa,ya],Va=(Ge={},Object(S.a)(Ge,j,(ze={},Object(S.a)(ze,F,[$e].concat(Ca,[ra])),Object(S.a)(ze,"AVERAGE",[$e].concat(Ta,[va])),ze)),Object(S.a)(Ge,"FAVORITES_SAVED",[$e].concat(wa)),Object(S.a)(Ge,"USERS",[$e].concat(Ra)),Object(S.a)(Ge,C,[Da,Oa,Aa,Sa,ka]),Object(S.a)(Ge,"DATA_VALUES",[$e,ja]),Ge),Na=(Be={},Object(S.a)(Be,j,(Ye={},Object(S.a)(Ye,F,(Je={},Object(S.a)(Je,"ALL",Ca),Object(S.a)(Je,I,[ra]),Je)),Object(S.a)(Ye,"AVERAGE",(He={},Object(S.a)(He,"ALL",Ta),Object(S.a)(He,I,[va]),He)),Ye)),Object(S.a)(Be,"FAVORITES_SAVED",wa),Object(S.a)(Be,"USERS",Ra),Object(S.a)(Be,"DATA_VALUES",[ja]),Be),_a={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},Ua=o.a.t("Week");function Fa(e,a){var t=e.year,n=e.month,r=e.week,l=e.day;switch(a){case _:return t;case N:return La("".concat(t,"-").concat(n),_a.yyyymm);case V:return"".concat(Ua," ").concat(r," / ").concat(t);case R:default:return La("".concat(t,"-").concat(n,"-").concat(l))}}function La(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_a.yyyymmdd,t=Y.getState().locale||"en",n=new Date(e);return new Intl.DateTimeFormat(t,a).format(n)}var Ia=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Pa={animation:{duration:180},legend:{position:"bottom"},responsive:!0,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:o.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},Ma={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0},xa=1;function Wa(e,a){for(var t=e.aggregationLevel,n=e.category,r=e.chartType,l=e.interval,s=[],c=[],o=T[n].label,i=T[n].subtitle,u=xa,v=null,d=n===j?Na[n][t][r]:Na[n],b=a.length,g=d.length,E=0;E<b;E++){var h=a[E];s.push(Fa(h,l));for(var m=0;m<g;m++){var p=d[m];0===E&&c.push(Object(k.a)({},Ma,{label:p.label,data:[],borderColor:Ia[m]}));var f=h[p.key];f>u&&(u=f),(null===v||f<v)&&(v=f),c[m].data.push(f)}}return Pa.scales.yAxes[0].ticks.suggestedMax=u,Pa.scales.yAxes[0].ticks.suggestedMin=v,{data:{labels:s,datasets:c},options:Pa,title:o,subtitle:i}}t(287);var za="uua-data-container uua-chart-container",Ga=" uua-data-container--loading";var Ja=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=t.category===C||a===h,r=a===g;return{shouldHide:n,loading:r,chartConfig:n||r?null:Wa(t,a)}})(function(e){var a,t=e.shouldHide,l=e.loading,s=e.chartConfig;if(t)return null;if(l)a=r.a.createElement(X.CircularProgress,{overlay:!0});else{var c=s.options,o=s.data,i=s.title,u=s.subtitle;a=r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"uaa-chart-title"},i),r.a.createElement("h6",{className:"uaa-chart-subtitle"},u),r.a.createElement(Qe.a,{data:o,options:c}))}var v=l?za+Ga:za;return r.a.createElement("div",{className:v},a)}),Ha=(t(291),"uua-data-container"),Ya=" uua-data-container--loading",Ba=function(e){var a=e.headers;return r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("th",{key:"h-".concat(a)},e)})))},Ka=function(e){var a=e.rows;return r.a.createElement("tbody",null,a.map(function(e,a){return r.a.createElement(Qa,{key:"row-".concat(a),cells:e})}))},Qa=function(e){var a=e.cells;return r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("td",{key:"cell-".concat(a)},e)}))};function $a(e,a){var t=e.aggregationLevel,n=e.category,r=e.interval,l=n===j?Va[n][t]:Va[n];return{headers:l.map(function(e){return e.label}),rows:a.map(function(e){return l.map(function(a){return a.key===$e.key?Fa(e,r):a.key===ka.key?La(e[a.key]):e[a.key]})})}}var qa=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=a===h,r=a===g;return{error:n,loading:r,tableData:r||n?null:$a(t,a)}})(function(e){var a,t=e.error,n=e.loading,l=e.tableData;if(t)a=r.a.createElement(fe,{message:o.a.t("There was an error retrieving the usage analytics data")});else if(n)a=r.a.createElement(X.CircularProgress,{overlay:!0});else{var s=l.headers,c=l.rows;a=r.a.createElement("table",{className:"uaa-data-table"},r.a.createElement(Ba,{headers:s}),r.a.createElement(Ka,{rows:c}))}var i=n?Ha+Ya:Ha;return r.a.createElement("div",{className:i},a)}),Xa=function(e){function a(){return Object(B.a)(this,a),Object(Q.a)(this,Object($.a)(a).apply(this,arguments))}return Object(q.a)(a,e),Object(K.a)(a,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=this.props.appStatus;return e===g?r.a.createElement(Z.a,{overlay:!0,size:"large"}):e===h?r.a.createElement(fe,{message:o.a.t("ERROR: Could not load app")}):r.a.createElement("main",{className:"uaa-container"},r.a.createElement(Ke,null),r.a.createElement("section",{className:"uaa-content"},r.a.createElement(Ja,null),r.a.createElement(qa,null)))}}]),a}(n.Component),Za=Object(i.b)(function(e){return{appStatus:e.appStatus}},{initApp:function(){return function(){var e=Object(te.a)(ae.a.mark(function e(a,t){var n;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(t());case 3:n=e.sent,a(pe(m,n)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a(pe(p,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}()}})(Xa);t(292),t(293),t(8);var et=function(){return r.a.createElement(i.a,{store:Y},r.a.createElement(v.a,{appName:o.a.t("Usage Analytics")}),r.a.createElement(Za,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(et,null),document.getElementById("uaa-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"",Category:"",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"",Sum:"",Average:"","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"","Number of users in the system":"","Top favorites":"","Data values":"","Number of data values saved in the system":"",All:"",Total:"",Chart:"",Map:"","Report table":"","Event report":"","Event chart":"",Dashboard:"","Data set report":"",Day:"",Week:"",Month:"",Year:"",Date:"","Pivot Table":"","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"",Charts:"","Pivot Tables":"","Event Reports":"","Event Charts":"",Dashboards:"",Indicators:"","Active Users":"","Total Users":"",Position:"",Name:"",Views:"",ID:"",Created:"","Data Values":"",Ascending:"",Descending:""}}},[[105,1,2]]]);
//# sourceMappingURL=main.d21cfd16.chunk.js.map