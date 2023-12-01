const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://myAtlasDBUser:password10@myatlasclusteredu.pdtihh7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const main = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    // list out all the databases in the cluster
    const dbs = await client.db().admin().listDatabases();
    console.table(dbs.databases);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

main().catch(console.dir);
