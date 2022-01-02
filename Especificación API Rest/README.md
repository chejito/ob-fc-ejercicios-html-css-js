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
../api/auth/register
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
../api/auth/login
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
### 2. Página de Tabla de Alumnos
#### 2.1 Listar Alumnos
