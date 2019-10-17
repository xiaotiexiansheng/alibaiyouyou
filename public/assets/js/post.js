$.ajax({
    type:'get',
    url:'/posts',
    success:function(res) {
        var html = template('postsTpl',res);

    }   
})
function dateFormat(date) {
    date = new Date(date)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
    
}