<template>
    <div class="product">
      <div class="product-image">
        <img :src="image"/>
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock"> In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        
        <h3>Colors:</h3>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.variantId">
            <div class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
            ></div>
        </div>

        <button 
          v-on:click="addToCart"
          :disable="!inStock"
          :class="{ disableButton: !inStock}"
          >Add to cart</button>
        
        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>

      </div>
      
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      inStock: false,
      details: ['80% cotton','20% polyester','Gender-neutral'],
      selectedVariant: 0,
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart(){
      return this.cart ++
    },
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
    } 
    
  },

  computed: {
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    isStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if(this.premium){
        return "Free"
      } else {
        return 2.99
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
