# Book of Alternative Services (BAS) Daily Office Web App

A responsive, offline-capable Progressive Web App (PWA) for the **Book of Alternative Services Daily Office** (Morning Prayer, Evening Prayer, and Compline), designed for the Anglican Church of Canada.

## Features Included

- **Full Liturgical Calendar Engine:** Calculates movable feasts (Ash Wednesday, Easter, Ascension, Pentecost, Trinity Sunday, All Saints, Reign of Christ) and liturgical seasons (Advent, Christmas, Epiphany, Lent, Holy Week, Easter, Pentecost/Ordinary Time) through 2040+.
- **Two-Year Daily Office Lectionary Cycle:** Automatically tracks Year One and Year Two.
- **Inclusive Language Liturgical Psalter (2019):** Authorized by General Synod 2019, with an optional toggle in Settings to switch to the original 1985 BAS Psalter.
- **One-Tap Scripture Readings:** Formatted links directly to the New Revised Standard Version (NRSVue) on BibleGateway and Oremus to respect copyright guidelines.
- **Prayer Reminders & Calendar (.ics):** Downloadable recurring `.ics` calendar schedule for Apple Calendar and Google Calendar, plus in-browser notifications.
- **Customizable Reader Controls:** Font size slider (15px to 25px), themes (Light, Dark, Warm Sepia), and rubrics display toggle.
- **Offline PWA Support:** Built-in Web App Manifest and Service Worker so users can tap "Add to Home Screen" on iOS and Android to install it like a native app and use it completely offline.

---

## 3-Minute Deployment to GitHub Pages (100% Free)

You can host this app for free using your GitHub account:

1. **Log into GitHub:** Go to [github.com](https://github.com) and click the **+** icon in the upper right, then choose **New repository**.
2. **Name your repository:** Name it something clean, like `bas-daily-office` or `daily-office`.
   - Make sure it is set to **Public**.
   - Leave "Initialize with a README" unchecked.
   - Click **Create repository**.
3. **Upload the files:**
   - On the next screen, click **uploading an existing file**.
   - Drag and drop the extracted files from this zip into the box:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icon-192.png`
     - `icon-512.png`
   - Click **Commit changes** at the bottom.
4. **Turn on GitHub Pages:**
   - In your repository, click **Settings** (tab along the top).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Branch**, change "None" to **main** (or `master`) and folder to `/ (root)`.
   - Click **Save**.

Within 60 seconds, GitHub will provide your live URL (e.g., `https://<your-username>.github.io/bas-daily-office/`). 

You can share this link with congregants, family, and colleagues, and they can tap **"Add to Home Screen"** on their phones to install it as an app.
