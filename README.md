# Sistema de Gestión de Inventario y Búsqueda para JR-GGB Spa
[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)

## Descripción del Proyecto

Este proyecto desarrolla un sistema cliente-servidor para JR-GGB Spa, integrando un motor de búsqueda, cache e inventario. Está diseñado para optimizar la gestión de productos y mejorar la eficiencia de las consultas a través de la implementación de tecnologías de caché y bases de datos.

## Tecnologías Utilizadas

- **Redis**: Utilizado como caché en memoria para mejorar el tiempo de respuesta de las búsquedas y reducir la carga sobre la base de datos principal.
- **gRpc**: Facilita la comunicación entre servicios mediante llamadas a procedimiento remoto, usado aquí para conectar el servicio de inventario con el buscador.
- **PostgreSQL**: Base de datos relacional usada para almacenar de forma persistente el inventario de productos.
- **Node.js**: Entorno de ejecución para JavaScript en el servidor, usado para desarrollar la lógica del negocio y la API del sistema.
- **Docker y Docker Compose**: Usados para contenerizar y desplegar los servicios de forma aislada, garantizando así la reproducibilidad del entorno y la escalabilidad del sistema.

## Estructura del Proyecto

- `NPM/`: Contiene la configuración y los scripts para la API y la lógica del servidor desarrollados en Node.js.
- `Distribuidost1/`: Incluye los archivos de Docker Compose para orquestar el despliegue de los servicios.

## Inicialización del Proyecto

### Usando NPM

Para configurar y ejecutar el proyecto en un entorno de desarrollo local:

```bash
git clone https://github.com/joke1317/Tarea1SD
cd NPM/src/
npm install
npm install nodemon
npm install express
npm install redis
npm install
npm start
```

### Usando Docker Compose

Para desplegar todos los servicios en contenedores Docker:

```bash
git clone https://github.com/joke1317/Tarea1SD
cd Distribuidost1/
docker-compose up
```

## Selección de Algoritmo de Caché

### LRU vs LFU

| LRU | LFU
| :------: | :------:
Menos usados recientemente  | Menos frecuentemente usados 
Remueve el menos usado durante un periodo de tiempo corto  | Remueve el menos usado entre todas las entradas del caché
Necesita mantener un ranking que se actualiza frecuentemente  | Necesita mantener un ranking constante en el tiempo
Entrega estadísticas en un corto espacio  | Entrega estadísticas a largo plazo
Utilizados en sistemas dinámicos  | Utilizados en sistemas estáticos o relativamente conservadores
Menor porcentaje de page faults  | Mayor porcentaje de page faults

Dado el incremento explosivo de visitas y la variabilidad en el comportamiento de los usuarios, se recomienda el uso de **LRU** para este proyecto, proporcionando una gestión de caché más adaptativa y eficiente en un entorno de e-commerce dinámico.

## Contribuciones

Se invita a contribuciones para mejorar el proyecto. Cualquier colaboración para optimizar el código, agregar funcionalidades o corregir errores es bienvenida.
