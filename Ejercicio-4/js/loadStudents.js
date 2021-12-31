const tableBody = document.querySelector('.table')

class Student {
  constructor(fullName, city, country, phoneNumber, email, tags) {
      this.fullName = fullName
      this.city = city
      this.country = country
      this.phoneNumber = phoneNumber
      this.email = email
      this.tags = tags
    }
}

const students = [
  new Student(
    'Álvaro Sánchez Monteagudo',
    'Valencia',
    'España',
    '+34 657 85 25 46',
    'smonteagudo@gmail.com',
    ['html&css', 'angular', 'react', 'js', 'node', 'python']
  ),
    new Student(
    'Amparo Herrera Climent',
    'Sevilla',
    'España',
    '+34 689 25 48 65',
    'hcliment@gmail.com',
    ['angular', 'react', 'html&css', 'js']
  ),
   new Student(
    'Ana Gutierrez Lozano',
    'Valencia',
    'España',
    '+34 925 65 87 65',
    'glozano@gmail.com',
    ['angular', 'react', 'html&css', 'js']
  ), 
   new Student(
    'Antonio Miguel Lacunza',
    'Madrid',
    'España',
    '+34 658 95 24 56',
    'mlacunza@gmail.com',
    ['angular', 'html&css', 'react', 'js', 'node']
  ), 
   new Student(
    'Antonio Delgado Jimeno',
    'Gijón',
    'España',
    '+34 925 65 54 25',
    'djimeno@gmail.com',
    ['html&css', 'react', 'angular']
  ), 
   new Student(
    'Belén Jerez Rivera',
    'Barcelona',
    'España',
    '+34 697 82 95 24',
    'jrivera@gmail.com',
    ['angular', 'html&css', 'react', 'js', 'node', 'python']
  ), 
   new Student(
    'Carla Barroso Soriano',
    'Valencia',
    'España',
    '+34 958 65 41 54',
    'bsoriano@gmail.com',
    ['react', 'symfony', 'php', 'laravel', 'js', 'vue', 'html&css']
  ), 
   new Student(
    'Carlos Yuste Guerrero',
    'Oviedo',
    'España',
    '+34 697 82 95 65',
    'yguerrero@gmail.com',
    ['flutter', 'react', 'java', 'c#', 'springboot', '.net', 'javascript', 'html&css',
    'angular', 'python']
  ), 
   new Student(
    'Carmina Pérez López',
    'Lugo',
    'España',
    '+34 695 84 62 54',
    'plopez@gmail.com',
    ['html&css', 'react', 'java', 'springboot']
  )
]

let loadStudents = () => {
  const studentsNumber = students.length
  students.forEach( x => {
    switch (x.tags.length) {
      case 0:
        x.tags = '&nbsp;'
        break
      case 1:
        x.tags = `<span>${x.tags[0]}</span>`
        break
      case 2:
        x.tags = `<span>${x.tags[0]}</span> <span>${x.tags[1]}</span>`
        break
      default:
        x.tags = `<span>${x.tags[0]}</span> <span>${x.tags[1]}</span> <span>+${x.tags.length - 2}</span>`
    }
    
    let newRow = document.createElement('div')
    newRow.className ='table-row row'  
    newRow.innerHTML =
    `<div class="row-cell col-1">${x.fullName}</div>
    <div class="row-cell col-2">${x.city}</div>
    <div class="row-cell col-3">${x.country}</div>
    <div class="row-cell col-4">${x.phoneNumber}</div>
    <div class="row-cell col-5">${x.email}</div>
    <div class="row-cell col-6">${x.tags}</div>`

    tableBody.appendChild(newRow)
    console.log("Alumno añadido")
  })

  if (studentsNumber < 12) {
    for (let i = studentsNumber; i < 12; i++) {
      let newRow = document.createElement('div')
      newRow.className ='table-row row'  
      newRow.innerHTML =
      `<div class="row-cell col-1">&nbsp;</div>
      <div class="row-cell col-2">&nbsp;</div>
      <div class="row-cell col-3">&nbsp;</div>
      <div class="row-cell col-4">&nbsp;</div>
      <div class="row-cell col-5">&nbsp;</div>
      <div class="row-cell col-6">&nbsp;</div>`

      tableBody.appendChild(newRow)
      console.log("Alumno vacío añadido")
    }
  }

  let newFooter = document.createElement('div')
    newFooter.className = 'table-footer row'
    let numPages = Math.round(students.length / 12)

    newFooter.innerHTML = 
    `<div class="footer-cell col-1 total-students">${students.length} alumnos en total</div>
    <div class="footer-cell col-x"><span class="actual-page">1</span> de <span class="number-of-pages">${numPages}</span> <span class="material-icons">chevron_right</span></div>
    <div class="footer-cell col-1">&nbsp;</div>`

    tableBody.appendChild(newFooter)
    console.log("Pie de tabla añadido")
} 

loadStudents()
