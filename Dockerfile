FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# En staging/prod, on installe uniquement les dépendances nécessaires (pas de dépendances de dev)
RUN npm ci --omit=dev

COPY . .

EXPOSE 3001

CMD ["npm", "start"]