
# 📡 Aufbau des HTTP-Protokolls

Das **HTTP-Protokoll** (HyperText Transfer Protocol) ist das Rückgrat der Datenübertragung im Web. Es funktioniert nach dem **Request-Response-Prinzip**:
- Der **Client** (z. B. dein Browser) sendet eine **Anfrage (Request)**.
- Der **Server** antwortet mit einer **Antwort (Response)**.

Jede HTTP-Nachricht besteht aus zwei Hauptteilen:

---

## 1. 🔒 HTTP-Header – Metadaten

Der Header enthält steuernde Informationen über die Nachricht:

### Beispiel Request-Header:
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
Accept-Language: de-CH
```

### Beispiel Response-Header:
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 3495
Cache-Control: no-cache
Date: Thu, 30 Oct 2025 16:15:00 GMT
```

### Typische Header-Felder:

| Feld            | Bedeutung                                      |
|-----------------|------------------------------------------------|
| Host            | Domainname des Servers                         |
| User-Agent      | Infos über den Browser des Nutzers             |
| Accept          | Welche Formate der Client akzeptiert           |
| Content-Type    | Art der übertragenen Daten (z. B. text/html)   |
| Content-Length  | Länge des Inhalts im Body                      |
| Authorization   | Zugangsdaten für geschützte Ressourcen         |
| Set-Cookie      | Informationen zum Speichern von Cookies        |
| Cache-Control   | Steuert das Zwischenspeichern                  |
| Location        | Bei Weiterleitungen: neue Zieladresse          |

---

## 2. 📦 HTTP-Body – Nutzdaten (optional)

Der Body enthält die eigentlichen Inhalte:

### Beispiel Request-Body (POST):
```
name=Maria&email=maria@example.com&nachricht=Hallo
```

### Beispiel Response-Body (HTML):
```html
<!DOCTYPE html>
<html lang="de">
<head><title>Willkommen</title></head>
<body><h1>Museum für digitale Kleinkunst</h1></body>
</html>
```

---

## 🔄 Zusammenfassung

| Teil     | Inhalt                                   | Immer vorhanden? |
|----------|------------------------------------------|------------------|
| Header   | Metadaten zur Kommunikation              | ✅ Ja             |
| Body     | Daten wie HTML, JSON, Formulare          | ❌ Nur bei Bedarf |

**💡 Merksatz:**  
> **Header** sagt "Was ich bin und wie ich behandelt werde",  
> **Body** ist der eigentliche Inhalt.
