let expenses = []

let total_amount = 0

let id = 0;

let category = document.querySelector("#category-select");

let amount = document.querySelector("#input-amount");

let date = document.querySelector("#input-date");

let add_button  = document.querySelector("#add-button");

let expenses_table_body = document.querySelector("#expenses-table-body");

let total_amount_cell = document.querySelector("#total-amount");


add_button.addEventListener('click',()=>{
    let  category_value = category.value

    let amount_value = parseInt(amount.value) 

    let date_value = date.value

    console.log(category_value)
    console.log(amount_value)
    console.log(date_value)
    

    
     if(amount_value<0){
        alert("Amount entered cannot be negative, please enter valid amount!!")
        return
    }else if(date_value == ''){
        alert("Please entered valid date..")
        return
    }

    console.log(expenses)

    expenses.push({category_value,amount_value,date_value});
    
    total_amount = total_amount + amount_value

    total_amount_cell.textContent = total_amount;

    let new_row = expenses_table_body.insertRow();
    
    let categoryCell = new_row.insertCell()

    let amountCell = new_row.insertCell()

    let dateCell = new_row.insertCell()

    let deleteCell = new_row.insertCell()

    let deleteBtn = document.createElement('button')

    
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('btn')
    deleteBtn.classList.add('btn-danger')

    deleteCell.appendChild(deleteBtn)

    categoryCell.innerHTML = category_value
    amountCell.innerHTML = amount_value
    amountCell.setAttribute("id","amount")

    dateCell.innerHTML = date_value


    categoryCell.classList.add('addBorder');
    amountCell.classList.add('addBorder');
    dateCell.classList.add('addBorder');


    deleteBtn.addEventListener('click',(e)=>{
        // alert("Delete Button")
        let mainElement = e.target.parentNode.parentNode.parentNode;
        let childElement = e.target.parentNode.parentNode;
        console.log(mainElement)
        console.log(childElement)


        let value = childElement.querySelector("#amount").textContent;
        console.log(value)


        // let value =childElement.
        mainElement.removeChild(childElement)
        total_amount = total_amount - value;
        total_amount_cell.textContent = total_amount;




    })

    




    amount.value = 0

    date.value = null;







})
