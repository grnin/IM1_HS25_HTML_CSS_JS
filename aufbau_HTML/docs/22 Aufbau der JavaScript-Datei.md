# Detaillierte Beschreibung der Datei `js/script.js`

**Kurzfassung:**  
Das Script `js/script.js` steuert die Interaktivität der Seite. Es verbindet sich mit den HTML-Elementen (Button und Zähler), reagiert auf Klicks und aktualisiert den sichtbaren Zählerwert.  
Der Code ist bewusst einfach gehalten, um Grundprinzipien von DOM-Manipulation und Event-Handling zu demonstrieren.

---

## 🧩 Vollständiger Code

```js
console.log("Hallo JavaScript");

const button = document.querySelector(".primary-button");
const counterValue = document.querySelector("#counter-value");

let count = 1;

function incrementCounter() {
  count++; // count = count + 1
  if (count > 9) {
    count = 1;
  }
  counterValue.textContent = String(count);
}

button.addEventListener("click", () => {
  incrementCounter();
});
```

---

## 🧠 Schritt-für-Schritt-Erklärung

### 1. Konsolenausgabe

```js
console.log("Hallo JavaScript");
```
- Gibt den Text *„Hallo JavaScript“* in der Browser-Konsole aus.  
- Wird oft verwendet, um zu prüfen, ob das Script korrekt eingebunden ist.

---

### 2. Elemente aus dem HTML-Dokument auswählen

```js
const button = document.querySelector(".primary-button");
const counterValue = document.querySelector("#counter-value");
```
- **`document.querySelector()`** sucht im HTML nach Elementen anhand von Selektoren:  
  - `.primary-button` → das `<button>`-Element mit dieser Klasse  
  - `#counter-value` → das `<span>`-Element mit dieser ID  
- Die gefundenen Elemente werden in Konstanten gespeichert, um sie später anzusprechen.  
- Diese Verbindung nennt man **DOM-Zugriff (Document Object Model)**.

---

### 3. Zählervariable anlegen

```js
let count = 1;
```
- Erstellt eine Variable `count` mit dem Startwert `1`.  
- Sie speichert den aktuellen Stand des Zählers.  
- Mit `let` kann der Wert später verändert werden.

---

### 4. Funktion zur Erhöhung des Zählers

```js
function incrementCounter() {
  count++; // count = count + 1
  if (count > 9) {
    count = 1;
  }
  counterValue.textContent = String(count);
}
```

#### Erklärung:
1. **`count++`** – erhöht den Zähler um 1.  
2. **`if (count > 9)`** – überprüft, ob der Wert grösser als 9 ist.  
   Falls ja, wird er wieder auf 1 gesetzt (Rücksprung).  
   → Der Zähler läuft also zyklisch von 1 bis 9.  
3. **`counterValue.textContent = String(count);`** – zeigt den neuen Wert im HTML an.  
   - `textContent` ersetzt den Textinhalt eines Elements.  
   - `String(count)` wandelt die Zahl in Text um.

---

### 5. Klick-Ereignis verarbeiten

```js
button.addEventListener("click", () => {
  incrementCounter();
});
```

#### Erklärung:
- `addEventListener("click", …)` reagiert auf Klicks.  
- Wenn der Button angeklickt wird, wird die Funktion `incrementCounter()` aufgerufen.  
- Dadurch erhöht sich der Zähler und der neue Wert wird sofort auf der Seite angezeigt.

---

## 🔄 Ablauf im Browser

1. Die Seite wird geladen.  
2. JavaScript wird ausgeführt.  
3. `document.querySelector()` verbindet Script und HTML-Elemente.  
4. Der Klick-Event-Listener wird registriert.  
5. Bei jedem Klick auf den Button:
   - Der Wert von `count` wird um 1 erhöht.  
   - Wenn `count > 9`, springt er zurück auf 1.  
   - Der sichtbare Wert in `<span id="counter-value">` wird aktualisiert.

---

## 📚 Lernaspekte

| Konzept | Bedeutung | Beispiel |
|----------|------------|----------|
| **DOM-Zugriff** | Verbindung zwischen HTML und JS | `document.querySelector()` |
| **Variablen** | Speicherung von Werten | `let count = 1;` |
| **Funktionen** | Wiederverwendbare Code-Blöcke | `function incrementCounter()` |
| **Event-Listener** | Reaktion auf Benutzeraktionen | `button.addEventListener("click", …)` |
| **Textänderung im DOM** | Dynamische Manipulation von HTML | `counterValue.textContent = …` |

---
