var nameInput=document.getElementById("productName")
var priceInput=document.getElementById("productPrice")
var categoryInput=document.getElementById("productCategory")
var descInput=document.getElementById("productDescription")
var searchInput=document.getElementById("searchInput")

var productList=[]


if(localStorage.getItem("list")!=null){
productList=JSON.parse(localStorage.getItem("list"))
displayData()
}

function addProduct(){
    if(validInput()===true){
var product ={

name:nameInput.value,
price:priceInput.value,
category:categoryInput.value,
desc:descInput.value,
}
productList.push(product)
localStorage.setItem("list",JSON.stringify(productList))
displayData()
clearForm()
    }else{
        window.alert("Inputs Required");
    }



}


function displayData(){
  
var cartona=""

for (let i = 0; i < productList.length; i++) {
   cartona+=`
   
   <tr>
   <td>${i}</td>
   <td>${productList[i].name}</td>
   <td>${productList[i].price}</td>
   <td>${productList[i].category}</td>
   <td>${productList[i].desc}</td>
   <td><button class="btn btn-outline-warning bg-warning" onclick="updateProduct(${i})">Update</button></td>
   <td><button class="btn btn-danger bg-danger" onclick="deleteProduct(${i})">Delete</button></td>
</tr>
   `
    
}

document.getElementById("tablebody").innerHTML=cartona

}

function clearForm(){
    nameInput.value=""
    priceInput.value=""
    categoryInput.value=""
    descInput.value=""
}

function deleteProduct(index){
    productList.splice(index,1)
    localStorage.setItem("list",JSON.stringify(productList))
displayData()
clearForm()
}

function updateProduct(x){
    nameInput.value=productList[x].name
    priceInput.value=productList[x].price
    categoryInput.value=productList[x].category
    descInput.value=productList[x].desc
         document.getElementById("btn-add").style.display = "none"
    document.getElementById("btn-edit").style.display = "inline-block"
index=x;
}

function addUpdate(){

 
        var product ={

            name:nameInput.value,
            price:priceInput.value,
            category:categoryInput.value,
            desc:descInput.value,
            }
             productList[index]=product
    
             
            console.log(productList[index]); 
            localStorage.setItem("list",JSON.stringify(productList))
            displayData()
            clearForm()
            document.getElementById("btn-add").style.display = "inline-block"
            document.getElementById("btn-edit").style.display = "none"

}



function search() {
    var searchvalue = searchInput.value.toLowerCase()

    var temp = ""
    for (var i = 0; i < productList.length; i++) {

        if (productList[i].name.toLowerCase().includes(searchvalue) == true) {
            temp += ` <tr>
    <td>`+ i + `</td>
    <td>`+ productList[i].name.toLowerCase().replace(searchvalue, "<span class=`text-danger fw-bold`>" + searchvalue + "</span>") + `</td>
    <td>`+ productList[i].price + `</td>
    <td>`+ productList[i].category + `</td>
    <td>`+ productList[i].desc + `</td>
    <td><button class="btn btn-outline-warning bg-warning" onclick="updateProduct(${i})">Update</button></td>
   <td><button class="btn btn-danger bg-danger" onclick="deleteProduct(${i})">Delete</button></td>
    </tr>`
        }

    }

    document.getElementById("tablebody").innerHTML = temp

}




function validInput(){


    
    if ( nameInput.value===""|| priceInput.value===""||  categoryInput.value===""||descInput.value===""
    ){
    
    return false;
    
    }
    else{
        return true ;
    }
    
    }

























































































































