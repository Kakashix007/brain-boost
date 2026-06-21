import os
import re

nav_links = [
    ('index.html', 'Accueil'),
    ('neurofeedback.html', 'La Science'),
    ('programmes.html', 'Programmes'),
    ('vision.html', 'Vision'),
    ('centres.html', 'Nos Centres'),
    ('contact.html', 'Contact'),
    ('b2b.html', 'B2B'),
    ('franchise.html', 'Franchise')
]

def generate_nav(filename):
    lines = ['                <ul class="nav-links">']
    for link, name in nav_links:
        active = ' class="active"' if link == filename else ''
        lines.append(f'                    <li><a href="{link}"{active}>{name}</a></li>')
    lines.append('                </ul>')
    return '\n'.join(lines)

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    # regex to match <ul class="nav-links"> ... </ul>
    pattern = re.compile(r'<ul class="nav-links">.*?</ul>', re.DOTALL)
    
    new_nav = generate_nav(f)
    
    new_content, count = pattern.subn(new_nav, content)
    
    if count > 0:
        with open(f, 'w') as file:
            file.write(new_content)
        print(f"Updated {f}")

