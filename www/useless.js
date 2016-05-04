var exec = require('cordova/exec');

module.exports = {

    senseOfLife: function(param) {

        exec(function(result) { alert(result)}, null, "Useless", "senseOfLife", []);

    }
};
