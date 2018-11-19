<template>
    <v-container>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Usuário"
            required
            ></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
            ></v-text-field>
        <v-btn color="primary" @click="salvar()">Entrar</v-btn>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Entrar',
  data () {
    return {
      nameRules: [true],
      name: 'teste',
      emailRules: [true],
      password: '',
      show: false
    }
  },
  methods: {
    ...mapActions({ getUsuario: 'usuario/usuario' }),
    salvar () {
      const params = { name: this.name, email: this.email }
      this.getUsuario(params)
      this.$router.push('/eventos')
    }
  },
  computed: {
    ...mapGetters({ usuario2: 'usuario/obterUsuario' })
  }
}

</script>
