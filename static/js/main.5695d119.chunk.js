(this["webpackJsonp8-queens"]=this["webpackJsonp8-queens"]||[]).push([[0],{12:function(n,c,e){},14:function(n,c,e){"use strict";e.r(c);var s=e(1),i=e.n(s),t=e(7),o=e.n(t),r=e(6),a=e(3),u=(e(12),e.p+"static/media/chess_queen.6603a7d6.svg"),l=e(0);var d=function(){var n=Object(s.useState)(8),c=Object(a.a)(n,2),e=c[0],i=c[1],t=Object(s.useRef)(8),o=Object(s.useRef)([]),d=Object(s.useRef)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]);function j(n){var c=Number(n);return[Math.floor((c-1)/8),(c-1)%8]}function f(n,c){var e=j(n),s=Object(a.a)(e,2),i=s[0],t=s[1];return c[i][t]}function v(n){var c=document.getElementById(n);c&&(""!==c.innerHTML?c.innerHTML="":c.innerHTML="<img src="+u+' alt="Queen"/>')}function b(n){var c=0,e=0,s=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];return n.forEach((function(n){var i=j(n),t=Object(a.a)(i,2);c=t[0],e=t[1],s[c][e]=1,function(n,c,e){for(var s=0;s<=7;s++)0===e[n][s]&&(e[n][s]=2)}(c,0,s),function(n,c,e){for(var s=0;s<=7;s++)0===e[s][c]&&(e[s][c]=2)}(0,e,s),function(n,c,e){for(var s=n-1,i=c-1,t=n+1,o=c-1,r=n-1,a=c+1,u=n+1,l=c+1;s>=0&&i>=0;)0===e[s][i]&&(e[s][i]=2),s--,i--;for(;t<=7&&o>=0;)0===e[t][o]&&(e[t][o]=2),t++,o--;for(;r>=0&&a<=7;)0===e[r][a]&&(e[r][a]=2),r--,a++;for(;u<=7&&l<=7;)0===e[u][l]&&(e[u][l]=2),u++,l++}(c,e,s)})),s}function m(n,c,e){if("add"===e)c.push(n);else if("remove"===e){var s=c.indexOf(n);c.splice(s,1)}}function O(n,c){var e=f(n,d.current);0===e?function(n,c){v(n),t.current--,i(t.current),m(n,o.current,"add"),d.current=b(o.current),console.log(d.current)}(n,d.current):1===e?function(n,c){v(n),t.current++,i(t.current),m(n,o.current,"remove"),d.current=b(o.current),console.log(d.current)}(n,d.current):2===e&&alert("Movimento Inv\xe1lido! Essa posi\xe7\xe3o est\xe1 sob ataque de uma Rainha!"),0===t.current&&1===c&&alert("Parab\xe9ns voc\xea encontrou uma solu\xe7\xe3o para o problema das 8 rainhas!!!")}function p(){for(var n="",c=1;c<=64;c++)n=String(c),document.getElementById(n).style.backgroundColor=""}function x(n,c){for(var e=Object(r.a)(n),s=c,i=b(e),t=function(n){for(var c=[],e=1;e<=64;e++){var s=String(e);0===f(s,n)&&c.push(s)}return c}(i);t.length>0;){var o=t.pop();if(o){var a=Object(r.a)(e);m(o,a,"add");var u=b(a),l=s-1;if(0===l)return[1,a,u];var d=x(a,l);if(1===d[0])return d;m(o,a,"remove")}}return s>0?[0,e,i]:[0,[],[[]]]}return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("div",{className:"ui",children:[Object(l.jsxs)("span",{children:["Pe\xe7as Restantes: ",e]}),Object(l.jsx)("button",{className:"new-game",onClick:function(){return t.current=8,i(t.current),o.current.forEach((function(n){document.getElementById(n).innerHTML=""})),o.current=[],d.current=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],void p()},children:"Novo Jogo"}),Object(l.jsx)("button",{className:"solve",onClick:function(){var n=x(o.current,t.current),c=Object(a.a)(n,3),e=c[0],s=c[1];c[2];1===e?(alert("Uma Solu\xe7\xe3o foi Encontrada com Sucesso!"),o.current.forEach((function(n){var c=s.indexOf(n);s.splice(c,1)})),s.forEach((function(n){O(n,0)})),console.log(s)):0===e&&alert("Dado o estado atual do tabuleiro, n\xe3o foi poss\xedvel encontrar uma solu\xe7\xe3o.")},children:"Solucionar Jogo"}),Object(l.jsx)("button",{className:"solve",onClick:function(){return function(){p();for(var n="",c=1;c<=64;c++)0!==f(n=String(c),d.current)&&(document.getElementById(n).style.backgroundColor="red")}()},children:"Posi\xe7\xf5es V\xe1lidas"}),Object(l.jsx)("button",{className:"solve",onClick:function(){return p()},children:"Limpar"})]}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"board",children:[Object(l.jsx)("div",{className:"pos",id:"1",onClick:function(){return O("1",1)}}),Object(l.jsx)("div",{className:"pos",id:"2",onClick:function(){return O("2",1)}}),Object(l.jsx)("div",{className:"pos",id:"3",onClick:function(){return O("3",1)}}),Object(l.jsx)("div",{className:"pos",id:"4",onClick:function(){return O("4",1)}}),Object(l.jsx)("div",{className:"pos",id:"5",onClick:function(){return O("5",1)}}),Object(l.jsx)("div",{className:"pos",id:"6",onClick:function(){return O("6",1)}}),Object(l.jsx)("div",{className:"pos",id:"7",onClick:function(){return O("7",1)}}),Object(l.jsx)("div",{className:"pos",id:"8",onClick:function(){return O("8",1)}}),Object(l.jsx)("div",{className:"pos",id:"9",onClick:function(){return O("9",1)}}),Object(l.jsx)("div",{className:"pos",id:"10",onClick:function(){return O("10",1)}}),Object(l.jsx)("div",{className:"pos",id:"11",onClick:function(){return O("11",1)}}),Object(l.jsx)("div",{className:"pos",id:"12",onClick:function(){return O("12",1)}}),Object(l.jsx)("div",{className:"pos",id:"13",onClick:function(){return O("13",1)}}),Object(l.jsx)("div",{className:"pos",id:"14",onClick:function(){return O("14",1)}}),Object(l.jsx)("div",{className:"pos",id:"15",onClick:function(){return O("15",1)}}),Object(l.jsx)("div",{className:"pos",id:"16",onClick:function(){return O("16",1)}}),Object(l.jsx)("div",{className:"pos",id:"17",onClick:function(){return O("17",1)}}),Object(l.jsx)("div",{className:"pos",id:"18",onClick:function(){return O("18",1)}}),Object(l.jsx)("div",{className:"pos",id:"19",onClick:function(){return O("19",1)}}),Object(l.jsx)("div",{className:"pos",id:"20",onClick:function(){return O("20",1)}}),Object(l.jsx)("div",{className:"pos",id:"21",onClick:function(){return O("21",1)}}),Object(l.jsx)("div",{className:"pos",id:"22",onClick:function(){return O("22",1)}}),Object(l.jsx)("div",{className:"pos",id:"23",onClick:function(){return O("23",1)}}),Object(l.jsx)("div",{className:"pos",id:"24",onClick:function(){return O("24",1)}}),Object(l.jsx)("div",{className:"pos",id:"25",onClick:function(){return O("25",1)}}),Object(l.jsx)("div",{className:"pos",id:"26",onClick:function(){return O("26",1)}}),Object(l.jsx)("div",{className:"pos",id:"27",onClick:function(){return O("27",1)}}),Object(l.jsx)("div",{className:"pos",id:"28",onClick:function(){return O("28",1)}}),Object(l.jsx)("div",{className:"pos",id:"29",onClick:function(){return O("29",1)}}),Object(l.jsx)("div",{className:"pos",id:"30",onClick:function(){return O("30",1)}}),Object(l.jsx)("div",{className:"pos",id:"31",onClick:function(){return O("31",1)}}),Object(l.jsx)("div",{className:"pos",id:"32",onClick:function(){return O("32",1)}}),Object(l.jsx)("div",{className:"pos",id:"33",onClick:function(){return O("33",1)}}),Object(l.jsx)("div",{className:"pos",id:"34",onClick:function(){return O("34",1)}}),Object(l.jsx)("div",{className:"pos",id:"35",onClick:function(){return O("35",1)}}),Object(l.jsx)("div",{className:"pos",id:"36",onClick:function(){return O("36",1)}}),Object(l.jsx)("div",{className:"pos",id:"37",onClick:function(){return O("37",1)}}),Object(l.jsx)("div",{className:"pos",id:"38",onClick:function(){return O("38",1)}}),Object(l.jsx)("div",{className:"pos",id:"39",onClick:function(){return O("39",1)}}),Object(l.jsx)("div",{className:"pos",id:"40",onClick:function(){return O("40",1)}}),Object(l.jsx)("div",{className:"pos",id:"41",onClick:function(){return O("41",1)}}),Object(l.jsx)("div",{className:"pos",id:"42",onClick:function(){return O("42",1)}}),Object(l.jsx)("div",{className:"pos",id:"43",onClick:function(){return O("43",1)}}),Object(l.jsx)("div",{className:"pos",id:"44",onClick:function(){return O("44",1)}}),Object(l.jsx)("div",{className:"pos",id:"45",onClick:function(){return O("45",1)}}),Object(l.jsx)("div",{className:"pos",id:"46",onClick:function(){return O("46",1)}}),Object(l.jsx)("div",{className:"pos",id:"47",onClick:function(){return O("47",1)}}),Object(l.jsx)("div",{className:"pos",id:"48",onClick:function(){return O("48",1)}}),Object(l.jsx)("div",{className:"pos",id:"49",onClick:function(){return O("49",1)}}),Object(l.jsx)("div",{className:"pos",id:"50",onClick:function(){return O("50",1)}}),Object(l.jsx)("div",{className:"pos",id:"51",onClick:function(){return O("51",1)}}),Object(l.jsx)("div",{className:"pos",id:"52",onClick:function(){return O("52",1)}}),Object(l.jsx)("div",{className:"pos",id:"53",onClick:function(){return O("53",1)}}),Object(l.jsx)("div",{className:"pos",id:"54",onClick:function(){return O("54",1)}}),Object(l.jsx)("div",{className:"pos",id:"55",onClick:function(){return O("55",1)}}),Object(l.jsx)("div",{className:"pos",id:"56",onClick:function(){return O("56",1)}}),Object(l.jsx)("div",{className:"pos",id:"57",onClick:function(){return O("57",1)}}),Object(l.jsx)("div",{className:"pos",id:"58",onClick:function(){return O("58",1)}}),Object(l.jsx)("div",{className:"pos",id:"59",onClick:function(){return O("59",1)}}),Object(l.jsx)("div",{className:"pos",id:"60",onClick:function(){return O("60",1)}}),Object(l.jsx)("div",{className:"pos",id:"61",onClick:function(){return O("61",1)}}),Object(l.jsx)("div",{className:"pos",id:"62",onClick:function(){return O("62",1)}}),Object(l.jsx)("div",{className:"pos",id:"63",onClick:function(){return O("63",1)}}),Object(l.jsx)("div",{className:"pos",id:"64",onClick:function(){return O("64",1)}})]})})]})};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5695d119.chunk.js.map