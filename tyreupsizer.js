function f1()
{
	displayON() //turn on visibility of the 3 p tags 
	var bw=document.getElementById("bwidth").value;
	var bs=document.getElementById("bsidewall").value;
	var br=document.getElementById("brim").value;
    var r1=((bs/100)*bw)+br*12.7;
	var aw=document.getElementById("awidth").value;
	var as=document.getElementById("asidewall").value;
	var ar=document.getElementById("arim").value;
	var r2=((as/100)*aw)+ar*12.7;
	var d1=r1*2;var d2=r2*2
	var dif=((d2-d1)*100/d1).toFixed(2);
	var speed=(d2*100/d1).toFixed(2);
	var radi=(r2-r1).toFixed(2);
	if (r1!=r2)
	{
    (dif<=3&&dif>=-3)?
	(document.getElementById("difference1").innerHTML="The total diameter variation is  "+dif+"% ,you can safely upgrade without largely affecting the drive dynamics")
:
	(document.getElementById("difference1").innerHTML="The total diameter variation is  "+dif+"% ,you can not safely upgrade")
     document.getElementById("difference2").innerHTML="If you are travelling at a speed of 100kmph then your actual speed would be "+speed+"kmph"
     
	 if(dif>0){
		document.getElementById("difference3").innerHTML="The ground clearance of your car will increase by "+radi+"mm"
	 }
	 else{
		document.getElementById("difference3").innerHTML="The ground clearance of your car will decrease by "+radi.substring(1)+"mm"
	 }
	 
	}
	else{
		document.getElementById("difference1").innerHTML="No Change";
		document.getElementById("difference2").style.display="none";
		document.getElementById("difference3").style.display="none";

	}
	}

function displayON()
{
	document.getElementById("difference1").style.display="block";
	document.getElementById("difference2").style.display="block";
	document.getElementById("difference3").style.display="block";
}