 //轮播图效果 
 $(function(){
        
	var mySwiper = new Swiper ('.swiper-container', {
   direction: 'horizontal', // 垂直切换选项
   loop: true, // 循环模式选项	
   pagination: {
	 el: '.swiper-pagination',
   },
   speed:1000,
   

 autoplay : {
   delay:3000
 },
   effect: 'coverflow',
   grabCursor: true, 
   // cubeEffect: { 
   //     shadow: false, //是否显示投影 
   //     slideShadows: true, //是否显示slide阴影 
   //     shadowOffset: 20, //投影距离 
   //     shadowScale: 0.94, //投影缩放比例 
   // }, 
		   coverflowEffect:{
			   rotate:70,//slide做3d旋转时Y轴的旋转角度。
	   stretch:0,//每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
	   depth:600,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
	   modifier:1//depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
	   // slideShadows：开启slide阴影。默认 true。
		   },
   
   // 如果需要前进后退按钮
   navigation: {
	 nextEl: '.swiper-button-next',
	 prevEl: '.swiper-button-prev',
   },
   box:{

rows: 6, // 切割行

cols: 3 // 切割列

},
});
   });
 



 //回到顶部 和吸顶效果


window.onload=function(){
	$(function(){
	$(window).scroll(
	function(){
		var sTop=$(document).scrollTop();
		// console.log(sTop)
		if(sTop>=800){
			$('.index-backto-top').stop().animate({opacity:1},500)
		}else{
			$('.index-backto-top').stop().animate({opacity:0},500)
		};
		if(sTop>=577) {
			console.log('fdssdf')
			$('#index-nav').css({'background':'#fafafa'})
	   }else{
       $('#index-nav').css({'background':'rgba(0,0,0,0)'})
	   }
	}
);
		//吸顶效果
		
// 		$(function(){
//     var a = $('#index-nav'),
//       b =a.offset();//返回或设置导航栏相对于文档的偏移(位置)
//   //加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
//     $(document).on('scroll',function(){
//       var c = $(document).scrollTop();
// //   当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下）*／
//       if(b.top<=c){
//         a.css({'position':'fixed','top':'0px'})
//         }else{
//           a.css({'position':'absolute','top':'0px'})
//           }
//      })
//   });




       //点击回到顶部
		$('.index-backto-top').click(
			function(){
		$(document.documentElement).animate({scrollTop:0},500)
			}
		);
		});
}




//获取用户名称 


// if(window.location.search){
// 	var userId=window.location.search.match(/(?<=uid=)\d+/)[0];
// 	getRequest();
// }
//      function getRequest(){
		
// 		$.ajax({
// 		 url:'/index',
// 		 data:{id:userId},
// 		 success:function(res){
// 			 if(res.error==0){
			
// 				$('.logAndReg').css({opacity:0});
// 				$('.perCenter p:first').css({opacity:0});
// 	$('.uName').append('<span>'+res.name+'</span>') ;
// 			 }
// 		 }
// 		})	
// 	 };

	 //获取社区图片展示
	//  window.onload=function(){
	// 	$.ajax({
	// 		url:'/Incommunity',
	// 		success:function(res){
	// 		  if(res.error==0){
	// 		   $('.index-community-div1 img').attr('src',res.data[0].pi_img);
	// 		   $('.index-community-div2 img').attr('src',res.data[1].pi_img);
	// 		   $('.index-community-div3 img').attr('src',res.data[2].pi_img);
	// 		   $('.index-community-div4 img').attr('src',res.data[3].pi_img);
	// 		   $('.index-community-div5 img').attr('src',res.data[4].pi_img);
	// 		   $('.index-community-div6 img').attr('src',res.data[5].pi_img);
	// 		  }
	// 		}
	// })
	//  };
   //拦截地址栏id
	 $(function(){
		var userId='';
        function nav(){
            if(window.location.search.match(/(?<=uid=)\d+/).length){
                userId=window.location.search.match(/(?<=uid=)\d+/)[0];
                console.log(userId);
                $('.reg-login').html('退出登录')
            }
            $('.reg-login').click(function(){
                window.location.href=`./login.html`;
            });
            $('.video-class').click(function(){
                window.location.href=`./classtype1.html?uid=${userId}`;
            });
            $('.shop-mall').click(function(){
                window.location.href=`./shoplist.html?uid=${userId}`;
            });
            $('.community-page').click(function(){
                window.location.href=`./community.html?uid=${userId}`;
            });
            $('.shop-car').click(function(){
                window.location.href=`./shoppingtrolley.html?uid=${userId}`;
            });
            $('.penson-center').click(function(){
                window.location.href=`./mine.html?uid=${userId}`;
            });
            $('.return-index').click(function(){
                window.location.href=`./index.html?uid=${userId}`;
            });
        };
        nav();
	 })
	
      


