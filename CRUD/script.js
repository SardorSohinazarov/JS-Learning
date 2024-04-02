let count = 0;

var btn = document.querySelector(".btn");

let selectedRow = null;


//add
btn.addEventListener('click',(e) =>{
    e.preventDefault();

    firstname = document.querySelector("#firstname").value;
    lastname = document.querySelector("#lastname").value;

    if(firstname == '' || lastname == '')
    {
        window.alert("to'ldir")
        return;
    }

    if(selectedRow == null){
        var tr = document.createElement('tr');
        
        count ++;

        tr.innerHTML = 
        `<tr>
            <th scope="row">${count}</th>
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>
            <button class="btn btn-warning update">Update</button>
            <button class="btn btn-danger delete">Delete</button>
            </td>
            </tr>`;
            
            var tbody = document.querySelector('table tbody');
            
            tbody.appendChild(tr);
    }else{
        console.log(selectedRow)

        selectedRow.children[1].textContent = firstname;
        selectedRow.children[2].textContent = lastname;

        selectedRow = null;
    }   

    Reset();
    })
    
    function Reset(){
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
}

//update
document.querySelector('table tbody').addEventListener('click',(e) =>{
    e.preventDefault();

    selectedRow =  e.target.parentElement.parentElement;

    if(e.target.textContent == 'Update')
    {
        document.querySelector("#firstname").value = selectedRow.children[1].textContent;
        document.querySelector("#lastname").value = selectedRow.children[2].textContent;
    }
})

//delete
document.querySelector('table tbody').addEventListener('click',(e) =>{
    e.preventDefault();

    let row = e.target;

    if(row.textContent == 'Delete')
        e.target.parentElement.parentElement.remove();
})











































// window.localStorage.setItem('token',"mening tokenim");

// console.log(window.localStorage.getItem('token'));

// window.localStorage.clear()

// window.localStorage.removeItem('token')