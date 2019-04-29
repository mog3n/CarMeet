module.exports = {

	userStruct: function() {


		
		return {
			username 	: '',
			password 	: '',
			isAdmin		: false,
			salt 		: '',
			email		: '',
		}

	},

	userDataStruct: function() {

		return {
			linkId 		: '',
			added 		: [],
			followers 	: [],
			posts 		: [],
			country 	: '',
			language 	: '',
			dateofbirth : '',
			dateofreg 	: '',
			regAPI		: '',
			ipreg		: '',
		}

	}

}