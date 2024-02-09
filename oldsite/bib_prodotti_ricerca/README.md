Il file *bibliography.bib* contiene la descrizione in formato bibtex
dei lavori di ricerca per i quali è stato fatto uso delle risorse
del Centro HPC.

Il file *bib_to_html_list.py* contiene invece uno script Python (>= 3.6)
per convertire il file *.bib* in una lista HTML, così da poter essere
facilmente integrata nel sito Web del Centro. Tale script fa uso del
programma **bibtex2html** (https://www.lri.fr/~filliatr/bibtex2html/).

Le dipendenze dello script sono le seguenti:
- **Python 3.6** o superiore.
- Il Programma **bibtex2html**, che deve essere installato sul sistema e raggiungibile tramite PATH.
- La libreria **Beautiful Soup 4** (https://www.crummy.com/software/BeautifulSoup/)

Lo script richiede come unico parametro il path del file bibtex da processare.
Il codice HTML generato viene salvato in un file avente lo stesso nome del
file di input (ma con estensione .html) e posizionato nella stessa cartella.   
>**Nota bene:**   
>*se esiste già un file con lo stesso nome, questo verrà sovrascritto!!!*

Ai fini del sito del Centro HPC, lo script andrà invocato con il seguente comando:
```
./bib_to_html_list.py bibliography.bib
```
Questo produrrà in output il file *bibliography.html*, il cui contenuto
dovrà essere poi copiato all'interno dell'apposita sezione del file
*sito/page/research-support/index.html*
