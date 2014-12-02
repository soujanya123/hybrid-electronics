var binarycounter = function()
{
	this.cbc;
	var time;
	var x,bin = [],counter = 0;;
	this.init = function(){
	}
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function() {
		var localCounter = this.counter;
		if(typeof(this.counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bc").text(localCounter);
		if(b[0] ==true)
			document.getElementById("b3_binary_counter").src = "images/lightbulb1_up.png"
		else
			document.getElementById("b3_binary_counter").src = "images/lightbulb_up.png"
		if(b[1] ==true)
			document.getElementById("b2_binary_counter").src = "images/lightbulb1_up.png"
		else
			document.getElementById("b2_binary_counter").src = "images/lightbulb_up.png"
		if(b[2] ==true)
			document.getElementById("b1_binary_counter").src = "images/lightbulb1_up.png"
		else
			document.getElementById("b1_binary_counter").src = "images/lightbulb_up.png"
		if(b[3] ==true)
			document.getElementById("b0_binary_counter").src = "images/lightbulb1_up.png"
		else
			document.getElementById("b0_binary_counter").src = "images/lightbulb_up.png"
		localCounter++;
		if(localCounter == 16)
			localCounter = 0;
		this.counter = localCounter;
	}
	var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		
		time = setInterval(scope.updatecounter, ((this.cbc)*10));
	}
}
var bcdcounter = function()
{
	this.cbcd;
	var x,bin = [],counter = 0;
	var time;
	this.init = function(){
		for(var i=0;i<10;i++)
			bin[i] = i.toString(2);
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var localCounter = this.counter;
		if(typeof(this.counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bcd").text(localCounter);
		if(b[0] ==true)
		document.getElementById("b3_bcd_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b3_bcd_counter").src = "images/lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b2_bcd_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b2_bcd_counter").src = "images/lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b1_bcd_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b1_bcd_counter").src = "images/lightbulb_up.png"
		if(b[3] ==true)
		document.getElementById("b0_bcd_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b0_bcd_counter").src = "images/lightbulb_up.png"
		localCounter++;
		if(localCounter == 10)
			localCounter = 0;
		this.counter = localCounter;
	}
	var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cbcd)*10));
	}
}
var johncounter = function()
{
	this.cjohn;
	var x,bin = [],counter = 0;
	var time;
	var data = new Array("1000","1100","1110","1111","0111","0011","0001","0000");
	this.init = function(){
	
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var b = data[counter].split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		if(b[3] ==true)
		document.getElementById("b3_john_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b3_john_counter").src = "images/lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b2_john_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b2_john_counter").src = "images/lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b1_john_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b1_john_counter").src = "images/lightbulb_up.png"
		if(b[0] ==true)
		document.getElementById("b0_john_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b0_john_counter").src = "images/lightbulb_up.png"
		counter++;
		if(counter == 8)
			counter = 0;
		return
	}
var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cjohn)*10));
	}
}
var ringcounter = function()
{
	this.cring;
	var x,bin = [],counter = 0;
	var time;
	var data = new Array("0000","0001","0010","0100", "1000" , "0001", "0010","0100", "1000");
	this.init = function(){
		for(var i=0;i<data.length;i++)
			bin[i] = data[i].toString(2);
		//alert(bin)
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		
		if(b[3] ==true)
		document.getElementById("b0_ring_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b0_ring_counter").src = "images/lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b1_ring_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b1_ring_counter").src = "images/lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b2_ring_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b2_ring_counter").src = "images/lightbulb_up.png"
		if(b[0] ==true)
		document.getElementById("b3_ring_counter").src = "images/lightbulb1_up.png"
		else
		document.getElementById("b3_ring_counter").src = "images/lightbulb_up.png"
		counter++;
		if(counter == data.length)
			counter = 0;
		return
	}
var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cring)*10));
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
		
	
		
		var obj_binarycounter = new binarycounter();
		var obj_bcdcounter = new bcdcounter();
		var obj_johncounter = new johncounter();
		var obj_ringcounter = new ringcounter();
		
	
	//binary counter
	{
	$("#start_bc").click(function(){
		obj_binarycounter.init();
		obj_binarycounter.startcounter();
		});
	$("#cbc").change(function(){
			obj_binarycounter.cbc = ($("#cbc").val()) ;
			});
	$("#stop_bc").click(function(){
		obj_binarycounter.destruct();
		});
	}
	//bcd counter
	{
	obj_bcdcounter.init();
	$("#start_bcd").click(function(){
		obj_bcdcounter.init();
		obj_bcdcounter.startcounter();
		});
	$("#cbcdc").change(function(){
			obj_bcdcounter.cbcd = ($("#cbcdc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_bcd").click(function(){
		obj_bcdcounter.destruct();
		});
	}
	//johnasen counter
	{
		obj_johncounter.init();
	$("#start_john").click(function(){
		obj_johncounter.init();
		obj_johncounter.startcounter();
		});
	$("#cjohnc").change(function(){
			obj_johncounter.cjohn = ($("#cjohnc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_john").click(function(){
		obj_johncounter.destruct();
		});
	}
	//ring counter
	{
		//obj_ringcounter.init();
	$("#start_ring").click(function(){
		//obj_ringcounter.init();
		obj_ringcounter.startcounter();
		});
	$("#cringc").change(function(){
			obj_ringcounter.cring = ($("#cringc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_ring").click(function(){
		obj_ringcounter.destruct();
		});
	}
	}
	});
		