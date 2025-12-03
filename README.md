# ITC Beautician Training Website

This is the official website for M/s I.T.C. Beautician Training And Service Center Pvt. Ltd.
Built with Next.js, Tailwind CSS, and TypeScript.

## Project Structure

- `src/app`: Page routes (Home, About, Courses, etc.)
- `src/components`: Reusable UI components (Header, Footer, CourseCard, etc.)
- `src/locales`: Localization files (English and Nepali content)
- `public/images`: Website images

## How to Manage Content

### 1. Adding Nepali Translation
The website is set up for bilingual support. Currently, only English is active.
To add Nepali:
1. Open `src/locales/np.json`.
2. Copy the content from `src/locales/en.json` into `np.json`.
3. Translate the values (right side) to Nepali. Keep the keys (left side) exactly the same.
4. Update `src/components/Header.tsx` to add a language switcher (or ask a developer to enable the toggle).

### 2. Updating Courses
All course information is stored in `src/locales/en.json`.
To add or edit a course:
1. Open `src/locales/en.json`.
2. Find the `"courses"` array.
3. Edit the details of an existing course or add a new object with the same structure:
   ```json
   {
     "id": "new-course-slug",
     "title": "New Course Name",
     "duration": "1 Month",
     "overview": "Description...",
     "skillsLearned": ["Skill 1", "Skill 2"],
     "whoShouldJoin": "Target audience...",
     "certification": "Certificate info..."
   }
   ```

### 3. Changing Images
1. Place new images in `public/images`.
2. Open the relevant page or component (e.g., `src/app/page.tsx` for Home) and update the `src` path in the `<Image />` component.

## Deployment

### Vercel (Recommended)
1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the project.
3. Vercel will automatically detect Next.js and deploy it.

### Netlify
1. Drag and drop the `.next` folder (after building) or connect to GitHub.
2. Build command: `npm run build`
3. Publish directory: `.next` (or let Netlify auto-detect Next.js).

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
