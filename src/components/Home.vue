<template>
	<v-container fluid grid-list-md>
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
						<v-btn color="primary">Add yours</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
			<v-flex d-flex style="border: 1px solid blue">
				Grid Two
			</v-flex>
			<v-flex d-flex md3 sm12 style>
				<v-card color="yellow darken-2">
					<v-card-title primary-title>
						<div class="headline">Join SchoolRants</div>
						<div>
							Join thousands of students here and anonymously express yourself. // WIP :)
						</div>
					</v-card-title>
					<v-card-actions>
						<!-- <v-btn color="primary">Add yours</v-btn> -->
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'hello',
	data: () => ({
		schools: ['University Of Lagos', 'Yaba College Of Technology']
	})
}
</script>
