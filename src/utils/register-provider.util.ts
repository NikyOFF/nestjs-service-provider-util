import {
  ClassProvider,
  ValueProvider,
  FactoryProvider,
  ExistingProvider,
} from '@nestjs/common';
import { ServiceProvider } from '../interfaces';

export function registerProvider<T = any>(
  token: string,
  provider: ClassProvider<T> | ValueProvider<T> | FactoryProvider<T> | ExistingProvider<T>,
): ServiceProvider<T> {
  const symbolToken = Symbol(token);

  return {
    TOKEN: symbolToken,
    PROVIDER: {
      ...provider,
      provide: symbolToken,
    },
  };
}
