<template>
  <v-app>
     <v-flex justify-center>
    <v-content>
      <div id="app">
        <NavBar/>
        <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br>
            <h1 class="text-center">Business Clearance</h1>
            <h2 class="text-center">Office of the Punong Barangay</h2>
            <h2 class="text-center">Required under RA 7160 Sec. 125</h2>
            <div class="flex-grow-1"></div>
            <br>
          <v-card-text>
            <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="name" label="Name" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="occupation" label="Occupation" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="businessAddress" label="Business Address" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="contactNumber" label="Contact Number" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="dateIssued" label="Date Issued" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="personInCharged" label="Person in Charged Signature" filled></v-text-field>
            </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="white" fab large @click="isEditing = !isEditing">Preview</v-btn>
          </v-card-actions>
        </v-card>     
      </div>
    </v-content>
     </v-flex>
  </v-app>
</template>
<script>
export default {
  data: function() {
    return {
      name: this.name,
      occupation: this.occupation,
      businessAddress: this.businessAddress,
      contactNumber: this.contactNumber,
      dateIssued: this.dateIssued,
      personInCharged: this.personInCharged
    }
  }
};


</script>
