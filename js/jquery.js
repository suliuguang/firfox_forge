/*点击星座运势*/
$(function(){
    $('.date_place').click(function () {
        $('.date_content').css('display',function(index,value){
            if (value == "none") {
                return 'block';
            } else {
                return 'none';
            }
        });
    });
});

/*头部导航-换肤-设置-记录*/
$(function(){
	var $skin_change=$('.skin_change');
	$skin_change.on('click',function(){
		$('.top_nav_cont').slideToggle(1500);
	});
});
