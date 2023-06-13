# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Expone el puerto en el que se ejecuta la aplicación (por defecto, el puerto 3000 de React)
EXPOSE 3000

# Define la variable de entorno para REACT_APP_API
ENV REACT_APP_API=${REACT_APP_API}

# Comando para iniciar la aplicación
CMD ["npm", "start"]
