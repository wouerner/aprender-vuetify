<template>
	<div>

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

	<v-btn small @click="salvar()">Normal</v-btn>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cadastro',
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
    ...mapActions({ getEventos: 'eventos/eventos' }),
    salvar () {
      const params = { name: this.name, data: this.data, desc: this.desc }
      this.getEventos(params)
    }
  },
  computed: {
    ...mapGetters({ usuario2: 'usuario/obterUsuario' })
  }
}

</script>
