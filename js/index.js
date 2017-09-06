
//音乐播放开始
(function () {
    var music = document.getElementById("music");
    var playmusic = document.getElementById("playmusic");
    var feigeplay = document.getElementById("feigeplay");
    var flag = true;
    var flag1 = true;
    var $img = $('img');
    var arr = [];

    feigeplay.onclick = function () {
        if (flag1) {
            music.play();
            flag1 = !flag1;
        } else {
            music.pause();
            flag1 = !flag1;
        }
    }

    function feigemove() {
        var ranLeft = Math.random() * 1000;
        var ranTop = Math.random() * 800;
        $('#feigefei').animate({
            'left': ranLeft,
            'top': ranTop
        }, 1000, feigemove);
    }

    playmusic.onclick = function () {
        if (flag) {
            music.play();
            flag = !flag;
            $('#feige').hide();
            $('#feigefei').css('display', 'block');
            feigemove();
            for (var i = 0; i < $img.length; i++) {
                arr[arr.length] = $img[i].getAttribute('src');
            }
            $('img').attr('src', 'images/feige.jpg').show(500);
            $('body').css('backgroundImage', 'url("images/feige4.jpg")');
            $('body').css('backgroundRepeat', 'repeat');
        } else {
            music.pause();
            flag = !flag;
            $('#feigefei').stop(true);
            $('#feigefei').css('display', 'none');
            $('#feige').attr('src', 'images/顶部栏/logo_2.png');
            $('body').css('backgroundImage', 'url("images/bg.jpg")');
            $('body').css('backgroundRepeat', 'no-repeat');
            for (var i = 0; i < $img.length; i++) {
                $img[i].setAttribute('src', arr[i]);
            }
        }
    }
}())
//音乐播放结束


// 学忠开始
var juese = document.getElementById("juese");
var cxzLeftBox = juese.children[0].children[0].children[1];
var cxzLeftBoxUl = cxzLeftBox.children[0];
var liHeight = cxzLeftBoxUl.children[0].offsetHeight;
var timerId = null;
var liIndex = 0;
var cxzLeftBoxBottomUl = juese.children[0].children[1].children[0];
var cxzLeftBoxBottomUlLis = cxzLeftBoxBottomUl.children;
var cxzLeftWeibo = document.getElementById("cxz_left_bottom_weibo");
var cxzRightBoxBottomUl = juese.children[2].children[1].children[0];
var obj1 = [
    { "backgroundPosition": "-1px -233px" },
    { "backgroundPosition": "-39px -233px" },
    { "backgroundPosition": "-77px -233px" },
    { "backgroundPosition": "-115px -233px" },
    { "backgroundPosition": "-153px -233px" },
    { "backgroundPosition": "-191px -233px" }
]
var obj2 = [
    { "backgroundPosition": "-1px -265px" },
    { "backgroundPosition": "-39px -265px" },
    { "backgroundPosition": "-77px -265px" },
    { "backgroundPosition": "-115px -265px" },
    { "backgroundPosition": "-153px -265px" },
    { "backgroundPosition": "-191px -265px" }
]
var obj3 = [
    { "backgroundPosition": "-1px -170px" },
    { "backgroundPosition": "-39px -170px" },
    { "backgroundPosition": "-77px -170px" },
    { "backgroundPosition": "-115px -170px" },
    { "backgroundPosition": "-153px -170px" },
    { "backgroundPosition": "-191px -170px" }
]
var obj4 = [
    { "backgroundPosition": "-1px -202px" },
    { "backgroundPosition": "-39px -202px" },
    { "backgroundPosition": "-77px -202px" },
    { "backgroundPosition": "-115px -202px" },
    { "backgroundPosition": "-153px -202px" },
    { "backgroundPosition": "-191px -202px" }
]
function setBgStyle() {
    for (var i = 0; i < cxzLeftBoxBottomUl.children.length; i++) {
        for (var key in obj1[i]) {
            cxzLeftBoxBottomUl.children[i].children[0].children[0].children[0].style.backgroundPosition = obj1[i][key];
        }
        for (var key in obj3[i]) {
            cxzRightBoxBottomUl.children[i].children[0].children[0].children[0].style.backgroundPosition = obj3[i][key];
        }

    }
}
setBgStyle();

