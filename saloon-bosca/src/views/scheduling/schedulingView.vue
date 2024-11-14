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
    import { listScheduling } from '@/api/scheduling/scheduling'
    import { header } from '@/api/scheduling/headers'
 
    export default {
        data () {
            return {
                header,
                items: []
            }
        },

        async mounted () {
            this.items = await listScheduling(); 
        } 
    }

</script>