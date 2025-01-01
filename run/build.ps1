#!/usr/bin/env sh
echo --% >/dev/null;: ' | out-null
<#'

#
# for not-Windows operating systems
#
rm -rf ./docs
deno run -A 'https://esm.sh/gh/jeff-hykin/bite@e070c4af1e/vite/bin/vite.js' build ./main --outDir ../docs
deno run -A https://deno.land/x/html_bundle/main/html-bundle.js --inplace ./docs/index.html 

exit #>

#
# for windows (powershell)
#
rm -rf ./docs
deno run -A 'https://esm.sh/gh/jeff-hykin/bite@e070c4af1e/vite/bin/vite.js' build ./main --outDir ../docs
deno run -A https://deno.land/x/html_bundle/main/html-bundle.js --inplace ./docs/index.html 