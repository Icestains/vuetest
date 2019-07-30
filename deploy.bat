npm run build
cd dist
git add -A
git commit -m 'deploy'
git push -f git@github.com:Icestains/vuetest.git master:gh-pages
cd ..
