webpackJsonp([29],{QjS0:function(e,i){},ccKr:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={data:function(){return{timezone:[{region:"Pacific/Midway"},{region:"US/Samoa"},{region:"US/Hawaii"},{region:"US/Alaska"},{region:"US/Pacific"},{region:"America/Tijuana"},{region:"US/Arizona"},{region:"US/Mountain"},{region:"America/Chihuahua"},{region:"America/Mazatlan"},{region:"America/Mexico_City"},{region:"America/Monterrey"},{region:"Canada/Saskatchewan"},{region:"US/Central"},{region:"US/Eastern"},{region:"US/East-Indiana"},{region:"America/Bogota"},{region:"America/Lima"},{region:"America/Caracas"},{region:"Canada/Atlantic"},{region:"America/La_Paz"},{region:"America/Santiago"},{region:"Canada/Newfoundland"},{region:"America/Buenos_Aires"},{region:"Greenland"},{region:"Atlantic/Stanley"},{region:"Atlantic/Azores"},{region:"Atlantic/Cape_Verde"},{region:"Africa/Casablanca"},{region:"Europe/Dublin"},{region:"Europe/Lisbon"},{region:"Europe/London"},{region:"Africa/Monrovia"},{region:"Europe/Amsterdam"},{region:"Europe/Belgrade"},{region:"Europe/Berlin"},{region:"Europe/Bratislava"},{region:"Europe/Brussels"},{region:"Europe/Budapest"},{region:"Europe/Copenhagen"},{region:"Europe/Ljubljana"},{region:"Europe/Madrid"},{region:"Europe/Paris"},{region:"Europe/Prague"},{region:"Europe/Rome"},{region:"Europe/Sarajevo"},{region:"Europe/Skopje"},{region:"Europe/Stockholm"},{region:"Europe/Vienna"},{region:"Europe/Warsaw"},{region:"Europe/Zagreb"},{region:"Europe/Athens"},{region:"Europe/Bucharest"},{region:"Africa/Cairo"},{region:"Africa/Harare"},{region:"Europe/Helsinki"},{region:"Europe/Istanbul"},{region:"Asia/Jerusalem"},{region:"Europe/Kiev"},{region:"Europe/Minsk"},{region:"Europe/Riga"},{region:"Europe/Sofia"},{region:"Europe/Tallinn"},{region:"Europe/Vilnius"},{region:"Asia/Baghdad"},{region:"Asia/Kuwait"},{region:"Africa/Nairobi"},{region:"Asia/Riyadh"},{region:"Europe/Moscow"},{region:"Asia/Tehran"},{region:"Asia/Baku"},{region:"Europe/Volgograd"},{region:"Asia/Muscat"},{region:"Asia/Tbilisi"},{region:"Asia/Yerevan"},{region:"Asia/Kabul"},{region:"Asia/Karachi"},{region:"Asia/Tashkent"},{region:"Asia/Kolkata"},{region:"Asia/Kathmandu"},{region:"Asia/Yekaterinburg"},{region:"Asia/Almaty"},{region:"Asia/Dhaka"},{region:"Asia/Novosibirsk"},{region:"Asia/Bangkok"},{region:"Asia/Jakarta"},{region:"Asia/Krasnoyarsk"},{region:"Asia/Chongqing"},{region:"Asia/Hong_Kong"},{region:"Asia/Kuala_Lumpur"},{region:"Australia/Perth"},{region:"Asia/Singapore"},{region:"Asia/Taipei"},{region:"Asia/Ulaanbaatar"},{region:"Asia/Urumqi"},{region:"Asia/Irkutsk"},{region:"Asia/Seoul"},{region:"Asia/Tokyo"},{region:"Australia/Adelaide"},{region:"Australia/Darwin"},{region:"Asia/Yakutsk"},{region:"Australia/Brisbane"},{region:"Australia/Canberra"},{region:"Pacific/Guam"},{region:"Australia/Hobart"},{region:"Australia/Melbourne"},{region:"Pacific/Port_Moresby"},{region:"Australia/Sydney"},{region:"Asia/Vladivostok"},{region:"Asia/Magadan"},{region:"Pacific/Auckland"},{region:"Pacific/Fiji"}],timezoneSelected:"",showDialog:!0}},methods:{postTimezone:function(){var e={timezone:this.timezoneSelected};console.log(e),this.$store.dispatch("POST_PROFILEADDITIONAL",e)}}},o={render:function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("div",{staticClass:"timezone__dialog"},[r("v-dialog",{staticClass:"timezone--v-dialog",attrs:{width:"700",persistent:""},model:{value:e.showDialog,callback:function(i){e.showDialog=i},expression:"showDialog"}},[r("v-card",{staticStyle:{"background-color":"#fff","border-radius":"3px"}},[r("div",{staticClass:"gmt_auth"},[r("div",{staticClass:"gmt_auth__box"},[r("span",[e._v("Choose your timezone")]),e._v(" "),r("div",{},[r("v-select",{attrs:{items:e.timezone,"item-text":"region",label:"Select Timezone",solo:""},model:{value:e.timezoneSelected,callback:function(i){e.timezoneSelected=i},expression:"timezoneSelected"}})],1),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary"},on:{click:e.postTimezone}},[e._v("\n             Submit\n          ")])],1)])])],1)],1)},staticRenderFns:[]};var n=r("VU/8")(a,o,!1,function(e){r("QjS0")},"data-v-131ff223",null);i.default=n.exports}});
//# sourceMappingURL=29.4be501704c7d36a680bf.js.map