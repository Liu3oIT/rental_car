"use strict";(self.webpackChunkrental_car=self.webpackChunkrental_car||[]).push([[212],{109:(n,e,r)=>{r.d(e,{C1:()=>h,LP:()=>m,Ln:()=>u,Q5:()=>k,bs:()=>b,c7:()=>Z,kI:()=>y,mU:()=>g,w5:()=>j});var t,i,o,s,a,l,d,c,p,x=r(168),f=r(686);const g=f.Z.ul(t||(t=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  grid-gap: 29px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 100px;\n"]))),h=f.Z.li(i||(i=(0,x.Z)(["\n  width: 274px;\n  height: 426px;\n  position: relative;\n  border-radius: 12px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),m=f.Z.img(o||(o=(0,x.Z)(["\n  width: 100%;\n  \n  height: 268px;\n  border-radius: 12px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),u=f.Z.p(s||(s=(0,x.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),b=f.Z.span(a||(a=(0,x.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 1.5;\n"]))),Z=f.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),j=f.Z.div(d||(d=(0,x.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),y=f.Z.p(c||(c=(0,x.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-family: Manrope;\n  font-size: 12px;\n  line-height: 1.5;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding-right: 6px;\n  padding-left: 6px;\n  border-right: 1px solid rgba(18, 20, 23, 0.1);\n"]))),k=f.Z.button(p||(p=(0,x.Z)(["\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  background-color: #3470ff;\n  border-radius: 12px;\n  color: #fff;\n  border-color: transparent;\n  &:hover {\n    background: #0b44cd;\n    cursor: click;\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n  }\n"])))},520:(n,e,r)=>{r.d(e,{Hl:()=>b,eI:()=>g,fO:()=>m,l0:()=>h,pj:()=>u,t:()=>x,zZ:()=>f});var t,i,o,s,a,l,d,c=r(168),p=r(686);const x=p.Z.button(t||(t=(0,c.Z)(["\n  padding: 12px 99px;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 12px;\n  color: #3470ff;\n  display: flex;\n  margin: 0 auto;\n  border-color: transparent;\n  &:hover {\n    color: #0b44cd;\n    cursor: click;\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n  }\n"]))),f=p.Z.select(i||(i=(0,c.Z)(["\n  display: flex;\n  padding: 14px 89px 14px 18px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 14px;\n  background: #f7f7fb;\n  border-color: transparent;\n"]))),g=p.Z.div(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),h=p.Z.form(s||(s=(0,c.Z)(["\n  display: flex;\n  gap: 18px;\n  justify-content: center;\n  align-items: end;\n  margin-bottom: 50px;\n"]))),m=p.Z.button(a||(a=(0,c.Z)(["\n  display: flex;\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  border-color: transparent;\n  color: #fff;\n"]))),u=p.Z.label(l||(l=(0,c.Z)(["\n  margin-bottom: 8px;\n  color: #8a8a89;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n"]))),b=p.Z.svg(d||(d=(0,c.Z)(["\n    stroke: white;\n    position: absolute;\n    left: 240px;\n    top: 15px;fill: none;\n     &:hover {\n    fill: #0b44cd;\n    stroke: #0b44cd;\n    cursor: click;\n    \n  }\n}\n"])))},212:(n,e,r)=>{r.r(e),r.d(e,{default:()=>x});var t=r(791),i=r(420),o=r(488),s=r(109),a=r(520),l=r(946),d=r(929),c=r(268),p=r(184);const x=()=>{const[n,e]=(0,t.useState)([]),[r,x]=(0,t.useState)(!1),f=(0,i.v9)(o.N),g=(0,i.I0)();(0,t.useEffect)((()=>{const n=JSON.parse(localStorage.getItem("likes"));n&&e(n)}),[]);const h=f.filter((e=>n.includes(e.id)));console.log(h);return(0,p.jsxs)(p.Fragment,{children:[0===h.length?(0,p.jsx)(l.w,{children:"You don't have favorite cars"}):(0,p.jsx)(s.mU,{children:h.map((r=>{const t=r.address.split(",");return(0,p.jsxs)(s.C1,{children:[(0,p.jsx)(s.LP,{src:r.img,alt:r.make}),(0,p.jsx)(a.Hl,{onClick:()=>{return n=r.id,void e((e=>{if(e.includes(n)){const r=e.filter((e=>e!==n));return localStorage.setItem("likes",JSON.stringify(r)),r}{const r=[...e,n];return localStorage.setItem("likes",JSON.stringify(r)),r}}));var n},xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",style:{fill:n.includes(r.id)?"#0b44cd":"none",stroke:n.includes(r.id)?"#0b44cd":"white",strokeWidth:"1.5",cursor:"pointer"},children:(0,p.jsx)("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z","stroke-opacity":"0.8","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,p.jsxs)(s.c7,{children:[(0,p.jsxs)(s.Ln,{children:[r.make," ",(0,p.jsxs)(s.bs,{children:[r.model,", "]}),(0,p.jsx)("span",{children:r.year})]}),(0,p.jsxs)("p",{children:["$",r.rentalPrice]})]}),(0,p.jsxs)(s.w5,{children:[(0,p.jsx)(s.kI,{children:t[1]}),(0,p.jsx)(s.kI,{children:t[2]}),(0,p.jsx)(s.kI,{children:r.rentalCompany}),(0,p.jsx)(s.kI,{children:r.type}),(0,p.jsx)(s.kI,{children:r.model})]}),(0,p.jsx)(s.Q5,{type:"button",onClick:()=>{var n;n=r.id,g((0,d.d)(n)),x(!0),x(!0)},children:"Learn more"})]},r.id)}))}),r&&(0,p.jsx)(c.Z,{onClose:()=>{x(!1)},isOpenModal:r})]})}},946:(n,e,r)=>{r.d(e,{w:()=>o});var t,i=r(168);const o=r(686).Z.h2(t||(t=(0,i.Z)(["\n  text-align: center;\n"])))},268:(n,e,r)=>{r.d(e,{Z:()=>Q});var t,i,o,s,a,l,d,c,p,x,f,g,h,m,u,b=r(420),Z=r(168),j=r(686);const y=j.Z.div(t||(t=(0,Z.Z)(["\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(18, 20, 23, 0.5);\n  backdrop-filter: blur(4px);\n  overflow: auto;\n  overflow-y: auto;\n"]))),k=j.Z.div(i||(i=(0,Z.Z)(["\n  width: 460px;\n  height: 752px;\n  text-align: center;\n  padding: 40px 40px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border-radius: 24px;\n"]))),w=j.Z.img(o||(o=(0,Z.Z)(["\n  width: 460px;\n  height: 314px;\n  border-radius: 12px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),v=j.Z.p(s||(s=(0,Z.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),C=j.Z.span(a||(a=(0,Z.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 1.5;\n"]))),z=j.Z.ul(l||(l=(0,Z.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n  list-style-type: none;\n  padding: 0;\n"]))),M=j.Z.li(d||(d=(0,Z.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-family: Manrope;\n  font-size: 12px;\n  line-height: 1.5;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding-right: 6px;\n  padding-left: 6px;\n  border-right: 1px solid rgba(18, 20, 23, 0.1);\n"]))),I=j.Z.p(c||(c=(0,Z.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 1.42;\n  text-align: start;\n  margin-top: 0;\n  margin-bottom: 24px;\n  padding-right: 6px;\n  padding-left: 6px;\n"]))),S=j.Z.div(p||(p=(0,Z.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 1.42;\n  margin-top: 0;\n  margin-bottom: 8px;\n  padding-right: 6px;\n  padding-left: 6px;\n  text-align: start;\n"]))),L=j.Z.div(x||(x=(0,Z.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 1.42;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding-right: 6px;\n  padding-left: 6px;\n  text-align: start;\n"]))),O=j.Z.p(f||(f=(0,Z.Z)(["\n  color: #363535;\n  font-family: Montserrat;\n  font-size: 12px;\n  line-height: 1.5;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding: 7px 14px;\n  background-color: #f9f9f9;\n  border-radius: 35px;\n"]))),N=j.Z.span(g||(g=(0,Z.Z)(["\n  color: #3470ff;\n  font-family: Montserrat;\n  font-size: 14px;\n  line-height: 1.42;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding: 7px 14px;\n"]))),P=j.Z.div(h||(h=(0,Z.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),E=j.Z.button(m||(m=(0,Z.Z)(["\n  display: flex;\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  border-color: transparent;\n  &:hover {\n    background: #0b44cd;\n    cursor: click;\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n  }\n"]))),F=j.Z.button(u||(u=(0,Z.Z)(["\n  position: absolute;\n  top: 12px;\n\n  left: 500px;\n  font-size: 14px;\n  border-color: transparent;\n  background: transparent;\n  &:hover {\n    color: #0b44cd;\n    cursor: click;\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n  }\n"])));var q=r(488),J=r(791),H=r(184);const Q=n=>{let{isOpenModal:e,onClose:r}=n;const[t,i]=(0,J.useState)({}),o=(0,b.v9)(q.q),s=t.address?t.address.split(","):[];return(0,J.useEffect)((()=>{e||i({})}),[e]),(0,J.useEffect)((()=>{e&&o&&i(o)}),[e,o]),(0,H.jsx)(H.Fragment,{children:o?(0,H.jsx)(y,{children:(0,H.jsxs)(k,{children:[(0,H.jsx)(F,{onClick:r,openModal:e,children:"x"}),(0,H.jsx)(w,{src:o.img,alt:""}),(0,H.jsxs)(v,{children:[o.make," ",(0,H.jsxs)(C,{children:[o.model,", "]}),(0,H.jsx)("span",{children:o.year})]}),(0,H.jsxs)(z,{children:[(0,H.jsx)(M,{children:s[1]}),(0,H.jsx)(M,{children:s[2]}),(0,H.jsxs)(M,{children:["Id: ",o.id]}),(0,H.jsxs)(M,{children:["Year: ",o.year]}),(0,H.jsxs)(M,{children:["Type: ",o.type]}),(0,H.jsxs)(M,{children:["Fuel Consumption: ",o.fuelConsumption]}),(0,H.jsxs)(M,{children:["Engine Size: ",o.engineSize]})]}),(0,H.jsx)(I,{children:o.description}),(0,H.jsx)(S,{children:"Accessories and functionalities"}),(0,H.jsx)(z,{children:o.accessories.map(((n,e)=>(0,H.jsxs)(M,{children:[" ",n," "]},e)))}),(0,H.jsxs)(L,{children:["Rental Conditions:",(0,H.jsxs)(P,{children:[(0,H.jsxs)(O,{children:["Minimum age :",(0,H.jsx)(N,{children:"25"})]}),(0,H.jsx)(O,{children:"Valid driver\u2019s license"})]}),(0,H.jsxs)(P,{children:[(0,H.jsx)(O,{children:"Security deposite required "}),(0,H.jsxs)(O,{children:["Mileage: ",(0,H.jsx)(N,{children:o.mileage})]}),(0,H.jsxs)(O,{children:["Price: ",(0,H.jsxs)(N,{children:[o.rentalPrice,"$"]})]})]})]}),(0,H.jsx)(E,{type:"button",children:"Rental car"})]})}):(0,H.jsx)(H.Fragment,{})})}},488:(n,e,r)=>{r.d(e,{N:()=>t,q:()=>i});const t=n=>n.cars.cars,i=n=>n.car.car}}]);
//# sourceMappingURL=212.ab4f6813.chunk.js.map