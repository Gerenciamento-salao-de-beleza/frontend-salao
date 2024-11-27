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

      <v-btn @click="addDialog = true">
        <v-icon class="mr-3">mdi-clock-outline</v-icon>Marcar horário
      </v-btn>
    </v-toolbar>

    <v-dialog max-width="500px" v-model="addDialog">
      <v-btn @click="loadEmployees">Recarregar Funcionários</v-btn>

      <v-card>
        <v-card-title>Novo agendamento</v-card-title>
        <v-card-text>
          
            <v-select
              :items="itemsEmployees"
              v-model="selectedEmployee"
              item-value="id"
              item-title="nome"
              label="Profissional"
              clearable
            ></v-select>
          
          <v-text-field
            v-model="scheduling.nomeCliente"
            label="Nome do Cliente"
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
          <v-btn color="primary" @click="newScheduling">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { addScheduling, getItemsScheduling } from "@/api/scheduling/scheduling";
import { getItemsEmployee } from '@/api/employee/employee';

export default {
  setup(){
    const items = ref([]);
    const itemsEmployees = ref([]);
    const selectedEmployee = ref(null);
    const addDialog = ref(false);
    const scheduling = ref({
      nomeCliente: '',
      telefoneCliente: '',
      dataHora: '',
      servico: '',
      status: '',
      emailCliente: '',
      cpfCliente: ''
    });

    const loadEmployees = async () => {
      try {
        const res = await getItemsEmployee();
        itemsEmployees.value = res;
        console.log(itemsEmployees.value);
      } catch (error) {
        console.log('Erro ao carregar funcionários: ', error);
      }
    };

    const loadScheduling = async () => {
      try {
        items.value = await getItemsScheduling();
        console.log('Agendamentos carregados: ', items.value);
        
      } catch (error) {
        console.log('Erro ao carregar: ', error);
      }
    };

    const resetForm = () => {
      scheduling.value = {
        nomeCliente: '',
        telefoneCliente: '',
        dataHora: '',
        servico: '',
        status: '',
        emailCliente: '',
        cpfCliente: '',
        funcionarioID: null
      };
      selectedEmployee.value = null;
    };

    const newScheduling = async () => {
      try {
        if (!selectedEmployee.value) {
          alert('Por favor, selecione um profissional');
          return;
        }
        scheduling.value.funcionarioID = selectedEmployee.value;
        
        await addScheduling(scheduling.value);
        addDialog.value = false;
        alert('Agendamento realizado com sucesso!');
        resetForm();
        await loadScheduling(); 

      } catch (error) {
        console.error('Erro ao agendar:', error);
        alert('Erro ao agendar, tente novamente e confira se o profissional foi selecionado')
      }
      // try {
      //   console.log('tantando enviar', scheduling.value);
      //   await addScheduling(scheduling.value);
      //   addDialog.value = false;
      //   alert('Seu agendamento foi requisitado')
      //   loadScheduling(); 
      // } catch (error) {
      //   console.log('Erro ao agendar: ', error);
      //   console.log("Detalhes do erro:", error.response?.data);
      // }
    };

    onMounted(() => {
      loadEmployees();
      loadScheduling();
    });

    

    return {
      items,
      itemsEmployees,
      selectedEmployee,
      scheduling,
      addDialog,
      newScheduling,
      loadEmployees
    }
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
