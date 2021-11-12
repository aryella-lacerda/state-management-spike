import {createContext} from 'use-context-selector';
import {Counter} from './counter-store';

export const CounterContext = createContext<Counter>(new Counter());
