---

## 🚀 Инструкция по запуску проекта

### 📦 Требования

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

### ⚙️ Сборка и запуск проекта

1. **Клонируйте репозиторий**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Соберите и запустите контейнеры**:

   ```bash
   docker-compose up --build
   ```

3. **Откройте в браузере**:

   Перейдите по адресу:

   ```
   http://localhost:3000
   ```

---

### 🛠️ Полезные команды

* **Остановить контейнеры**:

  ```bash
  docker-compose down
  ```

* **Пересобрать контейнеры при изменении кода**:

  ```bash
  docker-compose up --build
  ```

* **Запуск в фоновом режиме**:

  ```bash
  docker-compose up -d
  ```

---

### 📋 Примечания

* Приложение будет доступно по адресу `http://localhost:3000`.
* Убедитесь, что порт `3000` не занят другим процессом.
* Файл `next.config.js` необязателен, но может понадобиться для кастомной конфигурации.

---