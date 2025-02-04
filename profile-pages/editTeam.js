    function addPlayer() {
        let name = document.getElementById("playerName").value;
        let role = document.getElementById("playerRole").value;
        let table = document.getElementById("teamList");
        
        let row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = role;
        let actions = row.insertCell(2);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            table.deleteRow(row.rowIndex - 1);
        };
        actions.appendChild(deleteBtn);
        
        document.getElementById("playerName").value = "";
    }
