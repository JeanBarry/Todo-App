import mongoose from 'mongoose';

export default async function connectToDatabase() {
  const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = process.env;
  // TODO: Modify connection string to be able to connect to containerized database srv or default
  const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to database', error);
  }
}
