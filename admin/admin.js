let addproductbtn = document.getElementById("addproduct");
let addproductform = document.getElementById("addproduct-form");
let savebtn = document.getElementById("save-btn");
let table = document.getElementById("table-body");
let nameinput = document.getElementById("product-name");
let priceinput = document.getElementById("product-price");
let imageinput = document.getElementById("image");
let descriptioninput = document.getElementById("product-description");


// add product btn
addproductbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addproductform.style.display = "block";
});


// product-table

savebtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addproductform.style.display = "none";
    e.preventDefault();


    let name = nameinput.value;
    let price = priceinput.value;
    let imageFile = imageinput.files[0];
    let description = descriptioninput.value;

    let reader = new FileReader();
    reader.onload = function () {
        let imageFile = reader.result;

        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${name}</td>
          <td>${price}</td>
          <td>${description}</td>
          <td><img src="${imageFile}" alt="${name} width="80" height="80"">
          <img src="${imageFile}" alt="${name} width="80" height="80"">
          <img src="${imageFile}" alt="${name} width="80" height="80""></td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        `;

        table.appendChild(row);

        // Add delete functionality
        row.querySelector(".delete-btn").addEventListener("click", () => {
            table.removeChild(row);
        });

        // Add edit functionality
        row.querySelector(".edit-btn").addEventListener("click", () => {
            let newName = prompt("Edit Name:", name);
            let newPrice = prompt("Edit Price:", price);
            if (newName && newPrice) {
                row.children[0].textContent = newName;
                row.children[1].textContent = newPrice;
            }
        });

        nameinput.value = '';
        priceinput.value = '';
        descriptioninput.value = '';
        imageinput.value = '';

    };

    reader.readAsDataURL(imageFile);
});





