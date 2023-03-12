let params = new URLSearchParams(window.location.search)
let id=params.get('id');
let favList=[];
let hero;
let combat,duration,intelligence,power,speed,strength;
let aliases,alignment,alterEgos,firstAppearance,fullName,placeOfBirth,publisher;
let groupAffiliation,relatives;
let container = document.querySelector(".container");
let btn=document.querySelector(".btn");



async function fetchfunction(){
    const response=await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    return await response.json();
}
    (async()=>{
        hero= await fetchfunction();
        h1.innerHTML=hero.name;
        let image = hero.images.sm;
        ( {combat,durability,intelligence,power,speed,strength} =  hero.powerstats);
        ({aliases,alignment,alterEgos,firstAppearance,fullName,placeOfBirth,publisher}=hero.biography);
        ({groupAffiliation,relatives}=hero.connections);
       
        
        const htmlData = `
       
    <div class="hero_card">
     <div>
         <img src=${image}>
     </div>
     <span id="combat" class="powerstate">
         Combate:${combat}
     </span>
     <span id="durability" class="powerstate">
         Durability:${durability}
     </span>
     <span id="intelligence" class="powerstate">
         Intelligence:${intelligence}
     </span>
     <span id="power" class="powerstate">
        Power:${power}
     </span>
     <span id="speed" class="powerstate">
        Speed:${speed}
     </span>
     <span id="strength" class="powerstate">
        Strength:${strength}
     </span>
     <button class="btn"  type="submit"><i class="fas fa-heart"></i>Add to Favourites</button>
 </div>
 <div class="hero_info">
      <h1>
      ${fullName} &nbsp;
     </h1>
     <br>

     <span class="biography">FullName: ${fullName} </span>
     <span class="biography">Aliases:${aliases} </span>
     <span class="biography">Alignment: ${alignment}</span>
     <span class="biography">AlterEgos: ${alterEgos}</span>
     <span class="biography">FirstAppearance: ${firstAppearance}</span>
     <span class="biography">Place Of Birth: ${placeOfBirth}</span>
     <span class="biography">Publisher: ${publisher}</span>
     <hr>
     <span class="connections">Connections:
     <br>
        GroupAffiliation: ${ groupAffiliation}
        Relatives:${relatives} </span>
 </div>
 
`;
container.insertAdjacentHTML('afterbegin',htmlData);
const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));;
    if(existingEntries == null) existingEntries = [];
       let entry={
           "id":id,
        "image":hero.images.sm,
        "name":fullName
    }
    var found=existingEntries.findIndex((element)=>{
        if(element.id==id){
            return true;
        }
    })

    if(found == -1){
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        window.open("favourite.html","_blank")
    }
    else{
        alert("Character already exist");
        console.log("Character already exist");
    }
      
})

})();
     
let h1=document.getElementById('name');