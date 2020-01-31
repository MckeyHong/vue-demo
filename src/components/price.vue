<template>
  <span>$ {{ priceValue }}</span>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'PriceFormat',
  props: {
    price: {
      default: 0
    }
  },
  computed: {
    priceValue () {
      return (this.price > 0) ? numeral(this.price).format('0,0') : 0;
    }
  }
};
</script>
