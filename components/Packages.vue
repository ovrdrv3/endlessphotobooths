<template>
<div>
    <b-card-group deck class="py-3">
        <b-card title="Open Air">
            <b-list-group flush>
                <b-list-group-item class="py-1">Rose Gold, Red, Silver backdrop</b-list-group-item>
                <b-list-group-item class="py-1">2 Strips with 3 Photos Taken</b-list-group-item>
                <b-list-group-item class="py-1">Copies for Everyone in Photo</b-list-group-item>
                <b-list-group-item class="py-1">Unlimited Use of Booth</b-list-group-item>
                <b-list-group-item class="py-1">Open Air Photo Booth</b-list-group-item>
                <b-list-group-item class="py-1">Custom Text For Bottom Of Picture</b-list-group-item>
                <b-list-group-item class="py-1">Props</b-list-group-item>
                <b-list-group-item class="py-1">Person to Run Photo Booth</b-list-group-item>
                <b-list-group-item class="py-1">Drop off and Pickup Included</b-list-group-item>
            </b-list-group>
            <b-button slot="footer"
                      to="/contact-us?package=I"
                      variant="primary"
                      block>
                      Book
            </b-button>
        </b-card>
        <b-card title="LED Booth">
            <b-list-group flush>
                <b-list-group-item class="py-1">All of Open Air Package, BUT</b-list-group-item>
                <b-list-group-item class="py-1">LED Enclosed Booth instead of Open Air</b-list-group-item>
                <b-list-group-item class="py-1">Photo Album</b-list-group-item>
            </b-list-group>
            <b-button slot="footer"
                      to="/contact-us?package=II"
                      variant="primary"
                      block>
                      Book
            </b-button>
        </b-card>
        <b-card title="ENDLESS VIP">
            <b-list-group flush>
                <b-list-group-item class="py-1">All of LED Booth Package, PLUS</b-list-group-item>
                <b-list-group-item class="py-1">Full 4x6 Prints</b-list-group-item>
            </b-list-group>
            <b-button slot="footer"
                      to="/contact-us?package=III"
                      variant="primary"
                      block>
                      Book
            </b-button>
        </b-card>
    </b-card-group>
</div>
</template>
