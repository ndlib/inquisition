# inquisition
Git submodule for the 2021 redevelopment of inquisition.library.nd.edu using MARBLE resources


# Local Setup.
1. Assume an aws role that can access the keys at the path set in ./scripts/setup-development.sh
2. ./scripts/setup-development.sh inquisition
3. ./scripts/reset-local-files.sh inquisition
4. ./scripts/reset-local-search-index.sh inquisition

`yarn develop`

From then on until the graphql keys expire you can just call
yarn develop

## If the graphql keys expire.
1. Call ./scripts/setup-development.sh inquisition

Note:
This will reset all the keys to the ones in .env.development-example
