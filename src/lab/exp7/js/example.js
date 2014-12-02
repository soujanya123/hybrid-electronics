var halfadder = function()
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var input1=this.switches[0].status;
		var input2=this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = input1 && input2;
	
		if(sum ==true)
		document.getElementById("sum").src = "images/lightbulb1.png"
		else
		document.getElementById("sum").src = "images/lightbulb.png"
		if(carry ==true)
		document.getElementById("carry").src = "images/lightbulb1.png"
		else
		document.getElementById("carry").src = "images/lightbulb.png"
	}
}
var fulladder = function()
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
		var input3=(this.switches[1].status != null)? this.switches[1].status : false; 
		var input4=(this.switches[2].status!= null)? this.switches[2].status : false;
		var input5=(this.switches[3].status!= null)? this.switches[3].status : false;
		
		var sum_halfadder =(!input3 && !input4 && input5) || (!input3 && input4 && !input5) || (input3 && !input4 && !input5) || (input3 && input4 && input5)
		var carry_halfadder = (input3 && input4) || (input3 && input5) || (input4 && input5)
	
	
		if(sum_halfadder ==true)
		document.getElementById("sum_fulladder").src = "images/lightbulb1.png"
		else
		document.getElementById("sum_fulladder").src = "images/lightbulb.png"
		if(carry_halfadder ==true)
		document.getElementById("carry_fulladder").src = "images/lightbulb1.png"
		else
		document.getElementById("carry_fulladder").src = "images/lightbulb.png"
	}
}
var bitadder = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
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
		var a1 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var b1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a0 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var b0 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var cin =(this.switches[4].status != null)? this.switches[4].status : false; 
		
            
            var temp0 = ( (!a0) && b0 ) || ( a0 && (!b0) );
		var s0 = ( (!temp0) && cin) || ( temp0 && (!cin));
            var c0 = ( a0 && b0 ) || (temp0 && cin);
            
            var temp1 = ((!a1)&&b1) || (a1&&(!b1));
		var s1 = ((!temp1) && c0) || (temp1 && (!c0));
            var c1 = ( a1 && b1 ) || (temp1 && c0);
            
		
		if(s0 ==true)
		document.getElementById("sum1_2bit").src = "images/lightbulb1.png"
		else
		document.getElementById("sum1_2bit").src = "images/lightbulb.png"
		if(s1 ==true)
		document.getElementById("sum2_2bit").src = "images/lightbulb1.png"
		else
		document.getElementById("sum2_2bit").src = "images/lightbulb.png"
		if(c1 ==true)
		document.getElementById("carry_2bit").src = "images/lightbulb1.png"
		else
		document.getElementById("carry_2bit").src = "images/lightbulb.png"
	}
}
var halfsubtracter = function()
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var input1=this.switches[0].status;
		var input2=this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = !input1 && input2;
	    
		if(sum ==true)
		document.getElementById("sum_halfsub").src = "images/lightbulb1.png"
		else
		document.getElementById("sum_halfsub").src = "images/lightbulb.png"
		if(carry ==true)
		document.getElementById("carry_halfsub").src = "images/lightbulb1.png"
		else
		document.getElementById("carry_halfsub").src = "images/lightbulb.png"
	} 

}
var fullsubtracter = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
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
		var x=(this.switches[0].status != null)? this.switches[0].status : false; 
		var y=(this.switches[1].status!= null)? this.switches[1].status : false;
		var z=(this.switches[2].status!= null)? this.switches[2].status : false;
		
		var sum_halfadder =(!x && !y && z) || (!x && y && !z) || (x && !y && !z) || (x && y && z)
		var carry_halfadder = z && !( (!x && y) || (x && !y)) || (!x &&  y);
	
	
		if(sum_halfadder ==true)
		document.getElementById("sum_fullsub").src = "images/lightbulb1.png"
		else
		document.getElementById("sum_fullsub").src = "images/lightbulb.png"
		if(carry_halfadder ==true)
		document.getElementById("carry_fullsub").src = "images/lightbulb1.png"
		else
		document.getElementById("carry_fullsub").src = "images/lightbulb.png"
	}
}
var bitaddersubtracter = function()
{
	this.switches = [];
	this.initialize = function(){
		
		for(var i=0;i<9;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var a0 = (this.switches[7].status != null)? this.switches[7].status : false
		var b0 =(this.switches[6].status != null)? this.switches[6].status : false
		var a1 = (this.switches[5].status != null)? this.switches[5].status : false
		var b1 = (this.switches[4].status != null)? this.switches[4].status : false
		var a2 = (this.switches[3].status != null)? this.switches[3].status : false
		var b2 = (this.switches[2].status != null)? this.switches[2].status : false
		var a3 = (this.switches[1].status != null)? this.switches[1].status : false
		var b3 = (this.switches[0].status != null)? this.switches[0].status : false
		var cout = (this.switches[8].status != null)? this.switches[8].status : false
            
            //alert(a0)
            
            var tb0 = ((!b0) && cout) || (b0 && (!cout));
           // alert(tb0);
            var tb1 = ((!b1) && cout) || (b1 && (!cout));
           //  alert(tb1);
            var tb2 = ((!b2) && cout) || (b2 && (!cout));
            // alert(tb2);
            var tb3 = ((!b3) && cout) || (b3 && (!cout));
           //  alert(tb3);
		var temp0 = ((!a0)&&tb0) || (a0&&(!tb0));
		var s0 = ((!temp0) && cout) || (temp0 && (!cout));
            var c0 = (a0 && tb0) || (cout && temp0);
          //  alert(s0)
            var temp1 = (!a1 && tb1) || (a1 && !tb1);
            var s1 = ((!temp1 && c0) || (temp1 && !c0));
            var c1 = (a1 && tb1) || (c0 && temp1);
            var temp2 = ((!a2) && tb2) || (a2 && (!tb2));
            var s2 = ((!temp2) && c1) || (temp2 && (!c1));
            var c2 = (a2 && tb2) || (c1 && temp2);
            var temp3 = ((!a3) && tb3) || (a3 && (!tb3));
            var s3 = ((!temp3) && c2) || (temp3 && (!c2));
            var c3 = (a3 && tb3) || (c2 && temp3);
		/*var s1 = a1 && ((!b1 && cout) || (b1 && !cout))
		var s2 = a2 && ((!b2 && cout) || (b2 && !cout))
		var s3 = a3 && ((!b3 && cout) || (b3 && !cout))*/
		
	
		if(s0 ==true)
		document.getElementById("s0_4bit").src = "images/lightbulb1.png"
		else
		document.getElementById("s0_4bit").src = "images/lightbulb.png"
		if(s1 ==true)
		document.getElementById("s1_4bit").src = "images/lightbulb1.png"
		else
		document.getElementById("s1_4bit").src = "images/lightbulb.png"
		if(s2 ==true)
		document.getElementById("s2_4bit").src = "images/lightbulb1.png"
		else
		document.getElementById("s2_4bit").src = "images/lightbulb.png"
		if(s3 ==true)
		document.getElementById("s3_4bit").src = "images/lightbulb1.png"
		else
		document.getElementById("s3_4bit").src = "images/lightbulb.png"
		if(c3 == true)
		document.getElementById("carry_4bit").src = "images/lightbulb1.png"
		else
		document.getElementById("carry_4bit").src = "images/lightbulb.png"
	} 

}
				
 //initliaze the Adder
 
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
		
	//halfadder
	{
		var obj_halfadder = new halfadder();
		obj_halfadder.initialize();
		$("#switch0").delegate("img", "click",null, function(){
		var id=this.id;
		obj_halfadder.switch_status(id);
    });
	}
	//fulladder
	{
		var obj_fulladder = new fulladder();
		obj_fulladder.initialize();
		$("#switches1").delegate("img", "click",null, function(){
		var id=this.id;
		obj_fulladder.switch_status(id);
    });
	}
	//2bitadder
	{
	var obj_bitadder = new bitadder();
	obj_bitadder.initialize();
	$("#switches2").delegate("img", "click",null, function(){
	var id=this.id;
	obj_bitadder.switch_status(id);
    });
	
	
 	}	
	//halfsubtracter
	{
		var obj_halfsubtracter = new halfsubtracter();
		obj_halfsubtracter.initialize();
		$("#switches3").delegate("img", "click",null, function(){
		var id=this.id;
		obj_halfsubtracter.switch_status(id);
    });
		
	}
	//fullsubtracter
	{
		var obj_fullsubtracter = new fullsubtracter();
		obj_fullsubtracter.initialize();
		$("#switches4").delegate("img", "click",null, function(){
		var id=this.id;
		obj_fullsubtracter.switch_status(id);
    });
	}
	//addersubtracter
	{
		var obj_bitaddersubtracter = new bitaddersubtracter();
		obj_bitaddersubtracter.initialize();
		$("#switches5").delegate("img", "click",null, function(){
		var id=this.id;
		obj_bitaddersubtracter.switch_status(id);
    });
		
	}
	}
});

		