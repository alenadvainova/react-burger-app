(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[5],{100:function(e,r,n){e.exports={Order:"Order_Order__RPf8b"}},104:function(e,r,n){"use strict";n.r(r);var t=n(4),a=n(5),i=n(7),o=n(6),s=n(0),u=n.n(s),c=n(13),p=n(100),d=n.n(p),l=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return u.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return u.a.createElement("div",{className:d.a.Order},u.a.createElement("p",null,"Ingredients: ",t),u.a.createElement("p",null,"Price:"," ",u.a.createElement("strong",null,"USD ",Number.parseFloat(e.totalPrice).toFixed(2))))},m=n(19),f=n(42),b=n(14),h=n(41),g=function(e){Object(i.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(h.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return u.a.createElement(l,{key:e.id,ingredients:e.ingredients,totalPrice:e.price})}))),u.a.createElement("div",null,e)}}]),n}(s.Component);r.default=Object(c.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(b.d(r,n))}}}))(Object(f.a)(g,m.a))}}]);
//# sourceMappingURL=5.8e3dba07.chunk.js.map