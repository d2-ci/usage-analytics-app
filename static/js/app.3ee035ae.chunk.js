(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{199:function(e,t,a){e.exports={container:"LayoutContainer_container__2gt-1"}},200:function(e,t,a){e.exports={sidebar:"LayoutSidebar_sidebar__38x-X"}},201:function(e,t,a){e.exports={content:"LayoutContent_content__3pEdj"}},202:function(e,t,a){e.exports={title:"AppTitle_title__mjsfQ"}},296:function(e,t,a){e.exports={title:"ChartHeader_title__ff7A2",subtitle:"ChartHeader_subtitle__2JAVZ"}},297:function(e,t,a){e.exports={outerContainer:"ChartWrapper_outerContainer__2BU2T",innerContainer:"ChartWrapper_innerContainer__5ZEsg",chartContainer:"ChartWrapper_chartContainer__jt1gD"}},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return at}));var r=a(1),l=a.n(r),n=a(6),s=a(5),c=a.n(s);const o="DATA_VALUES",i="FAVORITES_SAVED",v="FAVORITE_VIEWS",d="TOP_FAVORITES",m="USERS";var u=[{value:v,label:c.a.t("Favorite views"),subtitle:c.a.t("Number of times users looked at analysis favorites")},{value:i,label:c.a.t("Favorites saved"),subtitle:c.a.t("Number of analysis favorites created by users")},{value:m,label:c.a.t("Users"),subtitle:c.a.t("Number of users in the system")},{value:d,label:c.a.t("Top favorites")},{value:o,label:c.a.t("Data values"),subtitle:c.a.t("Number of data values saved in the system")}];const E="WEEK",b="MONTH",p="YEAR";var g=[{value:"DAY",label:c.a.t("Day")},{value:E,label:c.a.t("Week")},{value:b,label:c.a.t("Month")},{value:p,label:c.a.t("Year")}];const D="SUM";var h=[{value:D,label:c.a.t("Sum")},{value:"AVERAGE",label:c.a.t("Average")}];const S="ALL";var y=[{value:S,label:c.a.t("All")},{value:"TOTAL",label:c.a.t("Total")}];const C="CHART_VIEW";var T=[{value:C,label:c.a.t("Chart")},{value:"MAP_VIEW",label:c.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:c.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:c.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:c.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:c.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:c.a.t("Data set report")}];var w=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"}];var I=[{value:"ASC",label:c.a.t("Ascending")},{value:"DESC",label:c.a.t("Descending")}];var f=({aggregation:e,setAggregation:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Aggregation Level")},h.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t}))));var V=({chartType:e,setChartType:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Chart Type")},y.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t})))),A=a(10),R=a.n(A);const O="YYYY-MM-DD",_=(e,t)=>{const a=R()(e,O),r=R()(t,O);return a.isAfter(r)?c.a.t("Start date should be before end date"):""},k=e=>{if(!e)return c.a.t("Please fill in a date");return R()(e,O,!0).isValid()?"":c.a.t("Please use the format yyyy-mm-dd")};var M=({startDate:e,setStartDate:t,startDateError:a,setStartDateError:r})=>l.a.createElement(n.i,{label:c.a.t("Start Date"),type:"date",value:e,error:!!a,validationText:a,onChange:({value:e})=>{r(k(e)),t(e)}});var Y=({endDate:e,setEndDate:t,endDateError:a,setEndDateError:r})=>l.a.createElement(n.i,{label:c.a.t("End Date"),type:"date",value:e,error:!!a,validationText:a,onChange:({value:e})=>{r(k(e)),t(e)}});var z=({startDate:e,setStartDate:t,endDate:a,setEndDate:n})=>{const[s,c]=Object(r.useState)(""),[o,i]=Object(r.useState)(""),[v,d]=Object(r.useState)(""),m=(e,t)=>{d(_(e,t))};return l.a.createElement("div",null,l.a.createElement(M,{startDate:e,setStartDate:e=>{m(e,a),t(e)},startDateError:s||v,setStartDateError:c}),l.a.createElement(Y,{endDate:a,setEndDate:t=>{m(e,t),n(t)},endDateError:o||v,setEndDateError:i}))};var P=({eventType:e,setEventType:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Event Type")},T.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t}))));var j=({interval:e,setReportInterval:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Interval")},g.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t}))));var N=({pageSize:e,setPageSize:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Page Size")},w.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t}))));var x=({sortOrder:e,setSortOrder:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Sort Order")},I.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t}))));var F=({eventType:e,pageSize:t,setEventType:a,setPageSize:r,setSortOrder:n,sortOrder:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{eventType:e,setEventType:a}),l.a.createElement(N,{pageSize:t,setPageSize:r}),l.a.createElement(x,{sortOrder:s,setSortOrder:n}));var U=({endDate:e,interval:t,setEndDate:a,setReportInterval:r,setStartDate:n,startDate:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{startDate:s,setStartDate:n,endDate:e,setEndDate:a}),l.a.createElement(j,{interval:t,setReportInterval:r}));var W=({endDate:e,interval:t,setEndDate:a,setReportInterval:r,setStartDate:n,startDate:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{startDate:s,setStartDate:n,endDate:e,setEndDate:a}),l.a.createElement(j,{interval:t,setReportInterval:r}));var L=({endDate:e,interval:t,setEndDate:a,setReportInterval:r,setStartDate:n,startDate:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{startDate:s,setStartDate:n,endDate:e,setEndDate:a}),l.a.createElement(j,{interval:t,setReportInterval:r}));var q=({aggregation:e,chartType:t,endDate:a,interval:r,setAggregation:n,setChartType:s,setEndDate:c,setReportInterval:o,setStartDate:i,startDate:v})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{startDate:v,setStartDate:i,endDate:a,setEndDate:c}),l.a.createElement(j,{interval:r,setReportInterval:o}),l.a.createElement(f,{aggregation:e,setAggregation:n}),l.a.createElement(V,{chartType:t,setChartType:s}));var H=({aggregation:e,category:t,chartType:a,endDate:r,eventType:s,interval:u,pageSize:E,setAggregation:b,setChartType:p,setEndDate:g,setEventType:D,setReportInterval:h,setPageSize:S,setSortOrder:y,setStartDate:C,sortOrder:T,startDate:w})=>{switch(t){case d:return l.a.createElement(F,{eventType:s,setEventType:D,pageSize:E,setPageSize:S,sortOrder:T,setSortOrder:y});case v:return l.a.createElement(q,{startDate:w,setStartDate:C,endDate:r,setEndDate:g,interval:u,setReportInterval:h,aggregation:e,setAggregation:b,chartType:a,setChartType:p});case o:return l.a.createElement(U,{startDate:w,setStartDate:C,endDate:r,setEndDate:g,interval:u,setReportInterval:h});case m:return l.a.createElement(W,{startDate:w,setStartDate:C,endDate:r,setEndDate:g,interval:u,setReportInterval:h});case i:return l.a.createElement(L,{startDate:w,setStartDate:C,endDate:r,setEndDate:g,interval:u,setReportInterval:h});default:return l.a.createElement(n.o,{error:!0,title:c.a.t("Unrecognized category")},c.a.t("The chosen category was not recognized."))}},G=a(199),B=a.n(G);var J=({children:e})=>l.a.createElement("main",{className:B.a.container},e),Z=a(200),K=a.n(Z);var Q=({children:e})=>l.a.createElement("aside",{className:K.a.sidebar},e),X=a(201),$=a.n(X);var ee=({children:e})=>l.a.createElement("section",{className:$.a.content},e);var te=({category:e,setCategory:t})=>l.a.createElement(n.p,{selected:e,onChange:({selected:e})=>{t(e)},label:c.a.t("Category")},u.map((({label:e,value:t})=>l.a.createElement(n.q,{label:e,key:t,value:t})))),ae=a(202),re=a.n(ae);var le=()=>l.a.createElement("h1",{className:re.a.title},c.a.t("Usage Analytics"));const ne=({year:e,month:t,week:a,day:r},l)=>{switch(l){case p:return R()({year:e}).format("YYYY");case b:{const a=t-1,r="MMM YYYY";return R()({year:e,month:a}).format(r)}case E:{const t="[".concat(c.a.t("Week"),"] [").concat(a,"] / YYYY");return R()({year:e}).format(t)}case"DAY":{const a=t-1,l="MMM D, YYYY";return R()({year:e,month:a,day:r}).format(l)}}};var se=({children:e})=>l.a.createElement("div",null,l.a.createElement(n.b,null,e));var ce=({data:e,interval:t})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Date")),l.a.createElement(n.u,null,c.a.t("Data Values")))),l.a.createElement(n.s,null,e.map((({year:e,month:a,week:r,day:s,savedDataValues:c})=>{const o=ne({year:e,month:a,week:r,day:s},t);return l.a.createElement(n.w,{key:o},l.a.createElement(n.t,null,o),l.a.createElement(n.t,null,c))})))));var oe=({data:e,interval:t})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Date")),l.a.createElement(n.u,null,c.a.t("Active Users")),l.a.createElement(n.u,null,c.a.t("Total Users")))),l.a.createElement(n.s,null,e.map((({year:e,month:a,week:r,day:s,activeUsers:c,users:o})=>{const i=ne({year:e,month:a,week:r,day:s},t);return l.a.createElement(n.w,{key:i},l.a.createElement(n.t,null,i),l.a.createElement(n.t,null,c),l.a.createElement(n.t,null,o))})))));var ie=({data:e,interval:t})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Date")),l.a.createElement(n.u,null,c.a.t("Maps")),l.a.createElement(n.u,null,c.a.t("Charts")),l.a.createElement(n.u,null,c.a.t("Pivot Tables")),l.a.createElement(n.u,null,c.a.t("Event Reports")),l.a.createElement(n.u,null,c.a.t("Event Charts")),l.a.createElement(n.u,null,c.a.t("Dashboards")),l.a.createElement(n.u,null,c.a.t("Indicators")))),l.a.createElement(n.s,null,e.map((({year:e,month:a,week:r,day:s,savedMaps:c,savedCharts:o,savedPivotTables:i,savedEventReports:v,savedEventCharts:d,savedDashboards:m,savedIndicators:u})=>{const E=ne({year:e,month:a,week:r,day:s},t);return l.a.createElement(n.w,{key:E},l.a.createElement(n.t,null,E),l.a.createElement(n.t,null,c),l.a.createElement(n.t,null,o),l.a.createElement(n.t,null,i),l.a.createElement(n.t,null,v),l.a.createElement(n.t,null,d),l.a.createElement(n.t,null,m),l.a.createElement(n.t,null,u))})))));var ve=({data:e,interval:t})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Date")),l.a.createElement(n.u,null,c.a.t("Map")),l.a.createElement(n.u,null,c.a.t("Chart")),l.a.createElement(n.u,null,c.a.t("Pivot Table")),l.a.createElement(n.u,null,c.a.t("Event Report")),l.a.createElement(n.u,null,c.a.t("Event Chart")),l.a.createElement(n.u,null,c.a.t("Dashboard")),l.a.createElement(n.u,null,c.a.t("Data Set Report")),l.a.createElement(n.u,null,c.a.t("Total")))),l.a.createElement(n.s,null,e.map((({year:e,month:a,week:r,day:s,mapViews:c,chartViews:o,pivotTableViews:i,eventReportViews:v,eventChartViews:d,dashboardViews:m,dataSetReportViews:u,totalViews:E})=>{const b=ne({year:e,month:a,week:r,day:s},t);return l.a.createElement(n.w,{key:b},l.a.createElement(n.t,null,b),l.a.createElement(n.t,null,c),l.a.createElement(n.t,null,o),l.a.createElement(n.t,null,i),l.a.createElement(n.t,null,v),l.a.createElement(n.t,null,d),l.a.createElement(n.t,null,m),l.a.createElement(n.t,null,u),l.a.createElement(n.t,null,E))})))));var de=({data:e,interval:t})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Date")),l.a.createElement(n.u,null,c.a.t("Average Map")),l.a.createElement(n.u,null,c.a.t("Average Chart")),l.a.createElement(n.u,null,c.a.t("Average Pivot Table")),l.a.createElement(n.u,null,c.a.t("Average Event Report")),l.a.createElement(n.u,null,c.a.t("Average Event Chart")),l.a.createElement(n.u,null,c.a.t("Average Dashboard")),l.a.createElement(n.u,null,c.a.t("Average")))),l.a.createElement(n.s,null,e.map((({year:e,month:a,week:r,day:s,averageMapViews:c,averageChartViews:o,averagePivotTableViews:i,averageEventReportViews:v,averageEventChartViews:d,averageDashboardViews:m,averageViews:u})=>{const E=ne({year:e,month:a,week:r,day:s},t);return l.a.createElement(n.w,{key:E},l.a.createElement(n.t,null,E),l.a.createElement(n.t,null,c),l.a.createElement(n.t,null,o),l.a.createElement(n.t,null,i),l.a.createElement(n.t,null,v),l.a.createElement(n.t,null,d),l.a.createElement(n.t,null,m),l.a.createElement(n.t,null,u))})))));var me=({data:e})=>l.a.createElement(se,null,l.a.createElement(n.r,null,l.a.createElement(n.v,null,l.a.createElement(n.x,null,l.a.createElement(n.u,null,c.a.t("Position")),l.a.createElement(n.u,null,c.a.t("Name")),l.a.createElement(n.u,null,c.a.t("Views")),l.a.createElement(n.u,null,c.a.t("ID")),l.a.createElement(n.u,null,c.a.t("Created")))),l.a.createElement(n.s,null,e.map((({position:e,name:t,views:a,id:r,created:s})=>{const c=R()(s).format("MMM D, YYYY");return l.a.createElement(n.w,{key:r},l.a.createElement(n.t,null,e),l.a.createElement(n.t,null,t),l.a.createElement(n.t,null,a),l.a.createElement(n.t,null,r),l.a.createElement(n.t,null,c))}))))),ue=a(7);const Ee={favorites:{resource:"dataStatistics/favorites",params:({eventType:e,pageSize:t,sortOrder:a,fields:r})=>({eventType:e,pageSize:t,sortOrder:a,fields:r})}};var be=({eventType:e,pageSize:t,sortOrder:a,fields:s,children:o})=>{const{loading:i,error:v,data:d,called:m,refetch:u}=Object(ue.c)(Ee,{lazy:!0,variables:{eventType:e,pageSize:t,sortOrder:a,fields:s}});if(Object(r.useEffect)((()=>{u({eventType:e,pageSize:t,sortOrder:a,fields:s})}),[e,t,a,s]),!m||i)return l.a.createElement(n.e,null,l.a.createElement(n.c,null,l.a.createElement(n.d,null)));if(v){const e=c.a.t("Error whilst fetching data"),t=c.a.t('The error message was: "{{ MESSAGE }}".',{MESSAGE:v.message,nsSeparator:">"}),a=c.a.t("There was no error message included with the error.");return l.a.createElement(n.o,{error:!0,title:e},v.message?t:a)}return o(d.favorites)};const pe={dataStatistics:{resource:"dataStatistics",params:({startDate:e,endDate:t,interval:a,fields:r})=>({startDate:e,endDate:t,interval:a,fields:r})}};var ge=({children:e,endDate:t,fields:a,interval:s,isIntervalStale:o,setIsIntervalStale:i,startDate:v})=>{const d=()=>i(!1),{loading:m,error:u,data:E,called:b,refetch:p}=Object(ue.c)(pe,{lazy:!0,variables:{startDate:v,endDate:t,interval:s,fields:a},onComplete:d,onError:d});if(Object(r.useEffect)((()=>{((e,t)=>{const a=!!k(e),r=!!k(t),l=!!_(e,t);return!(a||r||l)})(v,t)&&p({startDate:v,endDate:t,interval:s,fields:a})}),[v,t,s,a]),!b||m||o)return l.a.createElement(n.e,null,l.a.createElement(n.c,null,l.a.createElement(n.d,null)));if(u){const e=c.a.t("Error whilst fetching data"),t=c.a.t('The error message was: "{{ MESSAGE }}".',{MESSAGE:u.message,nsSeparator:">"}),a=c.a.t("There was no error message included with the error.");return l.a.createElement(n.o,{error:!0,title:e},u.message?t:a)}return e(E.dataStatistics)};const De=["position","name","views","id","created"];var he=({eventType:e,pageSize:t,sortOrder:a})=>l.a.createElement(be,{eventType:e,fields:De,pageSize:t,sortOrder:a},(e=>l.a.createElement(me,{data:e}))),Se=a(165),ye=a(296),Ce=a.n(ye);var Te=({title:e,subtitle:t})=>l.a.createElement("header",null,l.a.createElement("h4",{className:Ce.a.title},e),l.a.createElement("h6",{className:Ce.a.subtitle},t)),we=a(297),Ie=a.n(we);var fe=({children:e,title:t,subtitle:a})=>l.a.createElement("div",{className:Ie.a.outerContainer},l.a.createElement(n.b,null,l.a.createElement("div",{className:Ie.a.innerContainer},l.a.createElement(Te,{title:t,subtitle:a}),l.a.createElement("div",{className:Ie.a.chartContainer},e))));const Ve="#7cb5ec",Ae="#cc6600",Re="#cccc00",Oe="#66cc00",_e="#ff0066",ke="#000000",Me="#00cccc",Ye=e=>{const t=u.find((t=>t.value===e));return{title:t.label,subtitle:t.subtitle}},ze=(e,t)=>e.map((({year:e,month:a,week:r,day:l})=>ne({year:e,month:a,week:r,day:l},t)));var Pe={animation:{duration:180},legend:{position:"bottom"},maintainAspectRatio:!1,elements:{line:{tension:0,fill:!1,backgroundColor:"rgba(0, 0, 0, 0)"}},scales:{yAxes:[{scaleLabel:{display:!0,labelString:c.a.t("Values")}}]}};var je=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(m),n=ze(e,t),s=(e=>[{label:c.a.t("Active Users"),data:e.map((e=>e.activeUsers)),borderColor:Ve},{label:c.a.t("Total Users"),data:e.map((e=>e.users)),borderColor:Ae}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var Ne=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(o),n=ze(e,t),s=(e=>[{label:c.a.t("Data Values"),data:e.map((e=>e.savedDataValues)),borderColor:Ve}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var xe=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(i),n=ze(e,t),s=(e=>[{label:c.a.t("Maps"),data:e.map((e=>e.savedMaps)),borderColor:Ve},{label:c.a.t("Charts"),data:e.map((e=>e.savedCharts)),borderColor:Ae},{label:c.a.t("Pivot Tables"),data:e.map((e=>e.savedPivotTables)),borderColor:Re},{label:c.a.t("Event Reports"),data:e.map((e=>e.savedEventReports)),borderColor:Oe},{label:c.a.t("Event Charts"),data:e.map((e=>e.savedEventCharts)),borderColor:_e},{label:c.a.t("Dashboards"),data:e.map((e=>e.savedDashboards)),borderColor:ke},{label:c.a.t("Indicators"),data:e.map((e=>e.savedIndicators)),borderColor:Me}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var Fe=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(v),n=ze(e,t),s=(e=>[{label:c.a.t("Map"),data:e.map((e=>e.mapViews)),borderColor:Ve},{label:c.a.t("Chart"),data:e.map((e=>e.chartViews)),borderColor:Ae},{label:c.a.t("Pivot Table"),data:e.map((e=>e.pivotTableViews)),borderColor:Re},{label:c.a.t("Event Report"),data:e.map((e=>e.eventReportViews)),borderColor:Oe},{label:c.a.t("Event Chart"),data:e.map((e=>e.eventChartViews)),borderColor:_e},{label:c.a.t("Dashboard"),data:e.map((e=>e.dashboardViews)),borderColor:ke},{label:c.a.t("Data Set Report"),data:e.map((e=>e.dataSetReportViews)),borderColor:Me}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var Ue=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(v),n=ze(e,t),s=(e=>[{label:c.a.t("Total"),data:e.map((e=>e.totalViews)),borderColor:Ve}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var We=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(v),n=ze(e,t),s=(e=>[{label:c.a.t("Average Map"),data:e.map((e=>e.averageMapViews)),borderColor:Ve},{label:c.a.t("Average Chart"),data:e.map((e=>e.averageChartViews)),borderColor:Ae},{label:c.a.t("Average Pivot Table"),data:e.map((e=>e.averagePivotTableViews)),borderColor:Re},{label:c.a.t("Average Event Report"),data:e.map((e=>e.averageEventReportViews)),borderColor:Oe},{label:c.a.t("Average Event Chart"),data:e.map((e=>e.averageEventChartViews)),borderColor:_e},{label:c.a.t("Average Dashboard"),data:e.map((e=>e.averageDashboardViews)),borderColor:ke}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};var Le=({data:e,interval:t})=>{const{title:a,subtitle:r}=Ye(v),n=ze(e,t),s=(e=>[{label:c.a.t("Average"),data:e.map((e=>e.averageViews)),borderColor:Ve}])(e);return l.a.createElement(fe,{title:a,subtitle:r},l.a.createElement(Se.a,{data:{labels:n,datasets:s},options:Pe}))};const qe=["year","month","week","day","savedDataValues"];var He=({endDate:e,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s})=>l.a.createElement(ge,{endDate:e,fields:qe,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s},(e=>l.a.createElement(r.Fragment,null,l.a.createElement(Ne,{data:e,interval:t}),l.a.createElement(ce,{data:e,interval:t}))));const Ge=["year","month","week","day","activeUsers","users"];var Be=({endDate:e,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s})=>l.a.createElement(ge,{endDate:e,fields:Ge,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s},(e=>l.a.createElement(r.Fragment,null,l.a.createElement(je,{data:e,interval:t}),l.a.createElement(oe,{data:e,interval:t}))));const Je=["year","month","week","day","savedMaps","savedCharts","savedPivotTables","savedEventReports","savedEventCharts","savedDashboards","savedIndicators"];var Ze=({endDate:e,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s})=>l.a.createElement(ge,{endDate:e,fields:Je,interval:t,isIntervalStale:a,setIsIntervalStale:n,startDate:s},(e=>l.a.createElement(r.Fragment,null,l.a.createElement(xe,{data:e,interval:t}),l.a.createElement(ie,{data:e,interval:t}))));const Ke=["year","month","week","day"],Qe=[...Ke,"mapViews","chartViews","pivotTableViews","eventReportViews","eventChartViews","dashboardViews","dataSetReportViews","totalViews"],Xe=[...Ke,"averageMapViews","averageChartViews","averagePivotTableViews","averageEventReportViews","averageEventChartViews","averageDashboardViews","averageViews"];var $e=({aggregation:e,chartType:t,endDate:a,interval:n,isIntervalStale:s,setIsIntervalStale:c,startDate:o})=>{const i=t===S;return e===D?l.a.createElement(ge,{endDate:a,fields:Qe,interval:n,isIntervalStale:s,setIsIntervalStale:c,startDate:o},(e=>l.a.createElement(r.Fragment,null,i?l.a.createElement(Fe,{data:e,interval:n}):l.a.createElement(Ue,{data:e,interval:n}),l.a.createElement(ve,{data:e,interval:n})))):l.a.createElement(ge,{endDate:a,fields:Xe,interval:n,isIntervalStale:s,setIsIntervalStale:c,startDate:o},(e=>l.a.createElement(r.Fragment,null,i?l.a.createElement(We,{data:e,interval:n}):l.a.createElement(Le,{data:e,interval:n}),l.a.createElement(de,{data:e,interval:n}))))};var et=({aggregation:e,category:t,chartType:a,endDate:r,eventType:s,interval:u,isIntervalStale:E,pageSize:b,setIsIntervalStale:p,sortOrder:g,startDate:D})=>{switch(t){case d:return l.a.createElement(he,{eventType:s,pageSize:b,sortOrder:g});case o:return l.a.createElement(He,{endDate:r,interval:u,isIntervalStale:E,setIsIntervalStale:p,startDate:D});case m:return l.a.createElement(Be,{endDate:r,interval:u,isIntervalStale:E,setIsIntervalStale:p,startDate:D});case i:return l.a.createElement(Ze,{endDate:r,interval:u,isIntervalStale:E,setIsIntervalStale:p,startDate:D});case v:return l.a.createElement($e,{aggregation:e,chartType:a,endDate:r,interval:u,isIntervalStale:E,setIsIntervalStale:p,startDate:D});default:return l.a.createElement(n.o,{error:!0,title:c.a.t("Unrecognized category")},c.a.t("The chosen category was not recognized."))}};a(298);var tt=()=>{const e=Date.now(),t="YYYY-MM-DD";return{initialStartDate:R()(e).subtract(4,"months").format(t),initialEndDate:R()(e).format(t)}};var at=()=>{const{initialStartDate:e,initialEndDate:t}=tt(),[a,s]=Object(r.useState)(D),[c,o]=Object(r.useState)(v),[i,d]=Object(r.useState)(S),[m,u]=Object(r.useState)(t),[b,p]=Object(r.useState)(C),[g,h]=Object(r.useState)("25"),[y,T]=Object(r.useState)("ASC"),[w,I]=Object(r.useState)(e),[f,V]=Object(r.useState)(E),[A,R]=Object(r.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.g,{spacers:!0}),l.a.createElement(n.f,null),l.a.createElement(J,null,l.a.createElement(Q,null,l.a.createElement(le,null),l.a.createElement(te,{category:c,setCategory:o}),l.a.createElement(H,{aggregation:a,category:c,chartType:i,endDate:m,eventType:b,interval:f,pageSize:g,setAggregation:s,setChartType:d,setEndDate:u,setEventType:p,setReportInterval:e=>{R(!0),V(e)},setPageSize:h,setSortOrder:T,setStartDate:I,sortOrder:y,startDate:w})),l.a.createElement(ee,null,l.a.createElement(et,{aggregation:a,category:c,chartType:i,endDate:m,eventType:b,interval:f,isIntervalStale:A,pageSize:g,setIsIntervalStale:R,sortOrder:y,startDate:w}))))}}}]);
//# sourceMappingURL=app.3ee035ae.chunk.js.map