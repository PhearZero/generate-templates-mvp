This is a MVP monorepo for what a generator-based init experience for algokit could look like. 

The goal is to create a base template with generators that can be ran at any time to add functionality.

# Usage

1. Clone this repo
2. Run `algokit generate tealscript` and/or `algokit generate react` to generate the tealscript and/or react files

# Sanity Test

Run all the generators and their associated npm scripts

```bash
algokit generate tealscript &&\
    algokit generate react && \
    cp ./sites/placeholder-site/.env.example ./sites/placeholder-site/.env && \
    npm install -w @companyname/placeholder-site @companyname/placeholder-kit --save && \
    npm run compile-kits && \
    npm run dev-sites
```
Note: Algokit is not aware of workspaces, which leads to excessive npm install runs and not aware of where `.env.templates` live. 
For simplicity, this workspace is manually bootstrapped and proposes introducing the standards of `contracts` and `sites` for automation
This would also allow generating multiple sites and contracts/packages from the same repo, which is a common use case in web2
