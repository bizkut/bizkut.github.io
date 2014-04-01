var VerbalDate = function(){
	
	var date = new Date();
	
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday"];
	var months = ["January", "February", "March", "April",
		"May", "June", "July", "August", "September",
		"October", "November", "December"];
	var ones = ["Zero", "One", "Two", "Three", "Four", "Five",
		"Six", "Seven", "Eight", "Nine", "Ten",
		"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
		"Sixteen", "Seventeen", "Eighteen", "Nineteen"];
	var tens = ["Twenty", "Thirty", "Forty", "Fifty",
		"Sixty", "Seventy", "Eighty", "Ninety"];
	
	this.getDayOfWeek = function(){
		
		return days[date.getDay()];
		
	};
	
	this.getDay = function(){
		
		return convert(date.getDate(), false);
		
	};
	
	this.getMonth = function(){
		
		return months[date.getMonth()];
		
	};
	
	this.getHour = function(){
		
		return convert(date.getHours(), false);
		
	};
	
	this.getMinute = function(){
		
		return convert(date.getMinutes(), true);
		
	};
	
	function convert(num, minute){
		
		var result = "";
		
		if (num < ones.length){
			
			if (num < 10 && minute){
				
				result += "o'";
				
			}
			
			if (num === 0 && minute){
				
				result += "clock";
				
			} else {
				
				result += ones[num];
				
			}
			
		} else {
			
			var ten = Math.floor(num / 10);
			var one = num % 10;
			
			if (ten <= 9){
				
				result += tens[ten - 2];
				
				if (one > 0){
					
					result += ones[one];
					
				}
				
			} else {
				
				result += "unknown";
				
			}
			
		}
		
		return result;
		
	}
	
};