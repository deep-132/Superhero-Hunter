let container = document.querySelector(".container");

let allData = JSON.parse(localStorage.getItem("allEntries"));

const html = allData.map(element=>{
    return (`<div class="card" >
            <img src=${element.image}>
            <h1>${element.name}</h1>
            <div class="btn-cnt">
            <button class="del" val="${element.id}" type="submit"><i style="margin-right:5px" class="fas fa-user-minus"></i>Remove</button>
            <button class="info" val="${element.id}" type = "submit">Info </button>
            </div>
            </div>`);
}).join("");

container.innerHTML=html;

container.addEventListener("click",(e)=>{
    let card=e.target;

    if(card.classList[0]==='del'){
        let id = card.getAttribute("val");
        console.log(id);
        card.parentElement.parentElement.remove();
        let x = allData.findIndex(index=>  index.id==id);
        console.log(x);
        allData.splice(x,1);

        localStorage.setItem("allEntries", JSON.stringify(allData));
    }
    if(card.classList[0]=="info"){
        let id = card.getAttribute("val");
        window.open(`hero.html?id=${id}`,"_blank")
    }
})