import Chance from 'chance';

const Quote = () => {
  const chance = new Chance();
  const mathQuotes = [
    'Math is the language in which God has written the universe.',
    "Without mathematics, there's nothing you can do. Everything around you is mathematics.",
    'Math is like love; a simple idea, but it can get complicated',
    'Math is the alphabet with which God has written the universe.',
    'The beauty of mathematics only shows itself to more patient followers.',
  ];
  const quote = chance.pickone(mathQuotes);
  const author = chance.name();
  return (
    <div>
      <p>
        {quote}
        {' '}
        &mdash;
        {author}
      </p>
    </div>
  );
};

export default Quote;
