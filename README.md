# NFT Marketplace (Next.js)

NFT-маркетплейс, реализованный на **Next.js** с использованием **TypeScript**, **Redux Toolkit**, **Swiper** и архитектуры **Feature-Sliced Design (FSD)**.

---

## Стек технологий

- **Next.js**
- **React**
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **SCSS Modules**
- **Swiper.js**
- **Framer Motion**
- **Feature-Sliced Design (FSD)**
- **Docker**
- **pnpm**

---

## Архитектура проекта

Проект организован по принципам **FSD**, что обеспечивает масштабируемость и читаемость кода:

```
src/
├── app/            # App Router, layout, страницы
├── widgets/        # Крупные UI-блоки
├── features/       # Фичи приложения
├── entities/       # Сущности предметной области
└── shared/         # UI-kit, utils, config, API
```

---

## Локальный запуск (без Docker)

### 1. Установка зависимостей

```bash
pnpm install
```

### 2. Запуск в режиме разработки

```bash
pnpm run dev
```

Приложение будет доступно по адресу:
**[http://localhost:3000](http://localhost:3000)**

---

## Запуск проекта в Docker

### 1. Сборка Docker-образа

```bash
docker build -t nft-nextjs .
```

### 2. Запуск контейнера

```bash
docker run -p 5173:3000 nft-nextjs
```

После запуска приложение будет доступно по адресу:
**[http://localhost:5173](http://localhost:5173)**

---

## Особенности реализации

- Используется **Next.js App Router**
- Production-сборка с `output: 'standalone'`
- Redux Toolkit + RTK Query
- Анимации на Framer Motion
- Слайдеры реализованы с помощью Swiper.js
- Проект полностью контейнеризован с помощью Docker

---

## Требования

- Node.js >= 18
- pnpm
- Docker (для контейнерного запуска)

---

## Автор

- Королев Сергей Владимирович.
