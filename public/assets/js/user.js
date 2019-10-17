$.ajax({
    type:'get',
    url:'/users',
    success:function(res) {
        var html = template('usersTpl',{data:res});
        $('#tbody').html(html);
    }
});
$('#userForm').on('submit',function() {
    var formData = $(this).serialize();
    $.ajax({
        type:'post',
        url:'/users',
        data:formData,
        success:function() {
            console.log(res);
            location.reload();
        },
        error:function() {
            alert('用户添加失败');
        }
    });
    return false;
});
$('#modifyBox').on('change','#avatar',function() {
    var fd = new FormData();
    fd.append('avatar',this.files[0]);
    $.ajax({
        type:'post',
        url:'/upload',
        processData:false,
        contentType:false,
        data:fd,
        success:function(res) {
            console.log(res);
            $('#hiddenImg').val(res[0].avatar);
            $('#preview').val('src',res[0].avatar);
        }
    });
});
$("#modifyBox").on('click','.edit',function() {
    alert(1);
    var id = $(this).attr('data-id');
    console.log(id);
    
    $.ajax({
        type:'get',
        url:'/users/'+id,
        success:function(res) {
            console.log(res);
            var html = template('modifyTpl',res);
            console.log(html);
            $('#modifyBox').html(html);
            
        }
    });
});
$('#modifyBox').on('submit','#modifyForm',function() {
    console.log($(this).serialize());
    var id = $(this).attr('data-id');
    $.ajax({
        type:'put',
        url:'/users/' + id,
        data:$(this).serialize(),
        success:function() {
            location.reload();
        }
    });
    return false;
    
});
$('#usersBox').on('click','del',function() {
    if(confirm('确定删除')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type:'delete',
            url:'/users/' + id,
            success:function() {
                location.reload();
            }
        });
    }
});
//批量删除
$('#checkAll').on('change',function() {
    var bool = $(this).prop('checked');
    console.log($(this).prop('checked'));
    var checkList = $('#usersBox input[type = "checkbox"]');
    checkList.prop('checked',bool);
    if(bool ==true) {
        $('#deleteAll').show();
    } else {
        $('#deleteAll').hide();
    }
});
//全选效果切换
$('#usersBox').on('change','input[type = "checkbox"]',function() {
    if($('#usersBox input[type = "checkbox"]').length == $('#usersBox input[type = "checkbox"]:checked').length) {
        $('#checkAll').prop('checked',true) 
    } else {
        $('#checkAll').prop('checked',false) 
    }
    if($('#usersBox input[type = "checkbox"]').length > 0) {
        $('#deleteAll').show();
    } else {
        $('#deleteAll').hide();
    }
});
$('#deleteAll').on('click',function() {
    if(confirm('确认删除吗')) {
        var checkList = $('#usersBox input[type = "checkbox"]:checked');
        var str = "";
        checkList.each(functionn(index,item) {
        str += $(item).attr('data-id') + '-';
        })
        str = str.substr(0,str.length-1)
}
}
