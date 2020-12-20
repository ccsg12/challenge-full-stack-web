(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"73cf":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("navbar"),t("v-container",{attrs:{"my-4":""}},[t("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[t("v-card",{staticClass:"px-4 pb-4",attrs:{width:"600"}},[t("v-card-title",{staticClass:"text-h3"},[e._v(" Cadastro de alunos ")]),t("v-divider"),t("v-card-text",[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(a){var r=a.invalid;return[t("form",{on:{submit:function(a){return a.preventDefault(),e.submit(a)}}},[t("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("v-text-field",{attrs:{"error-messages":r,label:"Nome",required:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("v-text-field",{attrs:{"error-messages":r,label:"E-mail",required:""},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"ra",rules:{required:!0,digits:6}},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("v-text-field",{attrs:{counter:6,"error-messages":r,label:"RA",required:""},model:{value:e.ra,callback:function(a){e.ra=a},expression:"ra"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"cpf",rules:{required:!0,digits:11}},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("v-text-field",{attrs:{counter:11,"error-messages":r,label:"CPF (apenas números)",required:""},model:{value:e.cpf,callback:function(a){e.cpf=a},expression:"cpf"}})]}}],null,!0)}),t("v-btn",{staticClass:"mr-4 brown lighten-4",attrs:{type:"submit",disabled:r,small:""}},[e._v(" Cadastar ")]),t("v-btn",{staticClass:"ml-4 error",attrs:{small:"",router:"",to:"/"}},[e._v(" Cancelar ")]),t("v-dialog",{attrs:{"max-width":"300px"},model:{value:e.dialog1,callback:function(a){e.dialog1=a},expression:"dialog1"}},[t("v-card",[t("v-card-title"),t("v-card-text",[e._v(" "+e._s(e.registerError)+" ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:"",color:"green darken-1"},on:{click:function(a){e.dialog1=!1}}},[e._v(" Fechar ")])],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)},i=[],n=(t("4de4"),t("b0c0"),t("5530")),o=t("d178"),s=t("bc3a"),l=t.n(s),d=t("4c93"),c=t("7bb1");Object(c["d"])("eager"),Object(c["c"])("digits",Object(n["a"])(Object(n["a"])({},d["a"]),{},{message:"{_field_} precisa de {length} digitos. ({_value_})"})),Object(c["c"])("required",Object(n["a"])(Object(n["a"])({},d["c"]),{},{message:"{_field_} não pode estar vazio"})),Object(c["c"])("email",Object(n["a"])(Object(n["a"])({},d["b"]),{},{message:"E-mail inválido"}));var u={name:"Register",components:{navbar:o["a"],ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{name:"",cpf:"",email:"",ra:"",dialog1:!1,registerError:""}},methods:{submit:function(){var e=this;this.$refs.observer.validate();var a={name:this.name,email:this.email,ra:this.ra,cpf:this.cpf};l.a.get("http://localhost:8082/students").then((function(t){var r=t.data.filter((function(e){return e.name==a.name}));0==r.length?(r=t.data.filter((function(e){return e.email==a.email})),0==r.length?(r=t.data.filter((function(e){return e.ra==a.ra})),0==r.length?(r=t.data.filter((function(e){return e.cpf==a.cpf})),0==r.length?l.a.post("http://localhost:8082/student",a).then((function(a){200==a.status&&(e.registerError="Estudante cadastrado com sucesso",e.dialog1=!e.dialog1)})).catch((function(e){console.log(e)})):(e.registerError="CPF já cadastrado",e.dialog1=!e.dialog1)):(e.registerError="RA já cadastrado",e.dialog1=!e.dialog1)):(e.registerError="Email já cadastrado",e.dialog1=!e.dialog1)):(e.registerError="Nome já cadastrado",e.dialog1=!e.dialog1)})).catch((function(e){console.log(e)}))}}},v=u,f=t("2877"),m=t("6544"),b=t.n(m),g=t("8336"),p=t("b0af"),h=t("99d9"),x=t("a523"),_=t("169a"),j=t("ce7e"),C=t("a722"),k=t("2fa4"),V=t("8654"),E=Object(f["a"])(v,r,i,!1,null,null,null);a["default"]=E.exports;b()(E,{VBtn:g["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:x["a"],VDialog:_["a"],VDivider:j["a"],VLayout:C["a"],VSpacer:k["a"],VTextField:V["a"]})}}]);
//# sourceMappingURL=about.66b036d3.js.map