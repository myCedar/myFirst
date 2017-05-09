+function(){
    /*顶部菜单*/
//定义函数showSub/hideSub,用于显示/隐藏a旁边的二级菜单
    function showSub(){
        this.lastElementChild.style.display="block";
        this.children[0].className="hover";
    }
    function hideSub(){
        this.lastElementChild.style.display="";
        this.children[0].className="";
    }
    var lis=document.querySelectorAll(".account,.s_car,.service,.weibo,.weixin");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("mouseover",showSub);
        lis[i].addEventListener("mouseout",hideSub);
    }
}()

+function(){
    /*全部商品分类*/
    //获得id为cate_box下的li
    var lis=document.querySelectorAll("#cate_box>li");
    //遍历每个li绑定鼠标进入/移出事件
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("mouseover",function(){
              this.lastElementChild.style.display="block";
              this.firstElementChild.className="hover";
            });
        lis[i].addEventListener("mouseout",function(){
            this.lastElementChild.style.display="";
            this.firstElementChild.className="";
        });
    }
}()

+function(){
    /*广告轮播区域*/
    var timer = setInterval(autoRun,5000);
    var sta = 0;//记录当前展示到哪张图片了
    function autoRun(){
        sta++;//sta自增
        sta = (sta == 7)?0:sta;//判断是不是到最后一张了，如果是，就切换到第一张
        change(sta);//切换效果
    }
    $('#banner_box .banner .indexs li').hover(function(){
        clearInterval(timer);//清理定时器
        sta = $(this).index();//获得鼠标移入到第几个li上了
        change(sta);//切换效果
    },function(){
        timer = setInterval(autoRun,5000);//恢复定时器
    })
    function change(num){//用来控制切换图片和下标样式的函数
        $('#banner_box .banner img').hide();//先把所有的图片隐藏
        $('#banner_box .banner img').eq(num).fadeIn(200);//让对应的图片显示出来
        $('#banner_box .banner .indexs li').removeClass('hover');//移除掉所有li上面的hover样式
        $('#banner_box .banner .indexs li').eq(num).addClass('hover');//给对应的li加上hover样式
    }
}()
+function(){
    // 小图片轮换的效果
    setInterval(lit_autoRun,3000);//设立定时器
    var lit_sta=0;
    function lit_autoRun(){//自动切换小图片
        lit_sta++;//自增1
        lit_sta=(lit_sta==6)?0:lit_sta;//判断是否到最后一张
        var new_left=-lit_sta*200;//计算pic_box的新left值
        $('#information .litter_pic .pic_box').animate({'left':new_left+'px'},100);
    }
    $('#information .litter_pic p a').click(function(){
        if($(this).index() == 0){
            if(lit_sta != 0){
                lit_sta--;
            }
        }else{
            if(lit_sta != 4){
                lit_sta++;
            }
        }
        var new_left = -lit_sta*200;//计算pic_box的新left值
        $('#information .litter_pic .pic_box').animate({'left':new_left+'px'},100);
    })
}()

    /*无缝滚动 */
+function (){
    var marquee = document.getElementById('marquee');
    //获取要进行运动的ul
    var ul = document.getElementById('marquee_one');
    //将ul中所有li都拿到
    var lis = ul.getElementsByTagName('li');
    //看得见的6张图的无缝滚动，那么前提至少要有6张图来做.如果图片>=6张图的话，需要在图片列表的末尾复制一份最前面的6张图
    ul.innerHTML += ul.innerHTML;
    //复制6张图之后宽度ul的宽度要给够
    ul.style.width = lis[0].offsetWidth * lis.length + "px";
    //负值的话，ul会向左移动。正值的话，ul会向右移动。数字越大速度越慢
    var speed = -2;
    //启动定时器，定义一个函数做运动
    function move(){
        if(ul.offsetLeft < -ul.offsetWidth/2){
            ul.style.left = "0";
        }else if(ul.offsetLeft > 0){
            ul.style.left = -ul.offsetWidth/2 + "px";
        }
        ul.style.left = ul.offsetLeft + speed + "px";
    }
    var timer = setInterval(move,20);
}()

