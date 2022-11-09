# true_vision

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Axios

```javascript

import { PatientServices } from 'services/patient.service';
import { AuthService } from 'services/auth.service';
import HandleAxios from 'services/handler';
/**
 * Al usar HandleAxios captura el error 
 * y lo muestra en la consola
 * 
 * await HandleAxios(NombreServicio().accion(param, param))
 */

/**
 * Buscar usuario por CI
 */
const findByUserResp = await HandleAxios(PatientServices().findByUser('95061336801'));
/**
 * subir foto
 */
const repostPhotoResp = await HandleAxios(PatientServices().postPhoto('imageUrl', {
    "ci": "99080910678",
    "nombre": "Liliana",
    "apellidos": "Cabrera Grau",
    "sexo": "F",
    "año_nacimiento": "1999",
    "edad": " ",
    "direccion": "Calle D entre E y F, Santa Clara, Cuba",
    "fecha_inicio_tratamiento": "2021-01-01",
    "cuenta": {
        "usuario": "lcabrera",
        "contraseña": "123",
        "rol": "P"
    },
    "imagenes": [
        {
            "ruta": 'string',
            "emocion": 'string'
        }
    ]
}));
```