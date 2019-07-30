'use strict';var React=require('react'),flagPackCore=require('flag-pack-core');function styleInject(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&'undefined'!=typeof document){var d=document.head||document.getElementsByTagName('head')[0],e=document.createElement('style');e.type='text/css','top'===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}var css='.flag{display:inline-block;overflow:hidden;position:relative}.flag.size-s{width:16px;height:12px}.flag.size-s.dropshadow{-webkit-box-shadow:0 0 1px .5px rgba(0,0,0,.1);box-shadow:0 0 1px .5px rgba(0,0,0,.1)}.flag.size-s.border-radius{border-radius:1px}.flag.size-m{width:20px;height:15px}.flag.size-m.dropshadow{-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.flag.size-m.border-radius{border-radius:1.5px}.flag.size-l{width:32px;height:24px}.flag.size-l.dropshadow{-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1);box-shadow:0 2px 3px 0 rgba(0,0,0,.1)}.flag.size-l.border-radius{border-radius:2px}.flag::before{content:\'\';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay}.flag.border::before{width:calc(100% - 2px);height:calc(100% - 2px);border:1px solid rgba(0,0,0,.5);mix-blend-mode:overlay}.flag.border-radius::before{border-radius:1px}.flag.top-down::before{background-image:-webkit-gradient(linear,left bottom,left top,color-stop(2%,rgba(0,0,0,.3)),to(rgba(255,255,255,.7)));background-image:linear-gradient(0deg,rgba(0,0,0,.3) 2%,rgba(255,255,255,.7) 100%)}.flag.real-linear::before{background-image:linear-gradient(45deg,rgba(0,0,0,.2) 0,rgba(39,39,39,.22) 11%,rgba(255,255,255,.3) 27%,rgba(0,0,0,.24) 41%,rgba(0,0,0,.55) 52%,rgba(255,255,255,.26) 63%,rgba(0,0,0,.27) 74%,rgba(255,255,255,.3) 100%)}.flag.real-circular::before{background:radial-gradient(50% 36%,rgba(255,255,255,.3) 0,rgba(0,0,0,.24) 11%,rgba(0,0,0,.55) 17%,rgba(255,255,255,.26) 22%,rgba(0,0,0,.17) 27%,rgba(255,255,255,.28) 31%,rgba(255,255,255,0) 37%) center calc(50% - 8px)/600% 600%,radial-gradient(50% 123%,rgba(255,255,255,.3) 25%,rgba(0,0,0,.24) 48%,rgba(0,0,0,.55) 61%,rgba(255,255,255,.26) 72%,rgba(0,0,0,.17) 80%,rgba(255,255,255,.28) 88%,rgba(255,255,255,.3) 100%) center calc(50% - 8px)/600% 600%}.flag img{display:block}';styleInject(css);class Flag extends React.PureComponent{render(){const{gradient:c='',size:d='l',hasBorder:e=!1,dropshadow:f=!1,hasBorderRadius:g=!0,code:h='NL',customBorderRadius:a,className:b}=this.props;return React.createElement('div',{style:{borderRadius:a},className:`flag
          ${c}
          size-${d}
          ${e?'border':''}
          ${f?'dropshadow':''}
          ${g?'border-radius':''}
          ${b}`.replace(/\s\s+/g,' ').trim()},React.createElement('img',{src:`https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg/${d.toLowerCase()}/${flagPackCore.isoToCountryCode(h).toUpperCase()}.svg?sanitize=true`}))}}module.exports=Flag;