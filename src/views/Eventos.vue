<template>
    <v-container>
        <v-dialog v-model="cadastroDialog">
            <v-btn slot="activator" color="primary" dark>novo evento</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline"> Cadastrar</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <Cadastro/>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        flat
                        @click="cadastroDialog = false"
                        >Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-data-table
            :headers="headers"
            :items="obterEventos"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.desc }}</td>
                <td>
                    <v-btn @click="excluir(props.index)">Excluir</v-btn>
                    <v-dialog v-model="dialog" max-width="600px">
                        <v-btn slot="activator" color="primary" dark>Editar</v-btn>
                        <v-card>
                            <Cadastro
                                :dados="props.item"
                                :index="props.index"
                            />
                            <v-btn
                                color="primary darken-1"
                                flat
                                @click.native="dialog = false">
                                Close</v-btn>
                        </v-card>
                    </v-dialog>
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Cadastro from '../components/Cadastro'
export default {
  name: 'Eventos',
  data () {
    return {
      dialog: false,
      cadastroDialog: false,
      name: '',
      nameRules: [true],
      data: '',
      desc: '',
      modal: false,
      headers: [
        {
            text: 'Name',
            value: 'name'
        },
          {
              text: 'Data',
              value: 'data'
          },
          {
              text: 'Descrição',
              value: 'desc'
          },
          {
              text: 'Ações',
              value: ''
          }
      ]
    }
  },
  methods: {
    ...mapActions({
      getEventos: 'eventos/eventos',
      deleteEventos: 'eventos/remove'
    }),
    salvar () {
      const params = { name: this.name, data: this.data, desc: this.desc }
      this.getEventos(params)
    },
    editar (id) {

    },
    excluir (id) {
      console.log(id)
      this.deleteEventos(id)
    }
  },
  computed: {
    ...mapGetters({ obterEventos: 'eventos/obterEventos' })
  },
  components: {
    Cadastro
  }
}
</script>
