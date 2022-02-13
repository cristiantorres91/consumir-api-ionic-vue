<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Users</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-list>
				<ion-list-header lines="inset">
					<ion-label>List Users</ion-label>
				</ion-list-header>
				<div v-for="item in dataApi" :key="item.id">
					<ion-item>
						<ion-avatar>
							<ion-icon
								style="color: red"
								:icon="personCircleOutline"
								size="large"
							/>
						</ion-avatar>
						<ion-label>
							<h2>{{ item.name }}</h2>
							<h3>{{ item.email }}</h3>
						</ion-label>
					</ion-item>
				</div>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonIcon,
	IonItem,
	IonLabel,
	IonListHeader,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { personCircleOutline } from "ionicons/icons";
import { User } from "@/interfaces/User";
import { getUsers } from "@/services/UserServices";

export default defineComponent({
	name: "HomePage",
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonItem,
		IonLabel,
		IonListHeader,
		IonIcon,
	},

	setup() {
		const dataApi = ref<User[]>([]);

		//metodo para obtener la data de la api
		const getData = async () => {
			try {
				const response = await getUsers();
				dataApi.value = response;
			} catch (error) {
				console.log(error);
			}
		};
		//llamamos metodo para cargar la data
		onMounted(() => {
			getData();
		});
		return {
			dataApi,
			personCircleOutline,
		};
	},
});
</script>

<style scoped></style>
