window.onload=()=>{
	let button=document.querySelector("#btn");

	button.addEventListener("click",calculateBMI);

}

function calculateBMI(){

	//business logic

	let height=parseInt(document.querySelector("#height").value);
	let weight=parseInt(document.querySelector("#weight").value);

	let result=document.querySelector("#result");
	

	if(height==="" || isNaN(height)){
		result.innerHTML="provide a vaild Height!";
	}else if(weight==="" || isNaN(weight)){
		result.innerHTML="provide a vaild weight!";
	}else{
		let bmi=(weight/((height*height)/10000)).toFixed(2);
		result.innerHTML=`<b>BMI Result: </b><span>${bmi}</span>`;
	}
		
}