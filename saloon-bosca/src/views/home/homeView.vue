<template>
  <div>
    <v-container>
        <v-row>
            <v-col class="d-flex pa-2 align-self-center">
                <h2 class="w-66">O Saloon Boscaa te proporciana uma experiência incrível    !!!</h2>
            </v-col>
            <v-col>
                <v-img src="../../components/imgs/image.png"></v-img>
            </v-col>
        </v-row>
        <v-row>
          <v-col>
            <panelFaq></panelFaq>
          </v-col>
        </v-row>
    </v-container>

    <router-link to="/"> Go to home </router-link>
    <router-link to="/employees"> Funcionarios e clientes </router-link>
    <router-link to="/scheduling"> Agendamentos </router-link>
  </div>
</template>

<script>
  import panelFaq from '../../components/panelFaq.vue'
</script>
