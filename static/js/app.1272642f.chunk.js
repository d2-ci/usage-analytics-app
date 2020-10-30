(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{210:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){},307:function(e,a,t){},308:function(e,a,t){},309:function(e,a,t){},310:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(166),s=t(7),o=t(186),c=t(208);t(209);const i="LOADING",u="ERROR",d="APP_LOAD_SUCCESS",b="APP_LOAD_ERROR",v="USAGE_DATA_REQUESTED",g="USAGE_DATA_RECEIVED",m="USAGE_DATA_ERRORED",E="FILTER_UPDATED";var h=t(5),p=t.n(h);const y="FAVORITE_VIEWS",D="FAVORITES_SAVED",f="USERS",A="TOP_FAVORITES",C="DATA_VALUES";var T=[{value:y,label:p.a.t("Favorite views"),subtitle:p.a.t("Number of times users looked at analysis favorites")},{value:D,label:p.a.t("Favorites saved"),subtitle:p.a.t("Number of analysis favorites created by users")},{value:f,label:p.a.t("Users"),subtitle:p.a.t("Number of users in the system")},{value:A,label:p.a.t("Top favorites")},{value:C,label:p.a.t("Data values"),subtitle:p.a.t("Number of data values saved in the system")}];const k="WEEK",w="MONTH",O="YEAR";var S=[{value:"DAY",label:p.a.t("Day")},{value:k,label:p.a.t("Week")},{value:w,label:p.a.t("Month")},{value:O,label:p.a.t("Year")}];const R="SUM",V="AVERAGE";var _=[{value:R,label:p.a.t("Sum")},{value:V,label:p.a.t("Average")}];const j="ALL",F="TOTAL";var U=[{value:j,label:p.a.t("All")},{value:F,label:p.a.t("Total")}];const N="CHART_VIEW";var P=[{value:N,label:p.a.t("Chart")},{value:"MAP_VIEW",label:p.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:p.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:p.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:p.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:p.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:p.a.t("Data set report")}];const I="ASC";var L=[{value:"ASC",label:p.a.t("Ascending")},{value:"DESC",label:p.a.t("Descending")}];function M(e){const a=e.getFullYear();let t=""+(e.getMonth()+1),n=""+e.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")}const x=[c.a];const W=Object(o.c)({appStatus:function(e=i,{type:a}){switch(a){case d:return"READY";case b:return u;default:return e}},usageData:function(e=i,{type:a,payload:t}){switch(a){case v:return i;case d:case g:return t;case m:return u;default:return e}},filter:function(e=function(e){const a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:y,startDate:M(a),endDate:M(e),interval:k,aggregationLevel:R,chartType:j,eventType:N,pageSize:"25",sortOrder:I}}(new Date),{type:a,payload:t}){switch(a){case E:return{...e,[t.key]:t.value};default:return e}}});var z=Object(o.d)(W,Object(o.a)(...x));const G={method:"GET",credentials:"include"};function H(e,a){return function(e,a,t=G){return e?a?fetch("".concat(e,"/api/").concat(a),t).then((e=>{if(e.ok)return e;throw new Error(e.statusText)})):Promise.reject(new Error("A path must be passed")):Promise.reject(new Error("A baseUrl must be passed"))}(e,a).then((e=>e.json())).then((e=>{if("ERROR"===e.status)throw new Error(e.message);return e}))}var Y=(()=>{let e=null;const a=({eventType:a,pageSize:t,sortOrder:n})=>{const r="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(n,"&_=").concat(Date.now());return H(e,"dataStatistics/favorites?".concat(r))},t=({startDate:a,endDate:t,interval:n})=>{const r="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(n,"&_=").concat(Date.now());return H(e,"dataStatistics?".concat(r))};return{setBaseUrl:a=>{e=a},getFavorites:a,getDataStatistics:t,getUsageData:e=>e.category===A?a({eventType:e.eventType,pageSize:e.pageSize,sortOrder:e.sortOrder}):t({startDate:e.startDate,endDate:e.endDate,interval:e.interval})}})(),B=t(6);const J=e=>(a,t)=>{const{filter:n}=t(),r=n.category;if(a(Q("category",e)),function(e,a){return e!==a&&(a===A&&e!==A||e===A&&a!==A)}(r,e))return q({...n,category:e},a)},K=(e,a)=>(t,n)=>{t(Q(e,a));const{filter:r}=n();return q(r,t)},Q=(e,a)=>X(E,{key:e,value:a});async function q(e,a){a(X(v));try{const t=await Y.getUsageData(e);a(X(g,t))}catch(t){a(X(m,t))}}function X(e,a){return{type:e,payload:a}}t(210);var Z=function({message:e}){return r.a.createElement("div",{className:"uaa-error"},e)};var $=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"}];const ee=({options:e,value:a,...t})=>r.a.createElement(B.l,Object.assign({},t,{selected:a}),e.map((({label:e,value:a})=>r.a.createElement(B.m,{label:e,key:a,value:a}))));var ae=t(211),te=t.n(ae);t(212);const ne="startDate",re="endDate",le=p.a.t("Please use the format yyyy-mm-dd"),se=p.a.t("Please fill in both dates"),oe=p.a.t("End date is before start date"),ce=p.a.t("Start date is after end date");class ie extends n.Component{constructor(e){super(e),this.state={startDateError:null,endDateError:null},this.onStartDateChange=this.onStartDateChange.bind(this),this.onEndDateChange=this.onEndDateChange.bind(this),this.updateUsageData=te()(e.updateUsageData,250)}onStartDateChange({value:e}){this.onChange(ne,e)}onEndDateChange({value:e}){this.onChange(re,e)}onChange(e,a){const{updateFilter:t,...n}=this.props,r="".concat(e,"Error"),l="".concat(e===ne?re:ne,"Error"),s=this.getError({...n,[e]:a},e),o=this.state[l]===le?le:null;this.state[r]!==s&&this.setState({[r]:s,[l]:o}),t(e,a),s||this.updateUsageData()}getError(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.startDate&&e.endDate?e.endDate<e.startDate?a===ne?ce:oe:null:se:le}render(){const{startDate:e,endDate:a}=this.props,{startDateError:t,endDateError:n}=this.state;return r.a.createElement("div",{className:"uaa-date-range"},r.a.createElement(B.f,{label:p.a.t("Start Date"),type:"date",value:e,onChange:this.onStartDateChange,error:!!t,validationText:t,name:ne,className:ne,dataTest:"uaa-startdate"}),r.a.createElement(B.f,{label:p.a.t("End Date"),type:"date",value:a,onChange:this.onEndDateChange,error:!!n,validationText:n,name:re,className:re,dataTest:"uaa-enddate"}))}}var ue=ie;const de=Object(l.b)(ye("category"),{onChange:({selected:e})=>J(e)})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Category"),options:T})))),be=Object(l.b)((function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}}),{updateFilter:Q,updateUsageData:()=>(e,a)=>{const{filter:t}=a();return q(t,e)}})(ue),ve=Object(l.b)(ye("interval"),{onChange:De(K,"interval")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Interval"),options:S})))),ge=Object(l.b)(ye("aggregationLevel"),{onChange:De(Q,"aggregationLevel")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Aggregation Level"),options:_})))),me=Object(l.b)(ye("chartType"),{onChange:De(Q,"chartType")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Chart Type"),options:U})))),Ee=Object(l.b)(ye("eventType"),{onChange:De(K,"eventType")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Event Type"),options:P})))),he=Object(l.b)(ye("pageSize"),{onChange:De(K,"pageSize")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Page Size"),options:$})))),pe=Object(l.b)(ye("sortOrder"),{onChange:De(K,"sortOrder")})((e=>r.a.createElement(ee,Object.assign({},e,{label:p.a.t("Sort Order"),options:L}))));function ye(e){return function(a){return{label:e,value:a.filter[e]}}}function De(e,a){return function({selected:t}){return e(a,t)}}t(213);var fe=Object(l.b)((function({filter:{category:e}}){return{showDateFields:e!==A,showTopFavoritesFields:e===A,showFavoriteViewsFields:e===y}}))((function({showDateFields:e,showFavoriteViewsFields:a,showTopFavoritesFields:t}){return r.a.createElement("aside",{className:"uaa-filter-sidebar"},r.a.createElement("h1",{className:"uaa-app-header"},p.a.t("Usage Analytics")),r.a.createElement(de,null),e&&r.a.createElement(n.Fragment,null,r.a.createElement(be,null),r.a.createElement(ve,null)),a&&r.a.createElement(n.Fragment,null,r.a.createElement(ge,null),r.a.createElement(me,null)),t&&r.a.createElement(n.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(pe,null)))})),Ae=t(214);const Ce={key:"date",label:p.a.t("Date")},Te={key:"mapViews",label:p.a.t("Map")},ke={key:"chartViews",label:p.a.t("Chart")},we={key:"pivotTableViews",label:p.a.t("Pivot Table")},Oe={key:"eventReportViews",label:p.a.t("Event Report")},Se={key:"eventChartViews",label:p.a.t("Event Chart")},Re={key:"dashboardViews",label:p.a.t("Dashboard")},Ve={key:"dataSetReportViews",label:p.a.t("Data Set Report")},_e={key:"totalViews",label:p.a.t("Total")},je={key:"averageMapViews",label:p.a.t("Average Map")},Fe={key:"averageChartViews",label:p.a.t("Average Chart")},Ue={key:"averagePivotTableViews",label:p.a.t("Average Pivot Table")},Ne={key:"averageEventReportViews",label:p.a.t("Average Event Report")},Pe={key:"averageEventChartViews",label:p.a.t("Average Event Chart")},Ie={key:"averageDashboardViews",label:p.a.t("Average Dashboard")},Le={key:"averageViews",label:p.a.t("Average")},Me={key:"savedMaps",label:p.a.t("Maps")},xe={key:"savedCharts",label:p.a.t("Charts")},We={key:"savedPivotTables",label:p.a.t("Pivot Tables")},ze={key:"savedEventReports",label:p.a.t("Event Reports")},Ge={key:"savedEventCharts",label:p.a.t("Event Charts")},He={key:"savedDashboards",label:p.a.t("Dashboards")},Ye={key:"savedIndicators",label:p.a.t("Indicators")},Be={key:"activeUsers",label:p.a.t("Active Users")},Je={key:"users",label:p.a.t("Total Users")},Ke={key:"position",label:p.a.t("Position")},Qe={key:"name",label:p.a.t("Name")},qe={key:"views",label:p.a.t("Views")},Xe={key:"id",label:p.a.t("ID")},Ze={key:"created",label:p.a.t("Created")},$e={key:"savedDataValues",label:p.a.t("Data Values")},ea=[Te,ke,we,Oe,Se,Re,Ve],aa=[je,Fe,Ue,Ne,Pe,Ie],ta=[Me,xe,We,ze,Ge,He,Ye],na=[Be,Je],ra={[y]:{[R]:[Ce,...ea,_e],[V]:[Ce,...aa,Le]},[D]:[Ce,...ta],[f]:[Ce,...na],[A]:[Ke,Qe,qe,Xe,Ze],[C]:[Ce,$e]},la={[y]:{[R]:{[j]:ea,[F]:[_e]},[V]:{[j]:aa,[F]:[Le]}},[D]:ta,[f]:na,[C]:[$e]},sa={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},oa=p.a.t("Week");function ca({year:e,month:a,week:t,day:n},r){switch(r){case O:return e;case w:return ia(e,a);case k:return"".concat(oa," ").concat(t," / ").concat(e);case"DAY":default:return ia(e,a,n)}}function ia(e,a,t){return ua(t?new Date(e,a-1,t):new Date(e,a-1),t?sa.yyyymmdd:sa.yyyymm)}function ua(e,a){const t=z.getState().locale||"en";return new Intl.DateTimeFormat(t,a).format(e)}const da=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],ba={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:p.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},va={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0};function ga({aggregationLevel:e,category:a,chartType:t,interval:n},r){const l=[],s=[],o=T.find((e=>e.value===a));let c=1,i=null;const u=a===y?la[a][e][t]:la[a],d=r.length,b=u.length;for(let v=0;v<d;v++){const e=r[v];l.push(ca(e,n));for(let a=0;a<b;a++){const t=u[a];0===v&&s.push({...va,label:t.label,data:[],borderColor:da[a]});const n=e[t.key];n>c&&(c=n),(null===i||n<i)&&(i=n),s[a].data.push(n)}}return ba.scales.yAxes[0].ticks.suggestedMax=c,ba.scales.yAxes[0].ticks.suggestedMin=i,ba.onResize=ma,{data:{labels:l,datasets:s},options:ba,title:o.label,subtitle:o.subtitle}}function ma(e){e.resize()}t(307);const Ea="uua-data-container uua-chart-container";var ha=Object(l.b)((function({usageData:e,filter:a}){const t=a.category===A||e===u,n=e===i;return{shouldHide:t,loading:n,chartConfig:t||n?null:ga(a,e)}}))((function({shouldHide:e,loading:a,chartConfig:t}){let l;if(e)return null;if(a)l=r.a.createElement(B.c,{overlay:!0});else{const{options:e,data:a,title:s,subtitle:o}=t;l=r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"uaa-chart-title"},s),r.a.createElement("h6",{className:"uaa-chart-subtitle"},o),r.a.createElement("div",{className:"uaa-chart-wrap"},r.a.createElement(Ae.a,{data:a,options:e})))}const s=a?Ea+" uua-data-container--loading":Ea;return r.a.createElement("div",{className:s},l)}));t(308);const pa="uua-data-container",ya=({headers:e})=>r.a.createElement("thead",null,r.a.createElement("tr",null,e.map(((e,a)=>r.a.createElement("th",{key:"h-".concat(a)},e))))),Da=({rows:e})=>r.a.createElement("tbody",null,e.map(((e,a)=>r.a.createElement(fa,{key:"row-".concat(a),cells:e})))),fa=({cells:e})=>r.a.createElement("tr",null,e.map(((e,a)=>r.a.createElement("td",{key:"cell-".concat(a)},e))));function Aa({aggregationLevel:e,category:a,interval:t},n){const r=a===y?ra[a][e]:ra[a];return{headers:r.map((({label:e})=>e)),rows:n.map((e=>r.map((a=>{return a.key===Ce.key?ca(e,t):a.key===Ze.key?(n=e[a.key],ua(new Date(n),sa.yyyymmdd)):e[a.key];var n}))))}}var Ca=Object(l.b)((function({usageData:e,filter:a}){const t=e===u,n=e===i;return{error:t,loading:n,tableData:n||t?null:Aa(a,e)}}))((function({error:e,loading:a,tableData:t}){let n;if(e)n=r.a.createElement(Z,{message:p.a.t("There was an error retrieving the usage analytics data")});else if(a)n=r.a.createElement(B.c,{overlay:!0});else{const{headers:e,rows:a}=t;n=r.a.createElement("table",{className:"uaa-data-table"},r.a.createElement(ya,{headers:e}),r.a.createElement(Da,{rows:a}))}const l=a?"uua-data-container uua-data-container--loading":pa;return r.a.createElement("div",{className:l},n)}));class Ta extends n.Component{componentDidMount(){this.props.initApp()}render(){const{appStatus:e}=this.props;return e===i?r.a.createElement(B.g,{translucent:!0},r.a.createElement(B.b,null,r.a.createElement(B.c,{large:!0}))):e===u?r.a.createElement(Z,{message:p.a.t("Error loading application.")}):r.a.createElement("main",{className:"uaa-container"},r.a.createElement(fe,null),r.a.createElement("section",{className:"uaa-content"},r.a.createElement(ha,null),r.a.createElement(Ca,null)))}}var ka=Object(l.b)((({appStatus:e})=>({appStatus:e})),{initApp:()=>async(e,a)=>{try{const t=await Y.getUsageData(a().filter);e(X(d,t))}catch(t){e(X(b,t))}}})(Ta);t(309);a.default=function(){const{baseUrl:e}=Object(s.b)();return Y.setBaseUrl(e),r.a.createElement(l.a,{store:z},r.a.createElement(ka,null))}}}]);
//# sourceMappingURL=app.1272642f.chunk.js.map