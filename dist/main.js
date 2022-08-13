(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{H:()=>y});let t=[];const i=e=>t=e,r=()=>t;class a{constructor(){this.enemy,this.gameboard}}class d extends a{attack(e){e=Number(e),this.enemy.gameboard.validAttack(2,e)&&this.enemy.gameboard.receiveAttack(e)}}class n extends a{attack(){(e=>{const t=e.gameboard.ships.filter((e=>!e.sunk&&e.hits.length>0)),i=()=>{let r;if(r=t.length>0?(()=>{const e=t[0].hits.sort(((e,t)=>e-t));let i;if(1===e.length){switch(!0){case e[0]<=9:i=[e[0]+1,e[0]-1,e[0]+10];break;case e[0]>=90:i=[e[0]+1,e[0]-1,e[0]-10];break;case"0"==String(e[0]).charAt(String(e[0]).length-1):i=[e[0]+1,e[0]+10,e[0]-10];break;case"9"==String(e[0]).charAt(String(e[0]).length-1):i=[e[0]-1,e[0]+10,e[0]-10];break;default:i=[e[0]+1,e[0]-1,e[0]+10,e[0]-10]}return i[Math.floor(Math.random()*i.length)]}if(e.length>1){const t=e[0],i=e[e.length-1];let r;return t<=9&&(r=i+10),i-t<10?r="0"==String(t).charAt(String(t).length-1)?[i+1]:"9"==String(i).charAt(String(i).length-1)?[t-1]:[t-1,i+1]:i-t>=10&&(r=t<=9?[i+10]:i>=90?[t-10]:[t-10,i+10]),r[Math.floor(Math.random()*r.length)]}})():Math.floor(100*Math.random()),e.gameboard.validAttack(1,r))return e.gameboard.receiveAttack(r),!0;i()};i()})(this.enemy)}placeShips(e){(e=>{const t=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),a=e=>{const a=e=>{let i=[];const r=t(0,1);let a=t(100,199);i.push(a);let d=1;for(;d<e;)0===r&&(a+=10,i.push(a)),1===r&&(a+=1,i.push(a)),d++;return i};for(;;){let t=a(e),d=r();if(!(!t.every((e=>!d.includes(e)))||!t.every((e=>e<=200))||t.includes(110)||t.includes(120)||t.includes(130)||t.includes(140)||t.includes(150)||t.includes(160)||t.includes(170)||t.includes(180)||t.includes(190)))return i(d.concat(t)),t}},d=a(5),n=a(4),s=a(3),o=a(3),c=a(2);e.computerPlaceShip(5,d),e.computerPlaceShip(4,n),e.computerPlaceShip(3,s),e.computerPlaceShip(3,o),e.computerPlaceShip(2,c)})(e)}}let s;const o=()=>s;let c;const l=()=>c,m=e=>c=e,g=(()=>{const e=e=>{const t=[];for(const i of e)t.push(Number(i.id));return e.every((e=>!e.classList.contains("ship")))&&t.every((e=>e<100))&&!(t.includes(9)&&t.includes(10))&&!(t.includes(19)&&t.includes(20))&&!(t.includes(29)&&t.includes(30))&&!(t.includes(39)&&t.includes(40))&&!(t.includes(49)&&t.includes(50))&&!(t.includes(59)&&t.includes(60))&&!(t.includes(69)&&t.includes(70))&&!(t.includes(79)&&t.includes(80))&&!(t.includes(89)&&t.includes(90))};return{shipPartIdentifier:e=>{var t;t=Array.from(e.target.parentNode.children).indexOf(e.target),s=t},shipOrientation:e=>{let t;e.target.classList.contains("vertical")?t="vertical":e.target.classList.contains("horizontal")&&(t="horizontal"),m(t)},dropCarrier:t=>{t.preventDefault();const i=o(),r=l();if(t.target.classList.contains("zone")&&t.target.parentNode.classList.contains("gameboard1")){const a=document.getElementById(`${Number(t.target.id)+10}`),d=document.getElementById(`${Number(t.target.id)+20}`),n=document.getElementById(`${Number(t.target.id)+30}`),s=document.getElementById(`${Number(t.target.id)+40}`),o=document.getElementById(""+(Number(t.target.id)-10)),c=document.getElementById(""+(Number(t.target.id)-20)),l=document.getElementById(""+(Number(t.target.id)-30)),m=document.getElementById(""+(Number(t.target.id)-40)),g=document.getElementById(""+(Number(t.target.id)-1)),u=document.getElementById(""+(Number(t.target.id)-2)),h=document.getElementById(""+(Number(t.target.id)-3)),p=document.getElementById(""+(Number(t.target.id)-4)),b=document.getElementById(`${Number(t.target.id)+1}`),f=document.getElementById(`${Number(t.target.id)+2}`),S=document.getElementById(`${Number(t.target.id)+3}`),E=document.getElementById(`${Number(t.target.id)+4}`);if("vertical"===r){if(0===i){const i=[t.target,a,d,n,s];e(i)&&y.gameboard1.placeShip(5,[t.target.id,a.id,d.id,n.id,s.id])}if(1===i){const i=[o,t.target,a,d,n];e(i)&&y.gameboard1.placeShip(5,[o.id,t.target.id,a.id,d.id,n.id])}if(2===i){const i=[c,o,t.target,a,d];e(i)&&y.gameboard1.placeShip(5,[c.id,o.id,t.target.id,a.id,d.id])}if(3===i){const i=[l,c,o,t.target,a];e(i)&&y.gameboard1.placeShip(5,[l.id,c.id,o.id,t.target.id,a.id])}if(4===i){const i=[m,l,c,o,t.target];e(i)&&y.gameboard1.placeShip(5,[m.id,l.id,c.id,o.id,t.target.id])}}if("horizontal"===r){if(0===i){const i=[t.target,b,f,S,E];e(i)&&y.gameboard1.placeShip(5,[t.target.id,b.id,f.id,S.id,E.id])}if(1===i){const i=[g,t.target,b,f,S];e(i)&&y.gameboard1.placeShip(5,[g.id,t.target.id,b.id,f.id,S.id])}if(2===i){const i=[u,g,t.target,b,f];e(i)&&y.gameboard1.placeShip(5,[u.id,g.id,t.target.id,b.id,f.id])}if(3===i){const i=[h,u,g,t.target,b];e(i)&&y.gameboard1.placeShip(5,[h.id,u.id,g.id,t.target.id,b.id])}if(4===i){const i=[p,h,u,g,t.target];e(i)&&y.gameboard1.placeShip(5,[p.id,h.id,u.id,g.id,t.target.id])}}}},dropBattleship:t=>{t.preventDefault();const i=o(),r=l();if(t.target.classList.contains("zone")&&t.target.parentNode.classList.contains("gameboard1")){const a=document.getElementById(`${Number(t.target.id)+10}`),d=document.getElementById(`${Number(t.target.id)+20}`),n=document.getElementById(`${Number(t.target.id)+30}`),s=document.getElementById(""+(Number(t.target.id)-10)),o=document.getElementById(""+(Number(t.target.id)-20)),c=document.getElementById(""+(Number(t.target.id)-30)),l=document.getElementById(""+(Number(t.target.id)-1)),m=document.getElementById(""+(Number(t.target.id)-2)),g=document.getElementById(""+(Number(t.target.id)-3)),u=document.getElementById(`${Number(t.target.id)+1}`),h=document.getElementById(`${Number(t.target.id)+2}`),p=document.getElementById(`${Number(t.target.id)+3}`);if("vertical"===r){if(0===i){const i=[t.target,a,d,n];e(i)&&y.gameboard1.placeShip(4,[t.target.id,a.id,d.id,n.id])}if(1===i){const i=[s,t.target,a,d];e(i)&&y.gameboard1.placeShip(4,[s.id,t.target.id,a.id,d.id])}if(2===i){const i=[o,s,t.target,a];e(i)&&y.gameboard1.placeShip(4,[o.id,s.id,t.target.id,a.id])}if(3===i){const i=[c,o,s,t.target];e(i)&&y.gameboard1.placeShip(4,[c.id,o.id,s.id,t.target.id])}}if("horizontal"===r){if(0===i){const i=[t.target,u,h,p];e(i)&&y.gameboard1.placeShip(4,[t.target.id,u.id,h.id,p.id])}if(1===i){const i=[l,t.target,u,h];e(i)&&y.gameboard1.placeShip(4,[l.id,t.target.id,u.id,h.id])}if(2===i){const i=[m,l,t.target,u];e(i)&&y.gameboard1.placeShip(4,[m.id,l.id,t.target.id,u.id])}if(3===i){const i=[g,m,l,t.target];e(i)&&y.gameboard1.placeShip(4,[g.id,m.id,l.id,t.target.id])}}}},dropCruiser:t=>{t.preventDefault();const i=o(),r=l();if(t.target.classList.contains("zone")&&t.target.parentNode.classList.contains("gameboard1")){const a=document.getElementById(`${Number(t.target.id)+10}`),d=document.getElementById(`${Number(t.target.id)+20}`),n=document.getElementById(""+(Number(t.target.id)-10)),s=document.getElementById(""+(Number(t.target.id)-20)),o=document.getElementById(""+(Number(t.target.id)-1)),c=document.getElementById(""+(Number(t.target.id)-2)),l=document.getElementById(`${Number(t.target.id)+1}`),m=document.getElementById(`${Number(t.target.id)+2}`);if("vertical"===r){if(0===i){const i=[t.target,a,d];e(i)&&y.gameboard1.placeShip(3,[t.target.id,a.id,d.id])}if(1===i){const i=[n,t.target,a];e(i)&&y.gameboard1.placeShip(3,[n.id,t.target.id,a.id])}if(2===i){const i=[s,n,t.target];e(i)&&y.gameboard1.placeShip(3,[s.id,n.id,t.target.id])}}if("horizontal"===r){if(0===i){const i=[t.target,l,m];e(i)&&y.gameboard1.placeShip(3,[t.target.id,l.id,m.id])}if(1===i){const i=[o,t.target,l];e(i)&&y.gameboard1.placeShip(3,[o.id,t.target.id,l.id])}if(2===i){const i=[c,o,t.target];e(i)&&y.gameboard1.placeShip(3,[c.id,o.id,t.target.id])}}}},dropDestroyer:t=>{t.preventDefault();const i=o(),r=l();if(t.target.classList.contains("zone")&&t.target.parentNode.classList.contains("gameboard1")){const a=document.getElementById(`${Number(t.target.id)+10}`),d=document.getElementById(""+(Number(t.target.id)-10)),n=document.getElementById(""+(Number(t.target.id)-1)),s=document.getElementById(`${Number(t.target.id)+1}`);if("vertical"===r){if(0===i){const i=[t.target,a];e(i)&&(y.gameboard1.placeShip(2,[t.target.id,a.id]),y.setUpComplete())}if(1===i){const i=[d,t.target];e(i)&&(y.gameboard1.placeShip(2,[d.id,t.target.id]),y.setUpComplete())}}if("horizontal"===r){if(0===i){const i=[t.target,s];e(i)&&(y.gameboard1.placeShip(2,[t.target.id,s.id]),y.setUpComplete())}if(1===i){const i=[n,t.target];e(i)&&(y.gameboard1.placeShip(2,[n.id,t.target.id]),y.setUpComplete())}}}}}})(),u=(()=>{const e=document.getElementById("player1Message");let t;const i=()=>{for(let e=0;e<t.length;e++)clearTimeout(t[e])};return e.classList.add("introMessage"),t=[],t.push(setTimeout((()=>{e.textContent="It's up to you to command your fleet..."}),2e3)),t.push(setTimeout((()=>{e.textContent="...obliterate the enemy..."}),4e3)),t.push(setTimeout((()=>{e.textContent="...and save the world!"}),5500)),t.push(setTimeout((()=>{e.textContent="To begin, place your carrier."}),7500)),document.querySelector(".shipBank"),document.querySelector(".carrier").classList.toggle("hidden"),document.querySelector(".battleship").classList.add("hidden"),document.querySelector(".cruiser").classList.add("hidden"),document.querySelector(".submarine").classList.add("hidden"),document.querySelector(".destroyer").classList.add("hidden"),{renderShip:e=>{for(let t=0;t<e.length;t++)document.getElementById(e[t]).classList.add("ship")},renderHit:t=>{(t=document.getElementById(t)).classList.add("hit"),i(),t.id<=99?e.textContent="The enemy hit your ship!":e.textContent="You hit an enemy ship!"},renderMiss:t=>{(t=document.getElementById(t)).classList.add("miss"),i(),t.id<=99?e.textContent="The enemy missed!":e.textContent="You missed!"},renderSunk:t=>{(t=document.getElementById(t)).classList.add("hit"),i(),t.id<=99?e.textContent="The enemy sank your ship!":e.textContent="You sank the enemy's ship!"},showNextShip:(t,r)=>{const a=document.querySelector(`.${t}`),d=document.querySelector(`.${r}`);a.classList.toggle("hidden"),d.classList.toggle("hidden"),i(),e.textContent=`Place your ${r}`},lastShipPlaced:()=>{document.querySelector(".destroyer").classList.toggle("hidden")},shipPlacementComplete:()=>{e.textContent="",document.getElementById("rotateShip").classList.toggle("hidden"),document.querySelector(".shipBank").classList.add("shrink"),e.textContent="You didn't start this war...",t=[],t.push(setTimeout((()=>{e.textContent="...but you need to end it."}),2e3)),t.push(setTimeout((()=>{e.textContent="Take a shot at the enemy!"}),4e3))},player1Win:()=>{e.classList.add("introMessage"),e.textContent="You won! Thanks for saving the world!"},player2Win:()=>{e.classList.add("introMessage"),e.textContent="You lost. We're doomed."}}})();class h{constructor(e,t){this.length=e,this.zones=t,this.hits=[],this.sunk=!1}hitShip(e){if(this.hits.push(e),this.hits.length===this.length)return this.sunk=!0,!0}}class p{constructor(){this.ships=[],this.missedShots=[],this.shipToPlace=["carrier","battleship","cruiser","submarine","destroyer"],this.shipToPlaceIndex=0}placeShip(e,t){t=t.map((e=>Number(e)));for(const e of t)for(const t of this.ships)if(t.zones.some((t=>t===e)))return;const i=new h(e,t);this.ships.push(i),u.renderShip(t),this.shipToPlaceIndex++,this.shipToPlaceIndex<=4&&((e,t)=>{const i=document.querySelector(".gameboard1"),r=document.querySelector(`.${t}`);r.addEventListener("mousedown",g.shipPartIdentifier),r.addEventListener("mousedown",g.shipOrientation);const a={carrier:g.dropCarrier,battleship:g.dropBattleship,cruiser:g.dropCruiser,submarine:g.dropCruiser,destroyer:g.dropDestroyer};r.addEventListener("mousedown",(()=>{i.addEventListener("drop",a[t],{once:!0})})),u.showNextShip(e,t)})(this.shipToPlace[this.shipToPlaceIndex-1],this.shipToPlace[this.shipToPlaceIndex]),5===this.shipToPlaceIndex&&u.lastShipPlaced()}computerPlaceShip(e,t){const i=new h(e,t);this.ships.push(i)}validAttack(e,t){if(1===e&&(t<0||t>99))return!1;if(2===e&&(t<100||t>199))return!1;if(this.missedShots.some((e=>e===t)))return!1;for(const e of this.ships)if(e.hits.some((e=>e===t)))return!1;return!0}receiveAttack(e){for(const t of this.ships)if(1===t.zones.filter((t=>t===e)).length)return t.hitShip(e)?u.renderSunk(e):u.renderHit(e),!0;return this.missedShots.push(e),u.renderMiss(e),!0}allSunk(){return this.ships.every((e=>e.sunk))}}const y=new class{constructor(e="Player",t="Computer"){this.player1=new d(e),this.player2=new n(t),this.gameboard1=new p,this.gameboard2=new p,this.gameOver=!0,this.winner="",this.turn=1}setUpGame(){this.player1.gameboard=this.gameboard1,this.player2.gameboard=this.gameboard2,this.player1.enemy=this.player2,this.player2.enemy=this.player1,this.player2.placeShips(this.gameboard2),(()=>{const e=document.querySelector(".gameboard1");e.addEventListener("drop",g.dropCarrier,{once:!0});const t=document.querySelector(".carrier");t.addEventListener("mousedown",(()=>{e.addEventListener("drop",g.dropCarrier,{once:!0})})),t.addEventListener("mousedown",g.shipPartIdentifier,{once:!0}),t.addEventListener("mousedown",g.shipOrientation),t.addEventListener("mousedown",g.getOrientation),document.addEventListener("dragover",(e=>e.preventDefault())),document.querySelectorAll(".draggableShip").forEach((e=>{e.addEventListener("dragstart",(t=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))}));const i=e=>{y.playRound(e.target.id)};document.querySelectorAll(".zone").forEach((e=>e.addEventListener("click",i)))})(),document.getElementById("rotateShip").addEventListener("click",(()=>{document.querySelectorAll(".draggableShip").forEach((e=>{e.classList.toggle("vertical"),e.classList.toggle("horizontal"),Array.from(e.children).forEach((e=>{e.classList.toggle("vertical"),e.classList.toggle("horizontal")}))}))})),(()=>{for(const e of this.gameboard2.ships)console.log("Computer Ship:",e.zones)})()}setUpComplete(){u.shipPlacementComplete(),this.gameOver=!1}playRound(e){if(!this.gameOver&&1===this.turn){if(this.player1.attack(e),this.gameboard2.allSunk())return this.winner=this.player1,this.gameOver=!0,void u.player1Win();const t=()=>{if(this.player2.attack(),this.gameboard1.allSunk())return this.winner=this.player2,this.gameOver=!0,void u.player2Win()};this.turn=2;const i=()=>{this.turn=1};setTimeout(t,2e3),setTimeout(i,2e3)}}};y.setUpGame()})();