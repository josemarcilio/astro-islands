/** @jsxImportSource react */

import { useStore } from '@nanostores/react';
import { countersStore } from '../../stores/counters';

export function ReactIsland() {
  const counters = useStore(countersStore);

  function vote() {
    countersStore.setKey('react', counters.react + 1);
  }

  return (
    <div>
      <h1>React Island</h1>
      <button onClick={vote}>Vote React {counters.react}</button>
      <ul>
        <li>Svelte votes: {counters.svelte}</li>
        <li>SolidJS votes: {counters.solid}</li>
      </ul>
    </div>
  );
}
