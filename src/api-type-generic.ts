import { ApiType } from './api-lib';

// start of api

type ApiCall1 = ApiType<'/post/{id}', 'delete'>;
const x1: ApiCall1 = {
  path: '/post/{id}',
  method: 'delete',
  params: { id: 1234 },
};

console.log(x1);

type ApiCall2 = ApiType<'/post/{id}', 'patch'>;
const x2: ApiCall2 = {
  path: '/post/{id}',
  method: 'patch',
  params: { id: '1234' },
};

console.log(x2);

// end of api
