# Tarea1SD
[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)

**Tarea 1** La presente entrega da solución al requerimiento planteado en el enunciado sobre la empresa JR-GGB Spa. De tal manera se entrega un sistema cliente servidor que hace uso de un buscador, cache e inventario.



- **Redis**: Es un motor de búsqueda open source basado en tablas de hashes. Será útilizado como memoria caché en esta implementación. 
- **gRpc**: Sistema de llamada a procedimiento de código abierto. Para esta implementación se usará para manejar las llamadas entre el inventario y el buscador de inventario. 
- **Postgres SQL**: Sistema de gestión de datos en bases de datos relacionales. Se usará como memoria principal del inventario.
- **Node** : Plataforma de ejecucción en tiempo real. Será el stack base de la implementación en javascript.
- **Docker y Docker Compose**: Automatizador de despliegue de entornos. Compose es un orquestador de Dockerfiles, de forma que se puedan desplegar simultaneamente más de un contenedor. Será necesario para poder aislar los 4 servicios solicitados.

 **Inicialización NPM**
```
- git clone https://github.com/joke1317/Tarea1SD

- cd src

- npm install

- npm install nodemon

- npm install express

- npm install redis

- npm install

- npm start
```
 **Inicialización Compose**
```

```

| LRU | LFU
| :------: | :------:
Menos usados recientemente  | Menos frecuentemente usados 
Remueve el menos usado durante un periodo de tiempo corto  | Remueve el menos usado entre todas las entradas del caché
Necesita mantener un ranking que se actualiza frecuentemente  | Necesita mantener un ranking constante en el tiempo
Entrega estadísticas en un corto espacio  | Entrega estadísticas a largo plazo
Utilizados en sistemas dinámicos  | Utilizados en sistemas estáticos o relativamente conservadores
Menor porcentaje de page faults  | Mayor porcentaje de page faults


# Selección de algoritmo
- Para seleccionar un algoritmo de remoción se debe tener en cuenta que tipo de servicio se presta y además cuál suele ser su comportamiento normal. Ambos algoritmos pueden ser implementados según la naturaleza de la página. Si el caso del e-commerce fuera el de una tienda que funciona con un sistema de venta tipo drop en el que un artículo esta a la venta durante un período de tiempo limitado o con un stock limitado sería conveniente utilizar **LRU** ya que la página variará constantemente sus ventas o hasta incluso que productos ofrece. Por otro lado, si se trata de una tienda establecida que no varía tanto el stock de productos ni agrega constantemente nuevos es conveniente utilizar **LFU** para mantener métricas históricas de la página y de tal manera se optimiza parte del recorrido habitual de un cliente.
- Para este caso específico, se trata de una página con un aumento explosivo de visitas, por lo tanto los clientes podrían tender a no mantener un comportamiento histórico dada la poca antigüedad de la página. En este caso la página podría verse beneficiada más por un algoritmo **LRU**.

