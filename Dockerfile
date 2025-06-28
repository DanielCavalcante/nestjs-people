# Imagem base
FROM node:22

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta padrão da aplicação NestJS
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]
