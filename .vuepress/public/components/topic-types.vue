<template>
  <div>
    <header>
      
    </header>
    <main>
      There are {{types.length}} data types registered.
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