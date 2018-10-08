$(function () {
    //轮播图
    var t=setInterval(move,2000)
    var img = $(".bannerimg a")
    var width=351;
    var now=0;
    var next=0;
    function move(){
        next++;
        if(next==img.length){
            next=0;
        }
        img[next].style.left=width+"px";
        animate(img[now],{left:-width});
        animate(img[next],{left:13});
        now=next;
    }
    //发现品牌轮播效果
    var card=$('.down .items')
    var hidd=$('.down .items .hidd')
    var index=0
    // console.log(card,hidd)
    setInterval(keepup,2000)
    function keepup() {
        index++
        if(index==card.length){
            index=0
        }
        hidd.css('bottom','-50px')
        hidd[index].style.bottom=0;
    }
    //抢购倒计时
    function daojishi() {
        var time=new Date()
        var yy=time.getFullYear()
        var mm=time.getMonth()+1
        var dd=time.getDate()
        var hh=time.getHours()
        var nowTime=new Date();
        var futureTime=new Date(yy,mm,dd,hh+2);
        var time1=nowTime.getTime();
        var time2=futureTime.getTime();
        var arr=[];
        //距离倒计时相差的秒数
        var times=Math.floor((time2-time1)/1000);
        var month=Math.floor(times/(30*24*60*60));
        // arr.push(month);
        times=times-(month*(30*24*60*60));
        var day=Math.floor(times/(24*60*60));
        // arr.push(day);
        times=times-(day*(24*60*60));
        var hour=Math.floor(times/(60*60));
        if(hour<10){
            hour="0"+hour;
        }
        arr.push(hour);
        times=times-(hour*(60*60));
        var minut=Math.floor(times/60);
        arr.push(minut);
        times=times-(minut*(60));
        var s=Math.floor(times%60);
        if(s<10){
            s="0"+s;
        }
        arr.push(s);
        return arr;
    }
    var arr1=daojishi(2018,10,6,16);
    var tt=document.querySelectorAll('.xsqg .con .tt')
    TimeGo();
    setInterval(TimeGo,1000);
    function TimeGo(){
        var arr=daojishi();
        tt.forEach(function (element,index) {
            element.innerText=arr[index];
        })
    }
    // 首部缩进开始
    $(window).scroll(function(){
        $('.header').css({"height":"1.2rem"});
        $(".logo").css("display","none");
        $(".searchbox").css({"width":"5.5rem","height":"0.1rem","margin":"0 auto","top":"-0.8rem","background":"white"})
    })
});