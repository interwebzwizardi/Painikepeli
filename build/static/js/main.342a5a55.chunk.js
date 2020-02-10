(this["webpackJsonppainikepeli-client"]=this["webpackJsonppainikepeli-client"]||[]).push([[0],{102:function(e,t,n){},136:function(e,t){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},153:function(e,t){},155:function(e,t){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),o=n.n(l),r=n(23),c=n(25),u=n(9),s=(n(102),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!1),c=Object(u.a)(o,2),s=c[0],m=c[1];return i.a.createElement("div",{id:"lobby_container"},i.a.createElement("h1",{className:"h1_titles"},"PAINIKEPELI"),i.a.createElement("div",null,i.a.createElement("input",{placeholder:"Valitse nimimerkki...",id:"username_input",type:"text",onChange:function(e){return l(e.target.value)}}),i.a.createElement(r.b,{onClick:function(e){return!n||n.length>15?function(e){e.preventDefault(),m(!0)}(e):null},to:"/game?username=".concat(n)},i.a.createElement("button",{id:"username_btn"},"Liity peliin"))),s&&i.a.createElement("div",null,i.a.createElement("p",{className:"input_error"},"Virheellinen sy\xf6te! Nimimerkin on oltava 1-15 merkki\xe4 pitk\xe4.")))}),m=n(89),p=n.n(m),d=n(90),k=n.n(d),E=(n(139),function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return i.a.createElement("div",{id:"rules_container"},i.a.createElement("button",{id:"toggle_rules",onClick:function(){l(!n)}},"S\xc4\xc4NN\xd6T"),n&&i.a.createElement("div",{id:"rules_content"},i.a.createElement("div",{id:"content_margin"},i.a.createElement("h3",{id:"rules_h3"},"Pelin s\xe4\xe4nn\xf6t:"),i.a.createElement("pre",{id:"rules_pre"},"\n1. Peli\xe4 pelataan klikkaamalla PLAY-\n   nappulaa.\n\n2. Pelaajalla on pelin alussa 20 \n   pistett\xe4, ja jokainen painallus\n   maksaa pelaajalle yhden pisteen.\n\n3. Pelaajan on mahdollista voittaa\n   peliss\xe4 pisteit\xe4 painamalla PLAY-\n   nappulaa oikealla hetkell\xe4. Pisteet\n   jaetaan kierroslaskurin mukaan, joka\n   on kaikille pelaajille yhteinen.\n\n4. Jokainen pelaajien tekem\xe4 painallus\n   lis\xe4\xe4 yhden kierroksen kierrolasku-\n   riin jonka arvo on salainen. Kier-\n   roslaskurin arvo m\xe4\xe4r\xe4\xe4 jaetaanko\n   pelaajalle pisteit\xe4, sek\xe4 kuinka\n   paljon pisteit\xe4 jaetaan.\n\n5. Kierroslaskurin joka 10. painal-\n   luksella voittaa 5 pistett\xe4, joka\n   100. painalluksella 40 pistett\xe4 ja\n   joka 500. painallus 250 pistett\xe4.\n\n6. Yksi pelikierros kest\xe4\xe4 3 minuuttia,\n   jonka j\xe4lkeen pelaajien pisteet ja\n   kierroslaskuri nollaantuvat. Uusi\n   pelikierros alkaa automaattisesti\n   vanhan p\xe4\xe4tytty\xe4.\n\n7. Jos pelaajalta loppuvat pisteet,\n   annetaan t\xe4lle mahdollisuus aloittaa\n   alusta 20 pisteell\xe4 tai lopettaa\n   pelaaminen.\n                    "))))}),j=(n(140),function(e){var t=e.socket,n=Object(a.useState)(0),l=Object(u.a)(n,2),o=l[0],r=l[1],c=Object(a.useState)(0),s=Object(u.a)(c,2),m=s[0],p=s[1],d=Object(a.useState)(10),k=Object(u.a)(d,2),E=k[0],j=k[1],f=Object(a.useState)("Sinulla on 20 pistett\xe4!"),v=Object(u.a)(f,2),b=v[0],h=v[1];return t.on("addPoints",(function(e){h("Sinulla on "+e+" pistett\xe4!")})),t.on("winningRound",(function(e,t){h("Voitit "+e+" pistett\xe4! Sinulla on "+t+" pistett\xe4!")})),t.on("updateTimer",(function(e){r(e.seconds),p(e.minutes)})),t.on("nextWin",(function(e){j(e)})),t.on("newRound",(function(){j(10),t.emit("resetStats",{points:20})})),i.a.createElement("div",{id:"points_container"},i.a.createElement("div",null,i.a.createElement("h1",{id:"title"},"PAINIKEPELI"),i.a.createElement("div",null,i.a.createElement("h1",{className:"points"},b)),i.a.createElement("h2",{id:"nextWin"},E," kierrosta seuraavaan voittoon."),i.a.createElement("h2",{id:"clock"},m,":",o)))}),f=(n(141),function(e){var t=e.socket;return i.a.createElement("div",{id:"button_container"},i.a.createElement("button",{id:"play_button",onClick:function(){t.emit("userClick",{round:1})}},"PLAY"))}),v=n(91),b=n.n(v),h=(n(172),function(e){var t=e.socket,n=Object(a.useState)(""),l=Object(u.a)(n,2),o=l[0],c=l[1];t.on("update_scoreboard",(function(e){c(e)})),t.on("newRound",(function(){c("")}));return i.a.createElement("div",null,i.a.createElement(r.b,{to:"/End"},i.a.createElement("button",{id:"endgame_btn",onClick:function(){t.disconnect()}},"LOPETA")),i.a.createElement("div",{id:"scoreboard_content"},i.a.createElement("h2",{id:"scoreboard_title"},"Scoreboard:"),b()(o)))}),_=n(203),O=n(202),S=n(201),P=n(199),g=n(200),y=n(198),A=function(e){var t=e.socket,n=Object(a.useState)(!1),l=Object(u.a)(n,2),o=l[0],c=l[1];t.on("noPoints",(function(){c(!0)}));return i.a.createElement("div",null,i.a.createElement(O.a,{open:o},i.a.createElement(y.a,{id:"alert-dialog-description"},"Oho, pisteesi loppuivat!"),i.a.createElement(P.a,null,i.a.createElement(g.a,{id:"alert-dialog-description"},"Haluatko aloittaa alusta ja jatkaa pelaamista?")),i.a.createElement(S.a,null,i.a.createElement(_.a,{onClick:function(){t.emit("resetStats",{points:20}),c(!1)}},"Kyll\xe4, haluan jatkaa!"),i.a.createElement(r.b,{to:"/End"},i.a.createElement(_.a,{onClick:function(){t.disconnect(),c(!1)}},"Ei, haluan lopettaa.")))))},C=(n(173),function(e){var t=e.location,n="https://vj-painikepeli.herokuapp.com/",l=k.a.connect(n);return l.on("userClick",(function(e){console.log(e)})),Object(a.useEffect)((function(){var e=p.a.parse(t.search),n=e.username;console.log("Nimimerkki:"+e.username),function(e){l.emit("username",{username:e})}(n)}),[n,t.search]),i.a.createElement("div",{id:"ui_container"},i.a.createElement("div",{id:"rules"},i.a.createElement(E,null)),i.a.createElement("div",{id:"app_container"},i.a.createElement("div",{id:"game_container"},i.a.createElement(j,{socket:l}),i.a.createElement(f,{socket:l})),i.a.createElement("div",{id:"scoreboard_container"},i.a.createElement(h,{socket:l}))),i.a.createElement("div",{id:"footer"},i.a.createElement("p",{id:"footer_text"},"Made by Ville Jaatinen 2020")),i.a.createElement(A,{socket:l}))}),I=(n(174),function(){return i.a.createElement("div",{id:"end_container"},i.a.createElement("h1",{id:"end_title"},"KIITOS PELAAMISESTA!"),i.a.createElement("p",{id:"end_para"},"Developed by Ville Jaatinen 2020"))}),N=function(){return i.a.createElement(r.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:s}),i.a.createElement(c.a,{path:"/game",component:C}),i.a.createElement(c.a,{path:"/end",component:I})))};o.a.render(i.a.createElement(N,null),document.querySelector("#root"))},97:function(e,t,n){e.exports=n(175)}},[[97,1,2]]]);
//# sourceMappingURL=main.342a5a55.chunk.js.map