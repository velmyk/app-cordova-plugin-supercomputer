var exec = require('cordova/exec');

module.exports = {

    senseOfLife: function(param) {
    	return new Promise(function(resolve, reject)  => {
    		exec(function(result) {
    			resolve(result);
    		},
    		null,
    		"Useless",
    		"senseOfLife",
    		[]);
    	});   
    }

};