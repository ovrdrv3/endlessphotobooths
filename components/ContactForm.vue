<template>
  <div @keydown="unGrayFields" class="py-3">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup2"
                    label="Name:"
                    label-for="Name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Name"
                      :state="nameState">
        </b-form-input>
        <b-form-text v-if="errorMessages.name">
          {{ errorMessages.name }}
        </b-form-text>

      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Number:"
                    label-for="Phone Number">
        <b-form-input id="phone"
                      type="tel"
                      v-model="form.phone"
                      placeholder="Phone"
                      :state="phoneState">
        </b-form-input>
        <b-form-text v-if="errorMessages.phone">
          {{ errorMessages.phone }}
        </b-form-text>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="email">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      placeholder="Email"
                      :state="emailState">
        </b-form-input>
        <b-form-text v-if="errorMessages.email">
          {{ errorMessages.email }}
        </b-form-text>
      </b-form-group>
      <b-form-group id="comment"
                    label="Comment or Message:"
                    label-for="comment">
        <b-form-textarea id="exampletextarea1"
                      type="text"
                      v-model="form.comment"
                      :rows="3"
                      :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="package"
                    label="Interested in:"
                    label-for="package">
        <b-form-select id="package"
                      :options="packages"
                      v-model="form.packages">
        </b-form-select>
      </b-form-group>
      <b-button :disabled="errorsPresent" type="submit" variant="outline-primary">Submit</b-button>
      <b-button type="reset" variant="outline-danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  computed: {
    nameState () {
      if (this.allFormsGray) return null;
      return this.errorMessages.name ? false : true;
    },
    phoneState () {
      if (this.allFormsGray) return null;
      return this.errorMessages.phone ? false : true;
    },
    emailState () {
      if (this.allFormsGray) return null;
      return this.errorMessages.email ? false : true;
    },
    errorsPresent () {
      // do not run any validation until data has started to be input into the display
      if (!this.allFormsGray) {
        this.formValidation();
      }
      for (var key in this.errorMessages) {
          // skip loop if the property is from prototype
          if (!this.errorMessages.hasOwnProperty(key)) continue;

          var obj = this.errorMessages[key];
          // this loops through and console logs
          // if there are any error messages present we want to return a condition of true
          if (obj) return true;
      }
      // Making it out of this loop would represent no errors found.
      return false;
    }

  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        comment: '',
        packages: null,
      },
      errorMessages: {
        name: '',
        email: '',
        phone: ''
      },
      packages: [
        { text: 'Package Types', value: null },
        'Package I', 'Package II', 'Package III', 'Not Sure Yet'
      ],
      show: true,
      allFormsGray: true
    }
  },
  methods: {
    formValidation: function(){
      this.errorMessages.name = '';
      this.errorMessages.email = '';
      this.errorMessages.phone = '';

      if (!this.form.name) {
        this.errorMessages.name ='Full Name required';
      } else if (!this.form.name.includes(' ')){
        this.errorMessages.name ='Full Name required';
      }

      if (!this.form.phone) {
        this.errorMessages.phone ='Phone required';
      }
      if (!this.form.email) {
        this.errorMessages.email = 'Email required';
      } else if (!this.validEmail(this.form.email)) {
        this.errorMessages.email = 'Valid email required';
      }

    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    unGrayFields(){
        this.allFormsGray = false;
    }
  }
}
</script>
