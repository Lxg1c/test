# 1. Базовый образ
FROM node:20-alpine AS base

# 2. Рабочая директория
WORKDIR /app

# 3. Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# 4. Копируем остальной код
COPY . .

# 5. Сборка Next.js проекта
RUN npm run build

# 6. Используем production образ для запуска
FROM node:20-alpine AS runner

WORKDIR /app

# 7. Устанавливаем только production-зависимости
COPY --from=base /app/package*.json ./
RUN npm install --omit=dev

# 8. Копируем сборку и публичные файлы
COPY --from=base /app/.next .next
COPY --from=base /app/public public
COPY --from=base /app/next.config.ts ./

# 9. Старт сервера
EXPOSE 3000
CMD ["npm", "start"]
