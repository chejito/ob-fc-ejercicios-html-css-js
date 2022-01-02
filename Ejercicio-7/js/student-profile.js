const student1 = {
  'fullName': 'Amparo Herrera Climent',
  'phoneNumber': '+34 654 85 52 48',
  'email': 'hcliment@gmail.com',
  'country': 'España',
  'city': 'Valencia',
  'move': false,
  'modality': 'remota',
  'resumeeUrl': '',
  'tags': [    
    'angular',
    'react',
    'html&css',
    'javascript'
  ]
}

const countryCities = {
  'España': [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Zaragoza',
    'Málaga',
    'Murcia',
    'Malma de Mallorca',
    'Las Palmas de Gran Canaria',
    'Bilbao'
  ],
  'México': [
    'Ciudad de México',
    'Tijuana',
    'San Cristóbal Ecatepec',
    'León',
    'Puebla de Zaragoza',
    'Ciudad Juárez',
    'Guadalajara',
    'Zapopan',
    'Monterrey',
    'Nezahualcóyotl'
  ],
  'Argentina': [
    'Buenos Aires',
    'Córdoba',
    'Rosario',
    'Mar del Plata',
    'San Miguel de Tucumán',
    'Salta',
    'Santa Fe',
    'Corrientes',
    'Bahía Blanca',
    'Resistencia'
  ],
  'Colombia': [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Cúcuta',
    'Soacha',
    'Soledad',
    'Bucaramanga',
    'Bello'
  ]
}

const tagList = [
  'html&css',
  'javascript', 
  'react', 
  'angular', 
  'typescript',
  'java', 
  'hibernate',
  'springboot', 
  'junit',
  'c#', 
  'php',
  'laravel',
  'simfony',
  'python',
  'django',
  'flask',
  'fastapi',
  'git',
  'github',
  'docker',
  'android',
  'kotlin',
  'ios',
  'swift',
  'dart',
  'flutter',
  'scala',
  'ionic',
  'vue',
  'nodejs',
  'xamarin'
]

const country = document.querySelector('.country-input')
const countries = Object.keys(countryCities)
const city = document.querySelector('.city-input')
const tagInput = document.querySelector('.tagnames')
let studentTags = student1.tags
const tagsDisplay = document.querySelector('.tags-display')

tagList.forEach(x => {
  let newOption = document.createElement('option')
  newOption.value = x
  newOption.text = x
  tagInput.appendChild(newOption)
})

countries.forEach(x => {
  let newOption = document.createElement('option')
  newOption.value = x
  newOption.text = x
  country.appendChild(newOption)
})
 
const selectCountry = () => {
  const selectedCountry = country.value
  const cities = countryCities[selectedCountry]

  clearField(city)

  if (selectedCountry !== 'empty') {

    cities.forEach(x => {
    let newOption = document.createElement('option')
    newOption.value = x
    newOption.text = x
    city.appendChild(newOption)
    })
  }  
}

const clearField = field => {
  field.innerHTML = '<option value="empty">---</option>'
}

const loadStudent = (student = student1) => {

  document.querySelector('.student-name').textContent = student.fullName
  document.querySelector('.location-city').innerText = student.city
  document.querySelector('.location-country').innerText = student.country
  document.querySelector('.name-input').value = student.fullName
  document.querySelector('.phone-input').value = student.phoneNumber
  document.querySelector('.email-input').value = student.email
  
  document.querySelector('.country-input').value = student.country
  selectCountry()
  
  document.querySelector('.city-input').value = student.city
  document.querySelector('.move-input').value = student.move
  document.querySelector('.modality-input').value = student.modality  
  renderTags()
}

const renderTags = () => {
  tagsDisplay.innerHTML = ''
  
  studentTags.forEach( x => {

    let newTag = document.createElement('span')
    newTag.className = 'tag clickable'
    newTag.innerHTML = `<span>${x}</span><span class="material-icons-outlined"
    onclick="removeTag(this)">close</span>`   
    tagsDisplay.appendChild(newTag)
  })
}

const addTag = (e) => { 

  if (e['key'] === 'Enter') {
    let tagValue = document.querySelector('.tags-input').value.toLowerCase()
    if (!studentTags.includes(tagValue)) {
      studentTags.push(tagValue)
      document.querySelector('.tags-input').value = ''
      renderTags()
    }      
  }  
}

const removeTag = (icon) => {   
  const tag = icon.parentNode.firstElementChild.innerText.toLowerCase()
  studentTags = studentTags.filter(item => item !== tag)
  renderTags()
}

loadStudent()