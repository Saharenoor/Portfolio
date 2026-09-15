# My Portfolio

A free, static portfolio site. No build tools, no frameworks — just HTML, CSS, and JS.

## Files
- `index.html` — page structure and content (edit your name, bio, projects, links here)
- `style.css` — all styling (colors are defined once at the top as CSS variables)
- `script.js` — powers the video popup and mobile menu
- `assets/` — put your CV PDF and any images here

## To customize
1. Replace "Your Name" everywhere in `index.html`.
2. Rewrite the hero line and About paragraph.
3. For each project: swap the placeholder image URL for your own screenshot, change
   `data-video="dQw4w9WgXcQ"` to your own YouTube video ID (the part after `v=` in
   a YouTube URL), and update the "Visit site" / "Code" links.
4. Add more `<article class="project">...</article>` blocks to add more projects —
   just copy-paste one and edit it.
5. Put your real CV file at `assets/cv.pdf` (must be named exactly `cv.pdf`, or update
   the links in `index.html` to match your filename).
6. Update the email, GitHub, and LinkedIn links in the Contact section.

## To preview locally
Open the folder in VS Code, right-click `index.html`, and choose
"Open with Live Server" (after installing the Live Server extension).

## To deploy (GitHub Pages, free)
See the deployment steps provided in chat, or:
1. Create a new GitHub repo.
2. Push this folder to it.
3. In the repo, go to Settings → Pages → set source to the `main` branch, root folder.
4. Your site will be live at `https://yourusername.github.io/repo-name`.