//tab标签页
+function(){
    //设置class为tab_box下的第一个div的透明度为1
    var div=document.querySelector(".tab_box>div:first-child");
    div.style.opacity = "1";
    div.style.height = "430px";
    //Step1:为class为tab下的ul下的a绑定单击事件处理函数
    var as=document.querySelectorAll(".tab a");
    for(var i=0;i<as.length;i++){
        //as[i].onclick=function(e){
        as[i].onmouseover=function(e){
            e.preventDefault();
            //this->当前a
            //查找class为tab_box下的所有div
            var divs = document.querySelectorAll(".tab_box>div");
            //清除每个div的opacity
            for(var i=0;i<divs.length;i++){
                divs[i].style.opacity="";
                divs[i].style.height="";
            }
            //查找a的href中最后一个#的位置i
            var i = this.href.lastIndexOf("#");
            //根据当前a的href属性中#后的部分作为id查找对应的div
            var div=document.querySelector(this.href.slice(i));
            //设置div的opacity为1
            div.style.opacity="1";
            div.style.height="430px";
        }
    }
}()

    /*倒计时*/
+function(){
    //任务函数
    function task(){
        var end=new Date("2017/05/23 17:00:00");
        var now=new Date();
        var s=parseInt((end-now)/1000);
        var span=document.querySelector("#time1");
        if(s>0){
            var d=parseInt(s/3600/24);
            if(d<10) d="0"+d;
            //s/3600/24,再下取整
            var h=parseInt(
                s%(3600*24)/3600);
            if(h<10) h="0"+h;
            //s/(3600*24)的余数/3600下取整
            var m=parseInt(s%3600/60);
            if(m<10) m="0"+m;
            //s/3600的余数,再/60，再下取整
            s%=60;//s/60的余数
            if(s<10) s="0"+s;
            span.innerHTML=d+":"+h+":"+m+":"+s;
        }
        else{
            //停止定时器，清空timer，提示结束
            clearInterval(timer);
            timer=null;
            span.innerHTML="秒杀结束啦！";
        }
    }
    task();//为了防止开头空白
    //启动定时器,并保存定时器序号
    var timer=setInterval(task,1000);
}()
+function(){
    //任务函数
    function task(){
        var end=new Date("2017/06/24 10:00:00");
        var now=new Date();
        var s=parseInt((end-now)/1000);
        var span1=document.querySelector("#time2");
        if(s>0){
            var d=parseInt(s/3600/24);
            if(d<10) d="0"+d;
            //s/3600/24,再下取整
            var h=parseInt(
                s%(3600*24)/3600);
            if(h<10) h="0"+h;
            //s/(3600*24)的余数/3600下取整
            var m=parseInt(s%3600/60);
            if(m<10) m="0"+m;
            //s/3600的余数,再/60，再下取整
            s%=60;//s/60的余数
            if(s<10) s="0"+s;
            span1.innerHTML=d+":"+h+":"+m+":"+s;
        }
        else{
            //停止定时器，清空timer，提示结束
            clearInterval(timer);
            timer=null;
            span1.innerHTML="秒杀结束啦！";
        }
    }
    task();//为了防止开头空白
    //启动定时器,并保存定时器序号
    var timer=setInterval(task,1000);
}()

