var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
        console.log(result);
    });
    },

    InsertOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "INSERT * FROM ?? WHERE ?? = ?";    
        console.log(queryString);   
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        },

    UpdateOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "UPDATE * FROM ?? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
    });
    },
};

module.exports = orm;
