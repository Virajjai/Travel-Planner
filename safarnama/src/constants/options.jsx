export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo travels in exploration',
        icon: '🧍',
        people: '1'
    },
    {
        id:2,
        title: 'Couple',
        desc: 'A couple travels in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A group of fun luving adv',
        icon: '👨‍👩‍👧‍👧',
        people: '3 People'
    },
    {
        id:4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '🍻',
        people: '5  to 10 People'
    }
]



export const SelectBudgetOptions=[
    {
        id:1,
        title:'Pocket Friendly',
        desc:'Less than $500',
        icon:'💵'
    },
    {
        id:2,
        title:'Mid Range',
        desc:'$500 to $1000',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxary',
        desc:'More than $10000',
        icon:'💸'
    }
]

export const  AI_PROMPT = "Generate Travel Plan for Location : {location},for {totalDays} Days for {taverlers} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Inage Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format"