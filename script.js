// Task 2: Adding custom data to the table
document.getElementById("submit-data").addEventListener("click", function () {
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const isAdmin = document.getElementById("input-admin").checked;
  const imageFile = document.getElementById("input-image").files[0];

  const table = document.getElementById("user-table");
  const newRow = table.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  cell1.innerHTML = username;

  const cell2 = newRow.insertCell(1);
  cell2.innerHTML = email;

  const cell3 = newRow.insertCell(2);
  cell3.innerHTML = address;

  const cell4 = newRow.insertCell(3);
  cell4.innerHTML = isAdmin ? "X" : "-";

  const cell5 = newRow.insertCell(4);
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function () {
      const image = new Image();
      image.src = reader.result;
      image.height = 64;
      image.width = 64;
      cell5.appendChild(image);
    };
    reader.readAsDataURL(imageFile);
  } else {
    const defaultImage = new Image();
    defaultImage.src = "default.png";
    defaultImage.alt = "No Image";
    defaultImage.height = 64;
    defaultImage.width = 64;
    cell5.appendChild(defaultImage);
  }
});

// Task 3: Emptying the table
document.getElementById("empty-table").addEventListener("click", function () {
  const table = document.getElementById("user-table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
});

// Task 4: Editing existing data
document.getElementById("submit-data").addEventListener("click", function () {
  const username = document.getElementById("input-username").value;
  const table = document.getElementById("user-table");
  const rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].getElementsByTagName("td");
    if (rowData[0].innerHTML === username) {
      rowData[1].innerHTML = document.getElementById("input-email").value;
      rowData[2].innerHTML = document.getElementById("input-address").value;
      rowData[3].innerHTML = document.getElementById("input-admin").checked
        ? "X"
        : "-";
      const imageFile = document.getElementById("input-image").files[0];
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = function () {
          rowData[4].innerHTML = "";
          const image = new Image();
          image.src = reader.result;
          image.height = 64;
          image.width = 64;
          rowData[4].appendChild(image);
        };
        reader.readAsDataURL(imageFile);
      }
      break;
    }
  }
});
