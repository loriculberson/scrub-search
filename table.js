const createTableHeaders = () => {
  const userTable = document.querySelector('.user-table');
  const userHead = userTable.createTHead(); 
  const tableHeaderNames = Object.keys(users.data[0]);
  const row = userHead.insertRow(0);
  
  tableHeaderNames.forEach((header, index) => {
    const cell = row.insertCell(index);
    cell.innerHTML = header;
  })
};


const addUsersToTable = () => {
  const userTableBody = document.querySelector('.user-body');
  users.data.forEach((user, index) => {
    const row = userTableBody.insertRow(index);
    let cellPosition = 0;
    for (let prop in user) {
      const cell = row.insertCell(cellPosition)
      cell.innerHTML = user[prop];
      cellPosition++;
    }
  })
}

const buildUserTable = () => {
  createTableHeaders();
  addUsersToTable();
}

buildUserTable();