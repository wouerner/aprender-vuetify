<template>
	<div>
{{usuario2}}
<v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

	<v-btn small @click="salvar()">Normal</v-btn>

	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'Entrar',
	data() {
		return{
			nameRules: [true],
			name: 'teste',
			emailRules: [true],	
			email: 	'teste@gmail.com',
		}		
	},
	methods: {
		...mapActions({getUsuario: 'usuario/usuario'}),
		salvar(){
			const params = {name: this.name, email: this.email}
			this.getUsuario(params)
		}
	},
//	mounted(){
//		console.log('teste')
//		this.getUsuario({teste: 'cleber'})
//	},
	computed: {
		...mapGetters({usuario2: 'usuario/obterUsuario'})
	}
}

</script>
