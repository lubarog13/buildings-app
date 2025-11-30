# Buildings App - Лендинг о новостройках

Веб-приложение для отображения информации о новостройках, коттеджных поселках и жилых районах в России. Приложение построено на Nuxt 3 с использованием Vue 3 и SCSS.

## Демо сайта
[https://lubarog13.github.io/buildings-app/](https://lubarog13.github.io/buildings-app/)

## О проекте

Приложение представляет собой современный веб-сайт для демонстрации новостроек и специальных предложений от застройщиков. Основные возможности:

- **Слайдер с проектами** - интерактивный слайдер с карточками новостроек
- **Сетка проектов** - сетка с информацией о реализованных проектах
- **Адаптивный дизайн** - полностью адаптивная верстка для всех устройств
- **Оптимизация изображений** - автоматическая оптимизация изображений через @nuxt/image
- **SEO оптимизация** - встроенная поддержка мета-тегов и SEO

## Технологический стек

- **Nuxt 3** - фреймворк для Vue.js
- **Vue 3** - прогрессивный JavaScript фреймворк
- **SCSS** - препроцессор CSS
- **TypeScript** - типизированный JavaScript
- **ESLint** - линтер для проверки кода
- **@nuxt/image** - модуль для оптимизации изображений
- **@nuxt/fonts** - модуль для работы со шрифтами
- **Docker** - для контейнеризации приложения
- **GitHub Actions** - для автоматического развертывания приложения на GitHub Pages


## Структура проекта

```
buildings-app/
├── assets/              # Ресурсы приложения
│   ├── images/         # Изображения (иконки, слайдер)
│   └── styles/         # SCSS стили
├── components/          # Vue компоненты
│   ├── MainSlider.vue  # Главный слайдер
│   ├── SliderCard.vue  # Карточка слайдера
│   └── MainGridSection.vue # Секция с сеткой
├── mixins/             # Vue миксины
│   ├── media.js        # Медиа-миксин
│   └── slider.js       # Логика слайдера
├── pages/              # Страницы приложения
│   └── index.vue       # Главная страница
├── public/             # Статические файлы
│   └── fonts/          # Шрифты (TT Norms, TT Travels)
├── .github/            # GitHub Actions
│   └── workflows/      # Рабочие процессы GitHub Actions
├── docker-compose.yaml # Файл для контейнеризации приложения
├── Dockerfile          # Файл для контейнеризации приложения
├── README.md           # README файл
├── nuxt.config.ts      # Конфигурация Nuxt
├── package.json        # Файл для зависимостей
├── tsconfig.json       # Конфигурация TypeScript
```

## Установка

Убедитесь, что у вас установлен Node.js (версия 18 или выше).

Установите зависимости:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Разработка

Запустите сервер разработки на `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

После запуска приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Сборка для продакшена

Соберите приложение для продакшена:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

## Предпросмотр продакшен-сборки

Локальный предпросмотр продакшен-сборки:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Генерация статического сайта

Для генерации статического сайта используйте:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

## Контейнеризация

Для контейнеризации приложения используйте:

```bash
docker-compose build buildings-app
```

## Запуск контейнера

```bash
docker-compose up -d buildings-app
```


## Особенности

### Шрифты

Приложение использует следующие шрифты:
- **TT Norms** - основной шрифт (веса: 400, 500, 600, 700)
- **TT Travels Next Trial Medium** - дополнительный шрифт (вес: 600)
- **Inter** - шрифт от Google (веса: 400, 500, 600, 700)

### Стилизация

Стили организованы с использованием SCSS:
- `_variables.scss` - переменные (цвета, отступы, радиусы)
- `_fonts.scss` - настройки шрифтов
- `_base.scss` - базовые стили
- `index.scss` - главный файл стилей

### Компоненты

- **MainSlider** - горизонтальный слайдер с навигацией
- **SliderCard** - карточка проекта в слайдере
- **MainGridSection** - секция с сеткой проектов

## Документация

Дополнительную информацию о Nuxt можно найти в [официальной документации](https://nuxt.com/docs/getting-started/introduction).

Информацию о развертывании можно найти в [документации по развертыванию](https://nuxt.com/docs/getting-started/deployment).

## Лицензия

Проект является приватным.
