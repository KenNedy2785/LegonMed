import { useState, useEffect } from "react";

const DB = {
  _k: k => `lm_${k}`,
  get: k => { try { return JSON.parse(localStorage.getItem(`lm_${k}`) || "[]"); } catch { return []; } },
  set: (k,v) => localStorage.setItem(`lm_${k}`, JSON.stringify(v)),
  push: (k,r) => { const a=DB.get(k); a.push({...r,id:Date.now(),createdAt:new Date().toISOString()}); DB.set(k,a); },
  count: k => DB.get(k).length,
};

const PAYSTACK_KEY = "pk_test_REPLACE_WITH_YOUR_KEY";

function loadPaystack(cb){
  if(window.PaystackPop){cb();return;}
  const s=document.createElement("script");
  s.src="https://js.paystack.co/v1/inline.js";
  s.onload=cb;
  document.body.appendChild(s);
}

function initPay({email,name,amountGHS,plan,onSuccess}){
  loadPaystack(()=>{
    const h=window.PaystackPop.setup({
      key:PAYSTACK_KEY,email,amount:Math.round(amountGHS*100),currency:"GHS",
      ref:"LM-"+Date.now()+"-"+Math.random().toString(36).substr(2,6).toUpperCase(),
      metadata:{name,plan},
      channels:["card","mobile_money","bank","ussd"],
      callback:(r)=>{
        DB.push("payments",{email,name,plan,amountGHS,ref:r.reference,status:"success",paidAt:new Date().toISOString()});
        onSuccess(r.reference);
      },
      onClose:()=>{},
    });
    h.openIframe();
  });
}


const C = {
  blue:"#003087",gold:"#C8A951",dark:"#001a5e",lb:"#1a4db5",
  gl:"#e8c96a",gd:"#a8892e",white:"#fff",off:"#f8f6f0",
  txt:"#1a1a2e",muted:"#5a6a8a",ok:"#0a7c4a",err:"#c0392b",bg:"#f0f4ff",
};
const RC={doctor:"#003087",nurse:"#0d5e6e",pharmacist:"#6E2C00",labtech:"#1a5276",student:"#5b2d8e"};
const RL={doctor:"\u{1F468}\u200D\u2695\uFE0F Doctor / Clinician",nurse:"\u{1F469}\u200D\u2695\uFE0F Nurse / Midwife",pharmacist:"\uD83D\uDC8A Pharmacist",labtech:"\uD83D\uDD2C Lab Scientist",student:"\uD83C\uDF93 Student"};
const ADMIN_PW="legonmed@UGMS2025!";

const UGLogo=({size=60})=>(<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/University_of_Ghana_coat_of_arms.svg/200px-University_of_Ghana_coat_of_arms.svg.png" alt="UG" width={size} height={size} style={{objectFit:"contain"}} onError={e=>{e.target.outerHTML=`<div style="width:${size}px;height:${size}px;border-radius:50%;background:#003087;display:flex;align-items:center;justify-content:center;color:#C8A951;font-weight:900;font-size:${Math.round(size*.28)}px">UG</div>`;}}/>);

const bdg={display:"inline-block",background:"rgba(200,169,81,.13)",border:"1px solid #C8A951",color:"#C8A951",padding:"5px 17px",borderRadius:30,fontSize:11.5,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:"1.5px",textTransform:"uppercase"};
const btn=(v="primary",ex={})=>({display:"inline-block",cursor:"pointer",fontFamily:"'Source Sans 3',sans-serif",fontWeight:700,letterSpacing:.4,transition:"all .22s",padding:v==="primary"?"13px 30px":"11px 26px",borderRadius:8,fontSize:14.5,background:v==="primary"?`linear-gradient(135deg,${C.gold},${C.gl})`:"transparent",color:v==="primary"?C.dark:C.gold,border:v==="secondary"?"2px solid "+C.gold:"none",...ex});
const card=(ex={})=>({background:"#fff",borderRadius:18,padding:30,boxShadow:"0 4px 24px rgba(0,48,135,.08)",...ex});
const inp=(ex={})=>({width:"100%",padding:"13px 16px",border:"2px solid #dde6f0",borderRadius:10,fontSize:15,fontFamily:"'Source Sans 3',sans-serif",outline:"none",background:"#fff",...ex});