for (var i = 0; i < cxzLeftBoxBottomUl.children.length; i++) {
    cxzLeftBoxBottomUl.children[i].index = i;
    cxzRightBoxBottomUl.children[i].index = i;
    cxzLeftBoxBottomUl.children[i].onmouseenter = function () {
        this.style.opacity = 0;
        for (var key in obj2[this.index]) {
            this.children[0].children[0].children[0].style.backgroundPosition = obj2[this.index][key];
        }
        animate(this, { "opacity": 1 });
        if (this.index == cxzLeftBoxBottomUlLis.length - 1) {
            cxzLeftWeibo.style.display = "block";
        }
    }
    cxzRightBoxBottomUl.children[i].onmouseenter = function () {
        this.style.opacity = 0;
        for (var key in obj4[this.index]) {
            this.children[0].children[0].children[0].style.backgroundPosition = obj4[this.index][key];
        }
        animate(this, { "opacity": 1 });
    }
    cxzLeftBoxBottomUl.children[i].onmouseleave = function () {
        for (var key in obj1[this.index]) {
            this.children[0].children[0].children[0].style.backgroundPosition = obj1[this.index][key];
        }
        if (this.index == cxzLeftBoxBottomUlLis.length - 1) {
            cxzLeftWeibo.style.display = "none";
        }
    }
    cxzRightBoxBottomUl.children[i].onmouseleave = function () {
        for (var key in obj3[this.index]) {
            this.children[0].children[0].children[0].style.backgroundPosition = obj3[this.index][key];
        }
    }
}

timerId = setInterval(nextLi, 3000);
cxzLeftBox.onmouseover = function () {
    clearInterval(timerId);
}
cxzLeftBox.onmouseout = function () {
    timerId = setInterval(nextLi, 3000);
}
cxzLeftBoxUl.appendChild(cxzLeftBoxUl.children[0].cloneNode(true));
cxzLeftBoxUl.appendChild(cxzLeftBoxUl.children[1].cloneNode(true));
cxzLeftBoxUl.appendChild(cxzLeftBoxUl.children[2].cloneNode(true));
function nextLi() {
    if (liIndex == cxzLeftBoxUl.children.length - 3) {
        liIndex = 0;
        cxzLeftBoxUl.style.top = 0;
    }
    liIndex++;
    var target = -liIndex * liHeight;
    animate(cxzLeftBoxUl, { "top": target });
}



var cxzCenterTitle = document.getElementById("cxz_center_title");
var cxzCenterTitleBox = cxzCenterTitle.children[0];
var cxzCenterTitleUl = cxzCenterTitleBox.children[1];
var cxzCenterTitleUlLis = cxzCenterTitleUl.children;
var cxzCenterTitleSpan = cxzCenterTitleBox.children[0];
var slideWidth = cxzCenterTitleSpan.offsetWidth;

function moveLine(ele) {
    clearInterval(ele.timerId);
    ele.timerId = setInterval(function () {
        var current = ele.offsetWidth;
        var currentLeft = ele.offsetLeft;
        current += 2;
        currentLeft -= 1;
        ele.style.width = current + "px";
        ele.style.left = currentLeft + "px";
        if (current == slideWidth) {
            clearInterval(ele.timerId);
        }
    }, 10)
}
for (var i = 0; i < cxzCenterTitleUlLis.length; i++) {
    cxzCenterTitleUlLis[i].index = i;
    cxzCenterTitleUlLis[i].onclick = function () {
        for (var j = 0; j < cxzCenterTitleUlLis.length; j++) {
            cxzCenterTitleUlLis[j].children[0].style.color = "#000";
        }
        this.children[0].style.color = "#e86656";
        var target = slideWidth * this.index;
        cxzCenterTitleSpan.style.left = target + 20 + "px";
        cxzCenterTitleSpan.style.width = "3px";
        moveLine(cxzCenterTitleSpan);


        var temp = this.index;
        cxzMoveOut(temp);

    }
}




