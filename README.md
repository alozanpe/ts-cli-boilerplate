# ts-cli-boilerplate

# Binary build

Run **npm run package-win** to generate windows binary in **./bin/ts-cli-boilerplate-win**

Run **npm run package-mac** to generate macos binary in **./bin/ts-cli-boilerplate-mac**

Run **npm run package-lnx** to generate linux binary in **./bin/ts-cli-boilerplate-lnx**

## Build and run

Run **npm run start** to build and run the code.

## Samples:

### Option 1

npm run start b64Encode "hola caracola"

### Option 2

npm run build && node ./build/index.js split --separator=/ a/b/c

### Option 3

npm run package-mac && ./bin/ts-cli-boilerplate-mac b64Decode aG9sYQ==

## Commander docs

https://www.npmjs.com/package/commander

## Chalk docs

https://github.com/chalk/chalk
