
const studentdetails = `[
    {
        "Name": "jeeva",
        "ID": "21-IT-143",
        "Language": "tamil",
        "PhoneNumber": "8870128610",
        "DOB": "07/06/2004",
        "District": "palakadu"
    },
    {
        "Name": "joel",
        "ID": "21-CA-144",
        "Language": "english",
        "PhoneNumber": "7673788110",
        "DOB": "27/12/2003",
        "District": "erode"
    },
    {
        "Name": "manikandan",
        "ID": "21-CT-159",
        "Language": "hindhi",
        "PhoneNumber": "8344447397",
        "DOB": "22/02/2001",
        "District": "bangaluru"
    },
    {
        "Name": "abu",
        "ID": "21-CS-150",
        "Language": "malayalam",
        "PhoneNumber": "9025881128",
        "DOB": "15/07/2003",
        "District": "Patna"
    },
    {
        "Name": "shibu",
        "ID": "21-COM-160",
        "Language": "tamil",
        "PhoneNumber": "7373442312",
        "DOB": "03/07/2002",
        "District": "Anakapalli"
    },
    {
        "Name": "thillai",
        "ID": "21-COM-120",
        "Language": "malayalam",
        "PhoneNumber": "8353610312",
        "DOB": "31/04/2000",
        "District": "Shahdara"
    },
    {
        "Name": "hari",
        "ID": "21-IT-110",
        "Language": "kanadam",
        "PhoneNumber": "9900430200",
        "DOB": "12/09/2005",
        "District": "Howrah"
    }
]`;

const obj = JSON.parse(studentdetails);

// display table part    

function displayTable(data) {
    const tableBody = document.getElementById('data');
    tableBody.innerHTML = '';

    data.forEach(student => {
        const row = `<tr>
                            <td>${student.Name}</td>
                            <td>${student.ID}</td>
                            <td>${student.Language}</td>
                            <td>${student.PhoneNumber}</td>
                            <td>${student.DOB}</td>
                            <td>${student.District}</td>
                        </tr>`;
        tableBody.innerHTML += row;
    });
}


displayTable(obj);

//search part in table

function showdetails() {
    const input = document.getElementById('datas').value.toLowerCase();
    const result = obj.filter(student =>
        student.Name.toLowerCase().includes(input) ||
        student.ID.toLowerCase().includes(input) ||
        student.Language.toLowerCase().includes(input) ||
        student.PhoneNumber.includes(input) ||
        student.DOB.includes(input) ||
        student.District.toLowerCase().includes(input)
    );

    const tableBody = document.getElementById('data');
    tableBody.innerHTML = '';

    if (result.length > 0) {
        result.forEach(student => {
            const row = `
                <tr>
                    <td>${student.Name}</td>
                    <td>${student.ID}</td>
                    <td>${student.Language}</td>
                    <td>${student.PhoneNumber}</td>
                    <td>${student.DOB}</td>
                    <td>${student.District}</td>
                </tr>`;
            tableBody.innerHTML += row;
        });
    } else {
        document.getElementById("resultdata").innerHTML = "No students found.......!";
    }
}

// Sorting from A-Z by Name

function sortTable() {
    const sorted = obj.slice().sort((a, b) => a.Name.toLowerCase().localeCompare(b.Name.toLowerCase()));
    display(sorted);
}

// Sorting from Z-A by Name

function sorttTable() {
    const sorted = obj.slice().sort((a, b) => b.Name.toLowerCase().localeCompare(a.Name.toLowerCase()));
    display(sorted);
}

//displsy sort method 

function display(sortedData) {
    const tableBody = document.getElementById('data');
    tableBody.innerHTML = '';
    sortedData.forEach(student => {
        const row = `
            <tr>
                <td>${student.Name}</td>
                <td>${student.ID}</td>
                <td>${student.Language}</td>
                <td>${student.PhoneNumber}</td>
                <td>${student.DOB}</td>
                <td>${student.District}</td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}


// Insert values into the table
function insertdata() {
    const name = document.getElementById("name").value;
    const ID = document.getElementById("ID").value;
    const language = document.getElementById("language").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const DOB = document.getElementById("DOB").value;
    const district = document.getElementById("district").value;

    if (!name || !ID || !language || !phoneNumber || !DOB || !district) {
        alert("All fields are required!");
        return;
    }

    const newStudent = {
        Name: name,
        ID: ID,
        Language: language,
        PhoneNumber: phoneNumber,
        DOB: DOB,
        District: district
    };

    obj.push(newStudent);  
    displayTable(obj);    

    // Clear input fields after submission
    document.getElementById("name").value = '';
    document.getElementById("ID").value = '';
    document.getElementById("language").value = '';
    document.getElementById("phonenumber").value = '';
    document.getElementById("DOB").value = '';
    document.getElementById("district").value = '';
}


function insertsubmit(event) {
    event.preventDefault();  
    insertdata();            
}

//update the table any value

    

// Delete the last inserted student
function deletedata() {
    if (obj.length > 0) {
        obj.pop();           
        displayTable(obj);   
    } else {
        alert("All datas are deleted......!");
    }
}

//Lowercase values insert in table      

function smallletter() {
    const lowercaseData = obj.map(student => ({
        ...student,
        Name: student.Name.toLowerCase(),
        ID: student.ID.toLowerCase(),
        Language: student.Language.toLowerCase(),
        District: student.District.toLowerCase()
    }));
    displayTable(lowercaseData);
}

//uppercase values insert in table

function bigletter() {
    const uppercaseData = obj.map(student => ({
        ...student,
        Name: student.Name.toUpperCase(),
        ID: student.ID.toUpperCase(),
        Language: student.Language.toUpperCase(),
        District: student.District.toUpperCase()
    }));
    displayTable(uppercaseData);
}








