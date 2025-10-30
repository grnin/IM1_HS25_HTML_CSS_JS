## 1. Das Client-Server-Modell

**Grundidee:** Zwei Rollen – ein _Client_ stellt eine Anfrage, ein _Server_ beantwortet sie.

- **Client** = z. B. Dein Browser (Chrome, Firefox, Safari)
- **Server** = Der Computer, auf dem eine Website gespeichert ist

**Beispiel:** Du gibst `www.museum.ch` in Deinen Browser ein → Der Client fragt den Server nach der Website → Der Server sendet die Webseite zurück.

---

## 2. Was ist HTTP?

**HTTP = HyperText Transfer Protocol**

- Ist die Sprache, mit der Browser und Server kommunizieren.
- Sagt dem Server z. B. „Gib mir bitte die Datei `index.html`“.
- Es gibt verschiedene _HTTP-Methoden_, z. B.:
  - `GET`: Daten abrufen (z. B. eine Webseite)
  - `POST`: Daten senden (z. B. ein ausgefülltes Kontaktformular)

**HTTPS** ist eine sichere Version – das „S“ steht für „secure“.

---

## 3. Was ist FTP?

**FTP = File Transfer Protocol**

- Wird verwendet, um Dateien **zwischen Computern zu übertragen**.
- Typisch bei Webseiten:
  - Du baust eine Website lokal
  - Du lädst die Dateien per FTP auf den Server hoch (z. B. mit FileZilla)

**Unterschied zu HTTP:**

- HTTP zeigt Inhalte im Browser.
- FTP lädt Dateien hoch oder herunter (wie ein USB-Stick im Internet).

---

## 4. Wie läuft ein Webseitenaufruf ab?

### Schritt-für-Schritt:

1. Du gibst `www.museum.ch` im Browser ein.
2. Der Browser fragt einen **DNS-Server**: „Wie lautet die IP-Adresse zu dieser Domain?“
3. Der DNS-Server antwortet z. B. mit `185.60.251.251`
4. Dein Browser verbindet sich über HTTP mit dem Server dieser IP-Adresse
5. Der Server sendet z. B. die Datei `index.html`
6. Dein Browser stellt diese Datei grafisch dar

**Merksatz:** Name → IP → Anfrage → Antwort → Darstellung

---

## 5. Was ist DNS?

**DNS = Domain Name System**

- Wandelt verständliche Namen (`www.museum.ch`) in IP-Adressen um (`185.60.251.251`)
- Vergleichbar mit einem Telefonbuch:
  - Du suchst nach „Pizzeria Napoli“ → bekommst deren Telefonnummer

Ohne DNS müsstest Du dir IP-Adressen merken – das wäre sehr unpraktisch.

---

## 6. Was ist eine IP-Adresse?

**IP = Internet Protocol Address**

- Jeder Rechner im Internet hat eine eigene „Hausnummer“
- Zwei Typen:
  - IPv4: `185.60.251.251`
  - IPv6: `2a03:2880:f003:c07:face:b00c::25de`
- Notwendig, um Daten korrekt zuzustellen – wie bei einem Brief mit Adresse

---

## 7. Was bedeutet Hosting?

**Hosting** = Deine Website wird auf einem Server im Internet gespeichert.

- **Webhoster** bieten Speicherplatz, Domains, E-Mail etc.
- Du mietest bei einem Hosting-Anbieter Platz für Deine Dateien.
- Bekannte Anbieter: Hostpoint, Cyon, Infomaniak, Bluehost, ...

**Vorgang:**

1. Du buchst ein Hosting-Paket
2. Du lädst Deine Dateien (HTML, CSS, JS, Bilder) hoch
3. Andere Menschen können Deine Website aufrufen

---

## 💡 Fazit

| Begriff    | Kurz erklärt                       |
| ---------- | ---------------------------------- |
| Client     | Fragt Daten an (Browser)           |
| Server     | Gibt Daten zurück (Webserver)      |
| HTTP(S)    | Sprache zwischen Client und Server |
| FTP        | Werkzeug zum Hochladen von Dateien |
| DNS        | Übersetzer zwischen Domain und IP  |
| IP-Adresse | Adresse im Internet                |
| Hosting    | Speicherort für Deine Website      |

---
