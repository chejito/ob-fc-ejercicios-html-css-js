const tableBody = document.querySelector('tbody')
const tableFoot = document.querySelector('tfoot')

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
    ['html/css', 'angular', 'react', 'js', 'node', 'python']
  ),
    new Student(
    'Amparo Herrera Climent',
    'Sevilla',
    'España',
    '+34 689 25 48 65',
    'hcliment@gmail.com',
    ['angular', 'react', 'html/css', 'js']
  ),
   new Student(
    'Ana Gutierrez Lozano',
    'Valencia',
    'España',
    '+34 925 65 87 65',
    'glozano@gmail.com',
    ['angular', 'react', 'html/css', 'js']
  ), 
   new Student(
    'Antonio Miguel Lacunza',
    'Madrid',
    'España',
    '+34 658 95 24 56',
    'mlacunza@gmail.com',
    ['angular', 'html/css', 'react', 'js', 'node']
  ), 
   new Student(
    'Amparo Herrera Climent',
    'Sevilla',
    'España',
    '+34 689 25 48 65',
    'hcliment@gmail.com',
    ['html/css', 'angular']
  ), 
   new Student(
    'Amparo Herrera Climent',
    'Sevilla',
    'España',
    '+34 689 25 48 65',
    'hcliment@gmail.com',
    ['html/css']
  ), 
   new Student(
    'Amparo Herrera Climent',
    'Sevilla',
    'España',
    '+34 689 25 48 65',
    'hcliment@gmail.com',
    []
  )
]

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
  
  let newRow = tableBody.insertRow(tableBody.rows.length)
  newRow.innerHTML =
   `<tr>
      <td>${x.fullName}</td>
      <td>${x.city}</td>
      <td>${x.country}</td>
      <td>${x.phoneNumber}</td>
      <td>${x.email}</td>
      <td>${x.tags}</td>
    </tr>`

  tableBody.appendChild(newRow)
  console.log("Alumno añadido")
})

let studentsNumber = students.length

if (studentsNumber < 12) {
  for (let i = studentsNumber; i < 12; i++) {
    let newRow = tableBody.insertRow(tableBody.rows.length)
  newRow.innerHTML =
   `<tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>`

  tableBody.appendChild(newRow)
  console.log("Alumno vacío añadido")
  }

  let newFooter = tableFoot.insertRow()
  let numPages = Math.round(students.length / 12)

  newFooter.innerHTML = `<td>${students.length} alumnos en total</td>
                        <td colspan="5"><span class="actual-page">1</span> de ${numPages}</td>`

  tableFoot.appendChild(newFooter)
  console.log("Pie de tabla añadido")
}