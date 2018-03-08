<template>
	<v-container fluid grid-list-md class="container">
		<v-layout row wrap>
			<v-flex d-flex md3 sm12>
				<v-card>
					<v-card-title primary-title>
						<div class="headline">Available Schools</div>
						<v-list>
							<template v-for="(school) in schools">
								<v-list-tile :key="school">
									<v-list-tile-content>
										<v-list-tile-title v-text="school"></v-list-tile-title>
									</v-list-tile-content>
								</v-list-tile>
							</template>
						</v-list>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="primary">Add yours</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
			<v-flex d-flex>
				<posts></posts>
			</v-flex>
			<v-flex d-flex md3 sm12 style>
				<v-card color="yellow darken-2">
					<v-card-title primary-title>
						<div class="headline">Join SchoolRants</div>
						<div>
							Join thousands of folks here to anonymously post rants about schools.
						</div>
						<br />
						<v-divider></v-divider>
						<div>
							Some other students and stakeholders can review schools and their management.
						</div>
					</v-card-title>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import posts from '@/components/Posts'

export default {
	name: 'hello',
	components: { posts },
	data: () => ({
		schools: ['University Of Lagos', 'Yaba College Of Technology']
	})
}
</script>

<style scoped>
.container {
	margin-top: 15px;
}
</style>
