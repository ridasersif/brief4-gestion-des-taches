let nom=document.getElementById('nom');
let date=document.getElementById('date');
let statu=document.getElementById('statu');
let description=document.getElementById('description');
let Submit=document.getElementById('Submit');




//ajoute tache
let datatache;
if(localStorage.SaveTach!=null){
    datatache=JSON.parse(localStorage.SaveTach)
}else{
    datatache=[];
}

Submit.onclick=function(){
    let NauveauTache={
        nom:nom.value,
        date:date.value,
        description:description.value,
        statu:statu.value,
    }
    datatache.unshift(NauveauTache)
    localStorage.setItem('SaveTach',JSON.stringify(datatache))
    console.log(datatache)
}










//save data in localstorag
//affiche de les informations
//Supprimer tache
//modifier tache
//rocherche
