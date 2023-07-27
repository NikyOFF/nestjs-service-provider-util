import {
  ClassProvider,
  ValueProvider,
  FactoryProvider,
  ExistingProvider,
} from '@nestjs/common';

export interface ServiceProvider<T = any> {
  TOKEN: symbol;
  PROVIDER:
    | ClassProvider<T>
    | ValueProvider<T>
    | FactoryProvider<T>
    | ExistingProvider<T>;
}
