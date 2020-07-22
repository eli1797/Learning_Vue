var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		image: 'assets/vmSocks-green-onWhite.jpg',
		inventory: 9,
		details: ["80% Cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "assets/vmSocks-green-onWhite.jpg",
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "assets/vmSocks-blue-onWhite.jpg",
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function () {
			this.cart += 1;
		},
		updateProduct: function(image_loc) {
			this.image = image_loc;
		}
	}
});

