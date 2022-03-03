function generateEmployees(data) {
    return `
   
    <div class="card-columns flex-md-column">
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold">Manager's Name</h5>
          <p class="card-text text-light"><i class="fa-solid fa-mug-hot"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${managerId} </li>
          <li class="list-group-item">Email: ${managerEmail} </li>
          <li class="list-group-item">Office Number: ${managerOffice} </li>
        </ul>
      </div>

      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${engineerName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-glasses"></i>  Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineerId} </li>
          <li class="list-group-item">Email: ${engineerEmail} </li>
          <li class="list-group-item">Github: <a href="https://github.com/${data.github}"> </li>
        </ul>
      </div>




      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${engineerName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-glasses"></i> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineerId} </li>
          <li class="list-group-item">Email: ${engineerEmail} </li>
          <li class="list-group-item">Github: <a href="https://github.com/${data.github}"> </li>
        </ul>
      </div>


<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light font-weight-bold"> ${internName} </h5>
          <p class="card-text text-light"><i class="fa-solid fa-user-graduate"></i> Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${internId} </li>
          <li class="list-group-item">Email: ${internEmail} </li>
          <li class="list-group-item">School: ${internSchool} </li>
        </ul>
      </div>


      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h5 class="card-title text-light font-weight-bold"> ${engineerName} </h5>
        <p class="card-text text-light"><i class="fa-solid fa-glasses"></i>  Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerId} </li>
        <li class="list-group-item">Email: ${engineerEmail} </li>
        <li class="list-group-item">Github: <a href="https://github.com/${data.github}"> </li>
      </ul>
    </div>
`
}




// Is this format correct? This is also from a module example!
// Or can I just combine it all above under generateEmployees?
module.exports = data => {
    const { manager, engineer, intern} = data;

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

  </body>
</html>
`
    
}

module.exports = generateEmployees;