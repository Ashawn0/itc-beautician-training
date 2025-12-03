# Complete Deployment Guide - ITC Beautician Training Website

## Step 1: Buy Your Domain (itcbeauticiantraining.com)

### Option A: Namecheap (Recommended for Nepal)
1. Go to [Namecheap.com](https://namecheap.com)
2. Search for `itcbeauticiantraining.com`
3. Add to cart and checkout
4. **Cost**: ~$10-15/year

### Option B: GoDaddy Nepal
1. Go to [GoDaddy Nepal](https://np.godaddy.com)
2. Search for your domain
3. Complete purchase
4. **Cost**: Similar pricing

### Option C: Hostinger
1. Go to [Hostinger.com](https://hostinger.com)
2. Often has domain + hosting bundles
3. **Cost**: ~$10/year

---

## Step 2: Host Your Website (FREE Option!)

### 🌟 **Recommended: Vercel (100% Free)**

Vercel is the company behind Next.js, so it's the best choice for your site.

#### Why Vercel?
- ✅ **Completely FREE** for personal/small business sites
- ✅ Automatic deployments when you make changes
- ✅ Fast worldwide delivery (CDN)
- ✅ Free SSL certificate (HTTPS)
- ✅ Easy domain connection

#### How to Deploy on Vercel:

**Step 2.1: Create GitHub Account (if you don't have one)**
1. Go to [GitHub.com](https://github.com)
2. Sign up for free
3. Verify your email

**Step 2.2: Upload Your Code to GitHub**
1. Install Git on your computer:
   - Download from [git-scm.com](https://git-scm.com/downloads)
   - Install with default settings

2. Open PowerShell in your project folder:
   ```powershell
   cd C:\Users\ASUS\Desktop\beauticiantraining
   ```

3. Run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ITC Website"
   ```

4. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `itc-beautician-training`
   - Make it **Public** or **Private** (your choice)
   - **Don't** add README or .gitignore
   - Click "Create repository"

5. Copy the commands GitHub shows you and paste them in PowerShell:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/itc-beautician-training.git
   git branch -M main
   git push -u origin main
   ```

**Step 2.3: Deploy to Vercel**
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. After login, click **"Add New Project"**
5. Select your `itc-beautician-training` repository
6. Click **"Deploy"**
7. Wait 2-3 minutes ⏳
8. Done! You'll get a free URL like: `itc-beautician-training.vercel.app`

**Step 2.4: Connect Your Custom Domain**
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter: `itcbeauticiantraining.com`
4. Click **"Add"**
5. Vercel will show you DNS records to add

6. Go to your domain registrar (Namecheap/GoDaddy):
   - Find **DNS Settings** or **Nameservers**
   - Add the records Vercel provided:
     - Type: `A`, Value: `76.76.21.21`
     - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

7. Wait 10 minutes to 48 hours for DNS to propagate
8. Your site will be live at `itcbeauticiantraining.com`! 🎉

---

## Alternative Hosting Options

### Option B: Netlify (Also Free)
- Similar to Vercel
- Same GitHub deployment process
- Visit [Netlify.com](https://netlify.com)

### Option C: cPanel Hosting (Paid, ~$3-10/month)
If you prefer traditional hosting:
1. Buy hosting from Hostinger/Bluehost/SiteGround
2. You'll need to build a static version:
   ```bash
   npm run build
   ```
3. Upload the `.next` folder via cPanel File Manager
4. Configure it to run Node.js (ask hosting support)

**Note**: Vercel is easier and free, so I recommend it for beginners.

---

## Step 3: Making Changes After Deployment

### ✅ YES! You Can Still Edit Everything

Here's how it works:

#### For Simple Content Changes (Text, Courses, Images):

**Method 1: Edit Locally, Push to GitHub**
1. Open your project folder
2. Make changes (e.g., edit `src/locales/en.json` to update text)
3. Open PowerShell in the folder:
   ```bash
   git add .
   git commit -m "Updated contact information"
   git push
   ```
4. **Vercel automatically redeploys** in 2-3 minutes! ✨

**Method 2: Edit Directly on GitHub (for quick text changes)**
1. Go to your GitHub repository
2. Navigate to the file (e.g., `src/locales/en.json`)
3. Click the pencil icon ✏️
4. Make changes
5. Click "Commit changes"
6. Vercel auto-deploys again!

#### Common Edits You'll Make:

**Update Course Information:**
- Edit: `src/locales/en.json`
- Find the course in the `courses` array
- Change duration, skills, etc.
- Push to GitHub → Auto-deployed

**Add Nepali Language:**
- Edit: `src/locales/np.json`
- Copy structure from `en.json`
- Translate all values to Nepali
- Push to GitHub

**Change Contact Info:**
- Edit: `src/locales/en.json`
- Find `"contact": { "details": { ... }}`
- Update phone, email, address
- Push to GitHub

**Replace Images:**
- Add new images to `public/images/`
- Update the image path in the relevant page
- Push to GitHub

**Add More Photos to Gallery:**
- Edit: `src/app/gallery/page.tsx`
- Add new items to the `images` array
- Push to GitHub

---

## Cost Breakdown

### FREE Option (Recommended):
- Domain: $10-15/year (one-time yearly)
- Vercel Hosting: $0/month ✅ FREE FOREVER
- SSL Certificate: $0 (included)
- **Total**: ~$1/month

### Paid Hosting Option:
- Domain: $10-15/year
- Hosting: $3-10/month
- **Total**: ~$4-11/month

---

## Complete Workflow After Setup

1. **Make changes** on your computer
2. **Test locally**: Run `npm run dev`, check at `localhost:3000`
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. **Wait 2 minutes** → Changes are live automatically! 🚀

You never lose the ability to edit. Your local files are the source of truth!

---

## Need Help Later?

If you want to:
- Add a blog section
- Add a WhatsApp chat widget
- Add Google Analytics
- Add a course booking system
- Translate to Nepali

Just ask me! The system is fully customizable.

---

## Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production (test before deploying)
npm run build

# Push changes to GitHub (triggers auto-deploy)
git add .
git commit -m "Your change description"
git push
```

---

**Bottom Line**: 
- Buy domain from Namecheap/GoDaddy (~$10/year)
- Host FREE on Vercel
- Edit anytime, push to GitHub, auto-deploys
- Total cost: ~$10/year (just the domain!)
