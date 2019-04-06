<template>
  <div class="py-3">
    <h1>contact form</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        comment: '',
        packages: null,
        referral: null,
        otherReferral: null,
        submitText: 'Submit'
      },
      response: null,
      submissionAttempt : false,
      submissionSuccess: false,
      submitButtonVariant: 'outline-primary',
      errors: {
        any: false,
        name: '',
        email: '',
        phone: '',
        referral: '',
        otherReferral: ''
      },
      packages: [
        { text: 'Package Types', value: null },
        'Open Air Package', 'LED Booth Package', 'ENDLESS VIP Package'
      ],
      referralOptions: [
        'Friends','Yelp','Wedding Wire','Instagram','Other'
      ],
      show: true
    }
  },
  mounted: function () {
    if (process.client) {
        var paramsString = window.location.search;
        var searchParams = new URLSearchParams(paramsString);
        var newFormValue = '';
        if (searchParams.has("package")){
          // console.log('Package ' + searchParams.get("package"));
          // this.form.packages = 'Package ' + searchParams.get("package") ;
          var queryValue = searchParams.get("package") ;
          this.packages.forEach(function findMostSimilarPackage(currentValue) {
            if (currentValue.toString().substring(0, queryValue.length) == queryValue) {
              // console.log(currentValue)
              newFormValue = currentValue;
            }
          });
          this.form.packages = newFormValue;
          // search for the most similiar package in the set.
        }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(e) {

    },
    validateForm: function(){
      if (!this.submissionAttempt) { return; }
      this.errors.any = false;
      this.errors.name = '';
      this.errors.email = '';
      this.errors.phone = '';
      this.errors.referral = '';
      this.errors.otherReferral = '';

      if (!this.form.name) {
        this.errors.any = true;
        this.errors.name ='Full Name required';
      } else if (!this.form.name.includes(' ')){
        this.errors.any = true;
        this.errors.name ='Full Name required';
      }

      if (!this.form.phone) {
        this.errors.any = true;
        this.errors.phone ='Phone required';
      }

      if (!this.form.email) {
        this.errors.any = true;
        this.errors.email = 'Email required';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.any = true;
        this.errors.email = 'Valid email required';
      }

      if (!this.form.referral) {
        this.errors.any = true;
        this.errors.referral ='Referral required';
      }

      if (this.form.referral == 'Other' && !this.form.otherReferral) {
        this.errors.any = true;
        this.errors.otherReferral ='Other referral required';
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
      return this.errors[element] ? false : true;
    },
    onSubmit () {
      this.submissionAttempt = true;
      var notReadyToProceed = this.validateForm();
      if (notReadyToProceed) {
        return;
      } else {
        // this.$refs.form.submit();

        fetch("/submit-success", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact-us",
            ...this.form
          })
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
    onReset (evt) {
      evt.preventDefault();
      /* Reset form values */
      this.form.name =  '';
      this.form.email = '';
      this.form.phone = '';
      this.form.comment = '';
      this.form.submitText =  'Submit';
      this.errors.any = false;
      /* Trick to reset/clear native browser form validation state */
      this.$nextTick(() => { this.show = true });

    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>