var cxzCenterWrap = document.getElementById("cxz_center_wrap");
var cxzcenterContents = cxzCenterWrap.children;

var cxzPicIndex = 0;

function cxzMoveOut(tm) {
    animate_move(cxzcenterContents[cxzPicIndex].children[0], { "right": -590 });
    animate_move(cxzcenterContents[cxzPicIndex].children[1], { "left": -590 });
    cxzPicIndex = tm;
    cxzMoveIn();
}
function cxzMoveIn() {
    animate_move(cxzcenterContents[cxzPicIndex].children[0], { "right": 0 });
    animate_move(cxzcenterContents[cxzPicIndex].children[1], { "left": 0 });
}
cxzMoveIn();

//学忠结束

// 肖娟开始
//轮播部分
var xj_bigBox = document.getElementById("xj_bigBox");

var xj_lunbo = document.getElementById("xj_lunbo");

var xj_ul = xj_lunbo.children[0];

var xj_ol = xj_lunbo.children[1];

var xj_ollis = xj_ol.children;

var xj_ullis = xj_ul.children;

var imgWidth = xj_lunbo.offsetWidth;

for (var i = 0; i < xj_ollis.length; i++) {
    xj_ollis[i].setAttribute("index", i);
}
xj_ollis[0].setAttribute("class", "current");


for (var i = 0; i < xj_ollis.length; i++) {
    xj_ollis[i].onclick = function () {

        for (var j = 0; j < xj_ollis.length; j++) {
            xj_ollis[j].removeAttribute("class");
        }
        this.setAttribute("class", "current");
        var target = -this.getAttribute("index") * imgWidth;
        // console.log(target);
        animate(xj_ul, { "left": target });
        picIndex = spanIndex = this.getAttribute("index");
    }
}

var timerId = null;
xj_bigBox.onmouseover = function () {
    clearInterval(timerId);
}
xj_bigBox.onmouseout = function () {
    timerId = setInterval(nextImg, 3000)
}
var picIndex = 0;

// xj_ul.appendChild(xj_ullis[0].cloneNode(true));

var spanIndex = 0;

timerId = setInterval(nextImg, 3000);

function nextImg() {
    if (picIndex == xj_ollis.length) {
        picIndex = 0;
        xj_ul.style.left = 0 + "px";
    }
    picIndex++;

    var target = -picIndex * imgWidth;

    animate(xj_ul, { "left": target })

    for (var i = 0; i < xj_ollis.length; i++) {
        xj_ollis[i].removeAttribute("class");
    }

    if (spanIndex < xj_ollis.length - 1) {
        spanIndex++;
    } else {
        spanIndex = 0;
    }
    xj_ollis[spanIndex].setAttribute("class", "current");

}
//轮播左边充值部分

var xj_gameDown = document.getElementById("xj_gameDown");

var xj_zhuCe = document.getElementById("xj_zhuCe");

var xj_chongZhi = document.getElementById("xj_chongZhi");

xj_gameDown.onmouseover = function () {
    this.setAttribute("class", "xj_gamedown lujin1");
}

xj_gameDown.onmouseout = function () {
    this.setAttribute("class", "xj_gamedown");
}

xj_zhuCe.onmouseover = function () {
    this.setAttribute("class", "xj_zhuce  lujin2");
}

xj_zhuCe.onmouseout = function () {
    this.setAttribute("class", "xj_zhuce");
}

xj_chongZhi.onmouseover = function () {
    this.setAttribute("class", "xj_chongzhi lujin3");
}

xj_chongZhi.onmouseout = function () {
    this.setAttribute("class", "xj_chongzhi");
}
// 肖娟结束
// 覃青云开始
$('.qqy_newsTitle a').on('mouseover', function () {

    $(this).parent().siblings().children().removeClass('current');
    $(this).removeClass('current').siblings('span').addClass('current');
    $(this).addClass('current');


    //ul跟随移动 获取被点击的index 移动


    $('#qyy_newsContent ul').stop().animate({
        left: -$('#qyy_newsContent').width() * $(this).parent().index()
    })
})
// 覃青云结束



