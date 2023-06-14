const addBtn = document.querySelector('#save');
const productInput = document.querySelector('#product-Input');
let products = JSON.parse(localStorage.getItem('content'));
const displayElement = document.querySelector('#content');
function mfisher(){
  displayElement.innerHTML = "";
  products.forEach(content => {
  //  console.log(displayElement); 
  displayElement.innerHTML+=`
<tr>
<td>${content.id}  </td>
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
      <input type="text" id="name${content.id}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
  <input type="text" id="description${content.id}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
  <input type="text" id="price${content.id}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Product img</span>
  <input type="text" id="img${content.id}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick='new EditProduct(${JSON.stringify(content)})'>Save changes</button>
      </div>
    </div>
  </div>
</div></button>
<button type="button" class="btn btn-primary" id="remove-item" onclick="">Delete</button>
</td>

</tr> 
`

});

}
mfisher()

addBtn.addEventListener('click', addItem);

function addItem(){
    // event.preventDefault();
    if(products.value == ''){
        alert('Input is Empty!')
    } else {
      products.push({
            id: tempID,
            name: productInput.value,
            completed: false,
            date: new Date()
        });
        tempID++;
        productInput.value = '';
        localStorage.setItem('content', JSON.stringify(content));
        
    }
}

  
  function deletebtn() {
    products = products.filter(item => {
        return item.id !== id
    })
    // update localStorage
    localStorage.setItem('content', JSON.stringify(products))
    // Show items
    // loadData(products)
}



function EditProduct(item) {
  this.id= item.id;
  this.Name = document.querySelector(`#name${item.id}`).value;
  this.description = document.querySelector(`#description${item.id}`).value;
  this.Price = document.querySelector(`#price${item.id}`).value;
  this.img = document.querySelector(`#img${item.id}`).value;

  let index = products.findIndex( p=> {
    p.id == item.id;

  })

  // Update
  content[index] = Object.assign({}, this)
  localStorage.setItem('content',JSON.stringify(content));
  mfisher();
  
  // localstorage
  // call my mfisher()
  
}
mfisher()