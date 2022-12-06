const {Pool} = require('pg');
// Pool type from pg 

// In the `server/models/MovieModel.js` file, implement a database in either MongoDB or PostgresQL (Mongoose/Sequelize optional) as described below:
// - [ ] We want to store our data in a collection/table called `Movie`. (Remember, this may be created as the plural `Movies` - that is fine.)
// - [ ] All entries in the database must have a property `title`, which is a string
// - [ ] Additionally, all entries should have a boolean property `watched`, which is initially set to `false`
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const URI = 'postgres://infdupft:zjKb6tVKc2aiBP606vl_SNDxt0XcQXm3@hattie.db.elephantsql.com/infdupft';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
//const URI = process.env.PG_URI || 'postgres://gxcbkcoc:EhcWQdbhZejdY9NTmVPWg-4dMw3vEFSh@rosie.db.elephantsql.com/gxcbkcoc';
const pool = new Pool({ connectionString: URI });

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err)}
      console.log('db connected')
    //   process.exit (-1)
    }
    ); 


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; // <-- export your model
