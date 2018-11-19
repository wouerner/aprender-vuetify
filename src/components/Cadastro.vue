<template>
    <v-container grid-list-md>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nome"
            required
        ></v-text-field>
            <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="data"
                persistent
                lazy
                full-width
                width="290px"
            >
                <v-text-field
                    slot="activator"
                    v-model="data"
                    label="Picker in dialog"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker v-model="data" scrollable>
                        <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog.save(data)">OK</v-btn>
                    </v-date-picker>
            </v-dialog>
            <v-textarea
                name="input-7-1"
                v-model="desc"
                label="Descrição"
                value="Digite sua descrição."
                outline
            ></v-textarea>
            <v-btn
                color="primary"
                @click="salvar()"
            >Salvar</v-btn>
    </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cadastro',
  props: ['dados', 'index'],
  data () {
    return {
      name: '',
      nameRules: [true],
      data: '',
      desc: '',
      modal: false
    }
  },
  methods: {
    ...mapActions({ getEventos: 'eventos/eventos', update: 'eventos/update' }),
    salvar () {
      const params = { name: this.name, data: this.data, desc: this.desc }
      if (this.index != null) {
        this.update({ name: this.name, data: this.data, desc: this.desc, index: this.index })
      } else {
        this.getEventos(params)
      }

      this.name = ''
      this.data = ''
      this.desc = ''
    }
  },
  computed: {
    ...mapGetters({ usuario2: 'usuario/obterUsuario' })
  }
}
</script>
