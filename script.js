

function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Add new row to the table
    var table = document.getElementById("studentTable");
    var row = table.insertRow();

    row.classList.add("data")
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = course;
    row.insertCell(4).innerHTML = email;

    // Add delete button to the action column
    var actionCell = row.insertCell(5);
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete")
    deleteBtn.onclick = function () {
        table.deleteRow(row.rowIndex);
    };
    actionCell.appendChild(deleteBtn);

    // Clear form inputs
    document.getElementById("studentForm").reset();
}
