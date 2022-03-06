const teamProfile = (staffMembers) => {
console.log(staffMembers);

const pageHtml = [];
const generateManager = manager => {
  console.log(manager);

    let managerCard = `
   
    <div class="card-columns flex-md-column">
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${manager.managerName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-mug-hot"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.managerId} </li>
          <li class="list-group-item">Email: ${manager.managerEmail} </li>
          <li class="list-group-item">Office Number: ${manager.managerOffice} </li>
        </ul>
      </div>`;
      pageHtml.push(managerCard);
}
      const generateEngineer = engineer => {
        console.log(enginner);
        
        let engineerCard = `
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${engineer.engineerName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-glasses"></i>  Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.engineerId} </li>
          <li class="list-group-item">Email: ${engineer.engineerEmail} </li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}"> </li>
        </ul>
      </div>`;
        pageHtml.push(engineerCard);
      }
      
const generateIntern = intern => {
  console.log(intern);

  let internCard = 
  `<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${intern.internName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-user-graduate"></i> Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${intern.internId} </li>
          <li class="list-group-item">Email: ${intern.internEmail} </li>
          <li class="list-group-item">School: ${intern.internSchool} </li>
        </ul>
      </div>`;
      pageHtml.push(internCard);
}

}

//for loop










module.exports = staffMembers => {

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script src="https://kit.fontawesome.com/b2d82626e1.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="jumbotron jumbotron-fluid bg-danger">
      <div class="container">
        <h1 class="display-4 text-center font-weight-bold text-light">My Team</h1>
        <p class="lead"></p>
      </div>
    </div>
  <main> ${teamProfile(staffMembers)} </main>
  </body>
</html>
`
    
}

// module.exports = generateManager(), generateEngineer(), generateIntern();