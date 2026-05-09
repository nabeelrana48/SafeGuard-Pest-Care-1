# SafeGuard Pest Care — Next.js Website

A professional Next.js 14 website for SafeGuard Pest Care, built with Tailwind CSS.

## 🚀 How to Run (Step-by-Step)

### Step 1 — Install Node.js
Go to https://nodejs.org and download the **LTS** version. Install it normally.

### Step 2 — Unzip and open the project
Unzip the downloaded folder. Open your Terminal (Mac) or Command Prompt (Windows), then type:

```bash
cd path/to/safeguard-pest
```

### Step 3 — Install dependencies
```bash
npm install
```
Wait for it to finish (may take 1–2 minutes).

### Step 4 — Run the development server
```bash
npm run dev
```

### Step 5 — Open in browser
Go to: **http://localhost:3000**

---

## 📦 Build for Production (to deploy online)
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Free Hosting — Recommended)

1. Go to https://vercel.com and sign up free
2. Click **"Add New Project"**
3. Upload your folder or connect your GitHub repo
4. Click **Deploy** — done! You get a live URL instantly.

---

## 📞 Connect Retell.ai Voice Agent (Call Now Button)

When your Retell.ai voice agent is set up:

1. Open `src/components/CallNowButton.tsx`
2. Replace all instances of `tel:(404)5550167` with your Retell.ai phone number:
   ```
   href="tel:+1XXXXXXXXXX"
   ```
3. Also update the same number in:
   - `src/components/TopBar.tsx`
   - `src/components/Navbar.tsx`
   - `src/components/Hero.tsx`
   - `src/components/CTA.tsx`
   - `src/components/FloatingCallButton.tsx`

---

## 🗂 Project Structure

```
safeguard-pest/
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← SEO metadata
│   │   ├── page.tsx        ← Main page
│   │   └── globals.css     ← Fonts & animations
│   └── components/
│       ├── TopBar.tsx          ← Top contact bar
│       ├── Navbar.tsx          ← Navigation
│       ├── Hero.tsx            ← Hero section
│       ├── CallNowButton.tsx   ← Reusable Call Now button
│       ├── Services.tsx        ← Services grid
│       ├── WhyUs.tsx           ← Why choose us
│       ├── Pricing.tsx         ← Price table
│       ├── Areas.tsx           ← Service areas & hours
│       ├── FAQ.tsx             ← Accordion FAQ
│       ├── CTA.tsx             ← Contact banner
│       ├── Footer.tsx          ← Footer
│       └── FloatingCallButton.tsx ← Mobile sticky button
├── package.json
├── tailwind.config.js
└── next.config.js
```
