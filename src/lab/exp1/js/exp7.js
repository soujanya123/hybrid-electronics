//1bitcomparator

var comparator1bit = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json
		}
	
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
		var index = id.split("_",3)[1];
		//alert(index);
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
			var y0,y1,y2;
			var a=this.switches[0].status;
			var b=this.switches[1].status;
			
			
			if(a>b){
			y0 = 1; y1 = 0 ;  y2 = 0;}
		
			if(a==b){
			y0 = 0; y1 = 1 ;  y2 = 0;}
			
			if(a<b){
			y0 = 0; y1 = 0 ;  y2 = 1;}
			
		if(y0 ==true)
		document.getElementById("led18").src = "images/lightbulb1.png"
		else
		document.getElementById("led18").src = "images/lightbulb.png"
		if(y1 ==true)
		document.getElementById("led17").src = "images/lightbulb1.png"
		else
		document.getElementById("led17").src = "images/lightbulb.png"
		if(y2 ==true)
		document.getElementById("led19").src = "images/lightbulb1.png"
		else
		document.getElementById("led19").src = "images/lightbulb.png"
	}
}

//2bitcomparator
var comparator2bit = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json
		}
	
		
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

			var a0=this.switches[0].status;
			var a1=this.switches[1].status;
			var b0=this.switches[2].status;
			var b1=this.switches[3].status;
			
			
			var aGb = (a1 && !b1) || ( a0 * !b1 * !b0) || (a1 * a0 * !b0)
			//this.setcomparator(aGb, "_OUTPUT0");
			var bGa = (!a1 && b1) || ( !a0 * b1 * b0) || (!a1 * !a0 * b0)
			//this.setcomparator(bGa, "_OUTPUT2");
			var aEb = !(aGb || bGa);
			//this.setcomparator(aEb, "_OUTPUT1");
			
		if(aGb ==true)
		document.getElementById("led1").src = "images/lightbulb1.png"
		else
		document.getElementById("led1").src = "images/lightbulb.png"
		if(bGa ==true)
		document.getElementById("led2").src = "images/lightbulb1.png"
		else
		document.getElementById("led2").src = "images/lightbulb.png"
		if(aEb ==true)
		document.getElementById("led3").src = "images/lightbulb1.png"
		else
		document.getElementById("led3").src = "images/lightbulb.png"
	}
}

//4bitcomparator------------------------------------------------------
var comparator4bit = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json
		}
	
		
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

			var a0=this.switches[0].status;
			var b0=this.switches[4].status;
			var a1=this.switches[6].status;
			var b1=this.switches[7].status;
			var a2=this.switches[3].status;
			var b2=this.switches[1].status;
			var a3=this.switches[5].status;
			var b3=this.switches[2].status;
			//alert(a0,b0,a1,b1,a2,b2,a3,b3)
		
			  var y1=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * !(a0 * !b0 || !a0 * b0)
			  //alert("y1 :" +y1)
			  var y2=(a3 * !b3)
			  var y3=!(a3 * !b3 || !a3 * b3) * (a2 * !b2)
			  var y4=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * (a1 * !b1)
			  var y5=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * (a0 * !b0)
			 // alert("y5:"+y5)
			  var y6=y2 + y3 + y4 + y5
			  //var y6=[(a3 * !b3) || [(a3 * !b3 || !a3 * b3) * (a2 * !b2)] || [(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1)] || [(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0)]]
			  var y7=!(y1 || y6)
			  //var y7=![[(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0 || !a0 * b0)]  ||  [(a3 * !b3) || (a3 * !b3 || !a3 * b3) * (a2 * !b2) || (a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1) || (a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0)]]

	            if(y1 ==true)
				document.getElementById("led6").src = "images/lightbulb1.png"
				else
				document.getElementById("led6").src = "images/lightbulb.png"
		        if(y7 ==true)
			    document.getElementById("led5").src = "images/lightbulb1.png"
				else
				document.getElementById("led5").src = "images/lightbulb.png"
			    if(y6 ==true)
			    document.getElementById("led4").src = "images/lightbulb1.png"
				else
				document.getElementById("led4").src = "images/lightbulb.png"
	}
}


