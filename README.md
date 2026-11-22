# Imene Ait Abdellah · Portfolio

An interactive, filterable timeline portfolio: plain HTML, CSS and JavaScript, no dependencies,
English and French, light and dark mode.

Built on the portfolio engine by Elias Charbel Salameh
(<https://github.com/eliascharbelsalameh/eliascharbelsalameh.github.io>, MIT for the code).
All content here is Imene's own; see [`LICENSE`](LICENSE).

## Edit your content
Everything on the page comes from [`assets/js/data.js`](assets/js/data.js) (heavily commented):
`profile`, `categories`, `timeline`, `skills`. Each text field has a French twin ending in `_fr`.

After any edit, run (Node 18+, nothing to install):

```
node tools/build.mjs
```

It refreshes the copy of your content inside `index.html` that search engines and link previews read,
and `sitemap.xml`. Bump `profile.updated` when you change something.

## To do before publishing
- Add your licensed Agrandir files as `assets/fonts/Agrandir-Regular.woff2` and `Agrandir-Bold.woff2` (titles use Inter until then).
- Add a square photo as `assets/images/profile.jpg` (initials show until then).
- Set your own self-assessed `rating` values in the `skills` array (they feed the player card).
- Check the site address in `tools/build.mjs` (`SITE`), then re-run the build.
- To add a blog: create `posts/<slug>.md`, re-run the build, and add a Blog link to the header.

## Publish on GitHub Pages
Create a repository named `<your-username>.github.io`, push these files, then enable
Settings → Pages → Deploy from branch → `main` / root.
