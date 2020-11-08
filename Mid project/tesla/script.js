new fullpage('#full-page', {
	navigation : true,
	navigationPosition: 'left',
	fixedElements: '#logo, #orderbar, #sidebar',
});


function change(folder){
	var radio = document.getElementsByName('color');
	var image = document.getElementById('car');
	if(radio[0].checked){
		image.src = folder + '/color1.jpg';
	}
	if(radio[1].checked){
		image.src = folder + '/color2.jpg';
	}
	if(radio[2].checked){
		image.src = folder + '/color3.jpg';
	}
	if(radio[3].checked){
		image.src = folder + '/color4.jpg';
	}
	if(radio[4].checked){
		image.src = folder + '/color5.jpg';
	}
}
 
function changeInterior(folder){
	var radio = document.getElementsByName('interior');
	var image = document.getElementById('interior');
	if(radio[2].checked){
		image.src = folder + '/interior1.jpg';
	}
	if(radio[1].checked){
		image.src = folder + '/interior2.jpg';
	}
	if(radio[0].checked){
		image.src = folder + '/interior3.jpg';
	}
}

function openMenu(){
	document.getElementById('sidebar').classList.toggle('active');
}
function getSum(){
	var total = 0;
	var amount = document.getElementsByName('configuration');
	if(amount[0].checked){
		total = parseInt(amount[0].value);
		document.getElementById('amount').innerText = "$" + total;
	}
	if(amount[1].checked){
		total = parseInt(amount[1].value);
		document.getElementById('amount').innerText = "$" + total;
	}
	if(amount[2].checked){
		total = parseInt(amount[2].value);
		document.getElementById('amount').innerText = "$" + total;
	}
}
function getAmount(){
	var total = 0;
	var amount = document.getElementsByName('configuration');
	if(amount[0].checked){
		total = parseInt(amount[0].value);
		document.getElementById('amount').innerText = "$" + total;
	}
	if(amount[1].checked){
		total = parseInt(amount[1].value);
		document.getElementById('amount').innerText = "$" + total;
	}


	var btns = document.getElementsByName('numOfSeats');
	if(btns[0].checked){
		total += parseInt(btns[0].value);
		document.getElementById('amount').innerText = "$" + total;
	}
	if(btns[1].checked){
		total += parseInt(btns[1].value);
		document.getElementById('amount').innerText = "$" + total;
	}
	if(btns[2].checked){
		total += parseInt(btns[2].value);
		document.getElementById('amount').innerText = "$" + total;
	}
}

function leaveAnOrder(){
	document.getElementById('orderbar').classList.toggle('active');
}