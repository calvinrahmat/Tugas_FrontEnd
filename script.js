var lc = document.getElementById('login-customer');
var ls = document.getElementById('login-seller');
var btn = document.getElementById('button');
var btnCustColor = document.getElementById('tog-cust');
var btnSellerColor = document.getElementById('tog-seller');

function loginSeller() {
	lc.style.left = '-400px';
	ls.style.left = '50px';
	btn.style.left = '110px';
	btnCustColor.style.color = '#9b9b9b';
	btnSellerColor.style.color = 'white';
}
function loginCustomer() {
	lc.style.left = '50px';
	ls.style.left = '450px';
	btn.style.left = '0px';
	btnCustColor.style.color = 'white';
	btnSellerColor.style.color = '#9b9b9b';
}
