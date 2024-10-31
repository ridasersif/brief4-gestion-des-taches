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
    clearData()
    afficheData()
}
// clear inputs
function clearData(){
    nom.value = '';
    statu.value = '';
    date.value = '';
    description.value = '';
}
//affiche de les informations
function afficheData(){
    let table = '';
    for(let i=0; i<datatache.length ; i++){
        table +=`
        <tr>
                            <td>${datatache[i].nom}</td>
                            <td>${datatache[i].description}</td>
                            <td>${datatache[i].statu}r</td>
                            <td>${datatache[i].date}</td>
                            <td><button onclick="ModifierData(${i}) " type="button" class="btn btn-primary">Modifier</button></td>
                            <td><button onclick="SupprimerData(${i})" type="button" class="btn btn-danger">Supprimer</button></td> 
                                    
         </tr>
                `
                }
 document.getElementById('tbody').innerHTML=table;
}
afficheData();
//Supprimer une tache.
function SupprimerData(i){
   datatache.splice(i,1);
   localStorage.SaveTach=JSON.stringify(datatache);
   console.log(i)
   afficheData();
}



//modifier tache
function ModifierData(i){
    nom.value=datatache[i].nom;
    description.value=datatache[i].description;
    statu.value=datatache[i].statu;
    date.value=datatache[i].date;
    SupprimerData(i)
    
}














//rocherche
