# AmirMind AI — The Future of Intelligence

**Owner:** NIZOMOV AMIRBEK  
**Slogan:** One Mind. Infinite Intelligence.

> AmirMind AI is not a chatbot, not a ChatGPT clone. It is a **production-ready AI Operating System** that unifies multiple AI capabilities into one premium workspace using officially supported APIs and integrations.

---

## 🚀 Project Status

- ✅ Architecture finalized
- ✅ Tech stack confirmed (Next.js, NestJS, PostgreSQL, Redis, Docker)
- ✅ Monorepo structure initialized
- 🔄 **Phase 1: Core Platform Setup** (Current)
- ⏳ Phase 2: AI Core & Workspace Implementation
- ⏳ Phase 3: Image & Video Studio
- ⏳ Phase 4: Admin Panel & Deployment

---

## 📋 Table of Contents

1. [Vision](#vision)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Features](#features)
5. [Installation](#installation)
6. [Development](#development)
7. [Deployment](#deployment)
8. [Contributing](#contributing)

---

## 🎯 Vision

AmirMind AI is designed to feel like **software from the future**. Every pixel matters. Every animation matters. Every interaction matters.

### Core Differentiators:

- **AI Router (AMIR AI CORE):** Automatically selects the best AI model for the task
- **Premium Workspaces:** Each AI has its dedicated, feature-rich workspace
- **Unified Experience:** Chat, Voice, Vision, Code Generation, File Upload all in one place
- **Enterprise-Grade Security:** JWT, OAuth, RBAC, Encrypted storage
- **Production-Ready:** Lighthouse >95, Edge-ready, Streaming responses

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router, Server Components)
- **UI Library:** React 18+ with TypeScript
- **Styling:** TailwindCSS + Framer Motion
- **3D Graphics:** Three.js
- **State Management:** Zustand / Context API
- **API Client:** TanStack Query + Axios

### Backend
- **Runtime:** Node.js 20+
- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL 15+
- **ORM:** Prisma 5+
- **Cache:** Redis 7+
- **Queue:** Bull / RabbitMQ (future)
- **Container:** Docker & Docker Compose

### DevOps & Deployment
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway
- **Database:** PostgreSQL (Railway / AWS RDS)
- **Cache:** Redis (Railway / AWS ElastiCache)
- **CDN:** Cloudflare
- **CI/CD:** GitHub Actions

---

## 🏗️ Architecture

```
amirmind-ai/
├── apps/
│   ├── web/              # Next.js frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── styles/
│   │   └── public/
│   ├── api/              # NestJS backend
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   ├── common/
│   │   │   ├── config/
│   │   │   └── main.ts
│   │   └── test/
│   └── admin/            # Admin dashboard (future)
├── packages/
│   ├── shared/           # Shared types & utils
│   ├── ui/               # Reusable UI components
│   └── design-system/    # Design tokens & theme
├── docker-compose.yml
├── .env.example
├── pnpm-workspace.yaml
└── turbo.json
```

---

## ✨ Features

### Phase 1: Authentication & Core
- ✅ Email + Password authentication
- ✅ Google OAuth integration
- ✅ Email verification
- ✅ Forgot password flow
- ✅ JWT + Refresh tokens
- ✅ Session management
- ✅ Role-based access control (RBAC)

### Phase 2: AI Core & Workspaces
- 🔄 AMIR AI CORE (intelligent model router)
- 🔄 Chat interface with streaming
- 🔄 Voice input/output
- 🔄 File upload & processing
- 🔄 Image analysis & vision
- 🔄 Code generation
- 🔄 Chat history & folders
- 🔄 Export functionality

### Phase 3: Image & Video Studio
- ⏳ Image generation (Nano Banana)
- ⏳ Image editing & enhancement
- ⏳ Background removal
- ⏳ Upscaling
- ⏳ Video generation (Flow)
- ⏳ Storyboard creator

### Phase 4: Admin & Enterprise
- ⏳ Admin dashboard
- ⏳ User management
- ⏳ API key management
- ⏳ Analytics & monitoring
- ⏳ Feature flags
- ⏳ Audit logs

---

## 🚀 Installation

### Prerequisites
- Node.js 20+
- pnpm 8+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Setup

```bash
# 1. Clone repository
git clone https://github.com/amirdoda5511-sys/amirr.git
cd amirr

# 2. Install dependencies
pnpm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# 4. Setup database
pnpm db:push
pnpm db:seed

# 5. Start development servers
pnpm dev
```

Access:
- **Frontend:** http://localhost:3000
- **API:** http://localhost:3001
- **Admin:** http://localhost:3002 (future)

---

## 💻 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev:web          # Start only frontend
pnpm dev:api          # Start only backend

# Building
pnpm build            # Build all apps
pnpm build:web        # Build frontend
pnpm build:api        # Build backend

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Watch mode
pnpm test:coverage    # Coverage report

# Database
pnpm db:push          # Sync schema
pnpm db:seed          # Seed data
pnpm db:studio        # Open Prisma Studio

# Linting & Formatting
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript check

# Docker
docker-compose up -d  # Start all services
docker-compose down   # Stop all services
```

### Code Quality
- **TypeScript:** Strict mode enabled
- **ESLint:** Industry best practices
- **Prettier:** Consistent formatting
- **Husky:** Pre-commit hooks
- **Jest:** Unit & integration tests

---

## 🌍 Internationalization

Supported languages:
- 🇺🇿 Uzbek (uz)
- 🇬🇧 English (en)
- 🇷🇺 Russian (ru)
- 🇰🇿 Kazakh (kk) - *planned*
- 🇹🇯 Tajik (tg) - *planned*

Using **next-i18n-router** for seamless multi-language support.

---

## 🔒 Security

- **Authentication:** JWT + OAuth 2.0
- **Encryption:** AES-256 for sensitive data
- **API Protection:** Rate limiting, CORS
- **Database:** Encrypted passwords (bcrypt)
- **Audit Logs:** All user actions tracked
- **OWASP:** Security best practices

---

## 📊 Performance

- **Lighthouse Score:** Target >95
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3.5s
- **Streaming:** Real-time AI responses
- **Caching:** Redis + CDN
- **Edge:** Cloudflare Workers ready

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Railway)
```bash
railway deploy
```

### Database (PostgreSQL)
- Railway managed PostgreSQL
- Automated backups
- Point-in-time recovery

---

## 📄 Documentation

- [API Documentation](./docs/API.md)
- [Frontend Guide](./apps/web/README.md)
- [Backend Guide](./apps/api/README.md)
- [Database Schema](./packages/shared/prisma/schema.prisma)
- [Architecture Decision Records](./docs/ADR/)

---

## 👤 Owner

**NIZOMOV AMIRBEK**

- Telegram: [@amerdoda](https://t.me/amerdoda)
- Telegram: [@amirkoding](https://t.me/amirkoding)

---

## 📝 License

Proprietary. All rights reserved to NIZOMOV AMIRBEK.

---

## 🙏 Support

For issues, feature requests, or questions:
1. Check [Discussions](https://github.com/amirdoda5511-sys/amirr/discussions)
2. Create an [Issue](https://github.com/amirdoda5511-sys/amirr/issues)
3. Contact via Telegram

---

**AmirMind AI — Where Intelligence Meets Innovation** ✨
