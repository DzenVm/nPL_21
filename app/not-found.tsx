import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: "center", paddingBlock: "120px" }}>
      <p className="eyebrow">Błąd 404</p>
      <h1>Tego pola nie ma na planszy</h1>
      <p style={{ color: "var(--text-muted)", maxWidth: 480, margin: "12px auto 28px" }}>
        Adres, pod którym się znalazłeś, nie odpowiada żadnej stronie serwisu. Sprawdź, czy
        link jest poprawny, albo wróć na stronę główną.
      </p>
      <Link href="/" className="btn btn-primary">Wróć na stronę główną</Link>
    </div>
  );
}
