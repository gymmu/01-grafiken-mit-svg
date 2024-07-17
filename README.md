# Erste eigene Webseite

In diesem Projekt bauen wir unsere erste eigene Webseite mit `HTML` und `CSS`.
Die Webseite wird dann über Github-Pages automatisch veröffentlicht, und kann
mit Freunden und Familie geteilt werden. Damit Github-Pages auch funktioniert,
muss es zuerst aktiviert werden. Gehen Sie dafür auf Ihr Repository und dort
finden Sie unter `Settings > Pages` den Abschnitt `Build and Deployments` wo sie
die `Source` auf `Github Actions` umstellen müssen.

![](screenshot-pages.png)

Jedes mal wenn Sie eine neue Version auf dem `main`-Branch hochladen, wird die
Webseite neu gebaut. Das kann jeweils ein paar Minuten dauern, ist dann aber
auch für andere über das Internet zugänglich. Um die eigene Webseite direkt zu
sehen, gibt es eine schnellere Lösung, mehr dazu im Abschnitt
[Entwicklungsumgebung aktivieren](#entwicklungsumgebung-aktivieren).

Damit auf der Webseite alles richtig dargestellt werden kann, muss die Datei
`vite.config.js` leicht angepasst werden. Der Wert für `base` muss so angepasst
werden, das der Name des Repositories darin steht.

## Entwicklungsumgebung aktivieren

Damit wir eine Webseite korrekt anzeigen lassen können, und alle Bilder laden
können die dazu gehören, brauchen wir einen Webserver. Diesen können wir im
Container ganz einfach starten. Und zwar können wir ein Terminal öffnen, wenn
dies nicht bereits geöffnet wurde, und dort müssen wir nur noch den folgenden
Befehl eingeben.

```bash
npm run start
```

Das startet und einen Webserver, über den wir unsere Seite dann anschauen
können. Wir können die Seite automatisch im Editor anzeigen lassen, oder Sie auf
einem separaten Browser öffnen. Dafür einfach die folgende URL öffnen:
[http://localhost:5174](http://localhost:5174). Nun sollten alle Änderungen die
wir im Code machen und **speichern** (`CRTL + S`) direkt auf der Webseite
ersichtlich sein. Manchmal muss die Webseite auch neu geladen werden, dazu kann
man bei den meisten Browsern `F5` drücken.

## SVG

Die Abkürzung SVG stheht für **_Scalable Vector Graphics_**.
Die meisten Bilder und Grafiken, die Sie verwenden und online finden, basieren auf Pixeln. Der Nachteil dieser Rastergrafiken ist, dass sie sich nicht gut skalieren lassen - das heisst, wenn Sie ausreichend heranzoomen, werden Sie irgendwann immer die einzelnen Pixel sehen.

Vektorgrafiken basieren auf einer völlig anderen Idee: Anstatt dem Computer zu sagen, welche Pixel ein- und ausgeschaltet werden sollen, geben wir dem Computer vor, welche Form wir möchten, und er füllt die Pixel bei Bedarf aus.
Das bedeutet, dass der Computer immer weiss, wie das Bild aussehen sollte, unabhängig davon, wie stark wir heran- oder herauszoomen, und es mit der entsprechenden Auflösung zeichnen kann.
Ein weiterer Vorteil von SVG ist, dass SVG-Dateien oft kleiner als vergleichbare Rastergrafiken sind, insbesondere bei komplexen und detaillierten Bildern.
Zudem unterstützt SVG interaktive Elemente und Animationen, die direkt in die Grafik eingebettet werden können.

### Tags und Attribute

**_Tags_** sind die grundlegenden Bausteine in SVG-Grafiken (wie auch in HTML) , die die Struktur und den Inhalt einer Datei definieren. Tags werden durch öffnende (< >) und schliessende(</ >) Winkelklammern markiert und haben einem Namen, der den Typ des Elements spezifiziert.

Beispiel:

    <svg width="100" height="100">
        <!-- Weitere SVG-Elemente -->
    </svg>

`<svg>` ist das Wurzelelement, das die gesamte SVG-Grafik umschliesst.

**_Attribute_** sind zusätzliche Informationen, die innerhalb eines Tags spezifiziert werden, um die Eigenschaften des Elements zu definieren. Jedes Attribut besteht aus einem Namen und einem Wert, die durch ein Gleichheitszeichen (=) verbunden und in Anführungszeichen gesetzt sind.

Beispiel:

    <svg width="100" height="100">

`width="100"` und `height="100"` sind zwei Attribute mit zugehörigem Wert, welche die Grösse der SVG-Grafik beeinflussen.

### Koordinatensystem (viewBox)

Wenn Sie mit SVG arbeiten, so orientieren Sie sich stets an einem kartesischen Koordinatensystem.
Das viewBox-Attribut ist ein mächtiges Werkzeug in SVG, das es ermöglicht, eine flexible und skalierbare Sichtfensteransicht für die Grafik zu definieren.
Es legt den Bereich der SVG-Zeichenfläche fest, der sichtbar ist, und wie dieser Bereich an die Grösse des < svg >-Elements angepasst wird. Dadurch wird eine Koordinatensystemtransformation durchgeführt, sodass der spezifizierte Bereich auf die tatsächliche Anzeigefläche des SVG skaliert wird.

Das viewBox-Attribut wird im < svg >-Element definiert und besteht aus vier Werten:

    viewBox="min-x min-y width height"

`min-x` wird verwendet, um die horizontale Achse festzulegen. Man kann den kleinsten x-Wert der horizontalen Achse festlegen.

`min-y` wird verwendet, um die vertikale Achse festzulegen. Man kann den kleinsten y-Wert der vertikalen Achse festlegen.

`width` wird verwendet, um die Gesamtbreite der viewBox festzulegen.

`height` wird verwendet, um die Gesamthöhe der viewBox festzulegen.

### Formen (Kreis und Rechteck)

Das `<circle>`-Element zeichnet einen **_Kreis_** auf dem Bildschirm. Es verwendet drei grundlegende Attribute, um Form und Grösse des Elements zu bestimmen:

- `r`: Der Radius des Kreises.
- `cx`: Die x-Position des Zentrums des Kreises.
- `cy`: Die y-Position des Zentrums des Kreises.

Zusätzlich dazu gibt es noch eine Reihe von anderen Attributen, die festgelegt werden können. Diese Attribute können für jede SVG-Form festgelegt werden.

- `fill`: Die Füllfarbe.
- `stroke`: Die Strichfarbe.
- `stroke-width`: Die Strichbreite.
- `opacity`: Die Deckkraft der Form.

Beispiel:

    <svg viewBox="-250 -250 500 500">
        <circle cx="0" cy="0" r="100" stroke=" green " stroke-width="10" fill =" yellow " opacity=" 0.5 " />
    </svg>

Das `<rect>`-Element zeichnet ein **_Rechteck_** auf dem Bildschirm. Es gibt 6 grundlegende Attribute, die die Position und Form der Rechtecke auf dem Bildschirm steuern.

- `x`: Die x-Position der oberen linken Ecke.
- `y`: Die y-Position der oberen linken Ecke.
- `width`: Die Breite des Rechtecks. height Die Höhe des Rechtecks.
- `rx`: Der x-Radius für abgerundete Ecken (wenn nicht festgelegt, wird er auf 0 gesetzt).
- `ry`: Der y-Radius für abgerundete Ecken (wenn nicht festgelegt, wird er auf 0 gesetzt).

Beispiel:

    <svg viewBox="-250 -250 500 500">
        <rect x="-100" y="50" width ="100" height ="50" fill ="blue" stroke="red" opacity ="0.5" stroke-width="5px" />
    </svg>

### Elemente definieren und verwenden (defs, use)

Das `<defs>`-Tag (definitions) wird in SVG verwendet, um Elemente zu erstellen und zu speichern. Danach können diese wieder verwendet werden.
Elemente innerhalb eines <defs>-Tags werden nicht direkt angezeigt, sondern müssen von anderen Elementen im SVG-Dokument mithilfe des `<use>`-Tags und einer `id` aufgerufen werden.

Beispiel:

    <svg viewBox="-250 -250 500 500">
        <defs>
            <circle id="smallCircle" cx="0" cy="0" r="50" />
            <circle id="bigCircle" cx="0" cy="0" r="200" />
        </defs>
        <use href="#bigCircle" fill="blue" />
        <use href="#smallCircle" fill="red" />
    </svg>

Bei der Verwendung des `<use>`-Tags können noch zusätzliche Attribute wie Füllfarbe, Positionierung oder Grösse ergäntz werden.

### Ausschneiden (Clip)

Das `<clippath>`-Element definiert einen Pfad.
Ein Element, das innerhalb eines Clipping-Pfads liegt, wird angezeigt, während alles ausserhalb des Pfads ausgeblendet wird.

<clippath>:

### Weitere Formen (Ellipse, Polygon)

### Gruppen und neue Elemente (< use >?)

### Pfade

### Animationen

## Aufgaben

Wenn alles aufgesetzt ist, können Sie die folgenden Aufgaben bearbeiten, um
einen guten Einstieg ins Projekt zu bekommen.

### Aufgabe 01: Kreis zentrieren

Zentrieren Sie den Kreis in dem Bild.

```

```
