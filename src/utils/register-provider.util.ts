import {
  ClassProvider,
  ValueProvider,
  FactoryProvider,
  ExistingProvider,
} from '@nestjs/common';
import { ServiceProvider } from '../interfaces';

export function registerProvider<T = any>(
  token: string,
  provider: Omit<
    | ClassProvider<T>
    | ValueProvider<T>
    | FactoryProvider<T>
    | ExistingProvider<T>,
    'provide'
  >,
): ServiceProvider<T> {
  const symbolToken = Symbol(token);

  return {
    TOKEN: symbolToken,
    PROVIDER: <ServiceProvider<T>['PROVIDER']>{
      provide: symbolToken,
      ...provider,
    },
  };
}
