<template>
	<div>
		<Cadastro/>
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
			<td><v-btn @click="excluir()">Excluir</v-btn>
			  <v-layout row justify-center>
				<v-dialog v-model="dialog" max-width="600px">
				  <v-btn slot="activator" color="primary" dark>Editar</v-btn>
				  <v-card>
					<Cadastro
						:dados="props.item"
						:index="props.index"
					/>
					<v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
				  </v-card>
				</v-dialog>
			  </v-layout>
			</td>
		</template>
	  </v-data-table>
		<!-- redes sociais
			 instagram: @wouerner
			 facebook: @wouerner
			 badoo: @wouerner
			 youtube: @wouernercodes -->
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Cadastro from '../components/Cadastro'
export default {
	name: 'Eventos',
	data() {
		return {
			dialog: false,
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
          		},

			]
		
		}		
	},
	methods: {
		...mapActions({getEventos: 'eventos/eventos'}),
		salvar(){
			const params = {name: this.name, data: this.data, desc: this.desc}
			this.getEventos(params)
		},
		editar(id) {
			
		},
		excluir() {
		}
	},
//	mounted(){
//		console.log('teste')
//		this.getUsuario({teste: 'cleber'})
//	},
	computed: {
		...mapGetters({obterEventos: 'eventos/obterEventos'})
	},
	components: {
		Cadastro
	}
}

</script>
