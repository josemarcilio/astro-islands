import { createSignal, type Accessor, type Signal } from 'solid-js';
import { useStore } from '@nanostores/solid';
import { countersStore } from '../../stores/counters';

export function SolidIsland() {
  const counters = useStore(countersStore);

  function vote() {
    countersStore.setKey('solid', counters().solid + 1);
  }

  return (
    <div>
      <h1>SolidJS Island</h1>
      <button onClick={vote}>Vote Solid {counters().solid}</button>
      <ul>
        <li>Svelte votes: {counters().svelte}</li>
        <li>React votes: {counters().react}</li>
      </ul>
    </div>
  );
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      vote: [() => any, (v: any) => any];
    }
  }
}
