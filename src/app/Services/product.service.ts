export class ProductService {

    getProducts() {
        return [
            {
                imageUrl : "http://loremflickr.com/150/150?random=1",
                productName : "Product 1",
                releasedDate : "May 31, 2020",
                description : "Cras sit amet iberldo in gracias",
                rating : 4,
                numOfReviews: 12
            },
            {
                imageUrl : "http://loremflickr.com/150/150?random=2",
                productName : "Product 2",
                releasedDate : "March 31, 2020",
                description : "Cras sit amet iberldo in gracias",
                rating : 3,
                numOfReviews: 3
            },
            {
                imageUrl : "http://loremflickr.com/150/150?random=3",
                productName : "Product 3",
                releasedDate : "June 31, 2022",
                description : "Cras sit amet iberldo in gracias",
                rating : 2,
                numOfReviews: 7
            }
        ];
    }

}