// 肖尉开始
$(function () {
    $('.trzMenu>ul>li').on('click', function () {
        $('.trzMenu>ul>li').children().children('span').css('backgroundPosition-y', '1px');
        $(this).children().children('span').css('backgroundPosition-y', '-54px');
        $('.trzMenu>ul>li').removeClass('current');
        $(this).addClass('current');
        $('.slideBox').children().hide(500);
        $('.slideBox').children().eq($(this).index()).show(300);
    })
})
// 肖尉结束

// 赵杰开始
//����table����¼�
var hot = document.getElementsByClassName("zj-title")[0].children;
var nb = document.getElementsByClassName("zj-nb")[0];
hot[0].onclick = function () {
    animate(nb, { "left": 0 });
    this.setAttribute('class', 'title-one zj-line');
    this.nextElementSibling.setAttribute('class', 'title-one');

}

hot[1].onclick = function () {
    animate(nb, { "left": -280 });
    this.setAttribute('class', 'title-one zj-line');
    this.previousElementSibling.setAttribute('class', 'title-one');
}

//�Ӻ�+������������¼�
var add = document.getElementsByClassName("add");

//���ü�ʱ��

var overID = null;
var outID = null;
for (var i = 0; i < add.length; i++) {
    var step = 1;
    (function (i) {
        var border = add[i].children;
        add[i].onmouseover = function () {
            clearInterval(outID);
            overID = setInterval(function () {

                if (border[0].offsetHeight > 0)
                    border[0].style.height = border[0].offsetHeight - step + "px";
                else if (border[1].offsetWidth > 0)
                    border[1].style.width = border[1].offsetWidth - step + "px";
                else if (border[2].offsetHeight > 0)
                    border[2].style.height = border[2].offsetHeight - step + "px";
                else if (border[3].offsetWidth > 0)
                    border[3].style.width = border[3].offsetWidth - step + "px";
                else
                    clearInterval(overID);
            }, 15)
        }


        add[i].onmouseout = function () {
            clearInterval(overID);
            ////��ȡ�����ӿ��
            var boxwidth = this.offsetWidth;
            outID = setInterval(function () {

                if (border[3].offsetWidth < boxwidth)
                    border[3].style.width = border[3].offsetWidth + step + 'px';
                else if (border[2].offsetHeight < boxwidth)
                    border[2].style.height = border[2].offsetHeight + step + 'px';
                else if (border[1].offsetWidth < boxwidth)
                    border[1].style.width = border[1].offsetWidth + step + 'px';
                else if (border[0].offsetHeight < boxwidth)
                    border[0].style.height = border[0].offsetHeight + step + 'px';
                else
                    clearInterval(outID);
            }, 15)
        }
    })(i)
}
// 赵杰结束

