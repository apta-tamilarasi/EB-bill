let u=parseInt(prompt("Enter the unit"))
document.write("Unit = "+u+"<br>")

let b=15/100

if(u<=199){
	var total=u*1.20
	document.write(total)
}

else if(u>=200 && u<400){
	var total=u*1.50
	if(total>=400){
		var tot=total/b
		if(tot>=100){
			document.write("total= "+(tot+total))
		}

		else{
			document.write("total= "+total)
			
		}
	}

	else{
		document.write("total= "+total)
	}
}

else if(u>=400 && u<600){
	var total=u*1.80
	if(total>=400){
		var tot=total/b
		if(tot>=100){
			document.write("total= "+(tot+total))
		}

		else{
			document.write("total= "+total)
			
		}
	}

	else{
		document.write("total= "+total)
	}
}

else{
	var total=u*2
		var tot=total/b
		if(tot>=100){
			document.write("total= "+(tot+total))
		}

		else{
			document.write("total= "+total)
		}
	
}
