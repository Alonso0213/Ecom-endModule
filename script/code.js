let content = JSON.parse(localStorage.getItem("content"))
  ? JSON.parse(localStorage.getItem("content"))
  : localStorage.setItem(
      "content",
      JSON.stringify([
    { 
        id: 1,
        Name:"Play Staion 5",
        Price:"R12999,00",
        description:"CPU: 3.5GHz, 8-core AMD Zen 2 <br> GPU: 10.3 teraflop RDNA 2 GPU <br>RAM: 16GB GDDR6.<br>Storage: Custom 825GB SSD.<br>Expansion: NVMe M.2 SSD slot<br>Disc drive: 4K Blu-ray player.<br>Size: 15.4 x 10.2 x 4.1 inches",
        img:"https://i.postimg.cc/0jV4YYfK/11206901-11206900.jpg",
       
    },
    { 
      id: 2,
      Name:"Spider-Man Miles Morales",
      Price:"R1 259.00",
      description:"Spider-Man Miles Morales For Ps5",
      img:"https://i.postimg.cc/rwBPNFSj/20001549.jpg",
     
  },
  { 
    id: 3,
    Name:"God of War Ragnarok ",
    Price:"R999.00",
    description:"God of War Ragnarok (Lauch Edition) for Ps5",
    img:"https://i.postimg.cc/pL4gcBtD/71qw-Expw-Fk-L-AC-UF1000-1000-QL80.jpg"
    ,
   
   },
    
    { 
        id: 4,
        Name:"Play station 4 Pro",
        Price:"R5 899,00",
        description:"Main processor. Single-chip custom processor. CPU : x86-64 AMD “Jaguar”, 8 cores <br>Memory. GDDR5 8GB Storage size* 500GB, 1TB. <br>BD/ DVD drive. (read only) BD × 6 CAV",
        img:"https://i.postimg.cc/NM7SMq24/PS4-Pro-officially-announced-Sony-confirms-PS4-NEO-release-date-and-price-708306.jpg",
       
    },
    { 
        id: 5,
        Name:"Call of Duty MW",
        Price:"R740.00",
        description:"Call of Duty for Ps4",
        img:"https://i.postimg.cc/BZpRf30Z/ps5-gowr-ste-pksht-ft-au-rgb-220614.png",
       
    },
    { 
        id: 6,
        Name:"Mortal Kombat 11",
        Price:"R389.00",
        description:"Mortal Kombat 11 for Ps4",
        img:"https://i.postimg.cc/Y0rVLn1w/sony-marvels-spider-man-best-ps5-games.webp",
       
    },
    { 
      id: 7,
      Name:"Mobius Headset",
      Price:"R4 999.00",
      description:"Mobius is powered by Audeze Planar Magnetic drivers, internationally acclaimed for their superior sound quality. Experience a level of depth and realism in your game audio that no other video game headphones can even hope to match",
      img:"https://i.postimg.cc/JzHXZjcy/audeze-mobius-headset.jpg",
     
  },
  { 
    id: 8,
    Name:"Maxwell Gaming Headset",
    Price:"R7 999.00",
    description:"Mortal Kombat 11 for Ps4",
    img:"https://i.postimg.cc/YqY5Ds3M/xbox-audeze-gaming-headset.jpg",
   
},
{ 
  id: 9,
  Name:"Xbox series S 512GB",
  Price:"R6 999.00",
  description:"",
  img:"https://i.postimg.cc/pLN2pj0X/series-s-gilded-hunter.jpg",
 
},
{ 
  id: 10,
  Name:"Starfield(XBS)",
  Price:"R1 399.00",
  description:"Mortal Kombat 11 for Ps4",
  img:"https://i.postimg.cc/3RWRgT2K/xbs-starfield-tbc-pack.jpg",
 
}
])
)

let displayElement = document.querySelector('#content');
content.forEach(content => {
   console.log(displayElement); 
   displayElement.innerHTML +=`
   
   <div class="card" style="width: 18rem;" >
  <img src="${content.img}" class="card-img-top" alt="icon">
  <div class="card-body">
    <p class="card-text">${content.description}</p>
    
  </div>
  <p class="card-text">${content.Price}</p>
   <button type="button" class="btn btn-primary" id="save" onclick="AddData()">Buy</button>
</div>

`});
localStorage.setItem("content",JSON.stringify(content));

let display = document.querySelector('#list');
function mfisher(){
  display.innerHTML = "";
  products.forEach(content => {
  //  console.log(displayElement); 
  display.innerHTML +=`
  <div class="col-3">
  <div class="card">
  <div class="img">
    <img src=" ${content.img}" class="card-img-top" alt="..."  >
   </div>
    <div class="card-body">
      <h5 class="card-title">${content.Name}</h5>
      <p class="card-text">${content.Price}</p>
      <p class="card-text">${content.description}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add to cart
    </button>
    </div>
  </div>
</div>`
})}
mfisher()

