Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true,
		}
	},
	template: `
		<div class="product">
			<div class="product-image">
				<img v-bind:src="image">
			</div>

			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if="inventory > 10">In stock</p>
				<p v-else-if="inventory <= 10 && inventory > 0">In stock. Only {{ inventory }} left!</p>
				<p v-else>Out of stock</p>
				<p v-show="premium">Premium user</p>

				<ul>
					<li v-for="detail in details"> {{detail}}</li>
				</ul>

				<div v-for="(variant, index) in variants" 
					:key="variant.variantId" 
					class="color-box" 
					:style="{ backgroundColor: variant.variantColor }"
				@mouseover="updateProduct(index)">
				</div>

				<button v-on:click="addToCart" 
					:disabled="inventory <= 0"
					:class=" { disabledButton: inventory <= 0 } ">Add to Cart</button>
			</div>

			<div>
				<h2>Reviews</h2>
				<p v-show="reviews.length <= 0">There are no reviews yet.</p>
				<ul>
					<li v-for="review in reviews"> 
						<p>{{ review.name }}</p>
						<p>Rating: {{ review.rating }}</p>
						<p>{{ review.review }}</p>
					</li>
				</ul>
			</div>

			<product-review @review-submitted="addReview"></product-review>
		</div>
	`,
	data () {
		return {
			brand: 'Vue Mastery',
			product: 'Socks',
			selectedVariant: 0,
			details: ["80% Cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{
					variantId: 2234,
					variantColor: "green",
					variantImage: "assets/vmSocks-green-onWhite.jpg",
					variantQuantity: 10,
				},
				{
					variantId: 2235,
					variantColor: "blue",
					variantImage: "assets/vmSocks-blue-onWhite.jpg",
					variantQuantity: 0,
				}
			],
			reviews: [],
		}
	},
	methods: {
		addToCart: function () {
			this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
			this.inventory -= 1;
		},
		updateProduct: function(index) {
			this.selectedVariant = index;
			console.log(index);
		},
		addReview(productReview) {
			this.reviews.push(productReview)
		}
	},
	computed: {
		title () {
			return this.brand + ' ' + this.product;
		},
		image () {
			return this.variants[this.selectedVariant].variantImage;
		},
		inventory () {
			return this.variants[this.selectedVariant].variantQuantity;
		},
	}

}); 

Vue.component('product-review', {
	template: `
		<form class="review-form" @submit.prevent="onSubmit">

		<p>
			<label for="name">Name:</label>
			<input id="name" v-model="name">
		</p>

		<p>
			<label for="review">Review:</label>
			<textarea id="review" v-model="review" required></textarea>
		</p>

		<p>
			<label for="rating">Rating:</label>
			<select id="rating" v-model.number="rating">
				<option>5</option>
				<option>4</option>
				<option>3</option>
				<option>2</option>
				<option>1</option>
			</select>
		</p>

		<p>
			<input type="submit" value="Submit">
		</p>
	`,
	data() {
		return {
			name: null,
			review: null,
			rating: null
		}
	},
	methods: {
		onSubmit () {
			let productReview = {
				name: this.name,
				review: this.review,
				rating: this.rating
			}
			this.$emit('review-submitted', productReview)
			this.name = null
			this.review = null
			this.rating = null
		}
	}
})


var app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cart: [],
	},
	methods: {
		addToCart(id) {
			this.cart.push(id);
		}
	}
	
});

