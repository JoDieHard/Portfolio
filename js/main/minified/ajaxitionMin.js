$("html").on("click",".ajaxition-link",function(e){const t=$(this).attr("href"),n=t+" .ajaxition",o=$("#pageContainer"),a=$(this),i=$("#pageIndicator");let s=a.offset();$(".homePageLink").offset();o.delay(50).queue(function(){o.addClass("in"),o.dequeue()}),e.preventDefault(),setTimeout(function(){$(".ajaxition").children().detach(),o.load(n),$("#menu ul").each(function(){$("li").removeClass("current-page")})},200),o.delay(500).queue(function(){o.removeClass("in"),a.parent().addClass("current-page"),o.dequeue()}),setTimeout(function(){setupJsPlugins(),validation(),"https://joseph-bowman.netmatters-scs.co.uk/#contact-me"===t?$("#pageContainer #contact-me")[0].scrollIntoView():$("#top")[0].scrollIntoView()},550),$(this).hasClass("back-btn")?(i.animate({top:200,left:151.766}),console.log("You clicked the return button")):i.offset({left:s.left+a.width()+10,top:s.top})});