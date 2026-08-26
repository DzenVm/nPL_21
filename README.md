# Strona projektu — sieciowa gra logiczna (Polska, PL)

Serwis informacyjny przygotowany pod kampanię Google Ads, zbudowany na Next.js
(App Router, React Server Components). Opisuje przeglądarkową grę logiczną —
prowadzenie trzech równoległych sieci (tramwaj, woda, prąd) po jednej planszy
heksagonalnej — bez elementów losowych, mikropłatności ani jakichkolwiek
mechanik hazardowych.

## Decyzje techniczne

- **Next.js 16 (App Router) + React 19 + TypeScript**, renderowanie po
  stronie serwera; strony bez danych dynamicznych są statycznie
  prerenderowane przy buildzie (standardowe zachowanie App Routera).
- **Bez frameworka CSS.** Stylowanie oparte o czysty CSS z natywnym
  zagnieżdżaniem (`@layer`, zagnieżdżone selektory) w `app/globals.css` oraz
  lokalne bloki `<style>` przy poszczególnych komponentach — bez Tailwinda,
  bez CSS-in-JS wymagającego kompilatora.
- **Ilustracje generowane w locie, bez plików graficznych.** `lib/hexgrid.ts`
  to własny, niewielki generator siatki heksagonalnej; komponenty w
  `components/art/*` renderują na jego podstawie SVG po stronie serwera
  (6 różnych plansz/ilustracji użytych w treści strony głównej). Nic nie jest
  wgrywane jako statyczny obrazek — layout liczy się przy każdym renderze.
- **Favicon i obraz OG generowane przez `next/og` (`ImageResponse`)** —
  `app/icon.tsx` i `app/opengraph-image.tsx` — zamiast statycznych plików PNG.
- **Treści jako typowane moduły TS** (`lib/content.ts`) zamiast CMS-a — dla
  strony tej wielkości to prostsze i szybsze niż utrzymywanie zewnętrznego
  źródła danych.
- **Zgoda na cookies** zaimplementowana jako mały komponent kliencki bez
  zewnętrznej biblioteki (`components/CookieConsent.tsx`), zapis wyłącznie
  w `localStorage`.
- Wbudowane pliki metadanych App Routera: `robots.ts`, `sitemap.ts`,
  `manifest.ts` — bez ręcznie utrzymywanych plików statycznych.

## Struktura treści

- `/` — strona główna, najbardziej rozbudowana treściowo.
- `/o-rozgrywce` — pogłębiony opis mechaniki.
- `/najczestsze-pytania`, `/aktualizacje` — pytania i dziennik zmian.
- `/kontakt`, `/regulamin`, `/polityka-prywatnosci`, `/polityka-cookies`,
  `/dostepnosc` — dokumenty wymagane przy prowadzeniu kampanii reklamowej
  i zgodności z RODO.

## Domena

Docelowa domena nie została jeszcze przydzielona. Tymczasowy placeholder
(`twoja-domena.pl`) występuje w `lib/content.ts` (`site.baseUrl`) oraz w
adresie e-mail na stronie kontaktowej — to jedyne miejsca do podmiany po
wyborze domeny. Po zmianie `site.baseUrl` automatycznie zaktualizują się
`sitemap.xml`, `robots.txt`, dane Open Graph i kanoniczne adresy URL.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja domyślnie startuje na `http://localhost:3000`.

```bash
npm run build   # build produkcyjny
npm run start   # uruchomienie builda produkcyjnego
npm run lint    # ESLint (flat config, next/core-web-vitals + next/typescript)
```

## Deploy na Vercel

1. Zaimportować repozytorium w Vercel (New Project → wskazać ten
   repozytorium/branch).
2. Framework Preset: **Next.js** (wykrywany automatycznie).
3. Zmiennych środowiskowych nie ma — projekt nie łączy się z żadnym
   zewnętrznym API.
4. Po pierwszym deployu podpiąć docelową domenę w ustawieniach projektu
   (Domains) i zaktualizować `site.baseUrl` w `lib/content.ts` na rzeczywisty
   adres — bez tego `sitemap.xml`, `robots.txt` i metadane Open Graph będą
   nadal wskazywać na placeholder.
5. `vercel.json` ustawia region `fra1` (najbliższy Polsce spośród
   dostępnych regionów Vercela) oraz `cleanUrls`.

## Zgodność z polityką Google Ads

- Brak jakichkolwiek elementów hazardowych, zakładów czy gry na pieniądze —
  opisana gra jest wyłącznie logiczną łamigłówką umiejętności.
- Kompletne, samodzielnie napisane dokumenty: regulamin, polityka
  prywatności, polityka cookies, deklaracja dostępności, strona kontaktowa
  z realnym sposobem kontaktu.
- Baner zgody na cookies zgodny z wymogami dla ruchu z UE/Polski.
- Strona nie zawiera treści zastępczych ani sekcji „lorem ipsum” — jedyny
  świadomy placeholder to docelowa domena, opisana wyżej.
