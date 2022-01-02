# Especificación
## API Rest (peticiones y respuestas de ejemplo)

### 1. Página de Registro/Inicio de sesión
#### 1.1 Registro

Método: 
```
POST
```

Endpoint:
```
../api/users/register
```

Body:
```json
{
    "username": "xxxx",
    "email": "xxx@xxx.xxx",
    "password": "xxxxxxxx"
}

```
Respuesta en caso afirmativo:
```json
{
    "message": "Usuario registrado"
} 
```
Respuesta en caso negativo:
```json
{
    "message": "Usuario no registrado. Error: xxxxx"
} 
```
#### 1.2 Inicio de sesión
Método: 
```
POST
```
Endpoint:
```
../api/users/login
```

Body:
```json
{
    "email": "xxx@xxx.xxx",
    "password": "xxxxxxxx"
}
```
Caso afirmativo:
```json
{
    "message": "Usuario autenticado",
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk"
} 
```
Caso negativo:
```json
{
    "message": "Usuario no autenticado. Error: xxxxx"
} 
```
### 2. Páginas de Tabla de Alumnos/Perfil de Alumno
#### 2.1 Listado de todos los Alumnos
Método: 
```
GET
```
Endpoint:
```
../api/students
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk"
}
```
Caso afirmativo:
```json
{
    "message": "Listado de alumnos",
    "students": [
        {
            "fullName": "ITBunny Programmer",
            "phoneNumber": "+34 567 890 010",
            "email": "bprogrammer@itbunny.es",
            "country": "España",
            "city": "Barcelona",
            "move": false,
            "modality": "remota",
            "resumeeUrl": "",
            "photoUrl": "",
            "tags": [ 
                "react",
                "html&css",
                "javascript",
                "java",
                "springboot",
                "hibernate"
            ]
        },
        {
            "fullName": "Amparo Herrera Climent",
            "phoneNumber": "+34 654 85 52 48",
            "email": "hcliment@gmail.com",
            "country": "España",
            "city": "Valencia",
            "move": true,
            "modality": "presencial",
            "resumeeUrl": "",
            "photoUrl": "",
            "tags": [    
                "angular",
                "react",
                "html&css",
                "javascript"
            ]
        }
    ] 
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
#### 2.2 Obtención de un Alumno
Método: 
```
GET
```
Endpoint:
```
../api/students/{fullName}
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk"
}
```
Caso afirmativo:
```json
{
    "message": "Alumno: 'ITBunny Programmer'",
    "student": {
        "fullName": "ITBunny Programmer",
        "phoneNumber": "+34 567 890 010",
        "email": "bprogrammer@itbunny.es",
        "country": "España",
        "city": "Barcelona",
        "move": false,
        "modality": "remota",
        "resumeeUrl": "",
        "photoUrl": "",
        "tags": [ 
            "react",
            "html&css",
            "javascript",
            "java",
            "springboot",
            "hibernate"
        ]
    }
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
#### 2.3 Creación de un Alumno
Método: 
```
POST
```
Endpoint:
```
../api/students
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk",
    "student": {
            "fullName": "ITBunny Programmer",
            "phoneNumber": "+34 567 890 010",
            "email": "bprogrammer@itbunny.es",
            "country": "España",
            "city": "Barcelona",
            "move": false,
            "modality": "remota",
            "resumeeUrl": "",
            "photoUrl": "",
            "tags": [ 
                "react",
                "html&css",
                "javascript",
                "java",
                "springboot",
                "hibernate"
            ]
        }
}
```
Caso afirmativo:
```json
{
    "message": "Alumno creado correctamente: 'ITBunny Programmer'"
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
#### 2.4 Modificación de un Alumno
Método: 
```
PUT
```
Endpoint:
```
../api/students
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk",
    "student": {
            "fullName": "ITBunny Programmer",
            "phoneNumber": "+34 567 890 010",
            "email": "bprogrammer@itbunny.es",
            "country": "España",
            "city": "Barcelona",
            "move": false,
            "modality": "remota",
            "resumeeUrl": "https://my-cool-it-resumee.io",
            "photoUrl": "https://my-cool-profile-photo.com/photo.jpg",
            "tags": [ 
                "react",
                "html&css",
                "javascript",
                "java",
                "springboot",
                "hibernate",
                "php",
                "python"
            ]
        }
}
```
Caso afirmativo:
```json
{
    "message": "Alumno modificado correctamente: 'ITBunny Programmer'"
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
#### 2.5 Eliminación de un Alumno
Método: 
```
DELETE
```
Endpoint:
```
../api/students/{fullName}
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk"
}
```
Caso afirmativo:
```json
{
    "message": "Alumno eliminado correctamente: 'ITBunny Programmer'"
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
#### 2.5 Eliminación de todos los Alumnos
Método: 
```
DELETE
```
Endpoint:
```
../api/students
```

Body:
```json
{
    "token": "$ab$123$gnzxjgfñzjgmnzlxkfgmñzk"
}
```
Caso afirmativo:
```json
{
    "message": "Alumnos eliminados correctamente"
} 
```
Caso negativo:
```json
{
    "message": "Error: xxxxx"
} 
```
