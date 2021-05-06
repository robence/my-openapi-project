## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Generate schema

```bash
# run in another terminal window
$ npx openapi-typescript http://localhost:3000/api-json  --output generated/schema.ts    
```

```ts
import { ApiType } from './api-lib';

// create typed api call
type ApiCall = ApiType<'/post/{id}', 'delete'>;
const apiCall: ApiCall = {
  path: '/post/{id}',
  method: 'delete',
  params: { id: 1234 },
};
```
