$(function(){
    // 显示邮箱修改弹窗
    function showEmailInfo(){
        $('#myModal4Notify').modal('show');
    }
    $("#modEmail").click(function(){
        $("#myModal4email").modal('hide'); 
        showEmailInfo();
    })
})
