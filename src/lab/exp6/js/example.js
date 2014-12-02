var binarytogray = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	
		
	 }
	this.getName = function(s) 
	{
	
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	
	}
	this.switch_status = function(id)
	{
		var index = id.split("_",3)[1];
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
	
			if(previous_image == "off")
			{
				document.getElementById(id).src = "images/on.png"
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "images/off.png"
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
			}
	
		var scope = this
		scope.calculate()
	}
	this.calculate = function ()
	{
		var b0=this.switches[0].status;
		var b1=this.switches[1].status;
		var b2=this.switches[2].status;
		var b3=this.switches[3].status;
		
		var g0 = (!b1 && b0) ||(b1 && !b0)
		var g1 = (!b2&& b1) ||(b2 && !b1)
		var g2 = ((!b3 && b2) ||(b3 && !b2))
		var g3 = b3;
		
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		$("#b_tog_text").html(b)
		var g = (((g0)?1:0) * 1) + (((g1)?1:0) * 2) + (((g2)?1:0) * 4) + (((g3)?1:0) * 8);
		$("#g_tog_text").html(g)
		
		if(g0 == true)
		document.getElementById("bulb0").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb0").src = "images/lightbulbleft.png"
		
		if(g1 == true)
		document.getElementById("bulb1").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb1").src = "images/lightbulbleft.png"
		
		if(g2 == true)
		document.getElementById("bulb2").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb2").src = "images/lightbulbleft.png"
		
		if(g3 == true)
		document.getElementById("bulb3").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb3").src = "images/lightbulbleft.png"
		
	}
	
}
var graytobinary = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
		var index = id.split("_",3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
			if(previous_image == "off")
			{
				document.getElementById(id).src = "images/on.png"
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "images/off.png"
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
			}
	
		var scope = this
		scope.calculate()
	}
	this.calculate = function ()
	{
		var g0=(this.switches[0].status != null)? this.switches[0].status : false; 
		var g1=(this.switches[1].status!= null)? this.switches[1].status : false;
		var g2=(this.switches[2].status!= null)? this.switches[2].status : false;
		var g3 = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var g3xorg2 = ((!g3 && g2) ||(g3 && !g2));
		var g0xorg1 = ((!g1 && g0) ||(g1 && !g0));
		
		var a = ((!g3xorg2 && g0xorg1)|| (g3xorg2 && !g0xorg1))					
		var b = ((!g3xorg2 && g1 )||(g3xorg2 && !g1))
		var c = g3xorg2;
		var d = g3;
		
		
		
		var b1 = (((a)?1:0) * 1) + (((b)?1:0) * 2) + (((c)?1:0) * 4) + (((d)?1:0) * 8);
		$("#b_graytobinary").html(b1);
		var g = (((g0)?1:0) * 1) + (((g1)?1:0) * 2) + (((g2)?1:0) * 4) + (((g3)?1:0) * 8);
		$("#g_graytobinary").html(g);
		
		if(a ==true)
		document.getElementById("bulb4").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb4").src = "images/lightbulbleft.png"
		if(b ==true)
		document.getElementById("bulb5").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb5").src = "images/lightbulbleft.png"
		if(c ==true)
		document.getElementById("bulb6").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb6").src = "images/lightbulbleft.png"
		if(d ==true)
		document.getElementById("bulb7").src = "images/lightbulb1left.png"
		else
		document.getElementById("bulb7").src = "images/lightbulbleft.png"
	}
	
}
var bcdtoexcess = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
		var index = id.split("_",3)[1];
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
			if(previous_image == "off")
			{
				document.getElementById(id).src = "images/on.png"
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "images/off.png"
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
			}
	
		var scope = this
		scope.calculate()
	}
	this.calculate = function () {
		var b0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var b1 = (this.switches[1].status!= null)? this.switches[1].status : false;
		var b2 = (this.switches[2].status!= null)? this.switches[2].status : false;
		var b3 = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		if(b > 9) {
			$("#b_bcdtoexcess").html(b);
			$("#e_bcdtoe3").html(0);
			alert("Invalid Value");
			document.getElementById("e0_bcdtoe3").src = "images/lightbulbleft.png";
			document.getElementById("e1_bcdtoe3").src = "images/lightbulbleft.png";
			document.getElementById("e2_bcdtoe3").src = "images/lightbulbleft.png";
			document.getElementById("e3_bcdtoe3").src = "images/lightbulbleft.png";
			return;
		}
		
		var e = b+3;
		var e_binary = utility.decimalToBinary(e);
		var eArray = e_binary.toString().split("");
		
		$("#b_bcdtoexcess").html(b);
		$("#e_bcdtoe3").html(e);
		
		document.getElementById("bulb8").src = eArray[3] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb9").src = eArray[2] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb10").src = eArray[1] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb11").src = eArray[0] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";	
	}
}
var excesstobcd = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
	var index = id.split("_",3)[1];
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png"
			var json = {"name" :id,"status" : true };
			this.switches[index]=json
		} else {
			document.getElementById(id).src = "images/off.png"
			var json = {"name" :id,"status" : false };
			this.switches[index] = json
		}
		var scope = this
		scope.calculate()
	}
	this.calculate = function () {
		var w = (this.switches[0].status != null)? this.switches[0].status : false; 
		var x = (this.switches[1].status!= null)? this.switches[1].status : false;
		var y = (this.switches[2].status!= null)? this.switches[2].status : false;
		var z = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var e = (((w)?1:0) * 1) + (((x)?1:0) * 2) + (((y)?1:0) * 4) + (((z)?1:0) * 8);
		if(e == 0 || e == 1 || e == 2 || e == 13 || e == 14 || e ==15) {
			$("#e_excesstobcd").html(e);
			$("#b_excesstobcd").html(0);
			alert("Invalid Value");
			document.getElementById("b0_excesstobcd").src =  "images/lightbulbleft.png";
			document.getElementById("b1_excesstobcd").src =  "images/lightbulbleft.png";
			document.getElementById("b2_excesstobcd").src =  "images/lightbulbleft.png";
			document.getElementById("b3_excesstobcd").src =  "images/lightbulbleft.png";
			return
		}
		
		var b = e-3;
		var b_binary = utility.decimalToBinary(b);
		var bArray = b_binary.toString().split("");
		var bArray = b_binary.toString().split("");

		$("#e_excesstobcd").html(e);
		$("#b_excesstobcd").html(b);
		
		document.getElementById("bulb12").src =  bArray[3] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb13").src =  bArray[2] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb14").src =  bArray[1] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";
		document.getElementById("bulb15").src =  bArray[0] == true ? "images/lightbulb1left.png" : "images/lightbulbleft.png";		
	}
	
}

 
 $(document).ready(function(){ 
 	
 	if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
    else
	{
		
	
	$("ul.tabs").tabs("> .pane");
		
	$(":range").rangeinput({  progress: true });
		
	//binarytogray
	
	{
		var obj_binarytogray  = new binarytogray();
		obj_binarytogray.initialize();
		 $("#switches").delegate("img", "click",null, function(){
		var id=this.id;
		obj_binarytogray.switch_status(id);
	  });
	}	
	
	
	//graytobinary
	{
		var obj_graytobinary = new graytobinary();
		obj_graytobinary.initialize();
		 $("#switches1").delegate("img", "click",null, function(){
		var id=this.id;
		obj_graytobinary.switch_status(id);
	  });
	
	}
	//bcdtoexcess
	{
	var obj_bcdtoexcess = new  bcdtoexcess()
	obj_bcdtoexcess.initialize();
	 $("#switches2").delegate("img", "click",null, function(){
		var id=this.id;
		obj_bcdtoexcess.switch_status(id);
	  });
	
	}
	//excesstobcd
	{
		var obj_excesstobcd = new excesstobcd();
		obj_excesstobcd.initialize();
		 $("#switches3").delegate("img", "click",null, function(){
		var id=this.id;
		obj_excesstobcd.switch_status(id);
	  });
		
	}
	}
		});
	


		