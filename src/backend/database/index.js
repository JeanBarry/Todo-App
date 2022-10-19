const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = process.env;
  const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

module.exports = {
  connectToDatabase,
};
