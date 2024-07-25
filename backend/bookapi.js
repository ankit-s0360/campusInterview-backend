const express = require("express");
const router = express.Router();
module.exports = router;

const Book = require("./bookschema");

router.get("/", async(req, res)=>{
    let booklist = await Book.find();             //  To get the booklist
    res.status(200).json(booklist);
});


router.post("/", async(req, res)=>{
    let newbook = Book({
        bookname : req.body.bname,
        price    : req.body.bprice,
        author   : req.body.bauthor,             //  To save the book details
        edition  : req.body.bedition
    })

    await newbook.save();
    res.status(200).json( {"message":req.body.bname + " Save Successfully"});
});




router.put("/", async(req, res)=>{
        let id = req.body.bid;
        let bookinfo = await Book.findById(id);
        if(bookinfo == null)
            res.status(200).json( {"message": "No Such Records"});
        else
        {
            bookinfo.bookname = req.body.bname,
            bookinfo.price    = req.body.bprice,               // To Update the Book Details
            bookinfo.author   = req.body.bauthor,
            bookinfo.edition  = req.body.bedition

            await bookinfo.save();
            res.status(200).json( {"message":req.body.bname} );
        }
})




router.delete("/", async(req, res)=>{
    let id = req.body.id;
    let bookinfo = await Book.findById(id);
    if(bookinfo == null)
        res.status(200).json( {"message": "No Such Records"});   // To Delete the book details
    else
    {
        await bookinfo.deleteOne();
        res.status(200).json( {"message":bookinfo.bookname });
    }
});