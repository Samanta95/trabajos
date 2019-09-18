
!function(a) {
    var b = /iPhone/i, c = /iPod/i, d = /iPad/i, e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i, g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, i = /Windows Phone/i, j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, k = /BlackBerry/i, l = /BB10/i, m = /Opera Mini/i, n = /(CriOS|Chrome)(?=.*\bMobile\b)/i, o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), q = function(a, b) {
        return a.test(b);
    }, r = function(a) {
        var r = a || navigator.userAgent, s = r.split("[FBAN");
        if ("undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"), "undefined" != typeof s[1] && (r = s[0]),
        this.apple = {
            phone: q(b, r),
            ipod: q(c, r),
            tablet: !q(b, r) && q(d, r),
            device: q(b, r) || q(c, r) || q(d, r)
        }, this.amazon = {
            phone: q(g, r),
            tablet: !q(g, r) && q(h, r),
            device: q(g, r) || q(h, r)
        }, this.android = {
            phone: q(g, r) || q(e, r),
            tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)),
            device: q(g, r) || q(h, r) || q(e, r) || q(f, r)
        }, this.windows = {
            phone: q(i, r),
            tablet: q(j, r),
            device: q(i, r) || q(j, r)
        }, this.other = {
            blackberry: q(k, r),
            blackberry10: q(l, r),
            opera: q(m, r),
            firefox: q(o, r),
            chrome: q(n, r),
            device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r)
        }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch,
        this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
        "undefined" == typeof window) return this;
    }, s = function() {
        var a = new r();
        return a.Class = r, a;
    };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = r : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = s() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s();
}(this);

$(document).ready(function() {
    app.init();
});

var move = false, MARKETING_RIBBON = $(".marketing-ribbon");

var app = {
    // inputFile: $("#foto").clone(),
    init: function() {

        $(".arrow-scroll").click(function(event) {
            app.scrolling($.attr(this, "href"), 750);
            return false;
        });
        if (!isMobile.any) {
            _top_filtros = $(".menu").offset().top;
            offset_filtros = _top_filtros - MARKETING_RIBBON.height();
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $(".menu").addClass("fixed").css({
                        top: MARKETING_RIBBON.height()
                    });
                } else {
                    $(".menu").removeClass("fixed").removeAttr("style");
                }
            });
        } else {
            console.log("isMobile");
            if ($(window).width() < 768) {
    
                $(".-menu li a").click(function(event) {
                    $(".nav-bar").toggleClass("collapse-movil");
                });
            }
            _top_filtros = $(".menu").offset().top;
            offset_filtros = _top_filtros - MARKETING_RIBBON.height();
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $(".menu").addClass("fixed").css({
                        top: MARKETING_RIBBON.height()
                    });
                } else {
                    $(".menu").removeClass("fixed").removeAttr("style");
                }
            });
        }
        $(".lnk-menu").click(function(event) {
            event.preventDefault();
            app.scrolling($.attr(this, "href"), 750);
            event.stopPropagation();
        });
        $(".lnk-menuu").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - $(".nav-bar").height()
            }, 750);
        });

        $(window).scroll(function(event) {
            var fromTop = $(this).scrollTop();
            var indice = $(".section").map(function(index, elem) {
                if (fromTop > $(this).offset().top - 110) {
                    return index;
                }
            });
            $(".menu .item a").removeClass("active");
            $(".menu .item a").eq(indice[indice.length - 1]).addClass("active");
        });
        this.animations();        
    },
    scrolling: function(_hash, _speed) {
        console.log(_hash);
        if ($(_hash).length > 0) {
            $("html, body").animate({
                scrollTop: $(_hash).offset().top
            }, _speed, function() {
                var item = $(".menu .item a").map(function(index, elem) {
                    if ($(this).attr("href") == _hash) {
                        return index;
                    }
                });
                $(".menu .item a").removeClass("active");
                $(".menu .item a").eq(item[0]).addClass("active");
            });
        }
        return false;
    },
    sliders: function() {

    },
    changeItem: function(_params) {

    },
    playVideo: function() {
        console.log("PLAYING...!");
        $(".youtube").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },
    animations: function() {
        console.log("Animaciones");
        jarallax = new Jarallax();
        if ($(window).width() > 1024) {
            jarallax.addAnimation("#triton_img", [ {
                progress: "0%",
                right: "-500px",
                opacity: "0"
            }, {
                progress: "14.66%",
                right: "100px",
                opacity: "1"
            } ]);
            jarallax.addAnimation("#helios_img", [ {
                progress: "0%",
                left: "-500px",
                opacity: "0"
            }, {
                progress: "32.66%",
                left: "90px",
                opacity: "1"
            } ]);
            jarallax.addAnimation("#predator_img", [ {
                progress: "0%",
                right: "-500px",
                opacity: "0"
            }, {
                progress: "50.66%",
                right: "-40px",
                opacity: "1"
            } ]);
            jarallax.addAnimation("#aspire_img", [ {
                progress: "0%",
                left: "-500px",
                opacity: "0"
            }, {
                progress: "78.66%",
                left: "90px",
                opacity: "1"
            } ]);
            jarallax.addAnimation("#nitro_img", [ {
                progress: "0%",
                right: "-500px",
                opacity: "0"
            }, {
                progress: "87.66%",
                right: "100px",
                opacity: "1"
            } ]);
        }
        if ($(window).width() <= 1024) {

        }
    }





};


$('.no-link').click(function(){
  event.preventDefault();
})


if($(window).width()<=767){
    $(".menu").addClass("owl-carousel");
	$(".menu").owlCarousel({
		items: 3,
		autoPlay:false,
		navigation: true,
		pagination: false,
		autoWidth:true,
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [480,2], //2 items between 600 and 0
		itemsMobile:[400,1]
	});
}
if($(window).width()<=992){
    $(".cont-2").addClass("owl-carousel");
	$(".cont-2").owlCarousel({
		items: 1,
		autoPlay:false,
		navigation: true,
		pagination: false,
		autoWidth:false,
		itemsDesktop : [993,1] , //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [480,1], //2 items between 600 and 0
        itemsMobile:[400,1]
	});
}

window.onload = function() {
    $("#container").animate({
        opacity: 1
    }, 500);
    $(".loader").remove();

};