// 郑威开始
/*郑威   模块8  js*/
(function () {
    var service = document.getElementById("service");
    var business = document.getElementById("business");
    var ad = document.getElementById("ad");
    var service_zw_telphone = document.getElementById("service_zw_telphone");
    var businessteamwork_zw = document.getElementById("businessteamwork_zw");
    var adteamword_zw = document.getElementById("adteamword_zw");
    var move_zw = document.getElementById("move_zw");
    var serviceGZ = document.getElementById("serviceGZ");
    var service_zw_erweima = document.getElementById("service_zw_erweima");


    service.onclick = function () {
        animate(service_zw_telphone, {
            "opacity": 1
        }, function () {
            service_zw_telphone.style.display = "block";
        });
        animate(businessteamwork_zw, {
            "opacity": 0
        }, function () {
            businessteamwork_zw.style.display = "none";
        });
        animate(adteamword_zw, {
            "opacity": 0
        }, function () {
            adteamword_zw.style.display = "none";
        });
        service.setAttribute("class", "choice");
        business.removeAttribute("class");
        ad.removeAttribute("class");
        animate(move_zw, {
            "left": 14
        });
    }
    business.onclick = function () {
        animate(service_zw_telphone, {
            "opacity": 0
        }, function () {
            service_zw_telphone.style.display = "none";
        });
        animate(businessteamwork_zw, {
            "opacity": 1
        }, function () {
            businessteamwork_zw.style.display = "block";
        });
        animate(adteamword_zw, {
            "opacity": 0
        }, function () {
            adteamword_zw.style.display = "none";
        });
        service.removeAttribute("class", "choice");
        business.setAttribute("class", "choice");
        ad.removeAttribute("class");
        animate(move_zw, {
            "left": 93
        });
    }
    ad.onclick = function () {
        animate(service_zw_telphone, {
            "opacity": 0
        }, function () {
            service_zw_telphone.style.display = "none";
        });
        animate(businessteamwork_zw, {
            "opacity": 0
        }, function () {
            businessteamwork_zw.style.display = "none";
        });
        animate(adteamword_zw, {
            "opacity": 1
        }, function () {
            adteamword_zw.style.display = "block";
        });
        service.removeAttribute("class", "choice");
        business.removeAttribute("class");
        ad.setAttribute("class", "choice");
        animate(move_zw, {
            "left": 173
        });
    }
    serviceGZ.onmouseover = function () {
        service_zw_erweima.style.display = "block";
    }
    serviceGZ.onmouseout = function () {
        service_zw_erweima.style.display = "none";
    }


    //中间
    var other_zw = document.getElementById("other_zw");
    var other_ul1 = other_zw.children[0];
    var othernews = other_zw.children[2];
    var other_ulLis = other_ul1.children;
    var move2_zw = document.getElementById("move2_zw");
    var other_ols = othernews.children;
    var other_imgWeight = other_zw.offsetWidth;
    var lastPotion = 15;
    var move2Index = 0;
    var liW = other_ulLis[0].offsetWidth;
    for (var i = 0; i < other_ulLis.length; i++) {
        other_ulLis[i].setAttribute("index", i)
        other_ulLis[i].onmouseover = function () {
            var target = liW * this.getAttribute("index") + 15;
            animate(move2_zw, {
                "left": target
            });
            clearInterval(timer2);
        }
        other_ulLis[i].onmouseout = function () {
            animate(move2_zw, {
                "left": lastPotion
            });
            timer2 = setInterval(nextImg, 3000);
        }
        other_ulLis[i].onclick = function () {
            lastPotion = this.offsetLeft - 5;
            var target2 = -other_imgWeight * this.getAttribute("index");
            animate(othernews, {
                "left": target2
            });
            move2Index = picIndex = this.getAttribute("index");
        }
        other_ols[i].onmouseover = function () {
            clearInterval(timer2);
        }
        other_ols[i].onmouseout = function () {
            timer2 = setInterval(nextImg, 2000);
        }
    }

    //中间下方news轮播
    var timer2 = null;
    var picIndex = 0;
    timer2 = setInterval(nextImg, 2000);


    function nextImg() {
        if (picIndex >= other_ols.length - 1) {
            picIndex = 0;
            othernews.style.left = 0;
        }
        picIndex++;
        animate(othernews, {
            "left": -other_imgWeight * picIndex + 15
        })

        if (move2Index == 7) {
            move2Index = 0;
            move2_zw.style.left = "14px";
        } else {
            move2Index++;
            animate(move2_zw, {
                "left": liW * move2Index + 15
            })
        }
    }


    //合作广告轮播
    var partnerAd_zw = document.getElementById("partnerAd_zw");
    var adUl_zw = partnerAd_zw.children;
    var adHeight = adUl_zw[0].offsetHeight;
    var adIndex = 0;

    var timerId2 = null;
    for (var i = 0; i < adUl_zw.length; i++) {
        adUl_zw[i].onmouseover = function () {
            clearInterval(timerId2);
        }
        adUl_zw[i].onmouseout = function () {
            timerId2 = setInterval(nextAd, 2000);
        }
    }
    timerId2 = setInterval(nextAd, 2000);

    function nextAd() {
        if (adIndex == 5) {
            adIndex = 0;
            partnerAd_zw.style.top = 0;
        }
        adIndex++;
        animate(partnerAd_zw, {
            "top": -adHeight * adIndex
        })
    }

}())


// 郑威结束