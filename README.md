# Sidedoor Studio — studio.getsidedoor.co.uk

5 pages: index, services, work, about, contact. Shared design system in css/style.css, shared behaviour in js/main.js.

## Adding the philosopher statue renders (drag and drop, no code editing)

Every `.bust-fig` figure now points at a specific file path under `assets/statues/`. To fill one in, rename your PNG to match and drop it into that folder. The page detects the file automatically and fades it in, no HTML editing required.

Full mapping, all 15 slots:

| Filename | Page | Where it appears |
|---|---|---|
| philosopher-01.png | index.html | Hero, right side |
| philosopher-02.png | index.html | Work preview card, WATAG |
| philosopher-03.png | index.html | Work preview card, Candymonium |
| philosopher-04.png | index.html | Work preview card, Digz'n Lidz |
| philosopher-05.png | work.html | WATAG case |
| philosopher-06.png | work.html | Candymonium case |
| philosopher-07.png | work.html | Digz'n Lidz case |
| philosopher-08.png | work.html | Sidedoor Digital case |
| philosopher-09.png | about.html | "Why Studio exists" lead |
| philosopher-10.png | services.html | Intro, above the services grid |
| philosopher-11.png | services.html | Standalone, below the process steps |
| philosopher-12.png | about.html | Roster gallery strip, 1st of 4 |
| philosopher-13.png | about.html | Roster gallery strip, 2nd of 4 |
| philosopher-14.png | about.html | Roster gallery strip, 3rd of 4 |
| philosopher-15.png | about.html | Roster gallery strip, 4th of 4 |

Every one of the 15 renders you have now has a home. Just rename each file to the matching filename above and drag all 15 into `assets/statues/` at once, or do it a few at a time as you decide which philosopher goes where.

Until a file exists at a given path, that figure quietly shows the marble gradient placeholder instead, nothing breaks and no broken image icon appears. Once the real PNG lands in the folder, it fades in on its own.

## How the interaction works
- `data-mode="scroll"` figures (hero, work cases, about, services, gallery strip) crack from marble to a brass circuit glow as they scroll into view.
- `data-mode="case"` figures (home page work preview cards) are clickable and link straight to the matching case on the work page.

## Notes
- No em dashes or en dashes anywhere in the copy, per your standing preference.
- Work page case studies are pulled from the main Sidedoor Digital portfolio (WATAG, Candymonium, Digz'n Lidz, Sidedoor Digital itself) since Studio has no clients of its own yet. Swap these out for real Studio commissions as they land.
- Contact form submits to your Formspree endpoint (https://formspree.io/f/xwvryavb) and shows a confirmation message inline without leaving the page.
- Discretion and NDA contracts are called out on the contact page, about page, and work page intro.
