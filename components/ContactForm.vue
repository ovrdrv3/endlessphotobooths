<template>
  <div class="py-2">
    <b-form
      ref="form"
      name="contact"
      method="POST"
      netlify-honeypot="prefix"
      data-netlify="true"
      @input="validateForm"
      @change="validateForm"
      @reset="onReset"
    >
      <b-form-group
        v-show="false"
        label="Prefix"
        label-for="prefix"
      >
        <b-form-input
          id="prefix"
          name="prefix"
        />
      </b-form-group>
      <input
        type="hidden"
        name="form-name"
        value="contact"
      >
      <b-form-group
        label="Name"
        label-for="name"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="10"
        :invalid-feedback="errors.name"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          name="name"
          type="text"
          label-cols-sm="4"
          label-cols-lg="2"
          content-cols-sm
          content-cols-lg="10"
          placeholder="Name"
          :state="stateOfElement('name')"
        />
      </b-form-group>
      <b-form-group
        label="Number"
        label-for="phone"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="10"
        :invalid-feedback="errors.phone"
      >
        <b-form-input
          id="phone"
          v-model="form.phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          :state="stateOfElement('phone')"
        />
      </b-form-group>
      <b-form-group
        label="Email"
        label-for="email"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="10"
        :invalid-feedback="errors.email"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          placeholder="Email"
          :state="stateOfElement('email')"
        />
      </b-form-group>
      <b-form-group
        id="formComment"
        label="Comment or Message"
        label-for="comment"
      >
        <b-form-textarea
          id="comment"
          v-model="form.comment"
          name="comment"
          type="text"
          :rows="3"
          :max-rows="6"
        />
      </b-form-group>
      <b-form-group
        id="formPackage"
        label="Package"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="10"
        label-for="package"
      >
        <b-form-select
          id="package"
          v-model="form.package"
          name="package"
          :options="packages"
        />
      </b-form-group>
      <!-- how did you hear about us and the bugget on the same row -->
      <b-row>
        <b-col
          cols="12"
          md="6"
        >
          <b-form-group
            label="How did you hear about us?"
            label-for="referral"
            :invalid-feedback="errors.referral"
          >
            <b-form-invalid-feedback
              v-show="stateOfElement('referral')"
              :state="stateOfElement('referral')"
            >
              Please select a referral
            </b-form-invalid-feedback>
            <b-form-radio-group
              id="referral"
              v-model="form.referral"
              name="referral"
              :options="referralOptions"
              stacked
            />
            <b-form-input
              v-show="form.referral == 'Other'"
              id="otherReferral"
              v-model="form.otherReferral"
              name="otherReferral"
              type="text"
              placeholder="(How did you hear about us?)"
              :state="stateOfElement('otherReferral')"
            />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="6"
        >
          <b-form-group
            label="What's your budget?"
            label-for="budget"
            :invalid-feedback="errors.budget"
          >
            <b-form-invalid-feedback
              v-show="stateOfElement('budget')"
              :state="stateOfElement('budget')"
            >
              Please select a budget
            </b-form-invalid-feedback>
            <b-form-radio-group
              id="budget"
              v-model="form.budget"
              name="budget"
              :options="budgetOptions"
              stacked
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button
        block
        size="lg"
        type="button"
        :disabled="errors.any || submissionSuccess"
        :variant="submitButtonVariant"
        @click.prevent="onSubmit"
      >
        {{ form.submitText }}
      </b-button>
      <b-button
        block
        size="sm"
        type="reset"
        variant="outline-danger"
      >
        Reset
      </b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        comment: '',
        otherReferral: '',
        package: null,
        referral: null,
        budget: null,
        submitText: 'Submit',
      },
      submissionAttempt: false,
      submissionSuccess: false,
      submitButtonVariant: 'outline-primary',
      errors: {
        any: false,
        name: '',
        email: '',
        phone: '',
        referral: '',
        budget: '',
        otherReferral: '',
      },
      packages: [
        { text: 'Package Types', value: null },
        '360 Video Booth', 'Open Air Booth', 'Social Booth', 'LED Enclosed Booth',
      ],
      referralOptions: [
        { text: 'Friends', value: 'Friends' },
        { text: 'Yelp', value: 'Yelp' },
        { text: 'Wedding Wire', value: 'Wedding Wire' },
        { text: 'Instagram', value: 'Instagram' },
        { text: 'Other', value: 'Other' },
      ],
      budgetOptions: [
        { text: '$400 - $600', value: '$400 - $600' },
        { text: '$600 - $800', value: '$600 - $800' },
        { text: '$800 - $1,000', value: '$800 - $1,000' },
        { text: '$1,000 - $2,000', value: '$1,000 - $2,000' },
      ],
    }
  },
  mounted() {
    if (process.client) {
      const paramsString = window.location.search;
      const searchParams = new URLSearchParams(paramsString);
      let newFormValue = '';
      if (searchParams.has('package')) {
        const queryValue = searchParams.get('package');
        this.packages.forEach((currentValue) => {
          if (currentValue.toString().substring(0, queryValue.length) === queryValue) {
            newFormValue = currentValue;
          }
        });
        this.form.package = newFormValue;
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    },
    validateForm() {
      if (!this.submissionAttempt) { return; }
      this.errors.any = false;
      this.errors.name = '';
      this.errors.email = '';
      this.errors.phone = '';
      this.errors.referral = '';
      this.errors.otherReferral = '';

      if (!this.form.name || !this.form.name.includes(' ')) {
        this.errors.any = true;
        this.errors.name = 'Full name required';
      }

      if (!this.form.phone) {
        this.errors.any = true;
        this.errors.phone = 'Phone required';
      }

      if (!this.form.email) {
        this.errors.any = true;
        this.errors.email = 'Email required';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.any = true;
        this.errors.email = 'Valid email required';
      }

      if (!this.form.budget) {
        this.errors.any = true;
        this.errors.budget = 'Budget required';
      }

      if (!this.form.referral) {
        this.errors.any = true;
        this.errors.referral = 'Referral required';
      }

      if (this.form.referral == 'Other' && !this.form.otherReferral) {
        this.errors.any = true;
        this.errors.otherReferral = 'Other referral required';
      }

      if (this.errors.any) {
        this.form.submitText = 'Please check above for errors';
      } else {
        this.form.submitText = 'Submit';
      }

      return this.errors.any;
    },
    stateOfElement(element) {
      if (!this.submissionAttempt) return null;
      return !this.errors[element];
    },
    onSubmit() {
      this.submissionAttempt = true;
      const notReadyToProceed = this.validateForm();
      if (notReadyToProceed) {

      } else {
        // this.$refs.form.submit();

        fetch('/submit-success', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'contact',
            ...this.form,
          }),
        })
          .then(() => {
            // this.$router.push("submit-success");
            this.form.submitText = 'Thanks! You will hear from us shortly!';
            this.submitButtonVariant = 'btn-outline-success';
            this.submissionSuccess = true;
          })
          .catch(() => {
            this.form.submitText = 'Please Refresh Your Page or Try a Different Browser - Error Sending Form';
          });

        // const axiosConfig = {
        //   header: { "Content-Type": "application/x-www-form-urlencoded" }
        // };

        // axios.post(
        //   "/",
        //   this.encode({
        //     "form-name": "contact-us",
        //     ...this.form
        //   }),
        //   axiosConfig
        // )
        // // .then(function (response) {
        // //   console.log(response);
        // // })
        // .then(() => {
        //     // this.$router.push("submit-success");
        //     this.form.submitText = 'Thanks! You will hear from us shortly!';
        //     this.submitButtonVariant = 'btn-outline-success';
        //     this.submissionSuccess = true;
        // })
        // .catch(() => {
        //     this.form.submitText = 'Please Refresh Your Page - Error Sending Form';
        // });
      } // ready to proceed, make POST attempt
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset form values */
      this.form.name = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.comment = '';
      this.form.package = null;
      this.errors.referral = '';
      this.errors.otherReferral = '';
      this.form.submitText = 'Submit';
      this.errors.any = false;
      this.submissionAttempt = false;
      this.submissionSuccess = false;
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
}
</script>
