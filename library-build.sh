cd ./module-lib
npm run build
cd ./dist/vendor-lib
npm pack
cd ../../../
cp ./module-lib/dist/vendor-lib/vendor-lib*.tgz ./module-test/src/app/vendor-lib/