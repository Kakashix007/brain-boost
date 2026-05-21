# Data Structure & Raw Files

Inventory and structure of the technical data files in the root.

## Key Files
- `neuromaroc.com-20260414T213535.json`: Website metadata/audit data.
- `Trace-20260414T213936.json.gz`: Technical trace or analytics log.
- `backlinks.csv`: SEO backlink profile data.
- `top_keywords.csv`: Keyword ranking and volume data.
- `neuromaroc.html`: Local snapshot of the website.

## Data Schema (top_keywords.csv)
- `Keyword`: The search term.
- `Position`: Current Google rank.
- `Search Volume`: Monthly searches.
- `URL`: The ranking page.

## Data Schema (backlinks.csv)
- `domain_from`: Source domain.
- `url_from`: Source URL.
- `url_to`: Target URL (neuromaroc.com).
- `dofollow`: Boolean SEO attribute.
