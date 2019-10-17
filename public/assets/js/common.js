$('#logout').on('click',function() {
    var bool = confirm('是否要退出');
    if(bool) {
        $.ajax({
            type:'post',
            url:'/logout',
            success:function() {
                location.href = 'login.html';
            }
        })
    }
})