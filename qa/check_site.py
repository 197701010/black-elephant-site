"""Static checks for Black Elephant's editorial and learning pages."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys

ROOT = Path(__file__).resolve().parent.parent
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.images = [], [], []
        self.h1 = 0
        self.feed(path.read_text(encoding="utf-8"))
    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if a.get("id"): self.ids.append(a["id"])
        if tag == "h1": self.h1 += 1
        if tag == "img" and "alt" not in a: self.images.append(a.get("src", "?"))
        for attr in ("href", "src"):
            if a.get(attr): self.links.append(a[attr])

targets = [ROOT / "index.html"]
for folder in ("academy", "library", "methode", "practice", "contact"):
    targets.extend(sorted((ROOT / folder).rglob("*.html")))
parsed = {p: Page(p) for p in targets}
errors = []
for p, data in parsed.items():
    rel = p.relative_to(ROOT)
    if data.h1 != 1: errors.append(f"{rel}: expected one h1, got {data.h1}")
    if len(data.ids) != len(set(data.ids)): errors.append(f"{rel}: duplicate IDs")
    for img in data.images: errors.append(f"{rel}: missing image alt: {img}")
    for link in data.links:
        u = urlsplit(link)
        if u.scheme or u.netloc or link == "#": continue
        if not u.path: dest = p
        elif u.path.startswith("/"): dest = ROOT / unquote(u.path).lstrip("/")
        else: dest = p.parent / unquote(u.path)
        dest = dest.resolve()
        if dest.is_dir(): dest = dest / "index.html"
        if not dest.is_file():
            errors.append(f"{rel}: missing {link}")
        elif u.fragment and dest.suffix == ".html":
            dest_data = parsed.get(dest) or Page(dest)
            if unquote(u.fragment) not in dest_data.ids:
                errors.append(f"{rel}: missing anchor {link}")

for slug in ("lailah","prometheus","inanna","gilgamesj","simurgh","douglass","cook-ding","shackleton","orpheus"):
    if not (ROOT / "academy" / "reis" / slug / "index.html").is_file():
        errors.append(f"Missing guided module: {slug}")
for name in ("aicheck", "hr-aicheck", "workshops", "bibliotheek"):
    if not (ROOT / name / "index.html").is_file():
        errors.append(f"Missing existing route: {name}")
for err in sorted(set(errors)): print(err)
print(f"Checked {len(targets)} editorial pages; {len(set(errors))} issues.")
sys.exit(bool(errors))
