# Pilates Studio MissionYou - Website mit Buchungssystem

Eine moderne, professionelle Website für das Pilates Studio MissionYou mit integriertem Buchungssystem und Admin-Bereich.

## 🌟 Features

### Für Kundinnen:
- 🏠 **Ansprechende Homepage** mit Informationen über das Studio
- 📅 **Buchungskalender** zur einfachen Terminbuchung
- 📱 **Responsive Design** - funktioniert auf allen Geräten
- 🎨 **Modernes Design** in beruhigenden Pilates-Farben

### Für die Inhaberin:
- 👩‍💼 **Admin-Dashboard** zur Verwaltung aller Termine
- ➕ **Termine erstellen** - neue Kurse einfach hinzufügen
- 📊 **Übersicht** über alle Buchungen und Teilnehmer
- 🗑️ **Termine löschen** wenn nötig

## 🚀 Installation & Start

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm

### Schritt 1: Dependencies installieren
```bash
npm install
```

### Schritt 2: Development Server starten
```bash
npm run dev
```

Die Website ist dann unter **http://localhost:3000** erreichbar!

## 📂 Projektstruktur

```
tina_pilates/
├── app/
│   ├── page.tsx          # Homepage
│   ├── booking/
│   │   └── page.tsx      # Buchungsseite für Kundinnen
│   ├── admin/
│   │   └── page.tsx      # Admin-Bereich für Inhaberin
│   ├── layout.tsx        # Haupt-Layout
│   └── globals.css       # Globale Styles
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Verwendung

### Für Kundinnen - Termin buchen:
1. Auf der Homepage auf "Jetzt buchen" klicken
2. Gewünschtes Datum auswählen
3. Verfügbare Zeit auswählen
4. Name und E-Mail eingeben
5. Buchung bestätigen

### Für die Inhaberin - Termine verwalten:
1. Im Menü auf "Admin" klicken
2. Mit Passwort anmelden (Demo: **admin123**)
3. Dashboard zeigt alle Termine und Buchungen
4. **"+ Neuer Termin"** klicken zum Erstellen neuer Kurse
5. Termine können jederzeit gelöscht werden

## 🔐 Admin-Zugang

**Demo-Passwort:** `admin123`

⚠️ **Wichtig:** In der Produktion sollte dies durch ein echtes Authentifizierungssystem ersetzt werden!

## 🎨 Anpassungen

### Farben ändern
Die Farben können in `tailwind.config.ts` angepasst werden:

```typescript
colors: {
  pilates: {
    primary: '#E8B4B8',    // Hauptfarbe
    secondary: '#9B6B6E',  // Sekundärfarbe
    light: '#F5E6E8',      // Helle Variante
    dark: '#5D4E60',       // Dunkle Variante
  },
}
```

### Kontaktdaten ändern
Die Kontaktinformationen im Footer können in `app/page.tsx` angepasst werden.

### Kurse anpassen
Die verfügbaren Kurse können in beiden Seiten angepasst werden:
- `app/page.tsx` - Kursübersicht auf der Homepage
- `app/admin/page.tsx` - Kursauswahl im Admin-Bereich

## 🔄 Nächste Schritte für die Produktion

Aktuell ist dies eine Demo-Version. Für den produktiven Einsatz empfohlen:

1. **Datenbank integrieren** (z.B. PostgreSQL, MongoDB)
   - Termine persistent speichern
   - Buchungen in Datenbank ablegen

2. **Authentifizierung** implementieren
   - NextAuth.js für sichere Admin-Anmeldung
   - Passwort-Hashing

3. **E-Mail-Versand** einrichten
   - Buchungsbestätigungen automatisch versenden
   - Erinnerungen vor Terminen

4. **Zahlungssystem** integrieren (optional)
   - Stripe oder PayPal
   - Online-Bezahlung für Kurse

5. **Deployment** auf einem Server
   - Vercel (einfach und kostenlos)
   - Netlify
   - Eigener Server

## 📦 Verwendete Technologien

- **Next.js 15** - React Framework
- **TypeScript** - Typsicherheit
- **Tailwind CSS** - Styling
- **React Hooks** - State Management

## 📝 Lizenz

Dieses Projekt wurde für Pilates Studio MissionYou erstellt.

## 💡 Support

Bei Fragen oder Problemen:
- Dokumentation lesen
- Code-Kommentare beachten
- Entwickler kontaktieren

---

Viel Erfolg mit Ihrer Pilates Studio Website! 🧘‍♀️✨
