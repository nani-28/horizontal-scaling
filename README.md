# Ejemplo de Escalado Horizontal

Este proyecto demuestra un servidor Node.js simple escalable horizontalmente usando Docker Compose y Nginx como proxy reverso.

## Requisitos Previos
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Ejecución Local con Docker Compose

1. **Construir y levantar los servicios:**
   ```sh
   docker compose up --build
   ```
   Esto construirá la imagen de Docker y levantará los servicios definidos en `compose.yaml`.

2. **Escalar el servicio a 3 instancias:**
   El archivo `compose.yaml` ya está configurado para levantar 3 réplicas del servicio `web` usando la opción `deploy.replicas: 3`.
   Si deseas cambiar el número de instancias, puedes modificar ese valor o usar:
   ```sh
   docker compose up --scale web=3 --build
   ```

3. **Acceder al servicio:**
   Nginx está configurado como proxy reverso y expone el puerto 80 de tu máquina local. Accede a la aplicación en:
   [http://localhost](http://localhost)

   Cada petición puede ser atendida por un contenedor diferente. Deberías ver una respuesta como:
   ```
   Hola estoy desde <nombre-del-contenedor>!
   ```

4. **Ver los contenedores en ejecución:**
   ```sh
   docker compose ps
   ```

5. **Detener los servicios:**
   ```sh
   docker compose down
   ```

## Notas
- El servicio responde con el nombre del contenedor que atiende la petición, lo que permite ver el balanceo de carga entre instancias.
- No es necesario exponer el puerto 3000 directamente, ya que Nginx se encarga de enrutar el tráfico HTTP a las instancias del backend.
- Puedes personalizar el número de réplicas cambiando el valor en `deploy.replicas` o usando el flag `--scale`.
