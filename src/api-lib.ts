import { paths } from '../generated/schema';

// ---- start of lib ----
type UrlResolver<T extends keyof paths> = T extends infer R ? R : never;

// type UrlType<T extends keyof paths> = UrlResolver<T>;
// type Operations<T extends keyof paths> = paths[UrlResolver<T>];

// type Method<T extends keyof paths> = keyof Operations<T>;
// type Operation<T extends keyof paths> = paths[UrlResolver<T>][Method<T>];

export type ApiType<
  T extends keyof paths,
  K extends keyof paths[UrlResolver<T>]
> = {
  path: UrlResolver<T>;
  method: K;
  params: paths[UrlResolver<T>][K] extends { parameters: { path: infer R } }
    ? R
    : null;
};

//  ---- end of lib ----
