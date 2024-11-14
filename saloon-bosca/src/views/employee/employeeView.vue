<template>
  <div>
    
      <v-infinite-scroll
        color="secondary"
        height="400"
        mode="manual"
        @load="load"
      >
        <template v-for="(item, index) in items" :key="index">
          <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
            Item #{{ item }}
          </div>
        </template>
      </v-infinite-scroll>
  </div>
</template>

<script>
import { listEmployees } from "@/api/employee/employee";
import { header } from "@/api/employee/headers";

export default {
  data() {
    return {
      items: [],
      header,
    };
  },

  async mounted() {
    this.items = await listEmployees();
  },

  methods: {
    async load(){
        const newItems = await listEmployees();
        this.items.push(...newItems);
    }
  }
};
</script>
