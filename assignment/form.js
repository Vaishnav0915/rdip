function validate()
{
    var cname=/^[a-zA-Z]+$/;
    var cphno=/[0-9]+$/;

    var valid=false;
    var name=document.getElementById("fname").value;
    var pno=document.getElementById("phno").value;
    
    if(!cname.test(name))
    {
        alert("invalid name");
        return false;
    }
    else{
        document.write(name)
    }
    document.write("<br>")
    document.write(pno)
    
    if(document.getElementById("c1").checked)
    {
        
        valide=true;
    }

    if(document.getElementById("c2").checked)
    {
       
        valid=true;
    }
    if(document.getElementById("c3").checked)
    {
        
        valid=true;
    }
    if(valid)
    {
        
      
        return true
        
    }
    else
    {
        alert("please select atleat one course to register!!")
        return false;

    }

}
function function2()
{
    x=document.getElementById("fname").value;
    document.getElementById("demo").innerHTML=x;
}
function function3()
{
    y=document.getElementById("phno").value;
    document.getElementById("demo2").innerHTML=y;
}
function function4()
{
    z=document.getElementById("mail").value;
    document.getElementById("demo3").innerHTML=z;
}
function selected(event){
    alert("you selected "+event.which)
}