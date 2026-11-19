/* Black Elephant · gedeelde scripts */
(function(){
  var d=document; d.documentElement.classList.add("js");
  // Menu
  var b=d.querySelector(".sh-menu"), n=d.getElementById("nav");
  if(b&&n){
    var close=function(){n.classList.remove("open");b.setAttribute("aria-expanded","false");b.setAttribute("aria-label","Menu openen");};
    b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",String(o));b.setAttribute("aria-label",o?"Menu sluiten":"Menu openen");});
    n.addEventListener("click",function(e){if(e.target.closest("a"))close();});
    d.addEventListener("keydown",function(e){if(e.key==="Escape")close();});
  }
  // Header-lijn bij scrollen
  var h=d.querySelector(".site-head");
  if(h){var sc=function(){h.classList.toggle("scrolled",window.scrollY>12);};window.addEventListener("scroll",sc,{passive:true});sc();}
  // Onthullen
  var els=[].slice.call(d.querySelectorAll(".rv"));
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});
    els.forEach(function(el){io.observe(el);});
    setTimeout(function(){els.forEach(function(el){if(el.getBoundingClientRect().top<innerHeight*1.2)el.classList.add("in");});},1500);
  } else els.forEach(function(el){el.classList.add("in");});
  window.addEventListener("beforeprint",function(){els.forEach(function(el){el.classList.add("in");});});

  // Formulieren via Web3Forms, met mail als terugval
  var MAIL="hello@blackelephant.nl", KEY="21d207d9-3485-426b-9e0b-11423f0f483e";
  window.BE_send=function(subject,data,lines,status,okMsg,onOk){
    status.textContent="Bezig met versturen…";
    fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.assign({access_key:KEY,subject:subject,from_name:"blackelephant.nl"},data))})
      .then(function(r){return r.json();})
      .then(function(j){if(j.success){status.textContent=okMsg;if(window.goatcounter&&goatcounter.count)goatcounter.count({path:"event/verzonden-"+subject.split(":")[0],title:"Formulier verzonden",event:true});if(onOk)onOk();}else fail();})
      .catch(fail);
    function fail(){location.href="mailto:"+MAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(lines.join("\n"));status.textContent="Versturen via de site lukte niet. Je mailprogramma opent als alternatief.";}
  };
  window.BE_val=function(id){var e=d.getElementById(id);return e?(e.value||"").trim():"";};
  window.BE_mail=function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);};

  // Nieuwe-verhalen-aanmelding (Library, footer)
  [].forEach.call(d.querySelectorAll("form[data-signup]"),function(f){
    f.addEventListener("submit",function(e){
      e.preventDefault();
      var st=f.querySelector(".status"), m=f.querySelector("input[type=email]"), bot=f.querySelector(".hp");
      if(bot&&bot.checked){st.textContent="Dank je wel.";return;}
      if(!BE_mail((m.value||"").trim())){st.textContent="Vul een geldig e-mailadres in.";return;}
      var nm=(f.querySelector("input[name=naam]")||{}).value||"";
      BE_send(f.getAttribute("data-subject")||"Aanmelding: nieuwe verhalen in The Library",{email:m.value.trim(),naam:nm,bron:f.getAttribute("data-signup")},["Aanmelding nieuwe verhalen","Naam: "+nm,"E-mail: "+m.value],st,f.getAttribute("data-ok")||"Dank je wel. Je hoort van ons zodra er een nieuw verhaal in The Library staat.",function(){f.reset();});
    });
  });
})();
