// Treść serwisu — dane po polsku, wydzielone z warstwy prezentacji.

export const site = {
  baseUrl: "https://aartyuni.pro",
  descriptor: "Sieciowa gra logiczna w przeglądarce",
  tagline:
    "Rozprowadzasz tramwaj, wodę i prąd po jednej planszy, zanim zabraknie miejsca na kolejny odcinek.",
};

export const layers = [
  {
    id: "tramwaj",
    label: "Tramwaj",
    color: "#ff5d73",
    short: "Trasa musi dobiec do przystanku, zanim licznik zaufania spadnie do zera.",
  },
  {
    id: "woda",
    label: "Woda",
    color: "#3fc9d0",
    short: "Rury nie mogą się zapętlić same na siebie — gra to sprawdza po każdym ruchu.",
  },
  {
    id: "prad",
    label: "Prąd",
    color: "#f5b23b",
    short: "Linia energetyczna omija rzeki, chyba że wcześniej odblokujesz most.",
  },
] as const;

export const modes = [
  {
    id: "kampania",
    title: "Kampania",
    length: "58 plansz, 6 er rozwoju osiedla",
    body:
      "Zaczynasz od czterech domów i jednej studni. Co kilka plansz dochodzi nowy element — najpierw skrzyżowania, potem mosty, później dzielnice, w których trzeba prowadzić dwie warstwy jednocześnie przez ten sam wąski korytarz. Każda era ma swój styl plansz i nie da się jej przejść tempem z poprzedniej.",
  },
  {
    id: "dzienna",
    title: "Plansza dnia",
    length: "Nowy układ co dobę, reset o północy czasu środkowoeuropejskiego",
    body:
      "Wszyscy grający danego dnia dostają identyczny układ budynków i tę samą kolejkę odcinków. Nie ma tu rankingu punktowego opartego na czasie — liczy się liczba użytych segmentów, więc można wrócić do rozegranej już planszy i po prostu spróbować rozwiązać ją oszczędniej.",
  },
  {
    id: "sasiedztwa",
    title: "Sąsiedztwa",
    length: "Tryb asynchroniczny, bez wspólnej sesji w czasie rzeczywistym",
    body:
      "Twoja plansza sąsiaduje krawędzią z planszą kogoś innego. Widzisz, gdzie tamta osoba wyprowadziła swoje trzy warstwy na granicę, i musisz domknąć własną sieć dokładnie w tych punktach. Odpowiedź przychodzi z opóźnieniem — czasem po kilku godzinach — bo to nie jest gra na refleks.",
  },
] as const;

export const eras = [
  { n: 1, name: "Osada", detail: "Cztery budynki, jedna warstwa, brak przeszkód terenowych." },
  { n: 2, name: "Skrzyżowania", detail: "Dochodzi drugi poziom siatki — trasy mogą się krzyżować, ale nie łączyć." },
  { n: 3, name: "Rzeka", detail: "Pierwsze przeszkody terenowe i mosty jako osobny, ograniczony zasób." },
  { n: 4, name: "Dzielnice", detail: "Plansza dzieli się na sektory z osobnymi licznikami zaufania." },
  { n: 5, name: "Trzy warstwy naraz", detail: "Tramwaj, woda i prąd muszą iść równolegle przez te same wąskie przejścia." },
  { n: 6, name: "Miasto", detail: "Pełna gęstość zabudowy, kolejka odcinków skrócona do dwóch podglądów zamiast trzech." },
] as const;

export const badges = [
  { name: "Bez cofania", detail: "Ukończ planszę, nie usuwając ani jednego postawionego odcinka." },
  { name: "Oszczędna trasa", detail: "Zejdź poniżej progu segmentów wyznaczonego dla danej planszy." },
  { name: "Trzy naraz", detail: "Domknij wszystkie warstwy w tej samej turze." },
  { name: "Cichy most", detail: "Ukończ erę trzecią bez ani jednej przeterminowanej dostawy." },
] as const;

