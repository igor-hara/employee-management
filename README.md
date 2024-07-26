This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Technologies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React-hook-form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Prettier](https://prettier.io/)
- [Headless UI](https://headlessui.com/)
- [Google Font](https://fonts.google.com/)

### Zadatak:

Izrada stranice za prikaz i upravljanje zaposlenicima s funkcionalnostima unosa,
prikaza, filtriranja i pretraživanja
Opis zadatka:
Vaš zadatak je izraditi stranicu koja omogućava prikaz popisa zaposlenika te unos novih podataka
o zaposlenicima.
Detalji zadatka:

1. Prikaz podataka s API-ja (naslovnica):
   o Stranica će dohvaćati popis zaposlenika s API-ja (get metoda):
   https://api.test.ulaznice.hr/paganini/api/job-interview/employees
   o Prikaz podataka je proizvoljan - može biti u formatu tablice, kartica ili drugom
   obliku.

2. Unos podataka (druga stranica):
   o Kreirati formu za unos podataka o zaposlenicima (ime, prezime, datum rođenja,
   pozicija).
   o Validacija unosa: Osigurati da korisnik unese ispravne podatke (input polja ne
   smiju ostati prazna).
   o Forma se ne treba nigdje submitati; podaci iz forme trebaju se ispisati u konzoli
   prilikom klika na gumb "Spremi".

3. Filtriranje i pretraživanje:
   o Implementirati funkcionalnost filtriranja zaposlenika po poziciji.
   o Implementirati funkcionalnost pretraživanja zaposlenika po imenu ili prezimenu.
4. Responzivnost:
   o Osigurati da stranica pravilno prikazuje i funkcionira na različitim veličinama
   zaslona.
5. Navigacija:
   o Dodati navigaciju koja će korisnicima omogućiti prelazak između različitih
   dijelova stranice (prikaz zaposlenika i unos podataka o zaposleniku)
   o Prva stranica (naslovnica) će prikazivati popis zaposlenika.
   o Druga stranica će biti forma za unos novih zaposlenika.

Bonus bodovi:

1. Sortiranje zaposlenika:
   o Omogućiti korisniku sortiranje popisa zaposlenika prema određenom kriteriju,
   kao što su ime, prezime ili pozicija.

2. Paginacija:
   o Implementirati paginaciju kako biste ograničili prikaz na manje stranica.

Napomena:
• Možete odabrati bilo koji frontend framework/library po vlastitom izboru (npr. Angular,
React, Vue) ali preporučujemo Angular s obzirom da njega preferiramo u našem
svakodnevnom radu.
• Sam dizajn stranice nije previše bitan no ulazit će u bonus bodove kako bi mogli vidjeti i
vaše znanje HTML-a i CSS-a.
• Bonus bodovi nisu obavezni, ali će dodatno ocijeniti vaše vještine i trud u izradi zadatka.
