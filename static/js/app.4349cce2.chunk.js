(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{211:function(e,a,t){e.exports={container:"LayoutContainer_container__2gt-1"}},212:function(e,a,t){e.exports={sidebar:"LayoutSidebar_sidebar__38x-X"}},213:function(e,a,t){e.exports={content:"LayoutContent_content__3pEdj"}},214:function(e,a,t){e.exports={title:"AppTitle_title__mjsfQ"}},310:function(e,a,t){e.exports={title:"ChartHeader_title__ff7A2",subtitle:"ChartHeader_subtitle__2JAVZ"}},311:function(e,a,t){e.exports={outerContainer:"ChartWrapper_outerContainer__2BU2T",innerContainer:"ChartWrapper_innerContainer__5ZEsg",chartContainer:"ChartWrapper_chartContainer__jt1gD"}},312:function(e,a,t){},313:function(e,a,t){"use strict";t.r(a);var r,n,l,s,c,i,o=t(7),u=t(1),v=t.n(u),b=t(6),E=t.n(b),d=[{value:"FAVORITE_VIEWS",label:E.a.t("Favorite views"),subtitle:E.a.t("Number of times users looked at analysis favorites")},{value:"FAVORITES_SAVED",label:E.a.t("Favorites saved"),subtitle:E.a.t("Number of analysis favorites created by users")},{value:"USERS",label:E.a.t("Users"),subtitle:E.a.t("Number of users in the system")},{value:"TOP_FAVORITES",label:E.a.t("Top favorites")},{value:"DATA_VALUES",label:E.a.t("Data values"),subtitle:E.a.t("Number of data values saved in the system")}],m=[{value:"DAY",label:E.a.t("Day")},{value:"WEEK",label:E.a.t("Week")},{value:"MONTH",label:E.a.t("Month")},{value:"YEAR",label:E.a.t("Year")}],g=[{value:"SUM",label:E.a.t("Sum")},{value:"AVERAGE",label:E.a.t("Average")}],p=[{value:"ALL",label:E.a.t("All")},{value:"TOTAL",label:E.a.t("Total")}],y=[{value:"CHART_VIEW",label:E.a.t("Chart")},{value:"MAP_VIEW",label:E.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:E.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:E.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:E.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:E.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:E.a.t("Data set report")}],f=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"}],h=[{value:"ASC",label:E.a.t("Ascending")},{value:"DESC",label:E.a.t("Descending")}],S=t(14),O=function(e){var a=e.startDate,t=e.setStartDate,r=e.endDate,n=e.setEndDate;return v.a.createElement("div",{className:"uaa-date-range"},v.a.createElement(S.h,{label:E.a.t("Start Date"),type:"date",value:a,onChange:function(e){var a=e.value;return t(a)}}),v.a.createElement(S.h,{label:E.a.t("End Date"),type:"date",value:r,onChange:function(e){var a=e.value;return n(a)}}))},T=function(e){var a=e.interval,t=e.setInterval;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Interval")},m.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},A=function(e){var a=e.aggregation,t=e.setAggregation;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Aggregation level")},g.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},D=function(e){var a=e.chartType,t=e.setChartType;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Chart type")},p.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},C=function(e){var a=e.eventType,t=e.setEventType;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Event type")},y.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},V=function(e){var a=e.pageSize,t=e.setPageSize;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Page size")},f.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},_=function(e){var a=e.sortOrder,t=e.setSortOrder;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Sort order")},h.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},k=function(e){var a=e.category,t=e.startDate,r=e.setStartDate,n=e.endDate,l=e.setEndDate,s=e.interval,c=e.setInterval,i=e.aggregation,o=e.setAggregation,u=e.chartType,b=e.setChartType,E=e.eventType,d=e.setEventType,m=e.pageSize,g=e.setPageSize,p=e.sortOrder,y=e.setSortOrder,f="TOP_FAVORITES"===a,h="FAVORITE_VIEWS"===a;return v.a.createElement(v.a.Fragment,null,!f&&v.a.createElement(v.a.Fragment,null,v.a.createElement(O,{startDate:t,setStartDate:r,endDate:n,setEndDate:l}),v.a.createElement(T,{interval:s,setInterval:c})),h&&v.a.createElement(v.a.Fragment,null,v.a.createElement(A,{aggregation:i,setAggregation:o}),v.a.createElement(D,{chartType:u,setChartType:b})),f&&v.a.createElement(v.a.Fragment,null,v.a.createElement(C,{eventType:E,setEventType:d}),v.a.createElement(V,{pageSize:m,setPageSize:g}),v.a.createElement(_,{sortOrder:p,setSortOrder:y})))},j=t(211),R=t.n(j),I=function(e){var a=e.children;return v.a.createElement("main",{className:R.a.container},a)},Y=t(212),M=t.n(Y),w=function(e){var a=e.children;return v.a.createElement("aside",{className:M.a.sidebar},a)},F=t(213),W=t.n(F),z=function(e){var a=e.children;return v.a.createElement("section",{className:W.a.content},a)},L=function(e){var a=e.category,t=e.setCategory;return v.a.createElement(S.n,{selected:a,onChange:function(e){var a=e.selected;t(a)},label:E.a.t("Category")},d.map((function(e){var a=e.label,t=e.value;return v.a.createElement(S.o,{label:a,key:t,value:t})})))},N=t(214),P=t.n(N),U=function(){return v.a.createElement("h1",{className:P.a.title},E.a.t("Usage Analytics"))},x=t(21),H=t.n(x),J=function(e,a){var t=e.year,r=e.month,n=e.week,l=e.day;switch(a){case"YEAR":return H()({year:t}).format("YYYY");case"MONTH":var s=r-1;return H()({year:t,month:s}).format("MMM YYYY");case"WEEK":var c="[".concat(E.a.t("Week"),"] [").concat(n,"] / YYYY");return H()({year:t}).format(c);case"DAY":var i=r-1;return H()({year:t,month:i,day:l}).format("MMM D, YYYY")}},B=function(e){var a=e.children;return v.a.createElement("div",null,v.a.createElement(S.b,null,a))},G=function(e){var a=e.data,t=e.interval;return v.a.createElement(B,null,v.a.createElement(S.p,null,v.a.createElement(S.t,null,v.a.createElement(S.v,null,v.a.createElement(S.s,null,E.a.t("Date")),v.a.createElement(S.s,null,E.a.t("Data Values")))),v.a.createElement(S.q,null,a.map((function(e){var a=e.year,r=e.month,n=e.week,l=e.day,s=e.savedDataValues,c=J({year:a,month:r,week:n,day:l},t);return v.a.createElement(S.u,{key:c},v.a.createElement(S.r,null,c),v.a.createElement(S.r,null,s))})))))},K=t(215),Z=t(15),q={key:"date",label:E.a.t("Date")},Q={key:"mapViews",label:E.a.t("Map")},X={key:"chartViews",label:E.a.t("Chart")},$={key:"pivotTableViews",label:E.a.t("Pivot Table")},ee={key:"eventReportViews",label:E.a.t("Event Report")},ae={key:"eventChartViews",label:E.a.t("Event Chart")},te={key:"dashboardViews",label:E.a.t("Dashboard")},re={key:"dataSetReportViews",label:E.a.t("Data Set Report")},ne={key:"totalViews",label:E.a.t("Total")},le={key:"averageMapViews",label:E.a.t("Average Map")},se={key:"averageChartViews",label:E.a.t("Average Chart")},ce={key:"averagePivotTableViews",label:E.a.t("Average Pivot Table")},ie={key:"averageEventReportViews",label:E.a.t("Average Event Report")},oe={key:"averageEventChartViews",label:E.a.t("Average Event Chart")},ue={key:"averageDashboardViews",label:E.a.t("Average Dashboard")},ve={key:"averageViews",label:E.a.t("Average")},be={key:"savedMaps",label:E.a.t("Maps")},Ee={key:"savedCharts",label:E.a.t("Charts")},de={key:"savedPivotTables",label:E.a.t("Pivot Tables")},me={key:"savedEventReports",label:E.a.t("Event Reports")},ge={key:"savedEventCharts",label:E.a.t("Event Charts")},pe={key:"savedDashboards",label:E.a.t("Dashboards")},ye={key:"savedIndicators",label:E.a.t("Indicators")},fe={key:"activeUsers",label:E.a.t("Active Users")},he={key:"users",label:E.a.t("Total Users")},Se={key:"position",label:E.a.t("Position")},Oe={key:"name",label:E.a.t("Name")},Te={key:"views",label:E.a.t("Views")},Ae={key:"id",label:E.a.t("ID")},De={key:"created",label:E.a.t("Created")},Ce={key:"savedDataValues",label:E.a.t("Data Values")},Ve=[Q,X,$,ee,ae,te,re],_e=[le,se,ce,ie,oe,ue],ke=[be,Ee,de,me,ge,pe,ye],je=[fe,he],Re=(n={},Object(Z.a)(n,"FAVORITE_VIEWS",(r={},Object(Z.a)(r,"SUM",[q].concat(Ve,[ne])),Object(Z.a)(r,"AVERAGE",[q].concat(_e,[ve])),r)),Object(Z.a)(n,"FAVORITES_SAVED",[q].concat(ke)),Object(Z.a)(n,"USERS",[q].concat(je)),Object(Z.a)(n,"TOP_FAVORITES",[Se,Oe,Te,Ae,De]),Object(Z.a)(n,"DATA_VALUES",[q,Ce]),i={},Object(Z.a)(i,"FAVORITE_VIEWS",(c={},Object(Z.a)(c,"SUM",(l={},Object(Z.a)(l,"ALL",Ve),Object(Z.a)(l,"TOTAL",[ne]),l)),Object(Z.a)(c,"AVERAGE",(s={},Object(Z.a)(s,"ALL",_e),Object(Z.a)(s,"TOTAL",[ve]),s)),c)),Object(Z.a)(i,"FAVORITES_SAVED",ke),Object(Z.a)(i,"USERS",je),Object(Z.a)(i,"DATA_VALUES",[Ce]),i),Ie=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Ye={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:E.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},Me={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0};function we(e){e.resize()}var Fe=t(216),We=t(310),ze=t.n(We),Le=function(e){var a=e.title,t=e.subtitle;return v.a.createElement("header",null,v.a.createElement("h4",{className:ze.a.title},a),v.a.createElement("h6",{className:ze.a.subtitle},t))},Ne=t(311),Pe=t.n(Ne),Ue=function(e){var a=e.children,t=e.title,r=e.subtitle;return v.a.createElement("div",{className:Pe.a.outerContainer},v.a.createElement(S.b,null,v.a.createElement("div",{className:Pe.a.innerContainer},v.a.createElement(Le,{title:t,subtitle:r}),v.a.createElement("div",{className:Pe.a.chartContainer},a))))},xe=function(e){var a=e.data,t=e.aggregation,r=e.category,n=e.chartType,l=e.interval,s=function(e){var a=d.find((function(a){return a.value===e}));return{title:a.label,subtitle:a.subtitle}}(r),c=s.title,i=s.subtitle,o=function(e){for(var a=e.aggregation,t=e.category,r=e.chartType,n=e.interval,l=e.data,s=[],c=[],i=1,o=null,u="FAVORITE_VIEWS"===t?Re[t][a][r]:Re[t],v=l.length,b=u.length,E=0;E<v;E++){var d=l[E];s.push(J(d,n));for(var m=0;m<b;m++){var g=u[m];0===E&&c.push(Object(K.a)({},Me,{label:g.label,data:[],borderColor:Ie[m]}));var p=d[g.key];p>i&&(i=p),(null===o||p<o)&&(o=p),c[m].data.push(p)}}return Ye.scales.yAxes[0].ticks.suggestedMax=i,Ye.scales.yAxes[0].ticks.suggestedMin=o,Ye.onResize=we,{data:{labels:s,datasets:c},options:Ye}}({aggregation:t,category:r,chartType:n,interval:l,data:a}),u=o.options,b=o.data;return v.a.createElement(Ue,{title:c,subtitle:i},v.a.createElement(Fe.a,{data:b,options:u}))},He=t(16),Je={favorites:{resource:"dataStatistics/favorites",params:function(e){return{eventType:e.eventType,pageSize:e.pageSize,sortOrder:e.sortOrder}}}},Be=function(e){var a=e.eventType,t=e.pageSize,r=e.sortOrder,n=e.children,l=Object(He.c)(Je,{lazy:!0,variables:{eventType:a,pageSize:t,sortOrder:r}}),s=l.loading,c=l.error,i=l.data,o=l.called,b=l.refetch;if(Object(u.useEffect)((function(){b({eventType:a,pageSize:t,sortOrder:r})}),[a,t,r]),!o||s)return v.a.createElement(S.e,null,v.a.createElement(S.c,null,v.a.createElement(S.d,null)));if(c)throw c;return n(i.favorites)},Ge={dataStatistics:{resource:"dataStatistics",params:function(e){return{startDate:e.startDate,endDate:e.endDate,interval:e.interval}}}},Ke=function(e){var a=e.startDate,t=e.endDate,r=e.interval,n=e.stale,l=e.setStale,s=e.children,c=function(){return l(!1)},i=Object(He.c)(Ge,{lazy:!0,variables:{startDate:a,endDate:t,interval:r},onComplete:c,onError:c}),o=i.loading,b=i.error,E=i.data,d=i.called,m=i.refetch;if(Object(u.useEffect)((function(){m({startDate:a,endDate:t,interval:r})}),[a,t,r]),!d||o||n)return v.a.createElement(S.e,null,v.a.createElement(S.c,null,v.a.createElement(S.d,null)));if(b)throw b;return s(E.dataStatistics)},Ze=function(e){var a=e.aggregation,t=e.category,r=e.chartType,n=e.endDate,l=e.eventType,s=e.interval,c=e.isTopFavorites,i=e.pageSize,o=e.setStale,b=e.sortOrder,E=e.stale,d=e.startDate;return c?v.a.createElement(Be,{eventType:l,pageSize:i,sortOrder:b},(function(e){return v.a.createElement("pre",null,JSON.stringify(e,null,2))})):v.a.createElement(Ke,{startDate:d,endDate:n,interval:s,setStale:o,stale:E},(function(e){return"DATA_VALUES"===t?v.a.createElement(u.Fragment,null,v.a.createElement(xe,{data:e,interval:s,aggregation:a,category:t,chartType:r}),v.a.createElement(G,{data:e,interval:s})):null}))},qe=(t(312),function(){return{initialStartDate:H()().subtract(4,"months").format("YYYY-MM-DD"),initialEndDate:H()().format("YYYY-MM-DD")}}),Qe=function(){var e=qe(),a=e.initialStartDate,t=e.initialEndDate,r=Object(u.useState)("FAVORITE_VIEWS"),n=Object(o.a)(r,2),l=n[0],s=n[1],c=Object(u.useState)(a),i=Object(o.a)(c,2),b=i[0],E=i[1],d=Object(u.useState)(t),m=Object(o.a)(d,2),g=m[0],p=m[1],y=Object(u.useState)("WEEK"),f=Object(o.a)(y,2),h=f[0],S=f[1],O=Object(u.useState)("SUM"),T=Object(o.a)(O,2),A=T[0],D=T[1],C=Object(u.useState)("ALL"),V=Object(o.a)(C,2),_=V[0],j=V[1],R=Object(u.useState)("CHART_VIEW"),Y=Object(o.a)(R,2),M=Y[0],F=Y[1],W=Object(u.useState)("25"),N=Object(o.a)(W,2),P=N[0],x=N[1],H=Object(u.useState)("ASC"),J=Object(o.a)(H,2),B=J[0],G=J[1],K=Object(u.useState)(!1),Z=Object(o.a)(K,2),q=Z[0],Q=Z[1],X="TOP_FAVORITES"===l;return v.a.createElement(I,null,v.a.createElement(w,null,v.a.createElement(U,null),v.a.createElement(L,{category:l,setCategory:s}),v.a.createElement(k,{aggregation:A,category:l,chartType:_,endDate:g,eventType:M,interval:h,pageSize:P,setAggregation:D,setChartType:j,setEndDate:p,setEventType:F,setInterval:function(e){Q(!0),S(e)},setPageSize:x,setSortOrder:G,setStartDate:E,sortOrder:B,startDate:b})),v.a.createElement(z,null,v.a.createElement(Ze,{aggregation:A,category:l,chartType:_,endDate:g,eventType:M,interval:h,isTopFavorites:X,pageSize:P,setStale:Q,sortOrder:B,stale:q,startDate:b})))};t.d(a,"default",(function(){return Qe}))}}]);
//# sourceMappingURL=app.4349cce2.chunk.js.map