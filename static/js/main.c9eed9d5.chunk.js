(this["webpackJsonp8-queens"]=this["webpackJsonp8-queens"]||[]).push([[0],{15:function(n,c,e){},17:function(n,c,e){"use strict";e.r(c);var i=e(1),s=e.n(i),t=e(7),o=e.n(t),r=e(6),a=e.n(r),u=e(8),d=e(9),l=e(2),j=(e(15),e.p+"static/media/chess_queen.6603a7d6.svg"),f=e(0);var v=function(){var n=Object(i.useState)(8),c=Object(l.a)(n,2),e=c[0],s=c[1],t=Object(i.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),o=Object(l.a)(t,2),r=o[0],v=o[1],b=Object(i.useState)([]),m=Object(l.a)(b,2),O=m[0],p=m[1];function x(n){var c=Number(n);return[Math.floor((c-1)/8),(c-1)%8]}function k(n,c){var e=x(n),i=Object(l.a)(e,2),s=i[0],t=i[1];return c[s][t]}function N(n,c){var e=document.getElementById(n);"add"===c&&e.innerHTML!=="<img src="+j+' alt="Queen"/>'?e.innerHTML="<img src="+j+' alt="Queen"/>':"remove"===c&&(e.innerHTML="")}function C(n,c,e){var i=e;if("add"===c)i.push(n);else if("remove"===c){var s=i.indexOf(n);i.splice(s,1)}return i}function h(n){var c=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];return n.forEach((function(n){var e=x(n),i=Object(l.a)(e,2),s=i[0],t=i[1];c[s][t]=1,function(n,c,e){for(var i=0;i<=7;i++)0===e[i][c]&&(e[i][c]=2)}(0,t,c),function(n,c,e){for(var i=0;i<=7;i++)0===e[n][i]&&(e[n][i]=2)}(s,0,c),function(n,c,e){for(var i=n-1,s=c-1,t=n+1,o=c-1,r=n-1,a=c+1,u=n+1,d=c+1;i>=0&&s>=0;)0===e[i][s]&&(e[i][s]=2),i--,s--;for(;t<=7&&o>=0;)0===e[t][o]&&(e[t][o]=2),t++,o--;for(;r>=0&&a<=7;)0===e[r][a]&&(e[r][a]=2),r--,a++;for(;u<=7&&d<=7;)0===e[u][d]&&(e[u][d]=2),u++,d++}(s,t,c)})),c}function g(n){var c=k(n,r);0===c&&e>0?function(n){N(n,"add");var c=C(n,"add",O);p(c);var i=h(O);v(i),s(e-1)}(n):1===c?function(n){N(n,"remove");var c=C(n,"remove",O);p(c);var i=h(O);v(i),s(e+1)}(n):2===c&&alert("Movimento Inv\xe1lido! Essa posi\xe7\xe3o pode ser atacada por alguma Rainha.")}function E(){v([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),O.forEach((function(n){document.getElementById(n).innerHTML=""})),p([]),s(8),M()}function M(){for(var n="",c=1;c<=64;c++)n=String(c),document.getElementById(n).style.backgroundColor=""}function S(n,c){for(var e=Object(d.a)(n),i=c,s=h(e),t=function(n){for(var c=[],e=1;e<=64;e++){var i=String(e);0===k(i,n)&&c.push(i)}return c}(s);t.length>0;){var o=t.pop();if(o){var r=C(o,"add",e),a=h(r),u=i-1;if(0===u)return[1,r,a];var l=S(r,u);if(1===l[0])return l;r=C(o,"remove",r)}}return i>0?[0,e,s]:[0,[],[[]]]}return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsxs)("div",{className:"ui",children:[Object(f.jsxs)("span",{children:["Pe\xe7as Restantes: ",e]}),Object(f.jsx)("button",{className:"new-game",onClick:function(){return E()},children:"Novo Jogo"}),Object(f.jsx)("button",{className:"solve",onClick:Object(u.a)(a.a.mark((function n(){var c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1===(c=S(O,e))[0]){for(E(),h(c[1]),i=0;i<8;i++)g(c[1][i]);s(0),v(c[2])}case 2:case"end":return n.stop()}}),n)}))),children:"Solucionar Jogo"}),Object(f.jsx)("button",{className:"solve",onClick:function(){return function(){for(var n="",c=1;c<=64;c++)0!==k(n=String(c),r)&&(document.getElementById(n).style.backgroundColor="red")}()},children:"VERMELHO"}),Object(f.jsx)("button",{className:"solve",onClick:function(){return M()},children:"CLEAR"})]}),Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)("div",{className:"board",children:[Object(f.jsx)("div",{className:"pos",id:"1",onClick:function(){return g("1")}}),Object(f.jsx)("div",{className:"pos",id:"2",onClick:function(){return g("2")}}),Object(f.jsx)("div",{className:"pos",id:"3",onClick:function(){return g("3")}}),Object(f.jsx)("div",{className:"pos",id:"4",onClick:function(){return g("4")}}),Object(f.jsx)("div",{className:"pos",id:"5",onClick:function(){return g("5")}}),Object(f.jsx)("div",{className:"pos",id:"6",onClick:function(){return g("6")}}),Object(f.jsx)("div",{className:"pos",id:"7",onClick:function(){return g("7")}}),Object(f.jsx)("div",{className:"pos",id:"8",onClick:function(){return g("8")}}),Object(f.jsx)("div",{className:"pos",id:"9",onClick:function(){return g("9")}}),Object(f.jsx)("div",{className:"pos",id:"10",onClick:function(){return g("10")}}),Object(f.jsx)("div",{className:"pos",id:"11",onClick:function(){return g("11")}}),Object(f.jsx)("div",{className:"pos",id:"12",onClick:function(){return g("12")}}),Object(f.jsx)("div",{className:"pos",id:"13",onClick:function(){return g("13")}}),Object(f.jsx)("div",{className:"pos",id:"14",onClick:function(){return g("14")}}),Object(f.jsx)("div",{className:"pos",id:"15",onClick:function(){return g("15")}}),Object(f.jsx)("div",{className:"pos",id:"16",onClick:function(){return g("16")}}),Object(f.jsx)("div",{className:"pos",id:"17",onClick:function(){return g("17")}}),Object(f.jsx)("div",{className:"pos",id:"18",onClick:function(){return g("18")}}),Object(f.jsx)("div",{className:"pos",id:"19",onClick:function(){return g("19")}}),Object(f.jsx)("div",{className:"pos",id:"20",onClick:function(){return g("20")}}),Object(f.jsx)("div",{className:"pos",id:"21",onClick:function(){return g("21")}}),Object(f.jsx)("div",{className:"pos",id:"22",onClick:function(){return g("22")}}),Object(f.jsx)("div",{className:"pos",id:"23",onClick:function(){return g("23")}}),Object(f.jsx)("div",{className:"pos",id:"24",onClick:function(){return g("24")}}),Object(f.jsx)("div",{className:"pos",id:"25",onClick:function(){return g("25")}}),Object(f.jsx)("div",{className:"pos",id:"26",onClick:function(){return g("26")}}),Object(f.jsx)("div",{className:"pos",id:"27",onClick:function(){return g("27")}}),Object(f.jsx)("div",{className:"pos",id:"28",onClick:function(){return g("28")}}),Object(f.jsx)("div",{className:"pos",id:"29",onClick:function(){return g("29")}}),Object(f.jsx)("div",{className:"pos",id:"30",onClick:function(){return g("30")}}),Object(f.jsx)("div",{className:"pos",id:"31",onClick:function(){return g("31")}}),Object(f.jsx)("div",{className:"pos",id:"32",onClick:function(){return g("32")}}),Object(f.jsx)("div",{className:"pos",id:"33",onClick:function(){return g("33")}}),Object(f.jsx)("div",{className:"pos",id:"34",onClick:function(){return g("34")}}),Object(f.jsx)("div",{className:"pos",id:"35",onClick:function(){return g("35")}}),Object(f.jsx)("div",{className:"pos",id:"36",onClick:function(){return g("36")}}),Object(f.jsx)("div",{className:"pos",id:"37",onClick:function(){return g("37")}}),Object(f.jsx)("div",{className:"pos",id:"38",onClick:function(){return g("38")}}),Object(f.jsx)("div",{className:"pos",id:"39",onClick:function(){return g("39")}}),Object(f.jsx)("div",{className:"pos",id:"40",onClick:function(){return g("40")}}),Object(f.jsx)("div",{className:"pos",id:"41",onClick:function(){return g("41")}}),Object(f.jsx)("div",{className:"pos",id:"42",onClick:function(){return g("42")}}),Object(f.jsx)("div",{className:"pos",id:"43",onClick:function(){return g("43")}}),Object(f.jsx)("div",{className:"pos",id:"44",onClick:function(){return g("44")}}),Object(f.jsx)("div",{className:"pos",id:"45",onClick:function(){return g("45")}}),Object(f.jsx)("div",{className:"pos",id:"46",onClick:function(){return g("46")}}),Object(f.jsx)("div",{className:"pos",id:"47",onClick:function(){return g("47")}}),Object(f.jsx)("div",{className:"pos",id:"48",onClick:function(){return g("48")}}),Object(f.jsx)("div",{className:"pos",id:"49",onClick:function(){return g("49")}}),Object(f.jsx)("div",{className:"pos",id:"50",onClick:function(){return g("50")}}),Object(f.jsx)("div",{className:"pos",id:"51",onClick:function(){return g("51")}}),Object(f.jsx)("div",{className:"pos",id:"52",onClick:function(){return g("52")}}),Object(f.jsx)("div",{className:"pos",id:"53",onClick:function(){return g("53")}}),Object(f.jsx)("div",{className:"pos",id:"54",onClick:function(){return g("54")}}),Object(f.jsx)("div",{className:"pos",id:"55",onClick:function(){return g("55")}}),Object(f.jsx)("div",{className:"pos",id:"56",onClick:function(){return g("56")}}),Object(f.jsx)("div",{className:"pos",id:"57",onClick:function(){return g("57")}}),Object(f.jsx)("div",{className:"pos",id:"58",onClick:function(){return g("58")}}),Object(f.jsx)("div",{className:"pos",id:"59",onClick:function(){return g("59")}}),Object(f.jsx)("div",{className:"pos",id:"60",onClick:function(){return g("60")}}),Object(f.jsx)("div",{className:"pos",id:"61",onClick:function(){return g("61")}}),Object(f.jsx)("div",{className:"pos",id:"62",onClick:function(){return g("62")}}),Object(f.jsx)("div",{className:"pos",id:"63",onClick:function(){return g("63")}}),Object(f.jsx)("div",{className:"pos",id:"64",onClick:function(){return g("64")}})]})})]})};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c9eed9d5.chunk.js.map