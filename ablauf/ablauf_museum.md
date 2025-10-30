# Lehrdokumentation: Website für das „Museum für digitale Kleinkunst“

Diese Anleitung dient als **strukturierter Ablaufplan** für den technischen Teil des Moduls _Interaktive Medien 1_ an der FH Graubünden.

---

## 🎬 Lektion 1: HTML-Grundstruktur erstellen

**Ziel:** Aufbau eines gültigen HTML-Dokuments mit semantischen Strukturelementen.

### Schritte:

1. **Grundstruktur schreiben** mit `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
2. `<meta charset>`, `<meta viewport>`, `<title>`
3. Navigationselement mit Logo und Links (`<nav>`, `<ul>`, `<li>`, `<a>`)
4. Hero-Bereich mit Bild und Titel (`<header class="hero">`)
5. Hauptinhalt mit Artikeln (`<main>`, `<section class="card-grid">`)
6. Footer mit &copy; und Button zum Theme-Switch (`<footer>`)

📝 **Aufgabe für Studierende:**  
Erstelle ein eigenes HTML-Grundgerüst mit mindestens Navigationsbereich, Header, Hauptbereich und Footer.

---

## 🎬 Lektion 2: CSS einbinden und strukturieren

**Ziel:** Verstehen, wie CSS modular eingebunden und verwendet wird.
Neue Eigenschaften bei der Erstellung erklären.

### Schritte:

1. CSS-Dateien im `<head>` einbinden:
   ```html
   <link rel="stylesheet" href="css/style.css" />
   ```
2. Imports im `style.css`:
   ```css
   @import "resets.css";
   @import "fonts.css";
   ```
3. Definition von CSS-Variablen im `:root`
4. Layout mit `flex` und `grid`
5. Medienqueries für Responsive Design

📝 **Aufgabe für Studierende:**  
Erstelle eine eigene `style.css` und wende Farben, Schriften und Abstände gezielt mit Variablen an.

---

## 🎬 Lektion 3: Navigationsleiste mit Sticky und Logo

**Ziel:** Die Navigation bleibt beim Scrollen sichtbar, enthält das Logo und reagiert auf Themewechsel.

### Schritte:

1. Aufbau der `.topnav` mit `display: flex`
2. Logo links, Links rechts
3. `position: sticky; top: 0;`
4. `backdrop-filter` für moderne Glas-Effekte
5. `<ul>' in Navigation umwandeln

---

## 🎬 Lektion 4: Hero-Bild gestalten

**Ziel:** Gestaltung des Headerbildes mit Titelüberlagerung

### Schritte:

1. Bild mit `object-fit: cover`
2. Zentrierter Titeltext mit `position: absolute`
3. Transparente Farbe und `font: var(--f-title)`

📝 **Aufgabe für Studierende:**  
Setze ein individuelles Hero-Bild mit Titel und Stil um.

---

## 🎬 Lektion 5: Einbindung von Fonts und reset

**Ziel:** Sowohl Google-Font als auch eigenen Font einbinden

### Schritte:

1. Google-Font auswählen (evtl. Studis wählen lassen) und in eigene `font.css` einbinden.
2. Hinweis auf Tracking durch Google
3. Font von Google herunterladen und in Woff, Woff2, eot und otf umwandeln.
4. Gemäss Vorlage einbinden
5. `font.css`mit @import einbinden
6. `reset.css`mit @import einbinden und Reset erklären

📝 **Aufgabe für Studierende:**  
Suche zwei Schriftarten. Stelle eine Schrift via Google-Fonts und die andere durch direkte Einbindung zur Verfügung.

---

## 🎬 Lektion 6: Grid-Layout für Startseitenkarten

**Ziel:** Ausstellungskarten responsiv mit CSS Grid darstellen

### Schritte:

1. `.card-grid` mit `grid-template-columns`
2. `.card` mit Schatten, Abstand, Bild, Titel, Text, Button
3. Objektbilder per `object-fit` auf einheitliche Größe bringen

📝 **Aufgabe für Studierende:**  
Erstelle drei eigene Ausstellungskarten mit Bild, Titel und Beschreibung.

---

## 🎬 Lektion 7: Footer und Theme-Umschalter

**Ziel:** Dynamischer Footer und Light/Dark-Mode

### Schritte:

1. Footer bleibt unten, aber scrollt mit (`margin-top: auto`)
2. Theme-Umschalter verknüpft mit JS:
   ```html
   <button id="toggle-theme">Theme</button>
   <script src="js/theme-toggle.js"></script>
   ```
3. CSS-Variablen für `[data-theme="dark"]` umdefinieren

📝 **Aufgabe für Studierende:**  
Verknüpfe eine eigene JS-Datei mit der HTML-Seite und kontrolliere `console.log`.

---

## 🎬 Lektion 9: Ausstellungsseite

**Ziel:** Ausstellungsseite in HTML und CSS aufbauen

### Schritte:

1. Grundstruktur aus `index.html` kopieren.
2. Hero-Bild durch Platzhalter ersetzen
3. HTML gemäss der Vorlage aufbauen
4. CSS gemäss der Vorlage erweitern

📝 **Aufgabe für Studierende:**  
Eine eigene Ausstellungs-Seite erstellen.

---

## 🎬 Lektion 10: Kontakt-Seite HTML

**Ziel:** Ausstellungsseite in HTML und CSS aufbauen

### Schritte:

1. Grundstruktur aus `index.html` kopieren.
2. Formular in HTML gemäss Vorlage erstellen und erklären

📝 **Aufgabe für Studierende:**  
Eine eigene Kontakt-Seite erstellen.

---

## 🎬 Lektion 11: Kontakt-Seite CSS

**Ziel:** Ausstellungsseite in HTML und CSS aufbauen

### Schritte:

1. CSS gemäss der Vorlage erweitern
2. Die einzelnen Eigenschaften erklären

📝 **Aufgabe für Studierende:**  
Eine eigene Kontakt-Seite erstellen.
