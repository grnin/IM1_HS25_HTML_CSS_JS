# Funktionsweise von CSS

**Kurzfassung:**  
CSS (*Cascading Style Sheets*) ist die Sprache, mit der das **Aussehen von HTML-Inhalten** beschrieben wird.  
Damit wird festgelegt, **wie** ein Element aussieht – z. B. Farbe, Schrift, Abstand oder Position.  
Wichtig sind dabei die **Selektoren** (Element, Klasse, ID), mit denen man gezielt HTML-Elemente anspricht,  
und das **Boxmodell**, das bestimmt, wie jedes Element im Layout aufgebaut ist.

---

## 🎨 Funktionsweise von CSS

CSS (Cascading Style Sheets) ergänzt HTML, indem es die **Darstellung** von Elementen steuert – also Layout, Farben, Abstände und Schriftarten.  
Man kann CSS direkt im HTML einbetten oder in einer separaten Datei (empfohlen: `style.css`) verwenden.

---

## 1️⃣ Grundprinzip: Selektor → Eigenschaft → Wert

Ein CSS-Befehl besteht aus **drei Teilen**:

```css
selektor {
  eigenschaft: wert;
}
```

Beispiel:
```css
p {
  color: blue;
  font-size: 16px;
}
```
➡️ Alle `<p>`-Absätze werden **blau** und **16 px gross** dargestellt.

---

## 2️⃣ Selektor-Typen

### 🔹 a) Element-Selektor
Spricht **alle HTML-Tags eines Typs** an.

```css
p {
  color: gray;
}
h1 {
  font-size: 2rem;
}
```

💡 **Wirkung:**  
Ändert das Styling *aller* entsprechenden Elemente auf der Seite.  
→ z. B. alle Absätze (`<p>`) oder alle Überschriften (`<h1>`).

---

### 🔹 b) Klassen-Selektor
Spricht **Elemente mit einer bestimmten Klasse** an.  
Im HTML wird eine Klasse mit dem Attribut `class="..."` zugewiesen.

```html
<p class="highlight">Wichtiger Hinweis</p>
```

Im CSS wird sie mit einem **Punkt (.)** referenziert:
```css
.highlight {
  background-color: yellow;
  color: black;
}
```

💡 **Wirkung:**  
Mehrere Elemente können dieselbe Klasse besitzen → flexibel für wiederverwendbare Stile.  
Beispiel: `.primary-button`, `.card`, `.warning`.

---

### 🔹 c) ID-Selektor
Spricht **genau ein einzelnes Element** an.  
Im HTML erhält das Element das Attribut `id="..."`.

```html
<p id="intro">Willkommen!</p>
```

Im CSS wird die ID mit einem **Hash (#)** angesprochen:
```css
#intro {
  font-weight: bold;
  color: darkgreen;
}
```

💡 **Wirkung:**  
Eine ID sollte **nur einmal pro Seite** vorkommen.  
Sie ist einzigartig und wird oft für **gezielte Formatierungen oder JavaScript-Zugriffe** verwendet.

---

### Vergleich der Selektoren

| Selektor-Typ | Schreibweise | Beispiel | Geltungsbereich |
|---------------|---------------|-----------|------------------|
| **Element** | `p` | `p { color: gray; }` | alle `<p>`-Elemente |
| **Klasse** | `.highlight` | `.highlight { background: yellow; }` | beliebig viele Elemente mit `class="highlight"` |
| **ID** | `#intro` | `#intro { color: darkgreen; }` | genau ein Element mit `id="intro"` |

---

## 3️⃣ Kaskade und Spezifität

Das „C“ in **CSS** steht für *Cascading* = „abgestufte Reihenfolge“.  
Wenn mehrere Regeln auf dasselbe Element zutreffen, entscheidet **Spezifität**:

| Rang | Selektor | Beispiel |
|------|-----------|-----------|
| 1️⃣ | **ID** | `#intro { ... }` |
| 2️⃣ | **Klasse / Attribut / Pseudoklasse** | `.card { ... }`, `a:hover { ... }` |
| 3️⃣ | **Element** | `p { ... }` |
| 4️⃣ | **Inline-Stil (direkt im HTML)** | `<p style="color:red">` |

Wenn mehrere Regeln den gleichen Stil betreffen, gilt:  
> **Die spezifischste und zuletzt geladene Regel gewinnt.**

---

# 📦 Das Boxmodell

Jedes HTML-Element wird im Browser als **rechteckige Box** dargestellt.  
Das CSS-Boxmodell beschreibt, **wie viel Platz** ein Element im Layout einnimmt.

```
+-------------------------------+
|         margin (Aussen)       |
|  +-------------------------+  |
|  |   border (Rahmen)       |  |
|  |  +-------------------+  |  |
|  |  |  padding (Innen)  |  |  |
|  |  | +---------------+ |  |  |
|  |  | | content       | |  |  |
|  |  | +---------------+ |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

---

### 🔹 Bestandteile im Detail

| | Beschreibung | Beispiel |
|------|---------------|-----------|
| **content** | Der eigentliche Inhalt (Text, Bild etc.) | `width`, `height` |
| **padding** | Innenabstand zwischen Inhalt und Rahmen | `padding: 20px;` |
| **border** | Rahmen um das Element | `border: 2px solid #333;` |
| **margin** | Aussenabstand zum nächsten Element | `margin: 10px;` |

---

### Beispiel:
```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid lightgray;
  margin: 30px auto;
}
```

💡 **Erklärung:**
- Inhalt: 300 px breit  
- Innenabstand (padding): 20 px rundherum  
- Rahmen: 2 px  
- Aussenabstand (margin): 30 px oben/unten, automatisch zentriert

Gesamte Breite = `300 + 2*20 + 2*2 = 344 px`  
Gesamte Höhe wird analog berechnet.

---

## 🔧 Nützliche CSS-Eigenschaften im Zusammenhang mit dem Boxmodell

| Eigenschaft | Beschreibung |
|--------------|---------------|
| `box-sizing: border-box;` | zählt `padding` und `border` **in die Gesamtbreite ein** (empfohlen!) |
| `display` | legt fest, ob ein Element Block (`block`) oder Inline (`inline`) ist |
| `max-width` / `min-height` | begrenzen die Grösse |
| `overflow` | steuert, was passiert, wenn der Inhalt grösser ist als der Container |

---

# 🧠 Zusammenfassung

| Konzept | Zweck | Beispiel |
|----------|--------|-----------|
| **CSS-Regel** | Stil für ein Element definieren | `p { color: blue; }` |
| **Element-Selektor** | Alle HTML-Tags eines Typs | `p { ... }` |
| **Klassen-Selektor** | Gruppe von Elementen | `.card { ... }` |
| **ID-Selektor** | Einzigartiges Element | `#header { ... }` |
| **Boxmodell** | Struktur der Darstellung | content + padding + border + margin |

---

