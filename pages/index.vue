<template>
  <b-container fluid>

<!--       <b-col md="4">
          <h1 class="title">ENDLESS PHOTOBOOTHS</h1>
          <br>
          <span class="subtitle">Ventura County Photo Booth Rentals</span>
          <br>
          <br>
          <b-button class="contact-btn"
                    size="lg"
                    href="tel:+18057108997">
            Call
          </b-button>
          <b-button class="contact-btn"
                    size="lg"
                    href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">
            Email
          </b-button>
          <br>
          <br>

      </b-col>
      <b-col md="8"> -->
      <h1 class="title">ENDLESS PHOTO{{spaceForMobile}}BOOTHS</h1>
      <div class="subtitle">Ventura County Photo Booth Rentals</div>
      <br>
    <b-row>
      <b-col>
        <HomeCarousel/>
      </b-col>
    </b-row>

    <!-- Make a non fluiid container for the rest of the content -->
    <br>
    <br>
    <!-- Home info section -->
    <b-row>
      <b-col md="10" offset-md="1">
      <br>
      <h1 class="title">We provide:</h1>
      <ul>
        <li>Service to Ventura County, Los Angeles County and Santa Barbara County for all events!</li>
        <li>A fun way to remember those special days &mdash; not just for you, but for your family & friends as well!</li>
        <li>Flexibility for every type of event or occasion you have. If there is a photo booth at a wedding, corporate party, or any event, everyone will want to jump in and take a set of fun pictures that they can take home.</li>
        <li>Affordable and quality photo booth rentals with many great and amazing options. Different backdrop options including Rose Gold, Red, Silver and more.</li>
      </ul>
      </b-col>
    </b-row>
    <br>
    <br>
    <!-- Package Info Section -->
    <b-row>
      <b-col offset-md="1" md="10">
        <h1 class="title">ALL Photo Booth Packages Include:</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col order-md="2" md="3">
        <img class="d-block img-fluid zoomable-img"
             src="~assets/images/home/all_include.jpg"
             alt="Endless Photo Booths Ventura County logo">
      </b-col>
      <b-col offset-md="1" order-md="1" md="7">
        <ul>
          <li>Props</li>
          <li>Different backdrop options: Rose Gold, Red, Silver and more</li>
          <li>2 Strips with 3 Photos Taken</li>
          <li>Copies for Everyone in Photo</li>
          <li>Unlimited Use of Booth</li>
          <li>Open air Photo Booth</li>
          <li>Custom Text For Bottom Of Picture</li>
          <li>Person to Run Photo Booth</li>
          <li>Drop off and Pickup Included</li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-md="1" md="10">
        <h1 class="title">Our Photo Booth Styles:</h1>
        <br>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-md="1" md="5">
          <div class="card border-0">
            <img src="~assets/images/home/enclosed_booth.png" alt="Endless Photo Booths Slide One" class="card-img-top photobooth-style-img">
            <div class="card-body">
              <h5 class="card-title">Enclosed Photo Booths</h5>
              <p class="card-text">The LED Photo Booth Enclosure is great fun for all events and will give your party an amazing look and feel to. This gives a more private session for your guest and adds a cool, color changing background texture to brighten up every print. The enclosure is able to fit up to 10 or more people in a shot. So if you want that different look to your party and pictures, the LED enclosure is what you want!</p>
            </div>
          </div>
      </b-col>
      <b-col md="5">
          <div class="card offset-md-1 border-0">
            <img src="~assets/images/home/open_booth.jpg" alt="Endless Photo Booths Slide Two" class="card-img-top photobooth-style-img">
            <div class="card-body">
              <h5 class="card-title">Open Photo Booths</h5>
              <p class="card-text">This Open Air booth is great for house parties or smaller venues and space limitations. Your guest are able to see and even jump in to the shot for a Photo Bomb. Able to fit up to 10 people in a shot. Black, Backdrop Curtain and Curtain Stand. Photo Booth can fit in spaces from 5ft to 8ft and must be at least 6.5ft back from the curtain.</p>
            </div>
          </div>
      </b-col>
    </b-row>
    <br>
    <br>
    <!-- End Section -->
    <b-row>
      <b-col>
      <div> Ventura Photo Booth Rentals will be a perfect addition to any event! <nuxt-link class="contact-us-link" to="/contact-us">Contact us today!</nuxt-link></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HomeCarousel from '~/components/HomeCarousel.vue'
import mediumZoom from 'medium-zoom'

export default {
  components: {
    Logo,
    HomeCarousel
  },
  mounted(){
    mediumZoom('.zoomable-img')
  },
  computed: {
    // a computed getter
    spaceForMobile: function () {
      var check = false;

      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

        return check ? ' ' : '';
    }
  }
}
</script>

<style>
.title {
  letter-spacing: 4px;
  display: block;
  font-weight: 300;
  /*color: white;*/
  color: #317FBC;
  text-align: center;
}

.subtitle {
  color: #317FBC;
  /*color: white;*/
  font-weight: 300;
  word-spacing: 5px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contact-us-link{
  color: #317FBC;
  text-decoration: underline;
}
.contact-btn {
  background-color: #317FBC;
}

.photobooth-style-img {
  max-height: 250px;
}

ul{
  text-align: left;
}

li{
  margin-top: 10px;
}

.links {
  padding-top: 15px;
}
</style>
