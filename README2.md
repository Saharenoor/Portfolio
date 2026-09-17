# Noor e Sahar — Portfolio

A free, static portfolio site. No build tools, no frameworks — just HTML, CSS, and JS, with hand-coded SVG icons.

## Files
- `index.html` — page structure and content
- `style.css` — all styling (colors are CSS variables at the top — purple / dark-grey theme)
- `script.js` — mobile menu, scroll-reveal animations, and the project video popup
- `assets/images/` — put project thumbnail pictures here
- `assets/videos/` — put project video files here (if you're self-hosting them instead of using YouTube)
- `assets/cv.pdf` — your CV file (add this yourself)

---

## 1. How to add a video popup to a project

Every project card in `index.html` already has the popup built in. Right now, clicking a project opens the popup but shows "No video has been added yet" — because no video is wired up. You have two ways to add one; pick whichever is easier for you.

Find the project in `index.html` — each one starts with a comment like `<!-- Zero-G Eats -->` and has a line that looks like this:

```html
<div class="project-media project-media--frontend" data-video-type="" data-video="" data-video-title="Zero-G Eats — demo">
```

### Option A — YouTube video (easiest)
1. Upload your demo video to YouTube (it can be "Unlisted" so it doesn't show up in search, but is still viewable by link).
2. Copy the video ID — it's the part after `v=` in the URL. Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → the ID is `dQw4w9WgXcQ`.
3. Fill in the two empty attributes:
   ```html
   data-video-type="youtube" data-video="dQw4w9WgXcQ"
   ```

### Option B — Your own video file (self-hosted)
1. Export/save your screen recording as an `.mp4` file (keep it reasonably small — under ~20MB loads much faster).
2. Put the file in `assets/videos/`, e.g. `assets/videos/zero-g-eats.mp4`.
3. Fill in the two empty attributes:
   ```html
   data-video-type="local" data-video="assets/videos/zero-g-eats.mp4"
   ```

That's it — do this for each project you have a video for. Projects without a video wired up will still open the popup, just with the "no video yet" message, so nothing breaks in the meantime.

---

## 2. How to add a thumbnail picture to a project

Right now each project card shows a simple icon on a colored background instead of a screenshot. To swap in a real picture:

1. Save a screenshot or photo of the project, and put it in `assets/images/`, e.g. `assets/images/zero-g-eats.jpg`.
2. In `index.html`, find the project's `<svg class="project-glyph">...</svg>` block — right above it there's a comment telling you exactly what to paste, for example:
   ```html
   <!-- OPTIONAL THUMBNAIL: to show a screenshot instead of the icon,
        delete the <svg class="project-glyph">...</svg> block below and put this in its place:
        <img class="project-thumb" src="assets/images/zero-g-eats.jpg" alt="Zero-G Eats screenshot"> -->
   ```
3. Delete the whole `<svg class="project-glyph">...</svg>` block for that project and paste the `<img>` line from the comment in its place (using your actual file name).
4. The picture will now fill the card, the "Frontend"/"Full-Stack"/etc. tag stays in the corner, and the ▶ play button still sits on top of it — clicking anywhere on the image opens the video popup.

You can do this for as many or as few projects as you like — projects without a picture will simply keep their icon.

---

## 3. How to add a brand-new project later

To keep your portfolio growing, copy an entire project block and edit it. In `index.html`, find the `<div class="projects" id="projectGrid">` section and copy one whole `<article class="project reveal"> ... </article>` block (including the `<!-- comment -->` above it), then paste it right before the closing `</div>` of the projects section. Edit these parts:

1. **Comment & category class** — rename the comment, and change `project-media--frontend` to whichever category fits (`--frontend`, `--fullstack`, `--core`, `--robotics` — or reuse any of these, they're just color themes).
2. **Category label** — update the text inside `<span class="project-category">...</span>` to match (e.g. "Frontend", "Full-Stack", "Robotics", "Mobile", "Game Dev" — any short label works).
3. **Video attributes** — set `data-video-type`, `data-video`, and `data-video-title` following the instructions in section 1 above (or leave them empty for now).
4. **Thumbnail** — either keep the placeholder `<svg class="project-glyph">` (any icon works as a generic placeholder, it doesn't have to match perfectly) or add a picture as in section 2.
5. **Title & description** — update the `<h3>` and the `<p>` description(s) inside `.project-body`.
6. **Tags** — update the `<span>` tags inside `.project-tags` to the tech you used.

Save the file, and the new card will automatically appear in the grid — no other changes needed.

---

## Mobile + desktop
Every grid reflows from a single column on phones to multiple columns on desktop, and mobile spacing has extra breathing room between sections and cards so nothing feels cramped on a small screen.

## Still to do
1. Add your real CV file at `assets/cv.pdf`.
2. Wire up videos and/or thumbnails using the steps above.
3. Double check the phone number link (`tel:+923269111181`) matches how you'd like it dialed internationally.

## To preview locally
Open the folder in VS Code, right-click `index.html`, and choose "Open with Live Server" (after installing the Live Server extension).

## To deploy (GitHub Pages, free)
1. Create a new GitHub repo.
2. Push this folder to it.
3. In the repo, go to Settings → Pages → set source to the `main` branch, root folder.
4. Your site will be live at `https://Saharenoor.github.io/repo-name`.
