(this["webpackJsonpsprint-14"]=this["webpackJsonpsprint-14"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(16),c=n.n(s),i=n(8),l=(n(27),n(2)),u=n(3),d=o.a.createContext();var p=function(e){var t=e.card,n=e.onCardClick,r=e.onCardLike,s=e.onCardDelete,c=o.a.useContext(d),i=t.owner._id===c._id,l="".concat(i?"photo__remove":"photo__remove_hide "),u=t.likes.some((function(e){return e._id===c._id})),p="".concat(u?"photo__like_active":"photo__like-button ");return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsxs)("li",{className:"photo__item",children:[Object(a.jsx)("div",{className:"photo__image",onClick:function(){n({card:t})},style:{backgroundImage:"url(".concat(t.link,")")}}),Object(a.jsx)("button",{type:"button",onClick:function(){s(t._id)},className:l}),Object(a.jsxs)("div",{className:"photo__name",children:[Object(a.jsx)("h2",{className:"photo__text",children:t.name}),Object(a.jsxs)("div",{className:"photo__like",children:[Object(a.jsx)("button",{type:"button",onClick:function(){r({card:t})},className:p}),Object(a.jsx)("h3",{className:"photo__like-count",children:t.likes.length})]})]})]})})};var h=function(e){var t=e.name,n=e.buttonText,r=e.title,o=e.children,s=e.isOpen,c=e.onClose,i=e.onSubmit;return Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{className:"popup popup_opened popup_type_".concat(t),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsxs)("form",{action:"#",className:"form",name:t,onSubmit:i,children:[Object(a.jsx)("p",{className:"form__text",children:r}),o,Object(a.jsx)("button",{type:"submit",className:"form__save",children:n})]}),Object(a.jsx)("button",{className:"popup__close",onClick:c})]})}):Object(a.jsx)("div",{})})};var j=function(e){var t=e.cardLink,n=e.cardName,r=e.imagePopupIsOpened,o=e.onClose;return Object(a.jsx)("div",{children:r?Object(a.jsx)("div",{className:"popup popup_opened popup_type_image",children:Object(a.jsxs)("div",{className:"popup__content popup__content_theme_transparent",children:[Object(a.jsxs)("figure",{className:"figure",children:[Object(a.jsx)("img",{src:t,alt:"",className:"figure__image"}),Object(a.jsx)("figcaption",{className:"figure__caption",children:n})]}),Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:o})]})}):Object(a.jsx)("div",{})})},m=n.p+"static/media/logo.4e8e0a1d.svg";var f=function(e){var t=e.userMail,n=e.headerText,r=e.headerLink,o=e.headerAction;return Object(a.jsx)("div",{children:Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header__container",children:[Object(a.jsx)("img",{src:m,alt:"logo",className:"logo"}),Object(a.jsxs)("div",{className:"header__container-right",children:[Object(a.jsx)("p",{className:"header__email",children:t}),Object(a.jsx)("a",{href:r,onClick:o,className:"header__text",children:n})]})]})})})};var b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"footer__container",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around The U.S."})})})})},x="https://register.nomoreparties.co",O=function(e){return fetch("".concat(x,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))};var g=function(e){var t=e.onEditProfile,n=e.onAddPlace,r=e.onEditAvatar,s=e.onClose,c=e.onCardClick,i=e.cards,u=e.imagePopupIsOpen,m=e.imageLink,x=e.imageName,g=e.onCardLike,v=e.onCardDelete,N=e.onSignOut,_=e.loggedIn,C=o.a.useContext(d),A=o.a.useState(""),k=Object(l.a)(A,2),S=k[0],y=k[1];return o.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&_&&O(e).then((function(e){e.data&&y(e.data.email)}))})),Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{headerText:"Sign out",headerLink:"/signin",headerAction:N,userMail:S}),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("section",{className:"profile",children:Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsx)("img",{src:C.avatar,alt:"avatar",className:"profile__avatar",onClick:r}),Object(a.jsxs)("div",{className:"profile__card",children:[Object(a.jsx)("h1",{className:"profile__name",children:C.name}),Object(a.jsx)("button",{className:"profile__edit",onClick:t}),Object(a.jsx)("p",{className:"profile__title",children:C.about})]}),Object(a.jsx)("button",{className:"profile__add",onClick:n})]})}),Object(a.jsx)("section",{className:"photo",children:Object(a.jsx)("ul",{className:"photo__container",children:i.map((function(e,t){return Object(a.jsx)(p,{onCardClick:c,card:e,onCardLike:g,onCardDelete:v},t)}))})}),Object(a.jsx)(h,{name:"delete-card",buttonText:"Yes",title:"Are you sure?",children:Object(a.jsx)(o.a.Fragment,{})}),Object(a.jsx)(j,{onClose:s,imagePopupIsOpened:u,cardName:x,cardLink:m})]}),Object(a.jsx)(b,{})]})};var v=function(e){var t=e.openingInfoTooltip,n=o.a.useState(""),r=Object(l.a)(n,2),s=r[0],c=r[1],u=o.a.useState(""),d=Object(l.a)(u,2),p=d[0],h=d[1],j=function(){h(""),c("")};return Object(a.jsx)("div",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsx)("p",{className:"auth__welcome",children:"Sign up"}),Object(a.jsxs)("form",{action:"#",className:"form_auth",onSubmit:function(e){e.preventDefault(),p&&s&&function(t,n){return fetch("".concat(x,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then((function(t){try{if(201===t.status)return t.json()}catch(e){return e}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(s,p).then((function(e){if(e&&400!==e.statusCode)return t(!0),e;t(!1)})).then(j).catch((function(e){return t(!1)}))},children:[Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Email",required:!0,id:"email",name:"email",type:"email",value:p,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Password",required:!0,id:"password",name:"password",type:"password",value:s,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"form__save form__save_auth",children:"Sign up"})]}),Object(a.jsx)("p",{className:"auth__paragraph",children:Object(a.jsx)(i.b,{to:"/signin",className:"auth__link",children:"Already a member? Log in here!"})})]})})};var N=Object(u.h)((function(e){var t=e.handleLogin,n=e.openingInfoTooltip,r=o.a.useState(""),s=Object(l.a)(r,2),c=s[0],d=s[1],p=o.a.useState(""),h=Object(l.a)(p,2),j=h[0],m=h[1],f=(Object(u.g)(),function(){d(""),m("")});return Object(a.jsx)("div",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsx)("p",{className:"auth__welcome",children:"Log in"}),Object(a.jsxs)("form",{action:"#",className:"form_auth",onSubmit:function(e){e.preventDefault(),c&&j&&function(e,t){return fetch("".concat(x,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))}(j,c).then((function(e){e.token?t():n(!1)})).then(f).catch((function(e){return n(!1)}))},children:[Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Email",required:!0,id:"email",name:"email",type:"email",value:c,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Password",required:!0,id:"password",name:"password",type:"password",value:j,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"form__save form__save_auth",children:"Log in"})]}),Object(a.jsx)("p",{className:"auth__paragraph",children:Object(a.jsx)(i.b,{to:"/signup",className:"auth__link",children:"Not a member yet? Sign up here!"})})]})})})),_=n(20),C=n(21),A=function(e){var t=e.component,n=Object(C.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(_.a)({},n)):Object(a.jsx)(u.a,{to:"/signin"})}})};var k=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,s=o.a.useContext(d),c=o.a.useState(""),i=Object(l.a)(c,2),u=i[0],p=i[1],j=o.a.useState(""),m=Object(l.a)(j,2),f=m[0],b=m[1];return o.a.useEffect((function(){p(s.name),b(s.about)}),[s]),Object(a.jsx)("div",{children:Object(a.jsx)(h,{onSubmit:function(e){e.preventDefault(),r({name:u,title:f})},isOpen:t,onClose:n,name:"edit-profile",buttonText:"Save",title:"Edit profile",children:Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){p(e.target.value)},id:"profile-name",name:"name",type:"text",className:"form__input form__input_type_name",placeholder:u,required:!0,maxLength:"40",minLength:"2"}),Object(a.jsx)("span",{id:"profile-name-error",className:"form__error"}),Object(a.jsx)("input",{onChange:function(e){b(e.target.value)},id:"profile-text",name:"title",type:"text",className:"form__input form__input_type_title",placeholder:f,required:!0,maxLength:"200",minLength:"2"}),Object(a.jsx)("span",{id:"profile-text-error",className:"form__error"})]})})})};var S=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateAvatar,s=o.a.useContext(d),c=o.a.useState(""),i=Object(l.a)(c,2),u=i[0],p=i[1],j=o.a.createRef();return o.a.useEffect((function(){p(s.avatar)}),[s]),Object(a.jsx)("div",{children:Object(a.jsx)(h,{onSubmit:function(e){e.preventDefault(),r(j.current.value)},isOpen:t,onClose:n,name:"edit-avatar",buttonText:"Save",title:"Change profile picture",children:Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)("input",{onChange:function(e){p(e.target.value)},ref:j,placeholder:u,id:"avatar-url",name:"link",type:"url",className:"form__input form__input_type_photo-url",required:!0})})})})};var y=function(e){var t=e.isOpen,n=e.onClose,r=e.onAddPlace,s=o.a.useState(""),c=Object(l.a)(s,2),i=c[0],u=c[1],d=o.a.useState(""),p=Object(l.a)(d,2),j=p[0],m=p[1];return Object(a.jsx)("div",{children:Object(a.jsx)(h,{onSubmit:function(e){e.preventDefault(),r({name:i,link:j})},isOpen:t,onClose:n,name:"add-photo",buttonText:"Create",title:"New place",children:Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){u(e.target.value)},id:"photo-title",name:"name",type:"text",className:"form__input form__input_type_photo-title",placeholder:"Title",required:!0,maxLength:"30",minLength:"1"}),Object(a.jsx)("span",{id:"photo-title-error",className:"form__error"}),Object(a.jsx)("input",{onChange:function(e){m(e.target.value)},id:"photo-url",name:"link",type:"url",className:"form__input form__input_type_photo-url",placeholder:"Image link",required:!0}),Object(a.jsx)("span",{id:"photo-url-error",className:"form__error"})]})})})};var E=function(e){var t=e.isOpen,n=e.onClose,r=e.infoTooltipText,o=e.infoTooltipImage;return Object(a.jsx)("div",{children:t?Object(a.jsx)("div",{className:"popup popup_opened",children:Object(a.jsx)("div",{className:"popup__content",children:Object(a.jsxs)("div",{className:"popup_type-infotooltip",children:[Object(a.jsx)("img",{src:o,alt:"symbol",className:"popup__content-image"}),Object(a.jsx)("p",{className:"popup__content-text",children:r}),Object(a.jsx)("button",{className:"popup__close",onClick:n})]})})}):Object(a.jsx)("div",{})})},I=n(18),L=n(19),w=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(I.a)(this,e),this._baseUrl=n,this._headers=a}return Object(L.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return(t?fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}):fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"})).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.title})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)})).catch((function(e){return console.log(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-3",headers:{authorization:"bbe6c8a6-0cbf-4192-8ad0-65526caf9994","Content-Type":"application/json"}});var P=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=o.a.useState(!1),c=Object(l.a)(s,2),i=c[0],p=c[1],h=o.a.useState(!1),j=Object(l.a)(h,2),m=j[0],b=j[1],x=o.a.useState(!1),_=Object(l.a)(x,2),C=_[0],I=_[1],L=o.a.useState(!1),P=Object(l.a)(L,2),T=P[0],R=P[1],U=o.a.useState(""),q=Object(l.a)(U,2),X=q[0],J=q[1],Z=o.a.useState(""),K=Object(l.a)(Z,2),Y=K[0],H=K[1],M=o.a.useState(""),B=Object(l.a)(M,2),V=B[0],D=B[1],G=o.a.useState("#"),Q=Object(l.a)(G,2),F=Q[0],z=Q[1],W=o.a.useState({}),$=Object(l.a)(W,2),ee=$[0],te=$[1],ne=o.a.useState([]),ae=Object(l.a)(ne,2),re=ae[0],oe=ae[1],se=o.a.useState(!1),ce=Object(l.a)(se,2),ie=ce[0],le=ce[1],ue=Object(u.g)();function de(){r(!1),p(!1),b(!1),b(!1),I(!1),R(!1)}function pe(e){!1===e?(R(!0),D("Oops, something went wrong! Please try again."),z("data:image/png;base64,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")):(R(!0),D("Success! You have now been registered."),z("data:image/png;base64,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"))}return o.a.useEffect((function(){w.getUserInfo().then((function(e){te(e)})),w.getCardList().then((function(e){oe(e)}))}),[]),o.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&O(e).then((function(e){le(!0),ue.push("/")}))}),[ue]),Object(a.jsx)(d.Provider,{value:ee,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)("main",{children:Object(a.jsxs)(u.d,{children:[Object(a.jsxs)(u.b,{path:"/signin",children:[Object(a.jsx)(f,{headerText:"Sign up",headerLink:"/signup"}),Object(a.jsx)(N,{handleLogin:function(){le(!0),ue.push("/")},openingInfoTooltip:pe,infoTooltipIsOpen:T,onClose:de,infoTooltipText:V,infoTooltipImage:F})]}),Object(a.jsxs)(u.b,{path:"/signup",children:[Object(a.jsx)(f,{headerText:"Log in",headerLink:"/signin"}),Object(a.jsx)(v,{openingInfoTooltip:pe,infoTooltipIsOpen:T,onClose:de,infoTooltipText:V,infoTooltipImage:F})]}),Object(a.jsx)(A,{path:"/",loggedIn:ie,onEditProfile:function(){r(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){b(!0)},onCardClick:function(e){I(!0),J(e.card.link),H(e.card.name)},editProfileIsOpen:n,editAvatarIsOpen:m,addPlaceIsOpen:i,imagePopupIsOpen:C,imageLink:X,imageName:Y,onClose:de,onCardLike:function(e){var t=e.card.likes.some((function(e){return e._id===ee._id}));w.changeLikeCardStatus(e.card._id,!t).then((function(e){var t=re.map((function(t){return t._id===e._id?e:t}));oe(t)}))},onCardDelete:function(e){w.removeCard(e).then((function(t){var n=re.filter((function(t){return t._id!==e}));oe(n)}))},cards:re,onSignOut:function(){localStorage.removeItem("jwt"),le(!1)},component:g})]})}),Object(a.jsx)(k,{isOpen:n,onClose:de,onUpdateUser:function(e){var t=e.name,n=e.title;w.setUserInfo({name:t,title:n}).then((function(e){de(),te(e)}))}}),Object(a.jsx)(S,{isOpen:m,onClose:de,onUpdateAvatar:function(e){w.setUserAvatar(e).then((function(e){de(),te(e)}))}}),Object(a.jsx)(y,{isOpen:i,onClose:de,onAddPlace:function(e){var t=e.name,n=e.link;w.addCard({name:t,link:n}).then((function(e){var t=re.concat(e);oe(t),de()}))}}),Object(a.jsx)(E,{isOpen:T,onClose:de}),Object(a.jsx)(E,{onClose:de,isOpen:T,infoTooltipText:V,infoTooltipImage:F})]})})};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(P,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2ce79227.chunk.js.map