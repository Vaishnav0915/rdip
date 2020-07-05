var name=document.getElementById('name').value
var email=document.getElementById('mail').value
var pno=document.getElementById('phno').value
$(document).ready(function()
{
    $("#submit").click(function()
    {
        $.post("get.html", $("#myform").serialize,function(data)
        {
            alert(data);
        });
    });
})
