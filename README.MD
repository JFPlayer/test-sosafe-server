# Test SOSAFE Server
_Esta es una aplicación web de evaluación. Tiene como funcionalidad navegar por el mapa del mundo, crear ubicaciones asi como tambien listarlas._

## Vista previa 
[![](/preview.jpg)](https://test-sosafe.herokuapp.com/)
Demo: [Navigate Map](https://test-sosafe.herokuapp.com/)

## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

Clonar el proyecto
```bash
  git clone https://github.com/JFPlayer/test-sosafe-server.git
```
Ir a la carpeta del proyecto
```bash
  cd test-sosafe-server
```
Instalar dependencias
```bash
  npm install
```
Iniciar el servidor de desarrollo
```bash
  npm run dev
```

## Referencias de la API :information_source:

#### Obtener todos las ubicaciones
```http
  GET /api/locations
```

#### Obtener las ubicaciones filtradas
```http
  GET /api/locations?search=${search}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` |  Palabra clave para filtrar las ubicaciones |

#### Crear una ubicación
```http
  POST /api/locations
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `description` | `string` |  Título de la ubicación |
| `latlng.lat` | `string` |  Latitud en notación decimal |
| `latlng.lng` | `string` |  Longitud en notación decimal |

## Variables de entorno :lock:
Para iniciar este proyecto necesitas crear un archivo .env en la raiz del proyecto y añadir estas variables de entorno

`PORT`
`DB_URI` URI de una base de datos de MongoDB

## Caracteristicas 📋
- Navegacion por el mapa del mundo y entre ubicacion creadas
- Creación de ubicaciones
- Lista de resultados filtrados por "palabra clave"

## Construido con 🛠️
**Server:** Node, Express, socket.io, mongoose

## Autor ✒️
**[Joel Flores](https://www.linkedin.com/in/joel-flores-7801/)**
