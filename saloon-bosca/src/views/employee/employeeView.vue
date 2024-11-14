<!-- <template>
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
</template> -->

<template>
  <div>
    <v-card class="mx-auto" max-width="800px">
      <v-card-title class="ma-2">Funcionários de Boscaa</v-card-title>

      <v-divider></v-divider>

      <v-infinite-scroll
        color="secondary"
        height="auto"
        mode="manual"
        @load="load"
      >
        <v-card v-for="(item, index) in items" :key="index" class="my-1">
          <v-card-text>
            <v-row>
              <v-col
                v-for="(column, colIndex) in header"
                :key="colIndex"
                cols="12"
                class="d-flex"
              >
                <strong>{{ column.title }}:</strong>
                <span class="ml-2">{{ item[column.key] }}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" icon="mdi-check" size="small"></v-btn>
            <v-btn
              color="medium-emphasis"
              icon="mdi-bookmark"
              size="small"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-infinite-scroll>
    </v-card>
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
    async load() {
      const newItems = await listEmployees();
      this.items.push(...newItems);
    },
  },
};
</script>

<style>
    .v-card .v-card-text {
        line-height: 0.1;
    }

    .v-card {
        height: auto;
    }
</style>
