var server = require('./server');
var ds = server.dataSources.connect_strong_Database;
var lbTables = [
  'booksList'
];

ds.autoupdate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
    ds.disconnect();
});
