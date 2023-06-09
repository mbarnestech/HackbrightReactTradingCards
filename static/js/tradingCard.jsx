'use strict';

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];

function TradingCard(card_props) {
  return (
    <div className="card">
      <h2>Name: {card_props.name}</h2>
      <img src={card_props.imgUrl} alt="profile" />
      <h2>Skill: {card_props.skill} </h2>
    </div>
  );
}


function TradingCardContainer(){
  const cards = [];
  
  for (const card of tradingCardData) {
    cards.push(
      <TradingCard 
        name = {card.name} 
        skill = {card.skill} 
        imgUrl = {card.imgUrl}/>
    );
  }

  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

ReactDOM.render(<TradingCardContainer />, document.querySelector("#all-cards"))


// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// ReactDOM.render(
//   <TradingCard name="Speedpy" skill="hiking mountains" imgUrl="/static/img/speedpy.jpeg" />,
//   document.querySelector('#speedpy'),
// );

// ReactDOM.render(
//   <TradingCard name="polymorphism" skill="roaring" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#polymorphism'),
// );
