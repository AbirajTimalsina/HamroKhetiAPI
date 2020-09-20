const ProductList = require('../../Models/productList');
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HamroKheti_Test'
    beforeAll( async ()=>{
        await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, 
            useCreateIndex:true, useFindAndModify:false})
    })

    afterAll(async ()=>{await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    })

    describe('test of productList Schema', ()=>{
    test('should productList',()=>{
    return ProductList.create({
        product_image:'image-1598768246282.jpg',
        product_name:'Mango',
        product_Price:'200',
        
    }).then((response)=>{
    expect(response.product_image).toBe('image-1598768246282.jpg');  
    expect(response.product_name).toBe('Mango');
    expect(response.product_Price).toBe('200');
        })
    })
})



