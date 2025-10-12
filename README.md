# Hazel IT Solutions Ltd - Website

Professional landing page for Hazel IT Solutions Ltd.

## GitHub Pages Setup Instructions

### 1. Create a GitHub Repository

1. Go to GitHub and create a new repository named `hazelwebsite` (or any name you prefer)
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hazel IT Solutions landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/hazelwebsite.git
   git push -u origin main
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be published at `https://YOUR-USERNAME.github.io/hazelwebsite/`

### 3. Configure Custom Domain (hazel-it.com)

1. In your repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `www.hazel-it.com`
3. Click **Save**
4. Check **Enforce HTTPS** (wait a few minutes for the certificate to provision)

### 4. Configure DNS Settings with Your Domain Registrar

Add the following DNS records at your domain registrar (where you purchased hazel-it.com):

**For the apex domain (hazel-it.com):**
- Type: `A`
- Name: `@`
- Value: Add these four A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**For the www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR-USERNAME.github.io`

**Note:** DNS propagation can take up to 24-48 hours, but usually completes within a few hours.

### 5. Create CNAME File (if needed)

GitHub Pages will automatically create this, but if you need to create it manually:

Create a file named `CNAME` (no extension) in the root directory with the content:
```
www.hazel-it.com
```

## Local Development

To view the site locally, simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with npx)
npx serve
```

Then visit `http://localhost:8000` in your browser.

## Features

- Fully responsive design (mobile-friendly)
- Modern gradient design
- Professional contact information
- Skills and experience showcase
- Clean, accessible HTML structure
- No framework dependencies (plain HTML/CSS)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

To update content, simply edit `index.html`. All styling is contained in `styles.css`.
