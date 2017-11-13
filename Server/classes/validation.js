module.exports = {


	validateEmail: function(email) {
		// -> bool , if email is acceptable

	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    if (email != ""){
	    	return re.test(email);
	    }else{
	    	return false;
	    }
	},

	validateUsername: function(username){
		// -> bool , if username is acceptable

		var re = /^[a-z][a-z0-9_\.]{4,24}$/i;
		if (username != ""){
	    	return re.test(username);
	    }else{
	    	return false;
	    }
	},

	validatePassword: function(password){
		// -> bool , if password is acceptable

		var re = /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/;
		if (password != ""){
	    	return re.test(password);
	    }else{
	    	return false;
	    }
	    
	},

}