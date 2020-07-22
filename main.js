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
				variantColor: "green"
			},
			{
				variantId: 2235,
				variantColor: "blue"
			}
		],
	}
});

