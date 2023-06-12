let content=[
    { 
        no:"1",
        Name:"Play Staion 5",
        Price:"R12 999,00",
        description:"CPU: 3.5GHz, 8-core AMD Zen 2 <br> GPU: 10.3 teraflop RDNA 2 GPU <br>RAM: 16GB GDDR6.<br>Storage: Custom 825GB SSD.<br>Expansion: NVMe M.2 SSD slot<br>Disc drive: 4K Blu-ray player.<br>Size: 15.4 x 10.2 x 4.1 inches",
        img:"https://media.gamestop.com/i/gamestop/20001549",
       
    },
    { 
        no:"2",
        Name:"Play station 4 Pro",
        Price:"R5 899,00",
        description:"",
        img:"https://cdn.images.express.co.uk/img/dynamic/143/590x/PS4-Pro-officially-announced-Sony-confirms-PS4-NEO-release-date-and-price-708306.jpg",
       
    },
    { 
        no:"3",
        Name:"Call of Duty MW",
        Price:"R9. 8-million",
        description:"dncjnvjlvnljnvlsjd",
        img:"https://media.gamestop.com/i/gamestop/11206901-11206900?$plp-tile3x$",
       
    },
    { 
        no:"4",
        Name:"Mortal Kombat 11",
        Price:"R9. 8-million",
        description:"dncjnvjlvnljnvlsjd",
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

..............

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div></button>
<button type="button" class="btn btn-primary" id="add-new">Delete</button>
</td>

</tr> 
`
});