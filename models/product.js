import mongoose from "mongoose";

// Schema adalah struktur data kita bagaimana nanti tersimpan dalam database
const Product = mongoose.Schema({
   title:{
      type: String,
      required: true
   },
   price:{
      type: Number,
      required: true
   },
});

export default mongoose.model("Product", Product);