(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",function(){return y});var s=i("mLBW");i("TJLY");const n="item",r="header",l="footer",h=(t,e,i,s)=>{for(const h of t)h.change=0,h.d=!0;const n=[],r=s.offset+s.length;for(let h=s.offset;h<r;h++){const s=i[h],r=t.find(t=>t.d&&t.cell===s);if(r){const t=e[h];t!==r.top&&(r.top=t,r.change=1),r.d=!1}else n.push(s)}const l=t.filter(t=>t.d);for(const h of n){const i=l.find(t=>t.d&&t.cell.type===h.type),s=h.i;i?(i.d=!1,i.change=2,i.cell=h,i.top=e[s]):t.push({d:!1,cell:h,visible:!0,change:2,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})},o=(t,e,i,s)=>{const n=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),r=n.length;let l;for(let h=0;h<i.length;h++){const o=i[h],c=o.cell;if(2===o.change){if(h<r)e(l=n[h],c,h);else{const i=a(t,c.type);(l=e(i,c,h)||i).classList.add("virtual-item"),t.appendChild(l)}l.$ionCell=c}else l=n[h];0!==o.change&&(l.style.transform=`translate3d(0,${o.top}px,0)`);const d=c.visible;o.visible!==d&&(d?l.classList.remove("virtual-loading"):l.classList.add("virtual-loading"),o.visible=d),c.reads>0&&(s(c,l),c.reads--)}},a=(t,e)=>{const i=c(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},c=(t,e)=>{switch(e){case n:return t.querySelector("template:not([name])");case r:return t.querySelector("template[name=header]");case l:return t.querySelector("template[name=footer]")}},d=(t,e,i)=>({top:Math.max(t-i,0),bottom:t+e+i}),p=(t,e,i)=>{const s=e.top,n=e.bottom;let r=0;for(;r<t.length&&!(t[r]>s);r++);const l=Math.max(r-i-1,0);for(;r<t.length&&!(t[r]>=n);r++);return{offset:l,length:Math.min(r+i,t.length)-l}},g=(t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length,u=(t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===e),m=(t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t},f=(t,e,i,s,h,o,a,c,d,p,g,u)=>{const m=[],f=u+g;for(let v=g;v<f;v++){const g=t[v];if(h){const e=h(g,v,t);null!=e&&m.push({i:p++,type:r,value:e,index:v,height:i?i(e,v):a,reads:i?0:2,visible:!!i})}if(m.push({i:p++,type:n,value:g,index:v,height:e?e(g,v):d,reads:e?0:2,visible:!!e}),o){const e=o(g,v,t);null!=e&&m.push({i:p++,type:l,value:e,index:v,height:s?s(e,v):c,reads:s?0:2,visible:!!s})}}return m},v=(t,e,i)=>{let s=t[i];for(let n=i;n<t.length;n++)t[n]=s,s+=e[n].height;return s},x=(t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)},b=(t,e,i)=>{const s=e.find(e=>e.type===n&&e.index===t);return s?i[s.i]:-1};class y{constructor(t){Object(s.m)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async componentDidLoad(){const t=this.el.closest("ion-content");t?(await t.componentOnReady(),this.contentEl=t,this.scrollEl=await t.getScrollElement(),this.calcCells(),this.updateState()):console.error("virtual-scroll must be used inside ion-content")}componentDidUpdate(){this.updateState()}componentDidUnload(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(b(t,this.cells,this.getHeightIndex()))}async checkRange(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,s=u(this.cells,t),n=f(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,t,i);this.cells=m(this.cells,n,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.g)(this.readVS.bind(this)),Object(s.n)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,n=i;for(;n&&n!==t;)s+=n.offsetTop,n=n.parentElement;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=d(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),s=p(i,e,2);g(t,this.range,s)&&(this.range=s,h(this.virtualDom,i,this.cells,s),this.nodeRender?o(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=f(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=x(this.heightIndex,this.cells.length),this.totalHeight=v(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case n:return this.renderItem(i,s);case r:return this.renderHeader(i,s);case l:return this.renderFooter(i,s)}}hostData(){return{style:{height:`${this.totalHeight}px`}}}__stencil_render(){if(this.renderItem)return Object(s.i)(H,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t)))}get el(){return Object(s.f)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}render(){return Object(s.i)(s.a,this.hostData(),this.__stencil_render())}static get style(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}const H=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],n=e.vattrs||{};let r=n.class||"";return r+="virtual-item ",s.visible||(r+="virtual-loading"),Object.assign({},e,{vattrs:Object.assign({},n,{class:r,style:Object.assign({},n.style,{transform:`translate3d(0,${s.top}px,0)`})})})})}}]);