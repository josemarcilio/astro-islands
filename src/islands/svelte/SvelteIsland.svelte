<script lang="ts">
  import { countersStore } from '../../stores/counters'

  function vote() {
    countersStore.setKey('svelte', $countersStore.svelte + 1) 
  }
</script>

<h1>Svelte Island</h1>
<button on:click={vote}>Vote Svelte {$countersStore.svelte}</button>
<ul>
  <li>React votes: {$countersStore.react}</li>
  <li>SolidJS votes: {$countersStore.solid}</li>
</ul>