/******4楼妈咪宝贝轮播(仿网易)**********/
+function(){
    // 获取元素
    function $(id) {return document.getElementById(id);}
    var js_slider = $("js_slider");  // 获取最大盒子
    var slider_main_block = $("slider_main_block");  // 滚动图片的父亲
    var imgs = slider_main_block.children;  // 获得所有的图片组 需要滚动的部分
    var slider_ctrl = $("slider_ctrl");  // 获得 控制span 的 父盒子
    // 操作元素
    // 生成小span
    for(var i=0;i<imgs.length; i++) {

        var span = document.createElement("span");// 创建 span
        span.className = "slider_ctrl_con"; // 添加类名
        span.innerHTML = imgs.length-i;  //  6 - 0     6 - 1   // 实现 倒序 的方式插入
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);  // 再 父亲 倒数第二个盒子的前面插入
    }
    // 下面的第一个小span  是默认的蓝色
    var spans = slider_ctrl.children;   // 得到所有的 span
    spans[1].setAttribute("class","slider_ctrl_con current");  // 两个类名

    var scrollWidth = js_slider.clientWidth; // 得到大盒子的宽度 也就是  后面动画走的距离  310
    //  刚开始，按道理   第一张图片 留下   其余的人走到 310 的位置上
    for(var i = 1; i<imgs.length; i++) { // 从1 开始 因为第一张不需要计算

        imgs[i].style.left =  scrollWidth + "px";  // 其他人 先右移动到 310 的位置
    }
    // 遍历三个按钮
    // spans 是 7个按钮 他们都是 span
    var iNow = 0; //  用来 控制播放张数
    for(var k in spans){   //   k  是索引号  spans[k]    spans[0]  第一个span
        spans[k].onclick = function() {
            // alert(this.innerHTML);
            if(this.className == "slider_ctrl_prev"){ // 判断当前点击的这个按钮是不是 prev
                // alert("您点击了左侧按钮");
                //  当我们左侧点击时候， 当前的这张图片 先慢慢的走到右边  上一张 一定先快速走到左侧 （-310）的位置，然后慢慢的走到舞台中
                animate(imgs[iNow],{left: scrollWidth});
                --iNow < 0 ?  iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left: 0});
                setSquare();
            }
            else if(this.className == "slider_ctrl_next") {  // 右侧按钮开始
                autoplay();
            }
            else {
                // alert("您点击了下面的span");
                // 我们首先要知道我们点击是第几张图片  --- 获得当前的索引号
                // alert(this.innerHTML);
                var that = this.innerHTML - 1;
                // console.log(typeof that);
                if(that > iNow) {
                    // 做法等同于 右侧按钮
                    animate(imgs[iNow],{left: -scrollWidth});  // 当前的这张慢慢的走出去 左侧
                    imgs[that].style.left = scrollWidth + "px"; // 点击的那个索引号 快速走到右侧  310
                }
                else if(that < iNow) {
                    // 做法等同于 左侧按钮
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;  // 给当前的索引号
                animate(imgs[iNow],{left: 0});
                /*比如 已经播放到 第4张    我点击了 第2张   把 2 给  inow
                 下一次播放，应该播放第3张*/
                // animate(imgs[iNow],{left: 0});
                setSquare();
            }
        }
    }
    //  一个可以控制 播放span 的 函数   当前
    function setSquare() {
        //  清除所有的span current   留下 满足需要的拿一个
        for(var i=1;i<spans.length-1;i++){   //  7个span   我们要 1-6  不要 7  索引号
            spans[i].className = "slider_ctrl_con";
        }
        spans[iNow+1].className = "slider_ctrl_con current";  // 记住 + 1
    }
    // 定时器开始  其实， 定时器就是  右侧按钮
    var timer = null;
    timer = setInterval(autoplay,2000);  // 开启定时器
    function autoplay() {
        //  当我们点击时候， 当前的这张图片 先慢慢的走到左边  下一张 一定先快速走到右侧 （310）的位置，然后慢慢的走到舞台中
        // alert("您点击了右侧按钮");
        //iNow == 0
        animate(imgs[iNow],{left: -scrollWidth});
        // 当前的那个图片 慢慢的走到 -scrollWidth 位置
        // 变成1   先 ++   ++iNow  先自加  后 运算
        ++iNow > imgs.length -1 ?  iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";  // 立马执行  快速走到右侧
        animate(imgs[iNow],{left: 0}); // 下一张走的 0 的位置  慢慢走过来
        setSquare();  // 调用square
    }
    //鼠标经过清除定时器
    js_slider.onmouseover = function() {
        clearInterval(timer);
    }
    js_slider.onmouseout = function() {
        clearInterval(timer);  // 要执行定时器 先清除定时器
        timer = setInterval(autoplay,2000);  // 开启定时器
    }
}()

/*****附加导航***********/
+function(){
    $(window).scroll(function(){
        var items = $("#subject #subject_box").find(".item");
        var affix = $("#affix");
        var top = $(document).scrollTop();
        var currentId = ""; //滚动条现在所在位置的item id
        items.each(function () {
            var m = $(this);
            //注意：m.offset().top代表每一个item的顶部位置
            if(top > m.offset().top - 300) {
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var currentLink = affix.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            affix.find("[href=" + currentId + "]").addClass("current");
        }
    });
}()





