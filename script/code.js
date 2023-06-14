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
        img:"https://media.gamestop.com/i/gamestop/20001549",
       
    },
    { 
      id: 2,
      Name:"Spider-Man Miles Morales",
      Price:"R1 259.00",
      description:"Spider-Man Miles Morales For Ps5",
      img:"https://www.popsci.com/uploads/2021/07/21/sony-marvels-spider-man-best-ps5-games.jpg?auto=webp",
     
  },
  { 
    id: 3,
    Name:"God of War Ragnarok ",
    Price:"R999.00",
    description:"God of War Ragnarok (Lauch Edition) for Ps5",
    img:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/p/s/ps5_gowr_ste_pksht_ft_au_rgb_220614.png",
   
},
    
    { 
        id: 4,
        Name:"Play station 4 Pro",
        Price:"R5 899,00",
        description:"Main processor. Single-chip custom processor. CPU : x86-64 AMD “Jaguar”, 8 cores <br>Memory. GDDR5 8GB Storage size* 500GB, 1TB. <br>BD/ DVD drive. (read only) BD × 6 CAV",
        img:"https://cdn.images.express.co.uk/img/dynamic/143/590x/PS4-Pro-officially-announced-Sony-confirms-PS4-NEO-release-date-and-price-708306.jpg",
       
    },
    { 
        id: 5,
        Name:"Call of Duty MW",
        Price:"R740.00",
        description:"Call of Duty for Ps4",
        img:"https://media.gamestop.com/i/gamestop/11206901-11206900?$plp-tile3x$",
       
    },
    { 
        id: 6,
        Name:"Mortal Kombat 11",
        Price:"R389.00",
        description:"Mortal Kombat 11 for Ps4",
        img:"https://m.media-amazon.com/images/I/71qwExpwFkL._AC_UF1000,1000_QL80_.jpg",
       
    }
])
)

let displayElement = document.querySelector('#content');
content.forEach(content => {
   console.log(displayElement); displayElement.innerHTML+=`
   
   <div class="col-3">
     <div class="card"><div class="img">
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
   </div>

   
  
`});

localStorage.setItem("content",JSON.stringify(content));

