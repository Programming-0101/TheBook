<template>
  <div>
    <header>
      
    </header>
    <main>
      <i>Coming Soon:</i> Alpha-testing vue component to process json list of data types used in the code examples and practices. There are {{types.length}} data types registered.
      <ul>
        <li v-for="item in types">
          {{ item.Type }}
          -
          <b>Examples</b>: <span v-for="ex in item.Examples"><a :href="ex.Topic + '/Examples/' + ex.Doc">{{ex.Topic}}</a></span>
          -
          <b>Practice</b>: <span v-for="ex in item.Practice"><a :href="ex.Topic + '/Practice/' + ex.Doc">{{ex.Topic}}</a></span>
        </li>
      </ul>
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