# SupaNext Starter Template
This is a simple starter template for full-stack projects! It is preloaded with:
- [Next.js](https://nextjs.org/) (React Framework)
- [Supabase](https://supabase.com/) (Auth and Database)
- [TailwindCSS](https://tailwindcss.com/) (Styling)
- [daisyUI](https://daisyui.com/) (Tailwind Component Library)
- [Lucide Icons](https://lucide.dev/) (Simple Icon Library)

Additionally:
- AuthContext is already setup! (signup, signin, logout, resetpassword)
- Login and Sign Up pages are included!



## Getting Started

### 1. Clone
First, clone the repository:
```bash
git clone https://github.com/keatonlees/supanext-starter.git
```

### 2. Install Libraries
Then, install the libraries so that everything is ready to go
```bash
npm install
```

### 3. Start Server
Now you can startup the dev server!
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.



## Important Notes and Recommendations
Auth and storage will not current function as is. You will have to include you Supabase credentials in the .env.local file
```bash
# TODO: add supabase variables here
NEXT_PUBLIC_SUPABASE_URL = "https://***.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY = "***"
```

If you want to change the default daisyUI theme, you can do so by navigating to `src/app/globals.css`. Here you can change:
```bash
@plugin "daisyui" {
  /* TODO: change daisyUI themes here */
  themes: light --default, dark --prefersdark, cupcake, *OTHER THEMES HERE*;
}
```
You can find a list of prebuilt themes on [daisyUI](https://daisyui.com/docs/themes/#list-of-themes).
You will also need to change the theme name in `src/app/layout.tsx`. Change the name:
```bash
<html lang="en" data-theme="*CHANGE THEME NAME HERE*">
  ...
</html>
```

## Deploying

The easiest way to deploy the Next.js app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

If using Vercel for hosting, Web Analytics are already included in the starter template. To enable these analytics, follow [Vercel Analytics](https://vercel.com/docs/analytics).
