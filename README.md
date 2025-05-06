# Igniz Technologies Website

**[Live Demo](https://some-company-website.vercel.app/)**

---

## 🛠 Технологический стек

### Frontend

- **Next.js 15** (App Router) - React-фреймворк с SSR/SSG
- **TypeScript** - Статическая типизация
- **Material-UI (MUI)** - UI компоненты и стилизация
- **Emotion** - CSS-in-JS решение

### Backend

- **Next.js API Routes** - Серверные endpoints

### Инструменты

- **ESLint + Prettier** - Линтинг и форматирование
- **Husky** - Git hooks
- **Vercel** - Хостинг и CI/CD

---

## 🚀 Запуск проекта

### 1. Установка зависимостей

```bash
yarn install
# или
npm install
```

### 2. Запуск в development

```bash
yarn dev
# или
npm run dev
```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000)

---

## 🌐 Деплой

Проект настроен для автоматического деплоя на Vercel:

1. Push в ветку `main` запускает билд
2. Превью-деплои создаются для PR

## 🎨 Архитектура и решения

### Стилизация

- Использована методология BEM для CSS-классов
- Глобальные стили в `styles/globals.css`
- Тема MUI кастомизирована в `src/theme`
- Адаптивность через breakpoints MUI (xs, sm, md, lg, xl)

### SEO Оптимизация

- Статические мета-теги через `metadata` в layout.tsx
- Semantic HTML теги (nav, section, etc.)

### Производительность

- Lazy-loading для тяжелых компонентов
- Код-сплиттинг через динамический импорт

---

## 🧠 Принятые решения

2. **Серверные компоненты Next.js** для критического пути
3. **ISR (Incremental Static Regeneration)** для страниц
4. **Custom hooks** для повторяющейся логики (useForm, useAuth)

---
