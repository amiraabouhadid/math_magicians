import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  async componentDidMount() {
    await fetch('https://random-math-quote-api.herokuapp.com/', {
      contentType: 'application/json',
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          quote: response.quote,
          author: response.author,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div className="m-5 p-5 ">
        <h4 className="p-5">
          {quote}
          <span className="mx-3">—</span>
          {author}
        </h4>

      </div>
    );
  }
}

export default Quote;
