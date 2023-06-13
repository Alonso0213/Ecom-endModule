const addBtn = document.querySelector('#save');
const productInput = document.querySelector('#product-Input');
let productList = JSON.parse(localStorage.getItem('product-list')) ? JSON.parse(localStorage.getItem('product-list')) : [];
let tempID = productList[productList.length-1] ? productList[productList.length-1].id + 1: 1;
const deleteBtn = document.querySelector('#remove-item');
let productDeleteButtons;
let content=[
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
    Name:"God of War Ragnarok (Lauch Edition)",
    Price:"R999.00",
    description:"God of War Ragnarok (Lauch Edition) for Ps5",
    img:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/p/s/ps5_gowr_ste_pksht_ft_au_rgb_220614.png",
   
},
    
    { 
        id: 4,
        Name:"Play station 4 Pro",
        Price:"R5 899,00",
        description:"Main processor. Single-chip custom processor. CPU : x86-64 AMD “Jaguar”, 8 cores <br>Memory. GDDR5 8GB <br> Storage size* 500GB, 1TB. <br> External dimensions. Approx. 265×39×288 mm (width × height × length) <br> BD/ DVD drive. (read only) BD × 6 CAV",
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
]


const displayElement = document.querySelector('#content');
content.forEach(content => {
   console.log(displayElement); displayElement.innerHTML+=`
<tr>
<td>${content.no}  </td>
<td> ${content.Name} </td>
<td> ${content.description} </td>
<td> ${content.Price} </td>
<td><img src="${content.img}"></td>
<td><!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit content</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Product img</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div></button>
<button type="button" class="btn btn-primary" id="remove-item" onclick="">Delete</button>
</td>

</tr> 
`
});


addBtn.addEventListener('click', addItem);

function addItem(){
    event.preventDefault();
    if(productInput.value == ''){
        alert('Input is Empty!')
    } else {
        productList.push({
            id: tempID,
            name: productInput.value,
            completed: false,
            date: new Date()
        });
        tempID++;
        productInput.value = '';
        localStorage.setItem('product-list', JSON.stringify(productList));
        // renderList();
    }
}
// function deleteItem(){
//   let startPoint = productDeleteButtons.indexOf(event.target);
  // todoList.splice(startPoint, 1);
//   localStorage.setItem('product-list', JSON.stringify(productList))
//  ;}
  // renderList()

  
  function deletebtn() {
    productList = productList.filter(item => {
        return item.id !== id
    })
    // update localStorage
    localStorage.setItem('productList', JSON.stringify(productList))
    // Show items
    loadData(productList)
}