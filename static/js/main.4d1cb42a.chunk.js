(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/image-rules.5d74d25d.svg"},function(n,e,t){n.exports=t.p+"static/media/icon-close.919ab92a.svg"},,function(n,e,t){n.exports=t.p+"static/media/bg-triangle.1fd44bdf.svg"},function(n,e,t){n.exports=t.p+"static/media/icon-rock.8ce1e109.svg"},function(n,e,t){n.exports=t.p+"static/media/icon-paper.69a8c2e9.svg"},function(n,e,t){n.exports=t.p+"static/media/icon-scissors.bec2f9b3.svg"},function(n,e,t){n.exports=t(29)},,,,,function(n,e,t){},,,,function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),c=t(3),l=t(1),s=t(2);t(25);function u(){var n=Object(l.a)(["\n    width: 100%;\n    max-width: var(--desktop);\n    padding: 0.5rem 1rem;\n    margin: 0 auto;\n\n    border: 3px solid var(--headerOutline);\n    border-radius: 10px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1 {\n        margin-left: 1rem;\n\n        font-size: 21px;\n        font-weight: 600;\n        color: #fff;\n        line-height: 18px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.75);\n    }\n"]);return u=function(){return n},n}var p=s.a.header(u());function d(){var n=Object(l.a)(["\n    height: 100%;\n    padding: 0.5rem 1.5rem;\n\n    background-color: #fff;\n    border-radius: 5px;\n\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n\n    small {\n        color: var(--scoreText);\n    }\n\n    h3 {\n        font-weight: 700;\n        font-size: 40px;\n        color: var(--darkText);\n    }\n"]);return d=function(){return n},n}var m=s.a.div(d()),f=function(){var n=Object(r.useContext)(_).score;return a.a.createElement(m,null,a.a.createElement("small",null,"Score"),a.a.createElement("h3",null,n))},h=function(){return a.a.createElement(p,null,a.a.createElement("h1",null,"Rock ",a.a.createElement("br",null)," Paper ",a.a.createElement("br",null)," Scissors"),a.a.createElement(f,null))};function g(){var n=Object(l.a)(["\n    padding: 0.7rem 2rem;\n    margin: 1em auto;\n\n    background: none;\n    border: none;\n    border: 2px solid rgba(255, 255, 255, 0.7);\n    border-radius: 10px;\n\n    align-self: center;\n\n    text-transform: uppercase;\n    font-size: 18px;\n    font-weight: normal;\n    color: rgba(255, 255, 255, 0.7);\n    letter-spacing: 2px;\n\n    &.white {\n        background-color: #fff;\n        color: var(--scoreText);\n    }\n\n    @media (min-width: 1366px) {\n        cursor: pointer;\n    }\n"]);return g=function(){return n},n}var b=s.a.button(g()),x=function(n){return a.a.createElement(b,{onClick:n.handleClick,className:n.type||""},n.text)},v=t(13),w=t.n(v),y=t(14),k=t.n(y);function E(){var n=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n\n    background-color: #fff;\n    transition: all ease 0.2s;\n    opacity: ",";\n    pointer-events: ",";\n    h2 {\n        text-transform: uppercase;\n        color: var(--headerOutline);\n        font-size: 30px;\n    }\n\n    .closeIcon {\n        width: 20px;\n        height: 20px;\n    }\n\n    @media (min-width: 1366px) {\n        width: 500px;\n        min-height: 65%;\n        height: auto;\n        padding: 2rem;\n\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n\n        justify-content: flex-end;\n\n        border-radius: 3%;\n\n        h2 {\n            position: absolute;\n            top: 2rem;\n            left: 2rem;\n\n            transform: translateY(-50%);\n        }\n\n        .closeIcon {\n            position: absolute;\n            top: 2.2rem;\n            right: 2rem;\n\n            transform: translateY(-50%);\n\n            cursor: pointer;\n        }\n    }\n"]);return E=function(){return n},n}var j=s.a.section(E(),(function(n){return n.visible?1:0}),(function(n){return n.visible?"all":"none"})),O=function(n){return a.a.createElement(j,{visible:n.visible},a.a.createElement("h2",null,"Rules"),a.a.createElement("img",{src:w.a,alt:""}),a.a.createElement("img",{src:k.a,alt:"",onClick:n.handleClick,className:"closeIcon"}))},C=t(6),P=t.n(C),S=t(15),z=t(16),I=t.n(z);function A(){var n=Object(l.a)(["\n    width: 100%;\n    max-width: var(--desktop);\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    > div {\n        width: 100px;\n        height: 100px;\n        margin: 8% 8%;\n    }\n\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 70%;\n\n    h4 {\n        margin-top: 1rem;\n\n        font-size: 16px;\n        color: #fff;\n        text-transform: uppercase;\n        text-align: center;\n        white-space: nowrap;\n    }\n\n    .playing {\n        width: 100%;\n\n        background: transparent;\n\n        display: grid;\n        grid-template-columns: 230px;\n        grid-template-rows: 230px;\n    }\n\n    .playAgain {\n        width: 100%;\n        margin-top: 4rem;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: initial;\n\n        h2 {\n            width: 100%;\n            margin-bottom: 2rem;\n\n            color: #fff;\n            font-size: 75px;\n            font-weight: 600;\n            text-align: center;\n            text-transform: uppercase;\n\n            text-shadow: -2px 5px 5px rgba(0, 0, 0, 0.75);\n        }\n\n        button {\n            width: 70%;\n        }\n    }\n\n    @media (min-width: 768px) {\n        max-width: ",";\n        > div:not(.playAgain) {\n            width: ",";\n            height: ",";\n\n            > div {\n                border-width: 30px;\n            }\n        }\n\n        .playAgain {\n            margin-top: 20%;\n        }\n    }\n\n    @media (min-width: 1366px) {\n        max-width: ",";\n\n        justify-content: ",";\n\n        background-size: 60%;\n        > div:not(.playAgain) {\n            width: ",";\n            height: ",";\n            margin: 1.5rem 2.5rem;\n            position: relative;\n        }\n\n        h4 {\n            position: absolute;\n            top: -30%;\n            left: 0;\n            right: 0;\n\n            font-size: 1.2em;\n        }\n\n        position: relative;\n\n        .playAgain {\n            width: 40%;\n            margin: 0;\n\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n"]);return A=function(){return n},n}var T=s.a.section(A(),(function(n){var e=n.selected,t=n.bg;return e?"":t}),(function(n){return n.isPlaying?"1100px":"600px"}),(function(n){return n.isPlaying?"230px":"180px"}),(function(n){return n.isPlaying?"230px":"180px"}),(function(n){return n.isPlaying?"1100px":"500px"}),(function(n){return n.isPlaying?n.result?"space-between":"space-around":"center"}),(function(n){return n.isPlaying?"230px":"130px"}),(function(n){return n.isPlaying?"230px":"130px"})),Y=t(17),N=t.n(Y),B=t(18),F=t.n(B),M=t(19),R=t.n(M);function J(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    margin: auto;\n\n    background-color: ",";\n    border-radius: 50%;\n    border: 15px solid;\n    border-color: ",";\n    cursor: pointer;\n    pointer-events: ",";\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n\n    animation: "," 1s;\n    animation-fill-mode: forwards;\n\n    img {\n        width: 40%;\n        animation: "," 1s;\n    }\n\n    @media (min-width: 1366px) {\n        &:hover {\n            animation: "," 1s infinite;\n        }\n    }\n"]);return J=function(){return n},n}function q(){var n=Object(l.a)(["\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.1);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]);return q=function(){return n},n}function D(){var n=Object(l.a)(["\n  to {\n    transform: rotateY(360deg);\n  }\n"]);return D=function(){return n},n}function G(){var n=Object(l.a)(["\n  to {\n    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);\n  }\n"]);return G=function(){return n},n}var H=Object(s.b)(G()),K=Object(s.b)(D()),L=Object(s.b)(q()),Q=s.a.div(J(),(function(n){return n.type?"#f2f2f2":"var(--darkBlue)"}),(function(n){var e=n.type;return(null===e||void 0===e?void 0:e.baseColor)||"transparent"}),(function(n){return n.clickable?"all":"none"}),(function(n){return n.winner?H:""}),(function(n){return n.winner?K:""}),L),U={rock:{icon:N.a,baseColor:"hsl(349, 71%, 52%)",shadowColor:"hsl(349, 70%, 56%)"},paper:{icon:F.a,baseColor:"hsl(230, 89%, 62%)",shadowColor:"hsl(230, 89%, 65%)"},scissors:{icon:R.a,baseColor:"hsl(39, 89%, 49%)",shadowColor:"hsl(40, 84%, 53%)"}},V=function(n){var e,t=this,r=U[n.type]||null;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{type:r,winner:n.winner||null,clickable:!!n.handleClick,onClick:function(){return e=t,void(n.handleClick&&n.handleClick(e));var e}},a.a.createElement("img",{src:null===(e=U[n.type])||void 0===e?void 0:e.icon,alt:""})))},W=["rock","paper","scissors"],X=function(){var n=Object(r.useState)(null),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(null),l=Object(c.a)(o,2),s=l[0],u=l[1],p=Object(r.useState)(!1),d=Object(c.a)(p,2),m=d[0],f=d[1],h=Object(r.useState)(null),g=Object(c.a)(h,2),b=g[0],v=g[1],w=Object(r.useContext)(_),y=w.score,k=w.setScore;function E(){return j.apply(this,arguments)}function j(){return(j=Object(S.a)(P.a.mark((function n(){var e,t;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(this.type),f(!0),n.next=4,O();case 4:e=n.sent,t=C(this.type,e),v(t),console.log(k),"win"===t?k(y+1):"lose"===t&&k(y-1);case 9:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function O(){return new Promise((function(n,e){var t,r=setInterval((function(){var n=Math.floor(3*Math.random());u(t=W[n])}),60);setTimeout((function(){clearInterval(r),n(t)}),2e3)}))}function C(n,e){return n===e?"tie":"rock"===n?"paper"===e?"lose":"win":"paper"===n?"scissors"===e?"lose":"win":"rock"===e?"lose":"win"}return a.a.createElement(T,{bg:I.a,selected:t,isPlaying:m,result:b},m?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(V,{type:t,winner:"win"===b,className:"big"}),a.a.createElement("h4",null,"You picked")),a.a.createElement("div",null,a.a.createElement(V,{type:s||null,winner:"lose"===b}),a.a.createElement("h4",null,"The house picked")),b&&a.a.createElement("div",{className:"playAgain"},a.a.createElement("h2",null,"tie"===b?"It's a Tie":"You "+b),a.a.createElement(x,{text:"play again",type:"white",handleClick:function(){v(null),f(!1)}}))):a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{type:"paper",handleClick:E}),a.a.createElement(V,{type:"scissors",handleClick:E}),a.a.createElement(V,{type:"rock",handleClick:E})))};function Z(){var n=Object(l.a)(["\n    height: 100vh;\n    padding: 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    background-image: radial-gradient(\n        circle at top,\n        var(--blue) 0%,\n        var(--darkBlue) 100%\n    );\n\n    @media (min-width: 1366px) {\n        > button {\n            margin-right: 1rem;\n        }\n    }\n"]);return Z=function(){return n},n}var $=s.a.main(Z()),_=Object(r.createContext)();var nn=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(0),l=Object(c.a)(o,2),s=l[0],u=l[1];function p(){i(!t)}return a.a.createElement(_.Provider,{value:{score:s,setScore:u}},a.a.createElement($,null,a.a.createElement(h,null),a.a.createElement(X,null),a.a.createElement(x,{text:"Rules",handleClick:p}),a.a.createElement(O,{handleClick:p,visible:t})))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(nn,null)),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4d1cb42a.chunk.js.map