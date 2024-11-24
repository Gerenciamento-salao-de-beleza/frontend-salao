<template>
  <div>
    <v-toolbar dark prominent class="my-5">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title>Saloon Boscaa</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/scheduling">
        <v-btn>
          <v-icon class="mr-3">mdi-book-clock-outline</v-icon>Agenda
        </v-btn>
      </router-link>

      <v-btn @click="handleAddScheduling">
        <v-icon class="mr-3">mdi-clock-outline</v-icon>Marcar horário
      </v-btn>
    </v-toolbar>

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
          <v-text-field
            v-model="scheduling.nomeCliente"
            label="Nome"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.telefoneCliente"
            label="Telefone"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.dataHora"
            label="Data e hora"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.servico"
            label="Serviço"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.status"
            label="status"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.emailCliente"
            label="Email"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="scheduling.cpfCliente"
            label="Cpf"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="grey-lighten-1" @click="addDialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="primary" @click="saveNewScheduling">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { addScheduling } from "@/api/scheduling/scheduling";
import { getItemsEmployee } from '@/api/employee/employee'

export default {
  data() {
    return {
      items: [],
      itemsEmployees: [],
      scheduling: {},
      addDialog: false,
    };
  },

  async mounted() {
    const itemEmployee = await getItemsEmployee();
    this.itemsEmployees = itemEmployee;
    console.log(itemEmployee);
  },

  methods: {
    handleAddScheduling() {
      this.scheduling = {};
      this.addDialog = true;
    },

    async saveNewScheduling() {
      await addScheduling(this.scheduling);
      this.addDialog = false;
      alert("Seu agendamento foi requisitado");
    },
  },
};
</script>

<style>
.v-toolbar {
  background: none !important;
}

a,
button {
  color: inherit !important;
  text-decoration: none;
}
</style>
