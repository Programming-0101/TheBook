<template>
  <div>
    <header>
      
    </header>
    <main>
      <i>Coming Soon:</i> Alpha-testing vue component to process json list of data types used in the code examples and practices. There are {{types.length}} data types registered.
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import json from './classes.json';
export default {
  data(){
    return{
      types: json
    }
  },
  mounted() {
  }
};
</script>