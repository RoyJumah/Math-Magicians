const { loremIpsum } = require('lorem-ipsum');

const Home = () => (
  <div>
    <h1>Welcome to our Page!</h1>
    <p>{loremIpsum({ count: 1, units: 'paragraph' })}</p>
    <p>{loremIpsum({ count: 1, units: 'paragraph' })}</p>
  </div>
);

export default Home;
