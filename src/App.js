import PropTypes from "prop-types"

const foodILike = [
  {
    id:1,
    name: "kimchi1",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id:2,
    name: "kimchi2",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fkimchibokkeum-insta.jpg&f=1&nofb=1",
    rating: 4.3
  },
  {
    id:3,
    name: "kimchi3",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3h1lg3ksw6i6b.cloudfront.net%2Fmedia%2Fimage%2F2017%2F10%2F05%2F66861ba85c56484db3aa254f56c76e18_rendered.jpg&f=1&nofb=1",
    rating: 3.1
  },
  {
    id:4,
    name: "kimchi4",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l8iARB662Fp_AHiAIFLZSwHaFj%26pid%3DApi&f=1",
    rating: 4
  },
  {
    id:5,
    name: "kimchi5",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sle-Y2XdRXakUHPVP12rBAHaLH%26pid%3DApi&f=1",
    rating: 2.7
  }
]

function Food({name, rating, picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={name} width="640px" />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foodILike.map( i => (
        <Food key={i.id} name={i.name} picture={i.image} rating={i.rating} />
      ))}
    </div>
  );
}

export default App;