//--------------------------------------------------------multipliers---------------------------------------------------------------

//2bitmultiplier

var multiplier2bit = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json
		}
	
		
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
		var a0 = this.switches[3].status;
		var a1 = this.switches[2].status;
		var b0 = this.switches[1].status;
		var b1 = this.switches[0].status;
		
		//alert([a0,a1,b0,b1])
		
		var p0 = (a0 * b0)
		//this.setmultiplier(p0, "_OUTPUT0");
	
		//var p1 = (!a1 * a0 * b1)||(	a1*a0*!b0 )|| (a1 * !b1 * b0) || (a1 *!a0 *b0);
		var p1= (a0 * b1) * !(a1 * b0) || !(a0 * b1) * ( a1 * b0)
	    
		var p2 =(a1 * b1 * !b0 )|| (a1 * !a0 * b1)
		//this.setmultiplier(p2, "_OUTPUT2");
	
		var p3 =(a1 * a0 *b1 * b0)
		//this.setmultiplier(p3, "_OUTPUT3");
		
		if(p0 ==true)
		document.getElementById("led10").src = "images/lightbulb1.png"
		else
		document.getElementById("led10").src = "images/lightbulb.png"
		if(p1 ==true)
		document.getElementById("led9").src = "images/lightbulb1.png"
		else
		document.getElementById("led9").src = "images/lightbulb.png"
		if(p2 ==true)
		document.getElementById("led8").src = "images/lightbulb1.png"
		else
		document.getElementById("led8").src = "images/lightbulb.png"
		if(p3 ==true)
		document.getElementById("led7").src = "images/lightbulb1.png"
		else
		document.getElementById("led7").src = "images/lightbulb.png"
		
	}	
}

	
//3biutmultiplier------>

