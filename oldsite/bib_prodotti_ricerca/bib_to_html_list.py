#! /usr/bin/env python3

#####
# Dipendenze:
# - Python >= 3.6
# - Beautiful Soup 4 (https://www.crummy.com/software/BeautifulSoup/)
# - bibtex2html (https://www.lri.fr/~filliatr/bibtex2html/)
#   installato sul sistema e presente in PATH
#####

from typing import List, Any
import argparse
from pathlib import Path
import sys
import subprocess
from bs4 import BeautifulSoup
from bs4.element import Tag

def stderr_print(*args : Any, **kwargs : Any):
    print(*args, file=sys.stderr, **kwargs)

parser = argparse.ArgumentParser(
    description="Converts a bibtex file containing one or more bibliographic " \
                "records into a HTML unordered list. The output HTML file " \
                "is saved in the same folder of the input file and with the " \
                "same base name. NOTE: If a file with such a name already " \
                "exists, it will be overwritten!"
)
parser.add_argument('bibtex_file', help="Path to the bibtex file to be processed.")
args = parser.parse_args()

input_bib_path = Path(args.bibtex_file)
if not input_bib_path.is_file():
    stderr_print(f"ERROR: '{input_bib_path}' is not a file!")
    sys.exit(1)

html_path = input_bib_path.with_suffix('.html')

# --no-keys : do not print the cite keys.
# --no-abstract : do not print the abstracts (if any).
# --no-keywords : do not print the keywords (if any).
# --sort-by-date : sort by date.
# --reverse-sort : reverse the sort.
# --nobibsource do not produce the _bib.html file. In that case, no “BibTeX entry” link are inserted in the HTML file.
# --nodoc : do not produce a full HTML document but only its body (useful to merge the HTML bibliography in a bigger HTML document).
# --dl : use HTML DL lists instead of HTML tables to format entries.
# --unicode :  use Unicode entities for the following macros [...]
# --html-entities :  use HTML entities for the following macros [...]
bib2html_cmd = [
    'bibtex2html',
    '--no-keys',
    '--no-abstract',
    '--no-keywords',
    '--sort-by-date',
    '--reverse-sort',
    '--nobibsource',
    '--nodoc',
    '--dl',
    '--unicode',
    '--html-entities',
    str(input_bib_path)
]
bib2html_res = subprocess.run(
    bib2html_cmd,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT
)
bib2html_prints = bib2html_res.stdout.decode("utf-8")
if bib2html_res.returncode:
    stderr_print(bib2html_prints)
    sys.exit(bib2html_res.returncode)
else:
    print(bib2html_prints)

with open(html_path) as raw_html_file:
    raw_html = BeautifulSoup(raw_html_file, 'html.parser')

bib_list : List[Tag] = raw_html.find_all('dd') # type: ignore (To make Pylance happy)
for item in bib_list:
    item.name = 'li'

output_html = BeautifulSoup("<ul></ul>", 'html.parser')
output_html.ul.extend(bib_list) # type: ignore (To make Pylance happy)

with open(html_path, 'w') as output_html_file:
    output_html_file.write(output_html.prettify(formatter="html5"))
