// List of the products
var products = {
"Apple" : {"single": 5, "box": 55},
"Apricot" : {"pack": 15},
"Avocado" : {"single": 22, "box": 242},
"Berries" : {"pack": 30},
"Grape" : {"pack": 25},
"Orange"  : {"single": 7, "box": 77},
"Passion" : {"single": 1, "pack": 25},
"Peach" : {"single": 3, "box": 33},
"Pear" : {"single": 4, "box": 44},
"Tomato" : {"single": 2, "box": 22},
};



// A function to sum the amount due
function sumTotal(x) {
	var sum = 0;
	for (i=0; i<x.length; i++){
		sum = x[i] + sum;
	};
	alert("The item was added to your cart\nThe total due: R" + sum.toFixed(2));
};



// A function to add a new cart item
function cartItem(product, type, price) {
	this.product = product;
	this.type = type;
	this.price = price;
};



// A function to add items to the cart and display the total
// Items from the catalogue page and the item pages

if (JSON.parse(window.localStorage.getItem("Cart")) === null) {
	var Cart = [];
	var Total = [];
} else {
	var Cart = JSON.parse(window.localStorage.getItem("Cart"));
	var Total = JSON.parse(window.localStorage.getItem("Total"));
};

function quickAdd() {

	var applesSingle = document.getElementById("applesSingle").checked;
	var applesBox = document.getElementById("applesBox").checked;
	var apricotsPack = document.getElementById("apricotsPack").checked;
	var avocadosSingle = document.getElementById("avocadosSingle").checked;
	var avocadosBox = document.getElementById("avocadosBox").checked;
	var berriesPack = document.getElementById("berriesPack").checked;
	var grapesPack = document.getElementById("grapesPack").checked;
	var orangesSingle = document.getElementById("orangesSingle").checked;
	var orangesBox = document.getElementById("orangesBox").checked;
	var passionSingle = document.getElementById("passionSingle").checked;
	var passionPack = document.getElementById("passionPack").checked;
	var peachesSingle = document.getElementById("peachesSingle").checked;
	var peachesBox = document.getElementById("peachesBox").checked;
	var pearsSingle = document.getElementById("pearsSingle").checked;
	var pearsBox = document.getElementById("pearsBox").checked;
	var tomatoesSingle = document.getElementById("tomatoesSingle").checked;
	var tomatoesBox = document.getElementById("tomatoesBox").checked;

	if (applesSingle == true){
		Total.push(products.Apple.single);
		sumTotal(Total);
		Cart.push(new cartItem("Apple", "Single", products.Apple.single)); 
		document.getElementById("applesSingle").checked = false;

	} else if (applesBox == true) {
		Total.push(products.Apple.box);
		sumTotal(Total);
		Cart.push(new cartItem("Apples", "Box of 12", products.Apple.box));
		document.getElementById("applesBox").checked = false;

	} else if (apricotsPack == true) {	
		Total.push(products.Apricot.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Apricots", "1kg Pack", products.Apricot.pack));
		document.getElementById("apricotsPack").checked = false;

	} else if (avocadosSingle == true) {
		Total.push(products.Avocado.single);
		sumTotal(Total);
		Cart.push(new cartItem("Avocado", "Single", products.Avocado.single)); 
		document.getElementById("avocadosSingle").checked = false;

	} else if (avocadosBox == true) {
		Total.push(products.Avocado.box);
		sumTotal(Total);
		Cart.push(new cartItem("Avocados", "Box of 12", products.Avocado.box));
		document.getElementById("avocadosBox").checked = false;

	} else if (berriesPack == true) {
		Total.push(products.Berries.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Mixed Berries", "1kg Pack", products.Berries.pack));
		document.getElementById("berriesPack").checked = false;

	} else if (grapesPack == true) {	
		Total.push(products.Grape.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Grapes", "1kg Pack", products.Grape.pack));
		document.getElementById("grapesPack").checked = false;

	} else if (orangesSingle == true) {
		Total.push(products.Orange.single);
		sumTotal(Total);
		Cart.push(new cartItem("Orange", "Single", products.Orange.single)); 
		document.getElementById("orangesSingle").checked = false;

	} else if (orangesBox == true) {
		Total.push(products.Orange.box);
		sumTotal(Total);
		Cart.push(new cartItem("Oranges", "Box of 12", products.Orange.box));
		document.getElementById("orangesBox").checked = false;

	} else if (passionSingle == true) {
		Total.push(products.Passion.single);
		sumTotal(Total);
		Cart.push(new cartItem("Passion Fruit", "Single", products.Passion.single)); 
		document.getElementById("passionSingle").checked = false;

	} else if (passionPack == true) {
		Total.push(products.Passion.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Passion Fruit", "1kg Pack", products.Passion.pack));
		document.getElementById("passionPack").checked = false;

	} else if (peachesSingle == true) {
		Total.push(products.Peach.single);
		sumTotal(Total);
		Cart.push(new cartItem("Peach", "Single", products.Peach.single)); 
		document.getElementById("peachesSingle").checked = false;

	} else if (peachesBox == true) {
		Total.push(products.Peach.box);
		sumTotal(Total);
		Cart.push(new cartItem("Peaches", "Box of 12", products.Peach.box));
		document.getElementById("peachesBox").checked = false;

	} else if (pearsSingle == true) {
		Total.push(products.Pear.single);
		sumTotal(Total);
		Cart.push(new cartItem("Pear", "Single", products.Pear.single)); 
		document.getElementById("pearsSingle").checked = false;

	} else if (pearsBox == true) {	
		Total.push(products.Pear.box);
		sumTotal(Total);
		Cart.push(new cartItem("Pears", "Box of 12", products.Pear.box));
		document.getElementById("pearsBox").checked = false;

	} else if (tomatoesSingle == true) {
		Total.push(products.Tomato.single);
		sumTotal(Total);
		Cart.push(new cartItem("Tomato", "Single", products.Tomato.single)); 
		document.getElementById("tomatoesSingle").checked = false;

	} else if (tomatoesBox == true) {
		Total.push(products.Tomato.box);
		sumTotal(Total);
		Cart.push(new cartItem("Tomatoes", "Box of 12", products.Tomato.box));
		document.getElementById("tomatoesBox").checked = false;

	} else {
		alert("Please add an item :)");
	}

window.localStorage.setItem("Total", JSON.stringify(Total));
window.localStorage.setItem("Cart", JSON.stringify(Cart));
};

function Add() {

	var productPage = document.title;

	if (productPage == "Apples") {
		var applesSingle = document.getElementById("applesSingleInfo").checked;
		var applesBox = document.getElementById("applesBoxInfo").checked;
	} else if (productPage == "Apricots") {
		var apricotsPack = document.getElementById("apricotsPackInfo").checked;
	} else if (productPage == "Avocados") {
		var avocadosSingle = document.getElementById("avocadosSingleInfo").checked;
		var avocadosBox = document.getElementById("avocadosBoxInfo").checked;
	} else if (productPage == "Mixed Berries") {
		var berriesPack = document.getElementById("berriesPackInfo").checked;
	} else if (productPage == "Grapes") {
		var grapesPack = document.getElementById("grapesPackInfo").checked;
	} else if (productPage == "Oranges") {
		var orangesSingle = document.getElementById("orangesSingleInfo").checked;
		var orangesBox = document.getElementById("orangesBoxInfo").checked;
	} else if (productPage == "Passion Fruit") {
		var passionSingle = document.getElementById("passionSingleInfo").checked;
		var passionPack = document.getElementById("passionPackInfo").checked;
	} else if (productPage == "Peaches") {
		var peachesSingle = document.getElementById("peachesSingleInfo").checked;
		var peachesBox = document.getElementById("peachesBoxInfo").checked;
	} else if (productPage == "Pears") {
		var pearsSingle = document.getElementById("pearsSingleInfo").checked;
		var pearsBox = document.getElementById("pearsBoxInfo").checked;
	} else if (productPage == "Tomatoes") {
		var tomatoesSingle = document.getElementById("tomatoesSingleInfo").checked;
		var tomatoesBox = document.getElementById("tomatoesBoxInfo").checked;
	};

if (applesSingle == true){
		Total.push(products.Apple.single);
		sumTotal(Total);
		Cart.push(new cartItem("Apple", "Single", products.Apple.single)); 
		document.getElementById("applesSingleInfo").checked = false;

	} else if (applesBox == true) {
		Total.push(products.Apple.box);
		sumTotal(Total);
		Cart.push(new cartItem("Apples", "Box of 12", products.Apple.box));
		document.getElementById("applesBoxInfo").checked = false;

	} else if (apricotsPack == true) {	
		Total.push(products.Apricot.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Apricots", "1kg Pack", products.Apricot.pack));
		document.getElementById("apricotsPackInfo").checked = false;

	} else if (avocadosSingle == true) {
		Total.push(products.Avocado.single);
		sumTotal(Total);
		Cart.push(new cartItem("Avocado", "Single", products.Avocado.single)); 
		document.getElementById("avocadosSingleInfo").checked = false;

	} else if (avocadosBox == true) {
		Total.push(products.Avocado.box);
		sumTotal(Total);
		Cart.push(new cartItem("Avocados", "Box of 12", products.Avocado.box));
		document.getElementById("avocadosBoxInfo").checked = false;

	} else if (berriesPack == true) {
		Total.push(products.Berries.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Mixed Berries", "1kg Pack", products.Berries.pack));
		document.getElementById("berriesPackInfo").checked = false;

	} else if (grapesPack == true) {	
		Total.push(products.Grape.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Grapes", "1kg Pack", products.Grape.pack));
		document.getElementById("grapesPackInfo").checked = false;

	} else if (orangesSingle == true) {
		Total.push(products.Orange.single);
		sumTotal(Total);
		Cart.push(new cartItem("Orange", "Single", products.Orange.single)); 
		document.getElementById("orangesSingleInfo").checked = false;

	} else if (orangesBox == true) {
		Total.push(products.Orange.box);
		sumTotal(Total);
		Cart.push(new cartItem("Oranges", "Box of 12", products.Orange.box));
		document.getElementById("orangesBoxInfo").checked = false;

	} else if (passionSingle == true) {
		Total.push(products.Passion.single);
		sumTotal(Total);
		Cart.push(new cartItem("Passion Fruit", "Single", products.Passion.single)); 
		document.getElementById("passionSingleInfo").checked = false;

	} else if (passionPack == true) {
		Total.push(products.Passion.pack);
		sumTotal(Total);
		Cart.push(new cartItem("Passion Fruit", "1kg Pack", products.Passion.pack));
		document.getElementById("passionPackInfo").checked = false;

	} else if (peachesSingle == true) {
		Total.push(products.Peach.single);
		sumTotal(Total);
		Cart.push(new cartItem("Peach", "Single", products.Peach.single)); 
		document.getElementById("peachesSingleInfo").checked = false;

	} else if (peachesBox == true) {
		Total.push(products.Peach.box);
		sumTotal(Total);
		Cart.push(new cartItem("Peaches", "Box of 12", products.Peach.box));
		document.getElementById("peachesBoxInfo").checked = false;

	} else if (pearsSingle == true) {
		Total.push(products.Pear.single);
		sumTotal(Total);
		Cart.push(new cartItem("Pear", "Single", products.Pear.single)); 
		document.getElementById("pearsSingleInfo").checked = false;

	} else if (pearsBox == true) {	
		Total.push(products.Pear.box);
		sumTotal(Total);
		Cart.push(new cartItem("Pears", "Box of 12", products.Pear.box));
		document.getElementById("pearsBoxInfo").checked = false;

	} else if (tomatoesSingle == true) {
		Total.push(products.Tomato.single);
		sumTotal(Total);
		Cart.push(new cartItem("Tomato", "Single", products.Tomato.single)); 
		document.getElementById("tomatoesSingleInfo").checked = false;

	} else if (tomatoesBox == true) {
		Total.push(products.Tomato.box);
		sumTotal(Total);
		Cart.push(new cartItem("Tomatoes", "Box of 12", products.Tomato.box));
		document.getElementById("tomatoesBoxInfo").checked = false;

	} else {
		alert("Please add an item :)");
	};

	window.localStorage.setItem("Cart", JSON.stringify(Cart));
	window.localStorage.setItem("Total", JSON.stringify(Total));	
};



// Function to print the cart items and the total
var printCart = "<tr><td><b>Product</b></td><td><b>Type</b></td><td><b>Price</b></td></tr>";
var myCart = JSON.parse(window.localStorage.getItem("Cart"));
var myTotal = JSON.parse(window.localStorage.getItem("Total"));

function getCart() {
	if (myCart === null){
		document.getElementById("print_total").innerHTML = "Please add some products";
	} else {
		for (i=0; i<myCart.length; i++){
			printCart += "<tr><td>" + myCart[i].product + "</td><td>" + myCart[i].type + "</td><td>" + myCart[i].price + "</td></tr>";
		};
		var sum = 0;
		for (i=0; i<myCart.length; i++){
			sum = myTotal[i] + sum;
		};
		myCartTotal = sum.toFixed(2);
		VAT = (myCartTotal*0.14).toFixed(2);
		myCartTotalVAT = (myCartTotal*1.14).toFixed(2);
		document.getElementById("print_cart").innerHTML = printCart
		document.getElementById("print_total").innerHTML ="Total (exc VAT) : R" + myCartTotal + "<br>VAT at 14% : R" + VAT + "<br><b>Grand Total : R" + myCartTotalVAT + "</b>";
	};
};



// Function to clear the cart
function clearCart() {

	localStorage.clear();

	document.getElementById("print_cart").innerHTML = "";
	document.getElementById("print_total").innerHTML = "Please add some products";
	document.getElementById("grand_total").innerHTML = "";

	document.getElementById("Buy5").checked = false;
	document.getElementById("Buy10").checked = false;
	document.getElementById("Buy15").checked = false;
	document.getElementById("Delivery").checked = false;
	document.getElementById("Collection").checked = false;
	document.getElementById("PO").checked = false;
	document.getElementById("Hand").checked = false;
	document.getElementById("Rush").checked = false;
};



// A function to add discount and/or delivery options 
var discount = 0;
var delivery = 0;

function options() {

	var discount = 0;
	var delivery = 0;
	var buyFive = document.getElementById("Buy5").checked;
	var buyTen = document.getElementById("Buy10").checked;
	var buyFifteen = document.getElementById("Buy15").checked;
	var delPO = document.getElementById("PO").checked;
	var delHand = document.getElementById("Hand").checked;
	var delRush = document.getElementById("Rush").checked;


	if (buyFive == true){
		discount = (myCartTotal*0.05).toFixed(2);
	} else if (buyTen == true) {
		discount = (myCartTotal*0.10).toFixed(2);
	} else if (buyFifteen == true) {
		discount = (myCartTotal*0.15).toFixed(2);
	} else {
		discount = 0;
	};

	if (delPO == true){
		delivery = 10;
	} else if (delHand == true) {
		delivery = 50;
	} else if (delRush == true) {
		delivery = 200;
	} else {
		delivery = 0;
	};

	newVAT = ((Number(myCartTotal) - discount)*0.14).toFixed(2);
	grandTotal = ((Number(myCartTotal) - discount)*1.14 + delivery).toFixed(2);
	document.getElementById("grand_total").innerHTML ="Total (exc VAT) : R" + myCartTotal + "<br>Discount : -R" + discount + "<br>VAT at 14% : R" + newVAT + "<br>Delivery : R" + delivery + "<br><b>Grand Total : R" + grandTotal + "</b>";
};



// A function to confirm the order, generate an order number and clear the cart
// Reference format : yyyy mm dd xxx (where xxx is a random number)
var orderNumber = 0;
function confirmOrder() {
	var d = new Date();
	var day = ("0" + d.getDate()).slice(-2);
	var month = ("0" + (d.getMonth() + 1)).slice(-2);
	var year = d.getFullYear();
	var	rndNumber = ("00" + (Math.floor(Math.random() * 1000) + 1)).slice(-3);
	orderNumber = year + month + day + rndNumber;
	alert("Your order was placed\nReference: " + orderNumber);
	clearCart();
};



// A function to calculate the total and number of items
function total(){
	myTotal = JSON.parse(window.localStorage.getItem("Total"));
	if (myTotal === null){
		document.getElementById("total").innerHTML = "Please add items";
	} else {
		var sum = 0;
		var count = 0;
		for (i=0; i<myTotal.length; i++){
			sum = myTotal[i] + sum;
			count += 1
		};
		myCartTotal = sum.toFixed(2);
		document.getElementById("total").innerHTML ="No. of items: " + count + "<br>Total: R" + myCartTotal;
	};
};