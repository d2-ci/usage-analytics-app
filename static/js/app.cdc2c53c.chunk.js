(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{212:function(e,t,a){e.exports={container:"LayoutContainer_container__2gt-1"}},213:function(e,t,a){e.exports={sidebar:"LayoutSidebar_sidebar__38x-X"}},214:function(e,t,a){e.exports={content:"LayoutContent_content__3pEdj"}},215:function(e,t,a){e.exports={title:"AppTitle_title__mjsfQ"}},309:function(e,t,a){e.exports={title:"ChartHeader_title__ff7A2",subtitle:"ChartHeader_subtitle__2JAVZ"}},310:function(e,t,a){e.exports={outerContainer:"ChartWrapper_outerContainer__2BU2T",innerContainer:"ChartWrapper_innerContainer__5ZEsg",chartContainer:"ChartWrapper_chartContainer__jt1gD"}},311:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),l=a.n(n),s=a(14),c=a(6),u=a.n(c),i=[{value:"FAVORITE_VIEWS",label:u.a.t("Favorite views"),subtitle:u.a.t("Number of times users looked at analysis favorites")},{value:"FAVORITES_SAVED",label:u.a.t("Favorites saved"),subtitle:u.a.t("Number of analysis favorites created by users")},{value:"USERS",label:u.a.t("Users"),subtitle:u.a.t("Number of users in the system")},{value:"TOP_FAVORITES",label:u.a.t("Top favorites")},{value:"DATA_VALUES",label:u.a.t("Data values"),subtitle:u.a.t("Number of data values saved in the system")}],o=[{value:"DAY",label:u.a.t("Day")},{value:"WEEK",label:u.a.t("Week")},{value:"MONTH",label:u.a.t("Month")},{value:"YEAR",label:u.a.t("Year")}],v=[{value:"SUM",label:u.a.t("Sum")},{value:"AVERAGE",label:u.a.t("Average")}],E=[{value:"ALL",label:u.a.t("All")},{value:"TOTAL",label:u.a.t("Total")}],d=[{value:"CHART_VIEW",label:u.a.t("Chart")},{value:"MAP_VIEW",label:u.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:u.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:u.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:u.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:u.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:u.a.t("Data set report")}],m=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"}],b=[{value:"ASC",label:u.a.t("Ascending")},{value:"DESC",label:u.a.t("Descending")}],f=function(e){var t=e.aggregation,a=e.setAggregation;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Aggregation Level")},v.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},g=function(e){var t=e.chartType,a=e.setChartType;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Chart Type")},E.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},p=a(21),D=a.n(p),S=function(e,t){var a=D()(e,"YYYY-MM-DD"),r=D()(t,"YYYY-MM-DD");return a.isAfter(r)?u.a.t("Start date should be before end date"):""},y=function(e){return e?D()(e,"YYYY-MM-DD",!0).isValid()?"":u.a.t("Please use the format yyyy-mm-dd"):u.a.t("Please fill in a date")},h=function(e){var t=e.startDate,a=e.setStartDate,r=e.startDateError,n=e.setStartDateError;return l.a.createElement(s.i,{label:u.a.t("Start Date"),type:"date",value:t,error:!!r,validationText:r,onChange:function(e){var t=e.value;n(y(t)),a(t)}})},T=function(e){var t=e.endDate,a=e.setEndDate,r=e.endDateError,n=e.setEndDateError;return l.a.createElement(s.i,{label:u.a.t("End Date"),type:"date",value:t,error:!!r,validationText:r,onChange:function(e){var t=e.value;n(y(t)),a(t)}})},C=function(e){var t=e.startDate,a=e.setStartDate,s=e.endDate,c=e.setEndDate,u=Object(n.useState)(""),i=Object(r.a)(u,2),o=i[0],v=i[1],E=Object(n.useState)(""),d=Object(r.a)(E,2),m=d[0],b=d[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),p=g[0],D=g[1],y=function(e,t){D(S(e,t))};return l.a.createElement("div",null,l.a.createElement(h,{startDate:t,setStartDate:function(e){y(e,s),a(e)},startDateError:o||p,setStartDateError:v}),l.a.createElement(T,{endDate:s,setEndDate:function(e){y(t,e),c(e)},endDateError:m||p,setEndDateError:b}))},I=function(e){var t=e.eventType,a=e.setEventType;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Event Type")},d.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},w=function(e){var t=e.interval,a=e.setInterval;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Interval")},o.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},V=function(e){var t=e.pageSize,a=e.setPageSize;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Page Size")},m.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},A=function(e){var t=e.sortOrder,a=e.setSortOrder;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Sort Order")},b.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},O=function(e){var t=e.eventType,a=e.pageSize,r=e.setEventType,n=e.setPageSize,s=e.setSortOrder,c=e.sortOrder;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{eventType:t,setEventType:r}),l.a.createElement(V,{pageSize:a,setPageSize:n}),l.a.createElement(A,{sortOrder:c,setSortOrder:s}))},_=function(e){var t=e.endDate,a=e.interval,r=e.setEndDate,n=e.setInterval,s=e.setStartDate,c=e.startDate;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{startDate:c,setStartDate:s,endDate:t,setEndDate:r}),l.a.createElement(w,{interval:a,setInterval:n}))},R=function(e){var t=e.endDate,a=e.interval,r=e.setEndDate,n=e.setInterval,s=e.setStartDate,c=e.startDate;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{startDate:c,setStartDate:s,endDate:t,setEndDate:r}),l.a.createElement(w,{interval:a,setInterval:n}))},Y=function(e){var t=e.endDate,a=e.interval,r=e.setEndDate,n=e.setInterval,s=e.setStartDate,c=e.startDate;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{startDate:c,setStartDate:s,endDate:t,setEndDate:r}),l.a.createElement(w,{interval:a,setInterval:n}))},M=function(e){var t=e.aggregation,a=e.chartType,r=e.endDate,n=e.interval,s=e.setAggregation,c=e.setChartType,u=e.setEndDate,i=e.setInterval,o=e.setStartDate,v=e.startDate;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{startDate:v,setStartDate:o,endDate:r,setEndDate:u}),l.a.createElement(w,{interval:n,setInterval:i}),l.a.createElement(f,{aggregation:t,setAggregation:s}),l.a.createElement(g,{chartType:a,setChartType:c}))},k=function(e){var t=e.aggregation,a=e.category,r=e.chartType,n=e.endDate,c=e.eventType,i=e.interval,o=e.pageSize,v=e.setAggregation,E=e.setChartType,d=e.setEndDate,m=e.setEventType,b=e.setInterval,f=e.setPageSize,g=e.setSortOrder,p=e.setStartDate,D=e.sortOrder,S=e.startDate;switch(a){case"TOP_FAVORITES":return l.a.createElement(O,{eventType:c,setEventType:m,pageSize:o,setPageSize:f,sortOrder:D,setSortOrder:g});case"FAVORITE_VIEWS":return l.a.createElement(M,{startDate:S,setStartDate:p,endDate:n,setEndDate:d,interval:i,setInterval:b,aggregation:t,setAggregation:v,chartType:r,setChartType:E});case"DATA_VALUES":return l.a.createElement(_,{startDate:S,setStartDate:p,endDate:n,setEndDate:d,interval:i,setInterval:b});case"USERS":return l.a.createElement(R,{startDate:S,setStartDate:p,endDate:n,setEndDate:d,interval:i,setInterval:b});case"FAVORITES_SAVED":return l.a.createElement(Y,{startDate:S,setStartDate:p,endDate:n,setEndDate:d,interval:i,setInterval:b});default:return l.a.createElement(s.o,{error:!0,title:u.a.t("Unrecognized category")},u.a.t("The chosen category was not recognized."))}},j=a(212),z=a.n(j),P=function(e){var t=e.children;return l.a.createElement("main",{className:z.a.container},t)},F=a(213),U=a.n(F),W=function(e){var t=e.children;return l.a.createElement("aside",{className:U.a.sidebar},t)},N=a(214),x=a.n(N),L=function(e){var t=e.children;return l.a.createElement("section",{className:x.a.content},t)},H=function(e){var t=e.category,a=e.setCategory;return l.a.createElement(s.p,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Category")},i.map((function(e){var t=e.label,a=e.value;return l.a.createElement(s.q,{label:t,key:a,value:a})})))},q=a(215),G=a.n(q),B=function(){return l.a.createElement("h1",{className:G.a.title},u.a.t("Usage Analytics"))},J=function(e,t){var a=e.year,r=e.month,n=e.week,l=e.day;switch(t){case"YEAR":return D()({year:a}).format("YYYY");case"MONTH":var s=r-1;return D()({year:a,month:s}).format("MMM YYYY");case"WEEK":var c="[".concat(u.a.t("Week"),"] [").concat(n,"] / YYYY");return D()({year:a}).format(c);case"DAY":var i=r-1;return D()({year:a,month:i,day:l}).format("MMM D, YYYY")}},K=function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(s.b,null,t))},Z=function(e){var t=e.data,a=e.interval;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Date")),l.a.createElement(s.u,null,u.a.t("Data Values")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.year,r=e.month,n=e.week,c=e.day,u=e.savedDataValues,i=J({year:t,month:r,week:n,day:c},a);return l.a.createElement(s.w,{key:i},l.a.createElement(s.t,null,i),l.a.createElement(s.t,null,u))})))))},Q=function(e){var t=e.data,a=e.interval;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Date")),l.a.createElement(s.u,null,u.a.t("Active Users")),l.a.createElement(s.u,null,u.a.t("Total Users")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.year,r=e.month,n=e.week,c=e.day,u=e.activeUsers,i=e.users,o=J({year:t,month:r,week:n,day:c},a);return l.a.createElement(s.w,{key:o},l.a.createElement(s.t,null,o),l.a.createElement(s.t,null,u),l.a.createElement(s.t,null,i))})))))},X=function(e){var t=e.data,a=e.interval;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Date")),l.a.createElement(s.u,null,u.a.t("Maps")),l.a.createElement(s.u,null,u.a.t("Charts")),l.a.createElement(s.u,null,u.a.t("Pivot Tables")),l.a.createElement(s.u,null,u.a.t("Event Reports")),l.a.createElement(s.u,null,u.a.t("Event Charts")),l.a.createElement(s.u,null,u.a.t("Dashboards")),l.a.createElement(s.u,null,u.a.t("Indicators")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.year,r=e.month,n=e.week,c=e.day,u=e.savedMaps,i=e.savedCharts,o=e.savedPivotTables,v=e.savedEventReports,E=e.savedEventCharts,d=e.savedDashboards,m=e.savedIndicators,b=J({year:t,month:r,week:n,day:c},a);return l.a.createElement(s.w,{key:b},l.a.createElement(s.t,null,b),l.a.createElement(s.t,null,u),l.a.createElement(s.t,null,i),l.a.createElement(s.t,null,o),l.a.createElement(s.t,null,v),l.a.createElement(s.t,null,E),l.a.createElement(s.t,null,d),l.a.createElement(s.t,null,m))})))))},$=function(e){var t=e.data,a=e.interval;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Date")),l.a.createElement(s.u,null,u.a.t("Map")),l.a.createElement(s.u,null,u.a.t("Chart")),l.a.createElement(s.u,null,u.a.t("Pivot Table")),l.a.createElement(s.u,null,u.a.t("Event Report")),l.a.createElement(s.u,null,u.a.t("Event Chart")),l.a.createElement(s.u,null,u.a.t("Dashboard")),l.a.createElement(s.u,null,u.a.t("Data Set Report")),l.a.createElement(s.u,null,u.a.t("Total")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.year,r=e.month,n=e.week,c=e.day,u=e.mapViews,i=e.chartViews,o=e.pivotTableViews,v=e.eventReportViews,E=e.eventChartViews,d=e.dashboardViews,m=e.dataSetReportViews,b=e.totalViews,f=J({year:t,month:r,week:n,day:c},a);return l.a.createElement(s.w,{key:f},l.a.createElement(s.t,null,f),l.a.createElement(s.t,null,u),l.a.createElement(s.t,null,i),l.a.createElement(s.t,null,o),l.a.createElement(s.t,null,v),l.a.createElement(s.t,null,E),l.a.createElement(s.t,null,d),l.a.createElement(s.t,null,m),l.a.createElement(s.t,null,b))})))))},ee=function(e){var t=e.data,a=e.interval;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Date")),l.a.createElement(s.u,null,u.a.t("Average Map")),l.a.createElement(s.u,null,u.a.t("Average Chart")),l.a.createElement(s.u,null,u.a.t("Average Pivot Table")),l.a.createElement(s.u,null,u.a.t("Average Event Report")),l.a.createElement(s.u,null,u.a.t("Average Event Chart")),l.a.createElement(s.u,null,u.a.t("Average Dashboard")),l.a.createElement(s.u,null,u.a.t("Average")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.year,r=e.month,n=e.week,c=e.day,u=e.averageMapViews,i=e.averageChartViews,o=e.averagePivotTableViews,v=e.averageEventReportViews,E=e.averageEventChartViews,d=e.averageDashboardViews,m=e.averageViews,b=J({year:t,month:r,week:n,day:c},a);return l.a.createElement(s.w,{key:b},l.a.createElement(s.t,null,b),l.a.createElement(s.t,null,u),l.a.createElement(s.t,null,i),l.a.createElement(s.t,null,o),l.a.createElement(s.t,null,v),l.a.createElement(s.t,null,E),l.a.createElement(s.t,null,d),l.a.createElement(s.t,null,m))})))))},te=function(e){var t=e.data;return l.a.createElement(K,null,l.a.createElement(s.r,null,l.a.createElement(s.v,null,l.a.createElement(s.x,null,l.a.createElement(s.u,null,u.a.t("Position")),l.a.createElement(s.u,null,u.a.t("Name")),l.a.createElement(s.u,null,u.a.t("Views")),l.a.createElement(s.u,null,u.a.t("ID")),l.a.createElement(s.u,null,u.a.t("Created")))),l.a.createElement(s.s,null,t.map((function(e){var t=e.position,a=e.name,r=e.views,n=e.id,c=e.created,u=D()(c).format("MMM D, YYYY");return l.a.createElement(s.w,{key:n},l.a.createElement(s.t,null,t),l.a.createElement(s.t,null,a),l.a.createElement(s.t,null,r),l.a.createElement(s.t,null,n),l.a.createElement(s.t,null,u))})))))},ae=a(16),re={favorites:{resource:"dataStatistics/favorites",params:function(e){return{eventType:e.eventType,pageSize:e.pageSize,sortOrder:e.sortOrder,fields:e.fields}}}},ne=function(e){var t=e.eventType,a=e.pageSize,r=e.sortOrder,c=e.fields,i=e.children,o=Object(ae.c)(re,{lazy:!0,variables:{eventType:t,pageSize:a,sortOrder:r,fields:c}}),v=o.loading,E=o.error,d=o.data,m=o.called,b=o.refetch;if(Object(n.useEffect)((function(){b({eventType:t,pageSize:a,sortOrder:r,fields:c})}),[t,a,r,c]),!m||v)return l.a.createElement(s.e,null,l.a.createElement(s.c,null,l.a.createElement(s.d,null)));if(E){var f=u.a.t("Error whilst fetching data"),g=u.a.t('The error message was: "{{ MESSAGE }}".',{MESSAGE:E.message,nsSeparator:">"}),p=u.a.t("There was no error message included with the error.");return l.a.createElement(s.o,{error:!0,title:f},E.message?g:p)}return i(d.favorites)},le={dataStatistics:{resource:"dataStatistics",params:function(e){return{startDate:e.startDate,endDate:e.endDate,interval:e.interval,fields:e.fields}}}},se=function(e){var t=e.children,a=e.endDate,r=e.fields,c=e.interval,i=e.isIntervalStale,o=e.setIsIntervalStale,v=e.startDate,E=function(){return o(!1)},d=Object(ae.c)(le,{lazy:!0,variables:{startDate:v,endDate:a,interval:c,fields:r},onComplete:E,onError:E}),m=d.loading,b=d.error,f=d.data,g=d.called,p=d.refetch;if(Object(n.useEffect)((function(){(function(e,t){var a=!!y(e),r=!!y(t),n=!!S(e,t);return!(a||r||n)})(v,a)&&p({startDate:v,endDate:a,interval:c,fields:r})}),[v,a,c,r]),!g||m||i)return l.a.createElement(s.e,null,l.a.createElement(s.c,null,l.a.createElement(s.d,null)));if(b){var D=u.a.t("Error whilst fetching data"),h=u.a.t('The error message was: "{{ MESSAGE }}".',{MESSAGE:b.message,nsSeparator:">"}),T=u.a.t("There was no error message included with the error.");return l.a.createElement(s.o,{error:!0,title:D},b.message?h:T)}return t(f.dataStatistics)},ce=["position","name","views","id","created"],ue=function(e){var t=e.eventType,a=e.pageSize,r=e.sortOrder;return l.a.createElement(ne,{eventType:t,fields:ce,pageSize:a,sortOrder:r},(function(e){return l.a.createElement(te,{data:e})}))},ie=a(178),oe=a(309),ve=a.n(oe),Ee=function(e){var t=e.title,a=e.subtitle;return l.a.createElement("header",null,l.a.createElement("h4",{className:ve.a.title},t),l.a.createElement("h6",{className:ve.a.subtitle},a))},de=a(310),me=a.n(de),be=function(e){var t=e.children,a=e.title,r=e.subtitle;return l.a.createElement("div",{className:me.a.outerContainer},l.a.createElement(s.b,null,l.a.createElement("div",{className:me.a.innerContainer},l.a.createElement(Ee,{title:a,subtitle:r}),l.a.createElement("div",{className:me.a.chartContainer},t))))},fe=function(e){var t=i.find((function(t){return t.value===e}));return{title:t.label,subtitle:t.subtitle}},ge=function(e,t){return e.map((function(e){var a=e.year,r=e.month,n=e.week,l=e.day;return J({year:a,month:r,week:n,day:l},t)}))},pe={animation:{duration:180},legend:{position:"bottom"},maintainAspectRatio:!1,elements:{line:{tension:0,fill:!1,backgroundColor:"rgba(0, 0, 0, 0)"}},scales:{yAxes:[{scaleLabel:{display:!0,labelString:u.a.t("Values")}}]}},De=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Active Users"),data:e.map((function(e){return e.activeUsers})),borderColor:"#7cb5ec"},{label:u.a.t("Total Users"),data:e.map((function(e){return e.users})),borderColor:"#cc6600"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},Se=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Data Values"),data:e.map((function(e){return e.savedDataValues})),borderColor:"#7cb5ec"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},ye=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Maps"),data:e.map((function(e){return e.savedMaps})),borderColor:"#7cb5ec"},{label:u.a.t("Charts"),data:e.map((function(e){return e.savedCharts})),borderColor:"#cc6600"},{label:u.a.t("Pivot Tables"),data:e.map((function(e){return e.savedPivotTables})),borderColor:"#cccc00"},{label:u.a.t("Event Reports"),data:e.map((function(e){return e.savedEventReports})),borderColor:"#66cc00"},{label:u.a.t("Event Charts"),data:e.map((function(e){return e.savedEventCharts})),borderColor:"#ff0066"},{label:u.a.t("Dashboards"),data:e.map((function(e){return e.savedDashboards})),borderColor:"#000000"},{label:u.a.t("Indicators"),data:e.map((function(e){return e.savedIndicators})),borderColor:"#00cccc"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},he=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Map"),data:e.map((function(e){return e.mapViews})),borderColor:"#7cb5ec"},{label:u.a.t("Chart"),data:e.map((function(e){return e.chartViews})),borderColor:"#cc6600"},{label:u.a.t("Pivot Table"),data:e.map((function(e){return e.pivotTableViews})),borderColor:"#cccc00"},{label:u.a.t("Event Report"),data:e.map((function(e){return e.eventReportViews})),borderColor:"#66cc00"},{label:u.a.t("Event Chart"),data:e.map((function(e){return e.eventChartViews})),borderColor:"#ff0066"},{label:u.a.t("Dashboard"),data:e.map((function(e){return e.dashboardViews})),borderColor:"#000000"},{label:u.a.t("Data Set Report"),data:e.map((function(e){return e.dataSetReportViews})),borderColor:"#00cccc"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},Te=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Total"),data:e.map((function(e){return e.totalViews})),borderColor:"#7cb5ec"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},Ce=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Average Map"),data:e.map((function(e){return e.averageMapViews})),borderColor:"#7cb5ec"},{label:u.a.t("Average Chart"),data:e.map((function(e){return e.averageChartViews})),borderColor:"#cc6600"},{label:u.a.t("Average Pivot Table"),data:e.map((function(e){return e.averagePivotTableViews})),borderColor:"#cccc00"},{label:u.a.t("Average Event Report"),data:e.map((function(e){return e.averageEventReportViews})),borderColor:"#66cc00"},{label:u.a.t("Average Event Chart"),data:e.map((function(e){return e.averageEventChartViews})),borderColor:"#ff0066"},{label:u.a.t("Average Dashboard"),data:e.map((function(e){return e.averageDashboardViews})),borderColor:"#000000"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},Ie=function(e){var t=e.data,a=e.category,r=e.interval,n=fe(a),s=n.title,c=n.subtitle,i=ge(t,r),o=function(e){return[{label:u.a.t("Average"),data:e.map((function(e){return e.averageViews})),borderColor:"#7cb5ec"}]}(t);return l.a.createElement(be,{title:s,subtitle:c},l.a.createElement(ie.a,{data:{labels:i,datasets:o},options:pe}))},we=["year","month","week","day","savedDataValues"],Ve=function(e){var t=e.category,a=e.endDate,r=e.interval,s=e.isIntervalStale,c=e.setIsIntervalStale,u=e.startDate;return l.a.createElement(se,{endDate:a,fields:we,interval:r,isIntervalStale:s,setIsIntervalStale:c,startDate:u},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(Se,{category:t,data:e,interval:r}),l.a.createElement(Z,{data:e,interval:r}))}))},Ae=["year","month","week","day","activeUsers","users"],Oe=function(e){var t=e.category,a=e.endDate,r=e.interval,s=e.isIntervalStale,c=e.setIsIntervalStale,u=e.startDate;return l.a.createElement(se,{endDate:a,fields:Ae,interval:r,isIntervalStale:s,setIsIntervalStale:c,startDate:u},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(De,{category:t,data:e,interval:r}),l.a.createElement(Q,{data:e,interval:r}))}))},_e=["year","month","week","day","savedMaps","savedCharts","savedPivotTables","savedEventReports","savedEventCharts","savedDashboards","savedIndicators"],Re=function(e){var t=e.category,a=e.endDate,r=e.interval,s=e.isIntervalStale,c=e.setIsIntervalStale,u=e.startDate;return l.a.createElement(se,{endDate:a,fields:_e,interval:r,isIntervalStale:s,setIsIntervalStale:c,startDate:u},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(ye,{category:t,data:e,interval:r}),l.a.createElement(X,{data:e,interval:r}))}))},Ye=["year","month","week","day"],Me=[].concat(Ye,["mapViews","chartViews","pivotTableViews","eventReportViews","eventChartViews","dashboardViews","dataSetReportViews","totalViews"]),ke=[].concat(Ye,["averageMapViews","averageChartViews","averagePivotTableViews","averageEventReportViews","averageEventChartViews","averageDashboardViews","averageViews"]),je=function(e){var t=e.aggregation,a=e.category,r=e.chartType,s=e.endDate,c=e.interval,u=e.isIntervalStale,i=e.setIsIntervalStale,o=e.startDate,v="ALL"===r;return"SUM"===t?l.a.createElement(se,{endDate:s,fields:Me,interval:c,isIntervalStale:u,setIsIntervalStale:i,startDate:o},(function(e){return l.a.createElement(n.Fragment,null,v?l.a.createElement(he,{category:a,data:e,interval:c}):l.a.createElement(Te,{data:e,category:a,interval:c}),l.a.createElement($,{data:e,interval:c}))})):l.a.createElement(se,{endDate:s,fields:ke,interval:c,isIntervalStale:u,setIsIntervalStale:i,startDate:o},(function(e){return l.a.createElement(n.Fragment,null,v?l.a.createElement(Ce,{category:a,data:e,interval:c}):l.a.createElement(Ie,{category:a,data:e,interval:c}),l.a.createElement(ee,{data:e,interval:c}))}))},ze=function(e){var t=e.aggregation,a=e.category,r=e.chartType,n=e.endDate,c=e.eventType,i=e.interval,o=e.isIntervalStale,v=e.pageSize,E=e.setIsIntervalStale,d=e.sortOrder,m=e.startDate;switch(a){case"TOP_FAVORITES":return l.a.createElement(ue,{eventType:c,pageSize:v,sortOrder:d});case"DATA_VALUES":return l.a.createElement(Ve,{category:a,endDate:n,interval:i,isIntervalStale:o,setIsIntervalStale:E,startDate:m});case"USERS":return l.a.createElement(Oe,{category:a,endDate:n,interval:i,isIntervalStale:o,setIsIntervalStale:E,startDate:m});case"FAVORITES_SAVED":return l.a.createElement(Re,{category:a,endDate:n,interval:i,isIntervalStale:o,setIsIntervalStale:E,startDate:m});case"FAVORITE_VIEWS":return l.a.createElement(je,{aggregation:t,category:a,chartType:r,endDate:n,interval:i,isIntervalStale:o,setIsIntervalStale:E,startDate:m});default:return l.a.createElement(s.o,{error:!0,title:u.a.t("Unrecognized category")},u.a.t("The chosen category was not recognized."))}},Pe=(a(311),function(){var e=Date.now();return{initialStartDate:D()(e).subtract(4,"months").format("YYYY-MM-DD"),initialEndDate:D()(e).format("YYYY-MM-DD")}}),Fe=function(){var e=Pe(),t=e.initialStartDate,a=e.initialEndDate,c=Object(n.useState)("SUM"),u=Object(r.a)(c,2),i=u[0],o=u[1],v=Object(n.useState)("FAVORITE_VIEWS"),E=Object(r.a)(v,2),d=E[0],m=E[1],b=Object(n.useState)("ALL"),f=Object(r.a)(b,2),g=f[0],p=f[1],D=Object(n.useState)(a),S=Object(r.a)(D,2),y=S[0],h=S[1],T=Object(n.useState)("CHART_VIEW"),C=Object(r.a)(T,2),I=C[0],w=C[1],V=Object(n.useState)("WEEK"),A=Object(r.a)(V,2),O=A[0],_=A[1],R=Object(n.useState)("25"),Y=Object(r.a)(R,2),M=Y[0],j=Y[1],z=Object(n.useState)("ASC"),F=Object(r.a)(z,2),U=F[0],N=F[1],x=Object(n.useState)(t),q=Object(r.a)(x,2),G=q[0],J=q[1],K=Object(n.useState)(!1),Z=Object(r.a)(K,2),Q=Z[0],X=Z[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.g,{spacers:!0}),l.a.createElement(s.f,null),l.a.createElement(P,null,l.a.createElement(W,null,l.a.createElement(B,null),l.a.createElement(H,{category:d,setCategory:m}),l.a.createElement(k,{aggregation:i,category:d,chartType:g,endDate:y,eventType:I,interval:O,pageSize:M,setAggregation:o,setChartType:p,setEndDate:h,setEventType:w,setInterval:function(e){X(!0),_(e)},setPageSize:j,setSortOrder:N,setStartDate:J,sortOrder:U,startDate:G})),l.a.createElement(L,null,l.a.createElement(ze,{aggregation:i,category:d,chartType:g,endDate:y,eventType:I,interval:O,isIntervalStale:Q,pageSize:M,setIsIntervalStale:X,sortOrder:U,startDate:G}))))};a.d(t,"default",(function(){return Fe}))}}]);
//# sourceMappingURL=app.cdc2c53c.chunk.js.map