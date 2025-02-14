# GIM WEB

## Getting Started

### Guidebook
[Guidebook](https://docs.google.com/document/d/13Pp59xtZoB1pyPUSKO5j08tAmfe20z5unTymlN95-v0/edit?tab=t.0#heading=h.u0e88amflexc)

### Configure environtment variable
Rename `.env.example` to `.env` and fill the required variables.
- `NEXT_PUBLIC_STORYBLOK_API_TOKEN` is needed for Storyblok API.
- The first `DATABASE_URL` is for local docker database. Second one is for production. Switch to the third one when you want to migrate the production database, then switch back to the second one.

### Install dependencies
`npm i -g storyblok` and `storyblok login` is required to pull components and generate types from Storyblok. You don't have to run this if you never want to pull components or generate Storyblok types.
```bash
npm install
npm i -g storyblok
storyblok login
```


### Run the development server
Make sure to also run the database if you're going to access page that requires database.
```bash
npm run dev
```

### Run the Database
```bash 
docker-compose up
```


### Pull Storyblok Components
```bash
storyblok pull-components --space SPACE_ID
```

### Regenerate Storyblok Types
```bash
storyblok generate-typescript-typedefs --sourceFilePaths ./components.SPACE_ID.json --destinationFilePath ./component-types-sb.d.ts
```

## Development

### Create OpenAPI Docs for pages that returns html
Create a new file called `route-doc.ts` in the same folder as `page.tsx`. This filename is decided becase Next.js will be angry if we use `route.ts` as it is reserved. Then simply export the GET function that is returned from defineRoute. 

Sadly the fact that Next.js is created by separating page and route when both is actually supposed to be the same thing, makes creating OpenAPI harder. It creates 2 source of truth which is the parameters in the default exported function of `page.tsx` and the paramters in the exported GET function in `route-doc.ts`.


### Migrate database
```bash
npx prisma migrate dev --name COMMIT_MESSAGE --schema=src/lib/prisma/schema.prisma
```

### Apply Migration to database (After deleting the database for example)
```bash
npx prisma migrate dev --schema=src/lib/prisma/schema.prisma
```

### Login to Database inside Docker Container
You can use exec but can also use the Docker Desktop.
With dekstop, go to `images`, see `postgress` and click `In use`
Toggle `gim-web`, click `gim-db`, click `exec` tab.
run
```bash
psql postgresql://user:supersecretpassword@localhost:5432/gim
```


### Run test
[Documentation](https://playwright.dev/docs/running-tests)

Make sure that database is running before running test that requires database.

Without UI
```bash
npx playwright test
```

With Browser, can see details in the end (SATISFYING)
```bash
npx playwright test --headed
```

With UI, can see more details anytime
```bash
npx playwright test --ui
```

Run specific test
```bash
npx playwright test src/tests/user.spec.ts
```
It's very recommended to use your IDE to run the test.
such as VS Code extension like this
[Playwright For VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)