export const faq = [
  {
    q: "Czy gra jest darmowa?",
    a: "Tak, cała kampania i oba tryby dodatkowe są dostępne bez opłat. Na starcie nie ma mikropłatności ani żadnych elementów losowych kupowanych za realne pieniądze — plansze rozwiązuje się wyłącznie umiejętnością układania tras.",
  },
  {
    q: "Czy trzeba zakładać konto, żeby zagrać?",
    a: "Kampanię i planszę dnia można rozegrać bez konta — postęp zapisuje się lokalnie w przeglądarce. Konto jest potrzebne wyłącznie do trybu Sąsiedztwa, bo tam odpowiedź przychodzi od konkretnej innej osoby.",
  },
  {
    q: "Co się dzieje, gdy licznik zaufania spadnie do zera?",
    a: "Budynek przestaje liczyć się do wyniku planszy, ale gra toczy się dalej — nie ma przegranej w sensie zamknięcia rozgrywki. To świadoma decyzja projektowa: chcieliśmy, żeby błąd kosztował, ale nie zatrzymywał całej sesji.",
  },
  {
    q: "Czy działa na telefonie?",
    a: "Układ przegląda się poprawnie na tablecie i telefonie w poziomie, ale sterowanie dotykowe do precyzyjnego stawiania odcinków wciąż dopracowujemy — sekcja aktualizacji zawiera aktualny stan tych prac.",
  },
  {
    q: "Czy plansza dnia jest taka sama dla wszystkich?",
    a: "Tak, układ budynków i kolejność odcinków w kolejce są identyczne dla każdej osoby danego dnia. Różni się wyłącznie sposób rozwiązania — dlatego da się porównać liczbę użytych segmentów, a nie czas.",
  },
] as const;

export const changelog = [
  {
    version: "0.9.4",
    date: "sierpień 2026",
    notes: [
      "Poprawiona kolizja mostów w erze trzeciej — most nie znikał już po cofnięciu ruchu.",
      "Dodano etykiety współrzędnych siatki dla czytników ekranu.",
    ],
  },
  {
    version: "0.9.3",
    date: "czerwiec 2026",
    notes: [
      "Nowy zestaw wzorów warstw dla trybu bez rozróżniania kolorami.",
      "Skrócono czas ładowania plansz kampanii o około jedną trzecią.",
    ],
  },
  {
    version: "0.9.2",
    date: "kwiecień 2026",
    notes: [
      "Start trybu Sąsiedztwa w wersji zamkniętej — na razie ograniczona pula plansz brzegowych.",
      "Poprawki czytelności licznika zaufania na mniejszych ekranach.",
    ],
  },
] as const;

export const roadmap = [
  { status: "w toku", label: "Sterowanie dotykowe dopasowane do siatki heksagonalnej" },
  { status: "w toku", label: "Rozszerzenie trybu Sąsiedztwa na większą liczbę osób jednocześnie" },
  { status: "planowane", label: "Siódma era: plansze z dwoma poziomami wysokości terenu" },
  { status: "planowane", label: "Eksport rozwiązanej planszy jako obrazu do zapisania sobie" },
] as const;

export const glossary = [
  { term: "Odcinek", def: "Pojedynczy element trasy z kolejki — prosty, zakręt, rozgałęzienie albo skrzyżowanie." },
  { term: "Licznik zaufania", def: "Pasek przy budynku pokazujący, ile jeszcze tur zostało na domknięcie dostawy." },
  { term: "Plansza tygodnia", def: "Układ z tym samym ziarnem losowym dla wszystkich grających w danym tygodniu." },
  { term: "Warstwa", def: "Jedna z trzech sieci — tramwajowa, wodna albo energetyczna — prowadzonych równolegle." },
] as const;

export const requirements = [
  "Aktualna wersja przeglądarki z obsługą WebGL2 (Chrome, Firefox, Safari, Edge)",
  "Ekran o szerokości od 360 pikseli wzwyż — układ dopasowuje się do telefonu, tabletu i monitora",
  "Stałe łącze internetowe wyłącznie do pobrania planszy — sama rozgrywka nie wymaga połączenia",
  "Włączony JavaScript oraz zgoda na zapis postępu w lokalnej pamięci przeglądarki",
] as const;
