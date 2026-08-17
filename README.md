# Owlex Landing Page

Full-stack landing page for **Owlex — Enterprise Software Studio**.

- **Frontend**: Next.js 16 (App Router) + Tailwind CSS v4 — deploy on **Vercel**
- **Backend**: NestJS 11 + Prisma 6 + PostgreSQL — deploy on **Railway**

## Project Structure

```
├── front/          → Next.js frontend (port 3000)
├── back/           → NestJS backend (port 5000)
└── project/        → Original design prototype
```

---

## Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → New Project → Import GitHub repo
2. **Root Directory**: `front`
3. **Framework Preset**: Next.js
4. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-railway-backend.up.railway.app/api
   ```
5. Deploy

---

## Deploy Backend on Railway

1. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
2. **Root Directory**: `back`
3. **Environment Variables**:
   ```
   DATABASE_URL=postgresql://...          # Railway PostgreSQL plugin
   PORT=5000
   ```
4. Add a **PostgreSQL** plugin in Railway → copy the `DATABASE_URL`
5. After first deploy, run in Railway shell:
   ```
   npx prisma migrate deploy
   npx prisma db seed
   ```
6. Note the generated Railway URL (e.g. `https://xxx.up.railway.app`)

---

## Local Development

### Backend
```bash
cd back
npm install
# Set DATABASE_URL in .env (see back/.env.example)
npx prisma migrate dev --name init
npx prisma db seed
npm run start:dev
# → http://localhost:5000
# Swagger docs → http://localhost:5000/docs
```

### Frontend
```bash
cd front
npm install
# Set NEXT_PUBLIC_API_URL in .env.local (see front/.env.example)
npm run dev
# → http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | List services |
| GET | `/api/stats` | List stats |
| GET | `/api/processes` | List process steps |
| GET | `/api/testimonials` | List testimonials |
| GET | `/api/tech-stack` | List tech stack items |
| GET | `/api/tech-stack/featured` | Featured tech items |
| POST | `/api/contact` | Submit contact form |
