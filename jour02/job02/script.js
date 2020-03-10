function showhide(){
    if(document.getElementById('ajout') != null){
        var ele = document.getElementById('ajout');
        console.log(ele);
        ele.remove();
    }
    else{
        var b = document.body;
        var newarticle = document.createElement('article');
        newarticle.setAttribute("id","ajout")
        newarticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        b.append(newarticle);
    }  
}