import Product from "../models/product.js";

export const getProducts = async (req, res) => {
	try {                                                    // try and catch block digunakan untuk mentracking error nya
		const products = await Product.find();                // function 'find' akan mencari semua data yg ada pada collection "Product"
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });     // 500: error pada sisi server
	}
};

export const getProductById = async (req, res) => {
	try {                                                    // try and catch block digunakan untuk mentracking error nya
		const product = await Product.findById(req.params.id);// function 'find' akan mencari semua data yg ada pada collection "Product"
		res.json(product);
	} catch (error) {
		res.status(404).json({ message: error.message });     // 404: error data not Found
	}
};

export const saveProducts = async (req, res) => {           // function saveProduct ini akan didaftarkan ke routenya
	const product = new Product(req.body);                   // disini kita mengambil data yg diPOST melalui bodynya
	try {                                                    // try and catch block digunakan untuk mentracking error nya
		const savedProduct = await product.save();            // function 'find' akan mencari semua data yg ada pada collection "Product"
		res.status(201).json(savedProduct);                   // 201: defaultnya 200, hanya saja skrg kita pake 201 yaitu created
	} catch (error) {
		res.status(400).json({ message: error.message });     // 400: server bad request kesalahan pada sisi client
	}
};

export const updateProducts = async (req, res) => {         // function saveProduct ini akan didaftarkan ke routenya
   const checkId = await Product.findById(req.params.id);   // cek apakah Id item yg dicari ada di databes apa ngga
   if(!checkId) {
      return res.status(404).json({
         message: "Data not Found"
      });
   }
	try {                                                    
		const updatedProduct = await Product.updateOne(
			{ _id: req.params.id },                            // _id adlh id yg di generate otomatis oleh mongoDB,
                                                            // lalu req.params.id ini adalah ID yg di set di api-routes.js
			{ $set: req.body }                                 // data yg akan diset yg berasal dari req.body menggunakan key set
		); 
		res.status(200).json(updatedProduct);                 // 201: defaultnya 200, hanya saja skrg kita pake 201 yaitu created
	} catch (error) {
		res.status(400).json({ message: error.message });     // 400: server bad request kesalahan pada sisi client
	}
};

export const deleteProducts = async (req, res) => {         // function saveProduct ini akan didaftarkan ke routenya
   const checkId = await Product.findById(req.params.id);   // cek apakah Id item yg dicari ada di databes apa ngga
   if(!checkId) {
      return res.status(404).json({
         message: "Data not Found"
      });
   }
	try {                                                    // try and catch block digunakan untuk mentracking error nya
		const deletedProduct = await Product.deleteOne(
			{ _id: req.params.id },                            // _id adlh id yg di generate otomatis oleh mongoDB,
                                                            // lalu req.params.id ini adalah ID yg di set di api-routes.js
		); 
		res.status(200).json(deletedProduct);                 // 201: defaultnya 200, hanya saja skrg kita pake 201 yaitu created
	} catch (error) {
		res.status(400).json({ message: error.message });     // 400: server bad request kesalahan pada sisi client
	}
};
