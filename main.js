let nom=document.getElementById('nom');
let date=document.getElementById('date');
let statu=document.getElementById('statu');
let description=document.getElementById('description');
let Submit=document.getElementById('Submit');
let Submit_none=document.getElementById('Submit_none');


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
    resetData()
    afficheData()
    ajaute()

}
function ajaute(){
    if(nom.value !='' && description.value !='' &&  date.value !='' && statu.value !='default'){
         Submit.style.display="block"
         Submit_none.style.display="none"
    }else{
        Submit.style.display="none"
         Submit_none.style.display="block"
    }
}
// clear inputs
function resetData(){
    nom.value = '';
    statu.value = 'default';
    date.value = '';
    description.value = '';
}
//affiche de les informations
function afficheData(){
    let table = '';
    for(let i=0; i<datatache.length ; i++){
        table += `
            <div class="bahom">
                    <div class="Card">
                    <h5>Title :</h5>
                    <p> ${datatache[i].nom}</p>
                    </div>

                    <div class="Card Card-description">
                    <h5>Description :</h5>
                    <p>${datatache[i].description}</p>
                    </div>
<div class="statu-date">
                    <div class="Card">
                    <h5>Statu :</h5>
                    <p> ${datatache[i].statu}</p>
                    </div>

                    <div class="Card">
                    <h5>date :</h5>
                    <p> ${datatache[i].date}</p>
                    </div>
</div>
                    <hr>

                    <div class=" button-card">
                         <button onclick="ModifierData(${i}) " type="button" class="btn btn-link"><i class="fa-regular fa-pen-to-square text-primary"></i></button>
                         <button onclick="SupprimerData(${i})" type="button" class="btn btn-link"><i class="fa-regular fa-trash-can text-danger"></i></button>
                         
                         <hr>            
                    </div>
            </div>
                `
                }
 document.getElementById('element').innerHTML=table;
}
afficheData();
//Supprimer une tache.
function SupprimerData(i){
   datatache.splice(i,1);
   localStorage.SaveTach=JSON.stringify(datatache);
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
