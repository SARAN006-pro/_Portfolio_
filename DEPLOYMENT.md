# Deployment Guide for saranvaratharaj.tech

Your portfolio is now ready to deploy! Choose one of the following methods:

## Method 1: Netlify (Recommended - Easiest)

### Option A: Drag & Drop (No CLI needed)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dist` folder from your project
3. Once deployed, go to Site Settings → Domain Management
4. Add custom domain: `saranvaratharaj.tech`
5. Follow Netlify's DNS configuration instructions

### Option B: Netlify CLI
```powershell
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod

# Follow prompts to connect your domain
```

### Configure DNS for Netlify:
Add these records to your domain registrar:
- **A Record**: Point to Netlify's load balancer IP (provided in dashboard)
- **CNAME**: `www` → Your Netlify site URL

---

## Method 2: Vercel

### Deploy with Vercel CLI:
```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Add custom domain in Vercel dashboard
```

### Configure DNS for Vercel:
1. Go to your Vercel project settings
2. Add domain: `saranvaratharaj.tech`
3. Add these DNS records at your registrar:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`

---

## Method 3: GitHub Pages with Custom Domain

### Steps:
```powershell
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/SARAN006-pro/portfolio.git
git push -u origin main

# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Configure DNS for GitHub Pages:
Add these records to your domain registrar:
- **A Records** (all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **CNAME**: `www` → `SARAN006-pro.github.io`

In your GitHub repo settings → Pages → Custom domain, enter: `saranvaratharaj.tech`

---

## SSL/HTTPS Certificate

All platforms (Netlify, Vercel, GitHub Pages) automatically provide free SSL certificates via Let's Encrypt. Once your DNS propagates (24-48 hours), HTTPS will be enabled automatically.

---

## Verification

After deployment and DNS configuration:
1. Visit `https://saranvaratharaj.tech`
2. Check `https://www.saranvaratharaj.tech`
3. Verify SSL certificate is active (padlock icon)
4. Test on mobile and different browsers

---

## Current Status

✅ Production build created (`dist` folder)  
✅ Netlify configuration ready (`netlify.toml`)  
✅ Vercel configuration ready (`vercel.json`)  
✅ SEO meta tags configured  
✅ Domain references updated  

**Next Action**: Choose a deployment method above and follow the steps!

---

## Support

If you need help with DNS configuration, contact your domain registrar support or refer to their documentation about adding A records and CNAME records.
