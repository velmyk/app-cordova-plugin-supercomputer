var exec = require('cordova/exec');

module.exports = {

    add: function(param) {

        exec(function(result) { alert(result)}, null, "Useless", "add", []);

    }
};
