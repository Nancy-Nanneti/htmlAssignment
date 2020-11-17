function valid (){
    var title=document.getElementById("titleId").value;
    var price=document.getElementById("priceId").value;
    var Author_name=document.getElementById("Author_NameId").value;
    var publisher=document.getElementById(publisherId).value;
    var Noofcopies=document.getElementById(No.of.copiesId).value;

    if(title==""){
        alert("title should be given");
        return false;
    }
    if(price<0){
        alert("price should be valid");
        return false;
    }
    if(Author_name==""){
        alert("author name should be given");
        return false;
    }
    if(publisher==""){
        alert("Publisher name should be specified");
        return false;
    }
    if(Noofcopies>0 && Noofcopies <5){
        alert("enter required books only");
        return false;
    }
    return true;
}
