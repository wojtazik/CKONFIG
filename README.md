Recruitment task app for the farm 51.
App is using: Typescript, node.js, Express, react, redux, redux middlewares, jest, react-testing-library and others.

instructions for run all app functionalities:

# Running app:
## Backend
first you must paste database permission variables.

go to ```backend/src/config/config.ts```
and here paste variables from email in proper places:
```ts
export default {
  DB_USER: 'database user here',
  DB_PASSWORD: 'database password here',
  DB_NAME: 'database name here'
}
```

next go to backend main directory and run:
```bash
npm install
```
```bash
npm run start:dev
```
from ```/backend``` directory

## Frontend
Go to ```/frontend``` directory, run:
```bash
npm install
```
next you can start frontend app using command:
```bash
npm run start:dev
```
from ```/frontend``` directory

### Frontend tests:
when you are in ```/frontend``` directory, just run command:
```bash
npm run test
```

# Codestyle:
Both frondend and backend app are using standardx npm package with custom rules and typescript checker.
for run checking codestyle, go to ```/backend``` or ```/frontend``` directory, and run:
```bash
npm run codestyle-typescript-check
```

for check codestyle with automatically fix most of codestyle breaks,
run command:
```bash
npm run codestyle-typescript-fix
```
