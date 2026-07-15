# Project images

Drop screenshots / diagrams here, then wire the path into `src/data/projects.ts`.

## Flagship covers (card + detail hero)

| Project | File path | Data field |
| --- | --- | --- |
| Scoring Service | `scoring-service/cover.png` | `image: "/projects/scoring-service/cover.png"` |
| Secure View | `secure-view/cover.png` | `image: "/projects/secure-view/cover.png"` |
| New Dashboard | `new-dashboard/cover.png` | `image: "/projects/new-dashboard/cover.png"` |
| Creditit Backend | `creditit-backend/cover.png` | `image: "/projects/creditit-backend/cover.png"` |

After adding a file, set the matching `image` (and optional `links`) on that project in `src/data/projects.ts`. Cards and detail pages only render an image when `image` is set — empty folders do not break the UI.

Optional external links example:

```ts
links: [{ label: "View live", href: "https://example.com" }],
```

## Alphabet Trading suite chips

| Site | File path | Live URL |
| --- | --- | --- |
| Alphabet Trading | `alphabet-trading-website/cover.png` | https://alphabettrading.com/ |
| Lucid Pictures | `lucid-pictures/cover.png` | http://lucidpicturesplc.com/ |

Chips show a muted placeholder box until the image file exists; once you drop `cover.png` in, the thumbnail appears automatically.

## Tips

- Prefer PNG or WebP, roughly 16:9 for covers.
- Avoid screenshots that show real customer / financial PII.
- Employer-internal UIs: only share if you are allowed to; architecture diagrams are often safer than live-product screenshots.
