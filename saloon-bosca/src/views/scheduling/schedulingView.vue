<!-- <template>
  <div>
    <v-card
        class="mx-auto"
        max-width="800px"
    >
      <v-card-title>Agende seu horário</v-card-title>

      <v-divider></v-divider>

      <v-infinite-scroll
        color="secondary"
        height="400"
        mode="manual"
        @load="load"
        max-width="800px"
        
      >
        <template v-for="(item, index) in items" :key="index">
          <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
            <span><b>Nome do cliente: </b></span>{{ item.nomeCliente }} <br />
            {{ item.telefoneCliente }} <br />
            {{ item.dataHora }} <br />
            {{ item.servico }} <br />
            {{ item.status }} <br />
            {{ item.telefoneCliente }} <br />
          </div>
        </template>
      </v-infinite-scroll>
    </v-card>
  </div>
</template> -->

<template>
    <div>
      <v-card
          class="mx-auto"
          max-width="800px"
      >
        <v-card-title class="ma-2">Agende seu horário:</v-card-title>
  
        <v-divider></v-divider>


        <v-infinite-scroll
        color="secondary"
        height="auto"
        mode="manual"
        @load="load"
      >
        <v-card
          v-for="(item, index) in items"
          :key="index"
          class="my-1"
        >
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
            <v-btn
                color="green"
                icon="mdi-check"
                size="small"
            ></v-btn>
            <v-btn
                color="medium-emphasis"
                icon="mdi-bookmark"
                size="small"
            ></v-btn>
          </v-card-actions>
        </v-card>





         <!-- Display Header Titles (show in table foramt) -->
        <!-- <v-row class="px-4 py-2">
            <v-col
            v-for="(column, index) in header"
            :key="index"
            class="text-caption font-weight-bold"
            >
            {{ column.title }}
            </v-col>
        </v-row>

        <v-divider></v-divider>
  
        <v-infinite-scroll
            color="secondary"
            height="400"
            mode="manual"
            @load="load"
            max-width="800px"
          
        > -->

        <!-- show in table format -->
        <!-- <v-row
          v-for="(item, index) in items"
          :key="index"
          class="px-4 py-2"
        >
          <v-col
            v-for="(column, colIndex) in header"
            :key="colIndex"
          >
            {{ item[column.key] }}
          </v-col>
        </v-row> -->









        <!-- show in rows and with button mdi-pencil -->
        <!-- <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :subtitle="`${item.nomeCliente} ${item.telefoneCliente}`"
            :title="`Nome do cliente`"
            
        >
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-account</v-icon>
          </template>

          <template v-slot:append>
            <v-btn
              icon="mdi-pencil"
              size="x-small"
              variant="tonal"
            ></v-btn>
          </template>
        </v-list-item> -->
      
          
        </v-infinite-scroll>
      </v-card>
    </div>
  </template>

<script>
import { listScheduling } from "@/api/scheduling/scheduling";
import { header } from "@/api/scheduling/headers";

export default {
  data() {
    return {
      header,
      items: [],
    };
  },

  async mounted() {
    this.items = await listScheduling();
  },
};
</script>

<style>
    .v-card .v-card-text {
        line-height: 1.1;
    }

    .v-card {
        height: auto;
    }
</style>
