(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"",Category:"",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"",Average:"","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"","Number of users in the system":"","Top favorites":"","Data values":"","Number of data values saved in the system":"",All:"",Total:"",Chart:"",Map:"","Report table":"","Event report":"","Event chart":"",Dashboard:"","Data set report":"",Day:"",Week:"",Month:"",Year:"",Date:"","Pivot Table":"","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"",Charts:"","Pivot Tables":"","Event Reports":"","Event Charts":"",Dashboards:"",Indicators:"","Active Users":"","Total Users":"",Position:"",Name:"",Views:"",ID:"",Created:"","Data Values":"",Ascending:"",Descending:""}},143:function(e,a,t){e.exports=t(341)},232:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},245:function(e,a,t){},246:function(e,a,t){},338:function(e,a,t){},339:function(e,a,t){},341:function(e,a,t){"use strict";t.r(a);t(144),t(150),t(151),t(152),t(108),t(160),t(162),t(164),t(165),t(166),t(167),t(168),t(170),t(172),t(173),t(174),t(175),t(176),t(177),t(178),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(188),t(189);var n=t(0),r=t.n(n),l=t(66),o=t.n(l),s=(t(232),t(3)),c=t.n(s),i=t(10),u=t(38),v=t(137),b=(t(237),"LOADING"),d="READY",m="ERROR",E="APP_LOAD_SUCCESS",p="APP_LOAD_ERROR",g="USAGE_DATA_REQUESTED",h="USAGE_DATA_RECEIVED",f="USAGE_DATA_ERRORED",y="FILTER_UPDATED";var D,O=t(5),A=t(27),T="FAVORITE_VIEWS",w="TOP_FAVORITES",S=(D={},Object(O.a)(D,T,{value:T,label:c.a.t("Favorite views"),subtitle:c.a.t("Number of times users looked at analysis favorites")}),Object(O.a)(D,"FAVORITES_SAVED",{value:"FAVORITES_SAVED",label:c.a.t("Favorites saved"),subtitle:c.a.t("Number of analysis favorites created by users")}),Object(O.a)(D,"USERS",{value:"USERS",label:c.a.t("Users"),subtitle:c.a.t("Number of users in the system")}),Object(O.a)(D,w,{value:w,label:c.a.t("Top favorites")}),Object(O.a)(D,"DATA_VALUES",{value:"DATA_VALUES",label:c.a.t("Data values"),subtitle:c.a.t("Number of data values saved in the system")}),D),j=[S.FAVORITE_VIEWS,S.FAVORITES_SAVED,S.USERS,S.TOP_FAVORITES,S.DATA_VALUES],k="DAY",C="WEEK",R="MONTH",V="YEAR",_=[{value:k,label:c.a.t("Day")},{value:C,label:c.a.t("Week")},{value:R,label:c.a.t("Month")},{value:V,label:c.a.t("Year")}],N="SUM",U=[{value:N,label:c.a.t("Sum")},{value:"AVERAGE",label:c.a.t("Average")}],F="ALL",I=[{value:F,label:c.a.t("All")},{value:"TOTAL",label:c.a.t("Total")}],L="CHART_VIEW",P=[{value:L,label:c.a.t("Chart")},{value:"MAP_VIEW",label:c.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:c.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:c.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:c.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:c.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:c.a.t("Data set report")}],M="ASC",x=[{value:M,label:c.a.t("Ascending")},{value:"DESC",label:c.a.t("Descending")}];function W(e){var a=e.getFullYear(),t=""+(e.getMonth()+1),n=""+e.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")}var z=[v.a];var G=Object(u.c)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;switch((arguments.length>1?arguments[1]:void 0).type){case E:return d;case p:return m;default:return e}},locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case E:return n.locale;default:return e}},usageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case g:return b;case E:return n.usageData;case h:return n;case f:return m;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:T,startDate:W(a),endDate:W(e),interval:C,aggregationLevel:N,chartType:F,eventType:L,pageSize:25,sortOrder:M}}(new Date),a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case y:return Object(A.a)({},e,Object(O.a)({},n.key,n.value));default:return e}}}),H=Object(u.d)(G,u.a.apply(void 0,z)),Y=t(11),B=t(16),J=t(13),K=t(9),Q=t(12),$=t(350),q=t(18),X=t.n(q),Z=t(32),ee=t(68),ae=t(97),te=t.n(ae),ne=t(138);te.a.locale("en"),c.a.addResources("en","usage-analytics-app",ne),c.a.setDefaultNamespace("usage-analytics-app"),c.a.changeLanguage("en");var re=c.a;var le="".concat("..","/api"),oe={method:"GET",credentials:"include"};function se(e){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe;return e?fetch("".concat(le,"/").concat(e),a).then(function(e){if(e.ok)return e;throw new Error(e.statusText)}):Promise.reject(new Error("A path must be passed"))}(e).then(function(e){return e.json()}).then(function(e){if("ERROR"===e.status)throw new Error(e.message);return e})}function ce(e){return e.category===w?function(e){var a=e.eventType,t=e.pageSize,n=e.sortOrder,r="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(n,"&_=").concat(Date.now());return se("dataStatistics/favorites?".concat(r))}(e):function(e){var a=e.startDate,t=e.endDate,n=e.interval,r="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(n,"&_=").concat(Date.now());return se("dataStatistics?".concat(r))}(e)}function ie(e){var a=e.filter;return Promise.all([se("userSettings").then(function(e){return e.keyUiLocale}),ce(a)]).then(function(e){var a=Object(ee.a)(e,2),t=a[0],n=a[1];return function(e){re.changeLanguage(e)}(t),{usageData:n,locale:t}})}var ue=function(e){return function(a,t){return a(ve(e.target.name,e.target.value)),be(t().filter,a)}},ve=function(e,a){return me(y,{key:e,value:a})};function be(e,a){return de.apply(this,arguments)}function de(){return(de=Object(Z.a)(X.a.mark(function e(a,t){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(me(g)),e.prev=1,e.next=4,ce(a);case 4:n=e.sent,t(me(h,n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t(me(f,e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function me(e,a){return{type:e,payload:a}}t(239);var Ee=function(e){var a=e.message;return r.a.createElement("div",{className:"uaa-error"},a)},pe=t(349);t(240);var ge,he=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"}],fe=function(e){return Object(A.a)({},e,Object(O.a)({},"filled",!0))},ye=(ge=pe.a,function(e){return r.a.createElement("div",{className:"uaa-fieldwrap"},r.a.createElement(ge,e))}),De=t(142),Oe=t(7),Ae=t(139),Te=t.n(Ae),we=(t(245),c.a.t("Please use the format yyyy-mm-dd")),Se=c.a.t("End date is before start date"),je=c.a.t("Start date is after end date"),ke=function(e){function a(e){var t;return Object(Y.a)(this,a),(t=Object(J.a)(this,Object(K.a)(a).call(this,e))).state={startDateError:null,endDateError:null},t.onStartDateChange=t.onStartDateChange.bind(Object(Oe.a)(t)),t.onEndDateChange=t.onEndDateChange.bind(Object(Oe.a)(t)),t.updateUsageData=Te()(e.updateUsageData,250),t}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"onStartDateChange",value:function(e){this.onChange("startDate",e.target.value)}},{key:"onEndDateChange",value:function(e){this.onChange("endDate",e.target.value)}},{key:"onChange",value:function(e,a){var t,n=this.props,r=n.updateFilter,l=(n.updateUsageData,Object(De.a)(n,["updateFilter","updateUsageData"])),o="".concat(e,"Error"),s="".concat("startDate"===e?"endDate":"startDate","Error"),c=this.getError(Object(A.a)({},l,Object(O.a)({},e,a)),e),i=this.state[s]===we?we:null;this.state[o]!==c&&this.setState((t={},Object(O.a)(t,o,c),Object(O.a)(t,s,i),t));r(e,a),c||this.updateUsageData()}},{key:"getError",value:function(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.endDate<e.startDate?"startDate"===a?je:Se:null:we}},{key:"render",value:function(){var e=this.props,a=e.startDate,t=e.endDate,n=this.state,l=n.startDateError,o=n.endDateError;return r.a.createElement("div",{className:"uaa-date-range"},r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,c.a.t("Start Date")),r.a.createElement("input",{className:"startDate",type:"date",value:a,onChange:this.onStartDateChange}),l&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("startDate")},l)),r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,c.a.t("End date")),r.a.createElement("input",{className:"endDate",type:"date",value:t,onChange:this.onEndDateChange}),o&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("endDate")},o)))}}]),a}(n.Component),Ce=Object(i.b)(Le("category"),{onChange:function(e){return function(a,t){var n=t().filter,r=n.category;if(a(ve(e.target.name,e.target.value)),function(e,a){return e!==a&&(a===w&&e!==w||e===w&&a!==w)}(r,e.target.value))return be(Object(A.a)({},n,{category:e.target.value}),a)}}})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"category",label:c.a.t("Category")}),j.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Re=Object(i.b)(function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}},{updateFilter:ve,updateUsageData:function(){return function(e,a){return be(a().filter,e)}}})(ke),Ve=Object(i.b)(Le("interval"),{onChange:ue})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"interval",label:c.a.t("Interval")}),_.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),_e=Object(i.b)(Le("aggregationLevel"),{onChange:ve})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"aggregationLevel",label:c.a.t("Aggregation Level")}),U.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ne=Object(i.b)(Le("chartType"),{onChange:ve})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"chartType",label:c.a.t("Chart Type")}),I.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ue=Object(i.b)(Le("eventType"),{onChange:ue})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"eventType",label:c.a.t("Event Type")}),P.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Fe=Object(i.b)(Le("pageSize"),{onChange:ue})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"pageSize",label:c.a.t("Page Size")}),he.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ie=Object(i.b)(Le("sortOrder"),{onChange:ue})(function(e){return r.a.createElement(ye,Object.assign({},fe(e),{name:"sortOrder",label:c.a.t("Sort Order")}),x.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))});function Le(e){return function(a){return{value:a.filter[e]}}}t(246);var Pe,Me,xe,We,ze,Ge,He=Object(i.b)(function(e){var a=e.filter.category;return{showDateFields:a!==w,showTopFavoritesFields:a===w,showFavoriteViewsFields:a===T}})(function(e){var a=e.showDateFields,t=e.showFavoriteViewsFields,l=e.showTopFavoritesFields;return r.a.createElement("aside",{className:"uaa-filter-sidebar"},r.a.createElement("h1",{className:"uaa-app-header"},c.a.t("Usage Analytics")),r.a.createElement(Ce,null),a&&r.a.createElement(n.Fragment,null,r.a.createElement(Re,null),r.a.createElement(Ve,null)),t&&r.a.createElement(n.Fragment,null,r.a.createElement(_e,null),r.a.createElement(Ne,null)),l&&r.a.createElement(n.Fragment,null,r.a.createElement(Ue,null),r.a.createElement(Fe,null),r.a.createElement(Ie,null)))}),Ye=t(140),Be={key:"date",label:c.a.t("Date")},Je={key:"mapViews",label:c.a.t("Map")},Ke={key:"chartViews",label:c.a.t("Chart")},Qe={key:"pivotTableViews",label:c.a.t("Pivot Table")},$e={key:"eventReportViews",label:c.a.t("Event Report")},qe={key:"eventChartViews",label:c.a.t("Event Chart")},Xe={key:"dashboardViews",label:c.a.t("Dashboard")},Ze={key:"dataSetReportViews",label:c.a.t("Data Set Report")},ea={key:"totalViews",label:c.a.t("Total")},aa={key:"averageMapViews",label:c.a.t("Average Map")},ta={key:"averageChartViews",label:c.a.t("Average Chart")},na={key:"averagePivotTableViews",label:c.a.t("Average Pivot Table")},ra={key:"averageEventReportViews",label:c.a.t("Average Event Report")},la={key:"averageEventChartViews",label:c.a.t("Average Event Chart")},oa={key:"averageDashboardViews",label:c.a.t("Average Dashboard")},sa={key:"averageViews",label:c.a.t("Average")},ca={key:"savedMaps",label:c.a.t("Maps")},ia={key:"savedCharts",label:c.a.t("Charts")},ua={key:"savedPivotTables",label:c.a.t("Pivot Tables")},va={key:"savedEventReports",label:c.a.t("Event Reports")},ba={key:"savedEventCharts",label:c.a.t("Event Charts")},da={key:"savedDashboards",label:c.a.t("Dashboards")},ma={key:"savedIndicators",label:c.a.t("Indicators")},Ea={key:"activeUsers",label:c.a.t("Active Users")},pa={key:"users",label:c.a.t("Total Users")},ga={key:"position",label:c.a.t("Position")},ha={key:"name",label:c.a.t("Name")},fa={key:"views",label:c.a.t("Views")},ya={key:"id",label:c.a.t("ID")},Da={key:"created",label:c.a.t("Created")},Oa={key:"savedDataValues",label:c.a.t("Data Values")},Aa=[Je,Ke,Qe,$e,qe,Xe,Ze],Ta=[aa,ta,na,ra,la,oa],wa=[ca,ia,ua,va,ba,da,ma],Sa=[Ea,pa],ja=(Me={},Object(O.a)(Me,T,(Pe={},Object(O.a)(Pe,N,[Be].concat(Aa,[ea])),Object(O.a)(Pe,"AVERAGE",[Be].concat(Ta,[sa])),Pe)),Object(O.a)(Me,"FAVORITES_SAVED",[Be].concat(wa)),Object(O.a)(Me,"USERS",[Be].concat(Sa)),Object(O.a)(Me,w,[ga,ha,fa,ya,Da]),Object(O.a)(Me,"DATA_VALUES",[Be,Oa]),Me),ka=(Ge={},Object(O.a)(Ge,T,(ze={},Object(O.a)(ze,N,(xe={},Object(O.a)(xe,F,Aa),Object(O.a)(xe,"TOTAL",[ea]),xe)),Object(O.a)(ze,"AVERAGE",(We={},Object(O.a)(We,F,Ta),Object(O.a)(We,"TOTAL",[sa]),We)),ze)),Object(O.a)(Ge,"FAVORITES_SAVED",wa),Object(O.a)(Ge,"USERS",Sa),Object(O.a)(Ge,"DATA_VALUES",[Oa]),Ge),Ca={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},Ra=c.a.t("Week");function Va(e,a){var t=e.year,n=e.month,r=e.week,l=e.day;switch(a){case V:return t;case R:return _a(t,n);case C:return"".concat(Ra," ").concat(r," / ").concat(t);case k:default:return _a(t,n,l)}}function _a(e,a,t){return Na(t?new Date(e,a-1,t):new Date(e,a-1),t?Ca.yyyymmdd:Ca.yyyymm)}function Na(e,a){var t=H.getState().locale||"en";return new Intl.DateTimeFormat(t,a).format(e)}var Ua=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Fa={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:c.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},Ia={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0},La=1;function Pa(e,a){for(var t=e.aggregationLevel,n=e.category,r=e.chartType,l=e.interval,o=[],s=[],c=S[n].label,i=S[n].subtitle,u=La,v=null,b=n===T?ka[n][t][r]:ka[n],d=a.length,m=b.length,E=0;E<d;E++){var p=a[E];o.push(Va(p,l));for(var g=0;g<m;g++){var h=b[g];0===E&&s.push(Object(A.a)({},Ia,{label:h.label,data:[],borderColor:Ua[g]}));var f=p[h.key];f>u&&(u=f),(null===v||f<v)&&(v=f),s[g].data.push(f)}}return Fa.scales.yAxes[0].ticks.suggestedMax=u,Fa.scales.yAxes[0].ticks.suggestedMin=v,Fa.onResize=Ma,{data:{labels:o,datasets:s},options:Fa,title:c,subtitle:i}}function Ma(e){e.resize()}t(338);var xa="uua-data-container uua-chart-container",Wa=" uua-data-container--loading";var za=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=t.category===w||a===m,r=a===b;return{shouldHide:n,loading:r,chartConfig:n||r?null:Pa(t,a)}})(function(e){var a,t=e.shouldHide,l=e.loading,o=e.chartConfig;if(t)return null;if(l)a=r.a.createElement($.a,{overlay:!0});else{var s=o.options,c=o.data,i=o.title,u=o.subtitle;a=r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"uaa-chart-title"},i),r.a.createElement("h6",{className:"uaa-chart-subtitle"},u),r.a.createElement("div",{className:"uaa-chart-wrap"},r.a.createElement(Ye.a,{data:c,options:s})))}var v=l?xa+Wa:xa;return r.a.createElement("div",{className:v},a)}),Ga=(t(339),"uua-data-container"),Ha=" uua-data-container--loading",Ya=function(e){var a=e.headers;return r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("th",{key:"h-".concat(a)},e)})))},Ba=function(e){var a=e.rows;return r.a.createElement("tbody",null,a.map(function(e,a){return r.a.createElement(Ja,{key:"row-".concat(a),cells:e})}))},Ja=function(e){var a=e.cells;return r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("td",{key:"cell-".concat(a)},e)}))};function Ka(e,a){var t=e.aggregationLevel,n=e.category,r=e.interval,l=n===T?ja[n][t]:ja[n];return{headers:l.map(function(e){return e.label}),rows:a.map(function(e){return l.map(function(a){return a.key===Be.key?Va(e,r):a.key===Da.key?(t=e[a.key],Na(new Date(t),Ca.yyyymmdd)):e[a.key];var t})})}}var Qa=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=a===m,r=a===b;return{error:n,loading:r,tableData:r||n?null:Ka(t,a)}})(function(e){var a,t=e.error,n=e.loading,l=e.tableData;if(t)a=r.a.createElement(Ee,{message:c.a.t("There was an error retrieving the usage analytics data")});else if(n)a=r.a.createElement($.a,{overlay:!0});else{var o=l.headers,s=l.rows;a=r.a.createElement("table",{className:"uaa-data-table"},r.a.createElement(Ya,{headers:o}),r.a.createElement(Ba,{rows:s}))}var i=n?Ga+Ha:Ga;return r.a.createElement("div",{className:i},a)}),$a=function(e){function a(){return Object(Y.a)(this,a),Object(J.a)(this,Object(K.a)(a).apply(this,arguments))}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=this.props.appStatus;return e===b?r.a.createElement($.a,{overlay:!0,size:"large"}):e===m?r.a.createElement(Ee,{message:c.a.t("Error loading application.")}):r.a.createElement("main",{className:"uaa-container"},r.a.createElement(He,null),r.a.createElement("section",{className:"uaa-content"},r.a.createElement(za,null),r.a.createElement(Qa,null)))}}]),a}(n.Component),qa=Object(i.b)(function(e){return{appStatus:e.appStatus}},{initApp:function(){return function(){var e=Object(Z.a)(X.a.mark(function e(a,t){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie(t());case 3:n=e.sent,a(me(E,n)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a(me(p,e.t0));case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}()}})($a),Xa=(t(340),t(347)),Za=t(348),et=t(67),at="..";var tt=function(){return r.a.createElement(et.a,{baseUrl:at,apiVersion:""},r.a.createElement(i.a,{store:H},r.a.createElement(Xa.a,null),r.a.createElement(Za.a,{appName:c.a.t("Usage Analytics")}),r.a.createElement(qa,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(tt,null),document.getElementById("uaa-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,1,2]]]);
//# sourceMappingURL=main.8d1c43c4.chunk.js.map