(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a807cd"],{"7b03":function(t,s,e){},b412:function(t,s,e){"use strict";e.r(s);var n,i,a,l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("img",{staticClass:"i1",attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/96.png"}}),e("div",{staticClass:"login_box"},[e("form",{attrs:{action:"user_login.do"}},[e("div",{staticClass:"title",attrs:{id:"t1"}},[t._v("Log in or create an account")]),e("div",{staticClass:"title",staticStyle:{display:"none"},attrs:{id:"t2"}},[t._v("Enter the email verification code")]),e("div",{staticClass:"title",staticStyle:{display:"none"},attrs:{id:"t3"}},[t._v("Enter your password")]),e("div",{staticClass:"title",staticStyle:{display:"none"},attrs:{id:"t4"}},[t._v("Create a password for your new account")]),e("div",{staticClass:"title",staticStyle:{display:"none"},attrs:{id:"t5"}},[t._v("Please enter a nickname")]),e("div",{staticClass:"input_div",attrs:{id:"i1"}},[e("input",{attrs:{id:"u",name:"u",placeholder:"Email Address"},on:{keyup:t.f}})]),t._m(0),e("div",{staticClass:"input_div",staticStyle:{display:"none"},attrs:{id:"i3"}},[e("input",{attrs:{id:"pinput",name:"p",type:"password",placeholder:"Password"},on:{keyup:t.f2}})]),e("div",{staticClass:"input_div",staticStyle:{display:"none"},attrs:{id:"i4"}},[e("input",{attrs:{id:"username",name:"username",placeholder:"Nickname"},on:{keyup:t.f3}})]),e("div",{staticClass:"timetxt",staticStyle:{"text-align":"right"},attrs:{id:"forget_txt"}},[t._v("Forgot your password?")]),e("div",{staticClass:"timetxt",attrs:{id:"timetxt"}},[e("span",{attrs:{id:"seconds"},on:{click:t.send}})]),t._m(1),e("div",{staticClass:"btn",attrs:{id:"btn"},on:{click:t.next}},[e("input",{attrs:{type:"button",id:"nextbtn",value:"Next"}})])]),t._m(2),e("div",{staticStyle:{height:"20px"}}),t._m(3)]),t._m(4)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"input_div input_div2",staticStyle:{display:"none"},attrs:{id:"i2"}},[e("input",{attrs:{type:"tel"}}),e("input",{attrs:{type:"tel"}}),e("input",{attrs:{type:"tel"}}),e("input",{attrs:{type:"tel"}}),e("input",{attrs:{type:"tel"}}),e("input",{attrs:{type:"tel"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"password_info",staticStyle:{display:"none"},attrs:{id:"password_info"}},[e("div",{staticStyle:{color:"#2b2d33"}},[t._v("Your password is good and secure")]),e("div",[e("span",[t._v("· 10 characters")]),e("span",{attrs:{id:"pcount"}},[t._v("0/10")])]),e("div",[e("span",[t._v("· 1 uppercase ")]),e("span",{attrs:{id:"ucount"}},[t._v("0/1")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"or_div"},[e("div",{staticClass:"line"}),e("div",{staticClass:"or_txt"},[t._v("or")]),e("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my_div"},[e("div",{staticClass:"box",staticStyle:{position:"relative"}},[e("img",{attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/google.svg"}}),e("img",{staticStyle:{position:"absolute",left:"6px",top:"6px"},attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/google_log.svg"}})]),e("div",{staticClass:"box"},[e("img",{attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/facebook.svg"}})]),e("div",{staticClass:"box",staticStyle:{position:"relative"}},[e("img",{attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/apple.svg"}}),e("img",{staticStyle:{position:"absolute",left:"6px",top:"6px"},attrs:{src:"https://wx16.oss-cn-qingdao.aliyuncs.com/v7/apple_logo.svg"}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom_text"},[e("p",[t._v("By creating an account, you agree to our")]),e("p",[e("span",[t._v("Privacy policy")]),t._v(" and "),e("span",[t._v("Terms of use")]),t._v(".")])])}],c=(e("ac1f"),e("00b4"),e("5e33")),r=e("d399"),d=60,p={name:"Login",data:function(){return{}},mounted:function(){for(var t=i2.getElementsByTagName("input"),s=function(s){t[s].onkeyup=function(){1==this.value.length&&(t[s+1]?(i+=t[s].value,t[s+1].focus()):(i+=t[s].value,btn.style.background="#2686DE"))}},e=0;e<t.length;e++)s(e)},methods:{send:function(){seconds.innerHTML.length>10&&this.sendEmail()},f:function(){var t=/\w+@\w+(\.[a-z]{2,4}){1,2}/;u.value.length>0&&t.test(u.value)?btn.style.background="#2686DE":btn.style.background="#BEDBF6"},f3:function(){username.value.length>0?btn.style.background="#2686DE":btn.style.background="#BEDBF6"},f2:function(){var t=/[A-Z]/,s=t.test(pinput.value);pcount.innerHTML=pinput.value.length+"/10",ucount.innerHTML=(s?1:0)+"/1",pinput.value.length>=10&&s?btn.style.background="#2686DE":btn.style.background="#BEDBF6"},next:function(){"Next"==nextbtn.value?i&&6==i.length?this.start_reg():this.next1():"Log in"==nextbtn.value?a?this.start_reg2():this.login():"Enter the app"==nextbtn.value&&this.reg()},start_reg:function(){a=!0,t2.style.display="none",t4.style.display="block",i2.style.display="none",i3.style.display="flex",nextbtn.value="Log in",btn.style.background="#BEDBF6",timetxt.style.display="none",password_info.style.display="block",pinput.focus()},start_reg2:function(){t4.style.display="none",t5.style.display="block",i3.style.display="none",i4.style.display="flex",nextbtn.value="Enter the app",btn.style.background="#BEDBF6",password_info.style.display="none",username.focus()},reg:function(){var t=this;Object(c["a"])("/admin_reg",{yong_hu_ming:u.value,mi_ma:pinput.value,username:username.value},(function(s){s?s.píngjù?t.$router.push({path:"/aweb/index"}):r["a"].fail("This email has already been registered!"):r["a"].fail("error,please try again")}))},login:function(){var t=this;Object(c["a"])("/admin_login",{yong_hu_ming:u.value,mi_ma:pinput.value},(function(s){s?t.$router.push({path:"/aweb/index"}):r["a"].fail("Your email or password is incorrect!")}))},next1:function(){var t=this,s=this;Object(c["a"])("/find_all_hòutái_yong_hu",{yong_hu_ming:u.value},(function(e){0==e.items.length?(r["a"].loading({message:"Sending...",forbidClick:!0,duration:0}),t.sendEmail()):s.showLoginPassword()}))},sendEmail:function(){d=60;var t=this;Object(c["a"])("/wechat_send_email",{e:u.value},(function(){r["a"].clear(),seconds.innerHTML=d+"s",n=setInterval((function(){d--,seconds.innerHTML=d+"s",0==d&&(clearInterval(n),seconds.innerHTML="Resend the verification code")}),10),Object(r["a"])("Sent already!"),t.showYZMInput()}))},showLoginPassword:function(){t1.style.display="none",t3.style.display="block",i1.style.display="none",i3.style.display="flex",nextbtn.value="Log in",forget_txt.style.display="block",btn.style.background="#BEDBF6",pinput.focus()},showYZMInput:function(){i="",t1.style.display="none",t2.style.display="block",i1.style.display="none",i2.style.display="flex",timetxt.style.display="block",btn.style.background="#BEDBF6";var t=i2.getElementsByTagName("input");t[0].focus()}}},y=p,v=(e("c978"),e("2877")),g=Object(v["a"])(y,l,o,!1,null,"a9abd42a",null);s["default"]=g.exports},c978:function(t,s,e){"use strict";e("7b03")}}]);