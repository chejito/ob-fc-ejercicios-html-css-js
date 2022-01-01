const tableBody = document.querySelector('.table-rows')

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
    ['html&css']
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
    []
  ), 
   new Student(
    'Joaquín López Massani',
    'Buenos Aires',
    'Argentina',
    '+54 9 11 1234-5678',
    'lmassani@gmail.com',
    ['html&css', 'javascript']
  ), 
   new Student(
    'José Alberto López Martínez',
    'Medellín',
    'Colombia',
    '+57 6045904614',
    'lmartinez@gmail.com',
    ['java', 'springboot', 'html&css', 'react', 'javascript']
  ), 
   new Student(
    'Jéssica María Sánchez Montoya',
    'Ciudad de México',
    'México',
    '+52 483 1212891',
    'smontoya@gmail.com',
    ['java', 'springboot', 'html&css', 'javascript']
  )
]

let loadStudents = (studentsArray = students) => {
  const studentsNumber = studentsArray.length
  let tags = ''

  studentsArray.forEach( x => {
    switch (x.tags.length) {
      case 0:
        tags = '&nbsp;'
        break
      case 1:
        tags = `<span>${x.tags[0]}</span>`
        break
      case 2:
        tags = `<span>${x.tags[0]}</span> <span>${x.tags[1]}</span>`
        break
      default:
        tags = `<span>${x.tags[0]}</span> <span>${x.tags[1]}</span> <span>+${x.tags.length - 2}</span>`
    }
    
    let newRow = document.createElement('div')
    newRow.className ='table-row row'  
    newRow.innerHTML =
    `<div class="row-cell col-1">${x.fullName}</div>
    <div class="row-cell col-2">${x.city}</div>
    <div class="row-cell col-3">${x.country}</div>
    <div class="row-cell col-4">${x.phoneNumber}</div>
    <div class="row-cell col-5">${x.email}</div>
    <div class="row-cell col-6">${tags}</div>`

    tableBody.appendChild(newRow)
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
    }
  }

  let newFooter = document.createElement('div')
    newFooter.className = 'table-footer row'
    let numPages = Math.round(studentsNumber / 12)

    newFooter.innerHTML = 
    `<div class="footer-cell col-1 total-students">${studentsNumber} alumnos en total</div>
    <div class="footer-cell col-x"><span class="actual-page">1</span> de <span class="number-of-pages">${numPages}</span> <span class="material-icons">chevron_right</span></div>
    <div class="footer-cell col-1">&nbsp;</div>`

    tableBody.appendChild(newFooter)
}

const clearTable = () => {
  tableBody.innerHTML = ''
  // loadStudents([])
}

const compareName = (a, b) => {
  if (a.fullName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
   < b.fullName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return -1
  }
  if (a.fullName > b.fullName) {
    return 1
  }
  return 0
}

const compareCity = (a, b) => {
  if (a.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    < b.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return -1
  }
  if (a.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    > b.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return 1
  }
  return 0
}

const compareCountry = (a, b) => {
  if (a.country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    < b.country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return -1
  }
  if (a.country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    > b.country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return 1
  }
  return 0
}

const compareEmail = (a, b) => {
  if (a.email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    < b.email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return -1
  }
  if (a.email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    > b.email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    return 1
  }
  return 0
}

const compareTags = (a, b) => {
  if (a.tags.length > b.tags.length) {
    return -1
  }
  if (a.tags.length < b.tags.length) {
    return 1
  }
  return 0
}

const sortByName = (array = students) => {
  array.sort(compareName)
  clearTable()
  loadStudents(array)
}

const sortByCity = (array = students) => {
  array.sort(compareCity)
  clearTable()
  loadStudents(array)
}

const sortByCountry = (array = students) => {
  array.sort(compareCountry)
  clearTable()
  loadStudents(array)
}

const sortByEmail = (array = students) => {
  array.sort(compareEmail)
  clearTable()
  loadStudents(array)
}

const sortByTags = (array = students) => {
  array.sort(compareTags)
  clearTable()
  loadStudents(array)
}

const checkKeyWord = (student) => {
  const keyWord = document.querySelector('.search-input').value.toLowerCase()

  return student.fullName.toLowerCase().includes(keyWord) ||
  student.email.toLowerCase().includes(keyWord) ||
  student.city.toLowerCase().includes(keyWord)
}

const searchByKeywords = (array = students) => {
  
  const newArray = array.filter(checkKeyWord)

  clearTable()
  loadStudents(newArray)
}

loadStudents()
