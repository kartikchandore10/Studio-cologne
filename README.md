
🚀 **Live Demo**

🌐 https://studio-cologne.onrender.com

[Visit Studio Cologne](https://studio-cologne.onrender.com/)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS (custom design tokens, glassmorphism, dark/light mode)
- **Component Library**: shadcn/ui (Buttons, Tabs, Dropdowns, Dialogs, Sheet, Tooltips)
- **Icons**: Lucide React
- **Animations**: Framer Motion (page transitions, scroll‑driven reveals, theme toggle animations)
- **Charts (optional)**: Recharts for placeholder data visualizations
- **State Management**: React hooks (`useState`, `useContext`) with mock data defined in `src/data/mockData.ts`

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository (if you haven't already)
git clone <repository-url>
cd SlowBros

# Install dependencies (pnpm preferred)
pnpm install
# or with npm
npm ci
```

### Development

```bash
# Start the development server
npm run dev
# or with pnpm
pnpm dev
```

Open your browser at `http://localhost:3000` to see the site in action. The development build supports hot‑module reloading.

### Production Build

```bash
# Build the application
npm run build
# or with pnpm
pnpm build

# Start the production server
npm start
# or with pnpm
pnpm start
```

The app will be served at `http://localhost:3000`.

---

## Deployment

The project can be deployed to any platform that supports Node.js. A quick deployment to Vercel (or Render) can be done with the following command:

```bash
npx vercel
```

Follow the prompts to link the project to a Vercel account, or push the repository to Render.com if you prefer their hosting.

---

## Project Structure (high‑level)

```
src/
├─ app/               # Next.js app router pages & layout
│   ├─ layout.tsx
│   └─ page.tsx
├─ components/        # UI primitives and section components
│   ├─ ui/            # shadcn/ui wrappers (Button, Dialog, etc.)
│   └─ sections/      # Hero, Features, Pricing, Footer, etc.
├─ data/              # mockData.ts – realistic static data
├─ lib/               # utility helpers (theme, animations)
└─ styles/            # globals.css, tailwind config overrides
```

---



