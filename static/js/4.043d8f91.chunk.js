(window["webpackJsonpscoutbase-code-challenge"]=window["webpackJsonpscoutbase-code-challenge"]||[]).push([[4],{53:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var i=r(52),s=r(0),n=r(2),o=r(17),u=r(11),a=r(3),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t){Object(u.a)(this.options,t)||(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(i.e)(t);Object(i.d)(e),Object(i.d)(r.type);Object(a.b)(r.type===e,3)},t}(),p=function(t){function e(e){var r=e.options,i=e.context,s=e.forceUpdate,n=t.call(this,r,i)||this;return n.previousData={},n.currentObservable={},n.runLazy=!1,n.runLazyQuery=function(t){n.runLazy=!0,n.lazyOptions=t,n.forceUpdate()},n.getExecuteResult=function(){var t=n.getQueryResult();return n.startQuerySubscription(),t},n.forceUpdate=s,n}return Object(s.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:o.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){if(this.getOptions().skip)return!1;var t=this.getOptions(),e=(t.children,t.ssr),r=(t.displayName,t.skip,t.onCompleted,t.onError,t.partialRefetch,Object(s.e)(t,["children","ssr","displayName","skip","onCompleted","onError","partialRefetch"])),i=r.fetchPolicy;if(!1===e)return!1;"network-only"!==i&&"cache-and-network"!==i||(i="cache-first");var n=this.refreshClient().client.watchQuery(Object(s.a)({},r,{fetchPolicy:i}));return this.context&&this.context.renderPromises&&this.context.renderPromises.registerSSRObservable(n,this.getOptions()),!!this.currentObservable.query.getCurrentResult().loading&&n.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,i=void 0!==r&&r;return this.isMounted=!0,i&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout(function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()})),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this),r=this.lazyOptions||{},i=Object(s.a)({},e,{variables:Object(s.a)({},e.variables,r.variables),context:Object(s.a)({},e.context,r.context)});return this.runLazy&&delete i.skip,i},e.prototype.getExecuteSsrResult=function(){var t,e={loading:!0,networkStatus:o.b.loading,called:!0,data:{}};return this.context&&this.context.renderPromises&&((t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult))||(t=e)),t},e.prototype.prepareObservableQueryOptions=function(){this.verifyDocumentType(this.getOptions().query,i.b.Query);var t=this.getOptions().displayName||"Query";return Object(s.a)({},this.getOptions(),{displayName:t,context:this.getOptions().context||{},metadata:{reactComponent:{displayName:t}}})},e.prototype.observableQueryFields=function(t){return{variables:t.variables,refetch:t.refetch.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},e.prototype.initializeObservableQuery=function(){if(this.context&&this.context.renderPromises&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var t=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(s.a)({},t,{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(t)}},e.prototype.updateObservableQuery=function(){this.currentObservable.query||this.initializeObservableQuery();var t=Object(s.a)({},this.prepareObservableQueryOptions(),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch(function(){}))},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,s=e.data;t.previousData.result&&t.previousData.result.loading===r&&t.previousData.result.networkStatus===i&&Object(u.a)(t.previousData.result.data,s||{})||t.forceUpdate()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;Object(u.a)(e,t.previousData.error)||(t.previousData.error=e,t.forceUpdate())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t={data:Object.create(null)};if(Object.assign(t,this.observableQueryFields(this.currentObservable.query)),this.getOptions().skip)t=Object(s.a)({},t,{data:void 0,error:void 0,loading:!1,called:!0});else{var e=this.currentObservable.query.getCurrentResult(),r=e.loading,i=e.partial,n=e.networkStatus,u=e.errors,a=e.error,c=e.data;if(c=c||Object.create(null),u&&u.length>0&&(a=new o.a({graphQLErrors:u})),Object.assign(t,{loading:r,networkStatus:n,error:a,called:!0}),r){var p=this.previousData.result?this.previousData.result.data:{};Object.assign(t.data,p,c)}else if(a)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var l=this.currentObservable.query.options.fetchPolicy;if(this.getOptions().partialRefetch&&0===Object.keys(c).length&&i&&"cache-only"!==l)return Object.assign(t,{loading:!0,networkStatus:o.b.loading}),t.refetch(),t;Object.assign(t.data,c)}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query.getCurrentResult(),e=t.data,r=t.loading,i=t.error;if(!r){var s=this.getOptions(),n=s.query,o=s.variables,a=s.onCompleted,c=s.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,n)&&Object(u.a)(this.previousOptions.variables,o))return;a&&!i?a(e):c&&i&&c(i)}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e}(c);function l(t,e,r){void 0===r&&(r=!1);var o=Object(n.useContext)(Object(i.c)()),a=Object(n.useReducer)(function(t){return t+1},0),c=a[0],l=a[1],h=e?Object(s.a)({},e,{query:t}):{query:t},b=Object(n.useRef)();b.current||(b.current=new p({options:h,context:o,forceUpdate:l}));var d=b.current;d.setOptions(h),d.context=o;var v=function(t,e){var r=Object(n.useRef)();return r.current&&Object(u.a)(e,r.current.key)||(r.current={key:e,value:t()}),r.current.value}(function(){return r?d.executeLazy():d.execute()},{options:h,context:o,tick:c});return Object(n.useEffect)(function(){return d.afterExecute({lazy:r})},[v]),Object(n.useEffect)(function(){return function(){return d.cleanup()}},[]),v}function h(t,e){return l(t,e,!1)}!function(t){function e(e){var r=e.options,s=e.context,n=e.result,o=e.setResult,u=t.call(this,r,s)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then(function(t){return u.onMutationCompleted(t,e),t}).catch(function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t})},u.verifyDocumentType(r.mutation,i.b.Mutation),u.result=n,u.setResult=o,u.mostRecentMutationId=0,u}Object(s.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,i.b.Mutation),[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,n=e.optimisticResponse,o=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,p=void 0!==c&&c,l=e.fetchPolicy,h=Object(s.a)({},t),b=Object.assign({},i,h.variables);return delete h.variables,this.refreshClient().client.mutate(Object(s.a)({mutation:r,optimisticResponse:n,refetchQueries:h.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:p,update:o,context:a,fetchPolicy:l,variables:b},h))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,s=r.ignoreResults,n=t.data,u=t.errors,a=u&&u.length>0?new o.a({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!s&&this.updateResult({called:!0,loading:!1,data:n,error:a}),i&&i(n)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)}}(c);!function(t){function e(e){var r=e.options,i=e.context,s=e.setResult,n=t.call(this,r,i)||this;return n.currentObservable={},n.setResult=s,n.initialize(r),n}Object(s.c)(e,t),e.prototype.execute=function(t){var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"===typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables))&&(this.endSubscription(),delete this.currentObservable.query,e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(s.a)({},e,{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(c);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise(function(e){e(t.fetchData())})),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach(function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)}),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,s=e.get(r)||new Map;e.has(r)||e.set(r,s);var n=JSON.stringify(i),o=s.get(n)||{seen:!1,observable:null};return s.has(n)||s.set(n,o),o}}()},54:function(t,e,r){"use strict";function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",function(){return i})},55:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var i=r(2),s=r.n(i);function n(t){var e=t.error;return s.a.createElement("div",null,"Error occurred: ",JSON.stringify(e))}},58:function(t,e,r){},61:function(t,e,r){"use strict";r.r(e);var i=r(54),s=r(2),n=r.n(s),o=r(53),u=r(24),a=r(23),c=r(55);function p(t){var e=t.country;return n.a.createElement(s.Fragment,null,n.a.createElement("h2",null,e.name),n.a.createElement("div",{className:"currency"},n.a.createElement("div",{className:"label"},"Currency"),e.currency||"None"),n.a.createElement("div",{className:"phone"},n.a.createElement("div",{className:"label"},"Phone code"),"+",e.phone||"000"))}r(58);function l(){var t=Object(i.a)(['\n    {\n        country(code: "','") {\n            name\n            code\n            phone\n            currency\n        }\n    }\n  ']);return l=function(){return t},t}function h(t){var e=t.match,r=Object(o.a)(Object(u.b)(l(),e.params.code)),i=r.loading,s=r.error,h=r.data,b=s?null:h.country;return n.a.createElement("div",{id:"country-details"},i?n.a.createElement(a.a,null):s?n.a.createElement(c.a,{error:s}):n.a.createElement(p,{country:b}))}r.d(e,"default",function(){return h})}}]);
//# sourceMappingURL=4.043d8f91.chunk.js.map