<v-app id="inspire">
    <v-subheader>
      <!-- <v-btn @click="addBug()">Add Bugs</v-btn> -->
      Selected: {{ selected || 'null' }}
    </v-subheader>
    <v-radio-group v-model="selected" :mandatory="false">
      <v-radio label="Radio 1" value="radio-1" @click="getValue('radio-1')"></v-radio>
      <v-radio label="Radio 2" value="radio-2" @click="getValue('radio-2')"></v-radio>
    </v-radio-group>
  </v-app>