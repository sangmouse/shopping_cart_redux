var initialState = [
    {
        id: 1,
        image: 'https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/7/s/7silver_2.jpg',
        name: 'iphone 6s plus',
        rating: 4,
        description: 'iphone 6 là sản phẩm tuyệt vời được tạo ra từ nhà apple',
        price: 100
    },
    {
        id: 2,
        image: 'https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-blue-400x400.jpg',
        name: 'sam sung',
        rating: 4,
        description: 'sam sung 6 là sản phẩm tuyệt vời được tạo ra từ nhà apple',
        price: 1004
    },
    {
        id: 3,
        image: 'https://cdn.tgdd.vn/Products/Images/42/199801/oppo-f11-mtp-400x460.png',
        name: 'oppo 6s plus',
        rating: 1,
        description: 'oppo 6 là sản phẩm tuyệt vời được tạo ra từ nhà apple',
        price: 1002
    },
    {
        id: 4,
        image: 'https://clickbuy.com.vn/uploads/2019/09/thumb-Note-8-3.jpg',
        name: 'xiaomi 6s plus',
        rating: 5,
        description: 'xiaomi 6 là sản phẩm tuyệt vời được tạo ra từ nhà apple',
        price: 300
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        


        default:
            return [...state]
    }
}

export default products