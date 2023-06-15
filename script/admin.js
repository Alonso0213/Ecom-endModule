let products = JSON.parse(localStorage.getItem('content'))||[];
const displayElement = document.querySelector('#content');
// For add new product

function mfisher(){
  displayElement.innerHTML = "";
  products.forEach((item, i) => {
  displayElement.innerHTML+=`
<tr>
<td>${item.id}  </td>
<td> ${item.Name} </td>
<td> ${item.description} </td>
<td> ${item.Price} </td>
<td><img src="${item.img}"></td>
<td><!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>
<button type="button" class="btn btn-primary" id="remove-item" onclick='deleteItems(${JSON.stringify(i)})'>Delete</button>
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
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="name${item.id}">
    </div>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
  <input type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="description${item.id}">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
  <input type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="price${item.id}">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Product img</span>
  <input type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="img${item.id}">
</div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick='new EditProduct(${JSON.stringify(item)}) id="update">Save changes</button>
      </div>
    </div>
  </div>
</div></button>

</td>

</tr> 
`

});

}
mfisher()

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








function addData() {
  let Name = document.querySelector('#productName');
let description = document.querySelector('#productDescription');
let Price = document.querySelector('#productPrice');
let img = document.querySelector('#productImage');
    products.push({
    Name : Name.value,
    description: description.value,
    Price: Price.value,
    img: img.value,
  })
  localStorage.setItem("content", JSON.stringify(products))
  // location.reload()
  addData()

}


function deleteItems(index) {
  products.splice(index, 1);
  localStorage.setItem("content", JSON.stringify(products))
  addData()
}





