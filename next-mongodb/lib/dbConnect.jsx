import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then(() => console.log("Bases de datos contectada 🚀"))
      .catch((e) => console.log("Error Conexion BD:" + e));

  } catch (error) {
    console.log("Error Conexion DB:", Error);
    process.exit(1);
  }
};

export default dbConnect;
