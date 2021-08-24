import bcrypt from 'bcryptjs';

const data= {
    users: [
        {
            name: 'mabuX',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            //customer
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: "1",
            name: "Valentine's Day Special Chocolate",
            category: "Chocolate",
            image: "/images/valentines-chocolate.jpg",
            price: 5,
            countInStock: 40,
            rating: 4.5,
            numReview: 10,
            description: "This ultra-rich and decadent Valentine's day chocolate is made with cocoa powder, coconut oil, honey, and chopped nuts."
        },
        {
            // _id: "2",
            name: "Low-Carb Chocolate Peanut Butter Truffles",
            category: "Truffles",
            image: "/images/chocolate-peanut-butter-truffles.jpg",
            price: 10,
            countInStock: 50,
            rating: 4.78,
            numReview: 14,
            description: "Do you love peanut butter and enjoy the intensity of dark chocolate?  Do you expect your chocolaty desserts to be intensely chocolatey rather than cloyingly sweet? Then you will adore these low-carb chocolate peanut butter truffles.This ultra-rich and decadent Valentine's day chocolate is made with cocoa powder, coconut oil, honey, and chopped nuts."
        },
        {
            // _id: "3",
            name: "Keto Fudge",
            category: "Chocolate",
            image: "/images/keto-fudge.jpg",
            price: 3,
            countInStock: 20,
            rating: 4.34,
            numReview: 11,
            description: "This tasty keto fudge is made with peanut butter and ultra-dark chocolate. It is wonderfully creamy, rich, and decadent."
        },
        {
            // _id: "4",
            name: "Chocolate Truffles",
            category: "Truffles",
            image: "/images/chocolate-truffles.jpg",
            price: 5,
            countInStock: 40,
            rating: 4.4,
            numReview: 13,
            description: "Indulgent, melt-in-your mouth chocolate truffles."
        },
        {
            // _id: "5",
            name: "Moist Chocolate Cake",
            category: "Cake",
            image: "/images/moist-chocolate-cake.jpg",
            price: 12,
            countInStock: 10,
            rating: 5,
            numReview: 23,
            description: "This cocoa-based cake is deeply chocolatey and incredibly moist."
        },
        {
            // _id: "6",
            name: "Chocolate Swirl Cake",
            category: "Cake",
            image: "/images/chocolate-swirl-cake.jpg",
            price: 11.50,
            countInStock: 10,
            rating: 4.8,
            numReview: 20,
            description: "A fun swirl cake made with a beautiful yellow olive oil cake paired with classic chocolate buttercream frosting that has been bolstered with an entire tablespoon of almond extract."
        },
    ]
}

export default data;