var multiplier3bit = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json
		}
	
		
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
		a0 =  this.switches[2].status;
		a1 =  this.switches[5].status;
		a2 =  this.switches[3].status;
		b0 =  this.switches[0].status;
		b1 =  this.switches[4].status;
		b2 =  this.switches[1].status;
		//alert(a1,a0,a2,b0,b1,b2)
		//alert("a0 :"+a0);
		//alert("a1 :"+a1);
		//alert("a2 :"+a2);
		//alert("b0 :"+b0);
		//alert("b1 :"+b1);
		//alert("b2 :"+b2);
		/*
		var m11=(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)
		var m13=(a1 * b1) * (a0 * b0)
		var m12=(a1 * b1) || [(a1 * b1) * (a0 * b0)]
		var m10=(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]
		var m14=(a0 * b1) * !(a1 * b0)  ||  !(a0 * b1) * (a1 * b0) 
		var m15= (a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]
		var m16=[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2) 
		var m17=(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]
		var m20=[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1)  [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]
		var m19=(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]
		var m18=[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]
		var m21=[[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  || (a1 * b1)
		var m22=[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *  ![(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]  ||  ![(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *   [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]
		var m23=(a2 * b0) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2) ]  ||  !(a2 * b0)  * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)] 
	
		var  P0= a0 * b0
		 
		 //var  P1= m7 * !m8 + !m7 * m8
		 var  P1=(a0 * b1) * !(a1 * b0) || !(a0 * b1) * (a1 * b0) 
		 
		 //var P2= m4 * !m16 + !m4 * m16
		 var  P2=(a2 * b0) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2) ] ||  !(a2 * b0)  *  [[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  
	
		 var  P3= [(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *  ![(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]  ||  ![(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *   [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]
		
		 // var  P4= m15 * !m18 + !m15 * m18
		 //var  P4=[(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]    *    ![[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]]] *  [(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]]
		 var P4=[(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]  *  ![[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  ||  ![(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]  *    [[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]
		 
		 //var  P5= m1 * m21
		 var  P5= (a2 * b2) *  [[[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  || (a1 * b1)] 
		 */
		
		var m1=a2 * b2
		var m2=a2 * b1
		var m3=a1 * b2
		var m4=a2 * b0
		var m5=a1 * b1
		var m6=a0 * b2
		var m7=a0 * b1
		var m8=a1 * b0
		var m9=a0 * b0
		
		var m11=m2 * !m3 || !m2 * m3
		//alert("m11 :"+m11)
		var m13=m5 * m9
		var m12=m5 * !m13 || !m5 * m13
		var m10=m1 * m12
		var m14=m7 * !m8 || !m7 * m8
		var m15=m1 * !m10 || !m1 * m10
		var m16=m12 * !m6 || !m12 * m6
		var m17=m4 * !m12 || !m4 * m12
		var m20=m16 * m17
		var m19=m5 * !m20 || !m5 * m20
		//alert("m19 :"+m19)
		var m18=m11 * m19
		var m21=m18 || m5
		var m22=m11 * !m19 || !m11 * m19
		//alert("m22 :"+m22)
		var m23=m4 * !m16 || !m4 * m16
		//alert("m23 :"+m23)
		var P1=m14
		var P0=m9
		var P2=m23
		var P3=m22
		var P4=m15 * !m18 || !m15 * m18
		var P5=m1 * m21
		
		
		if(P0 ==true)
		document.getElementById("led11").src = "images/lightbulb1.png"
		else
		document.getElementById("led11").src = "images/lightbulb.png"
		if(P1 ==true)
		document.getElementById("led12").src = "images/lightbulb1.png"
		else
		document.getElementById("led12").src = "images/lightbulb.png"
		if(P2 ==true)
		document.getElementById("led13").src = "images/lightbulb1.png"
		else
		document.getElementById("led13").src = "images/lightbulb.png"
		if(P3 ==true)
		document.getElementById("led15").src = "images/lightbulb1.png"
		else
		document.getElementById("led15").src = "images/lightbulb.png"
		if(P4 ==true)
		document.getElementById("led14").src = "images/lightbulb1.png"
		else
		document.getElementById("led14").src = "images/lightbulb.png"
		if(P5 ==true)
		document.getElementById("led16").src = "images/lightbulb1.png"
		else
		document.getElementById("led16").src = "images/lightbulb.png"
		
		}	
		
		
}




$(document).ready(function()
{
	if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
    else
    {
	//mul2bit
	{
    var multiplier2bitObject = new multiplier2bit();
	multiplier2bitObject.initialize();
	 $("#outputs2").delegate("img", "click",null, function(){
	  var id=this.id;
      multiplier2bitObject.switch_status(id);
    });
	
	}
	
	//mul3bit
	{
	var multiplier3bitObject = new multiplier3bit();
	multiplier3bitObject.initialize();
	 $("#outputs3").delegate("img", "click",null, function(){
	  var id=this.id;
      multiplier3bitObject.switch_status(id);
    });
	}
	//comparator4bit
	{
	var comparator4bitObject = new comparator4bit();
	comparator4bitObject.initialize();
	 $("#outputs1").delegate("img", "click",null, function(){
	  var id=this.id;
      comparator4bitObject.switch_status(id);
    });
	}
	//comparator2bit
	{
	var comparator2bitObject = new comparator2bit();
	comparator2bitObject.initialize();
	 $("#outputs").delegate("img", "click",null, function(){
	  var id=this.id;
      comparator2bitObject.switch_status(id);
    });
	}
	//comparator1bit
	{
	$("ul.tabs").tabs("> .pane");
    var comparator1bitObject = new comparator1bit();
	comparator1bitObject.initialize();
	 $("#outputs4").delegate("img", "click",null, function(){
	  var id=this.id;
      comparator1bitObject.switch_status(id);
    });
	}
	}
});