<template>
    <div>
      <v-card
          class="mx-auto"
          max-width="800px"
      >
        <v-card-title class="ma-2">Agende seu horário:</v-card-title>
        <v-btn
          @click="handleAddScheduling"
          color="green"
          icon="mdi-plus"
          size="small"
          class="ma-3"
        ></v-btn>
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
                @click="editScheduling(item)"
                color="medium-emphasis"
                icon="mdi-pencil"
                size="small"
            ></v-btn>
            <v-btn
                @click="openDelete(item.id)"
                color="medium-emphasis"
                icon="mdi-delete"
                size="small"
            ></v-btn>
          </v-card-actions>

          <!-- <v-dialog max-width="500px" v-model="addDialog">
            <v-card>
              <v-card-title>Novo agendamento</v-card-title>
              <v-card-text>
                <v-text-field id="name" label="Nome" clearable></v-text-field>
                <v-text-field label="Telefone" clearable></v-text-field>
                <v-text-field label="Data e hora" clearable></v-text-field>
                <v-text-field label="Serviço" clearable></v-text-field>
                <v-text-field label="status" clearable></v-text-field>
                <v-text-field label="Email" clearable></v-text-field>
                <v-text-field label="Cpf" clearable></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey-lighten-1" @click="addDialog = false">Cancelar</v-btn>
                <v-btn color="primary" @click="saveNewScheduling">Salvar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
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

          <v-dialog max-width="500px" v-model="addDialog">
            <v-card>
              <v-card-title>Novo agendamento</v-card-title>
              <v-card-text>
                <v-select
                  v-model="scheduling.funcionarioID"
                  :items="itemsEmployees"
                  item-value="id"
                  item-title="nome"
                  label="Funcionário"
                  clearable
                ></v-select>
                <v-text-field v-model="scheduling.nomeCliente" label="Nome" clearable></v-text-field>
                <v-text-field v-model="scheduling.telefoneCliente"  label="Telefone" clearable></v-text-field>
                <v-text-field v-model="scheduling.dataHora"  label="Data e hora" clearable></v-text-field>
                <v-text-field  v-model="scheduling.servico" label="Serviço" clearable></v-text-field>
                <v-text-field v-model="scheduling.status"  label="status" clearable></v-text-field>
                <v-text-field  v-model="scheduling.emailCliente" label="Email" clearable></v-text-field>
                <v-text-field  v-model="scheduling.cpfCliente" label="Cpf" clearable></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey-lighten-1" @click="addDialog = false">Cancelar</v-btn>
                <v-btn color="primary" @click="saveNewScheduling">Salvar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog max-width="500" v-model="editDialog">
            <v-card>
              <v-card-title>Editar agendamento</v-card-title>
              <v-card-text>
                <v-select
                  v-model="scheduling.funcionarioID"
                  :items="itemsEmployees"
                  item-value="id"
                  item-title="nome"
                  label="Funcionário"
                  clearable
                ></v-select>
                <v-text-field v-model="scheduling.nomeCliente" label="Nome" clearable></v-text-field>
                <v-text-field v-model="scheduling.telefoneCliente"  label="Telefone" clearable></v-text-field>
                <v-text-field v-model="scheduling.dataHora"  label="Data e hora" clearable></v-text-field>
                <v-text-field  v-model="scheduling.servico" label="Serviço" clearable></v-text-field>
                <v-text-field v-model="scheduling.status"  label="status" clearable></v-text-field>
                <v-text-field  v-model="scheduling.emailCliente" label="Email" clearable></v-text-field>
                <v-text-field  v-model="scheduling.cpfCliente" label="Cpf" clearable></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey-lighten-2" @click="editDialog = false"
                  >Cancelar</v-btn
                >
                <v-btn color="primary" @click="edit()">Salvar alteração</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog max-width="500px" v-model="deleteDialog">
            <v-card>
              <v-card-title>Apagar o agendamento permanentemente?</v-card-title>
              <v-card-actions>
                <v-btn color="grey-lighten-2" @click="deleteDialog = false"
                  >Cancelar</v-btn
                >
                <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-card>
    </div>
  </template>

<script>
import { listScheduling, addScheduling, editScheduling, deleteScheduling } from "@/api/scheduling/scheduling";
import { header } from "@/api/scheduling/headers";
import { getItemsEmployee } from '@/api/employee/employee'

export default {
  data() {
    return {
      header,
      items: [],
      scheduling: {},
      itemsEmployees: [],
      addDialog: false,
      editDialog: false,
      deleteDialog: false,
      saveId: null
    };
  },

  async mounted() {
    const schedulings = await listScheduling();
    this.items = schedulings;

    const itemEmployee = await getItemsEmployee();
    this.itemsEmployees = itemEmployee;
  },

  methods: {
    async load() {
      const newItems = await listScheduling();
      this.items.push(...newItems);
    },

    handleAddScheduling () {
      this.scheduling = {};
      this.addDialog = true;
    },

    async saveNewScheduling(){
      await addScheduling(this.scheduling);
      this.addDialog = false;
      this.items = await listScheduling();
    },

    editScheduling(item){
      this.scheduling = {...item};
      this.editDialog = true;
    },
    async edit(){
      await editScheduling(this.scheduling);
      this.editDialog = false;
      this.items = await listScheduling();
    },

    openDelete(schedulingId){
      this.saveId = schedulingId;
      this.deleteDialog = true;
    },

    async deleteOne(id){
      this.deleteDialog = false;
      await deleteScheduling(this.saveId);
      this.items = await listScheduling();
    }



  }
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
