import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [],
    counter: 0,
  }

  timeOutUpdate = null;
  timeOutPosts = null;

  setCounter = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1
    })
  }

  searchPosts = () => {
    this.timeOutPosts = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: 'O Título 1',
            body: 'O corpo 1...'
          },
          {
            id: 2,
            title: 'O Título 2',
            body: 'O corpo 2...'
          },
          {
            id: 3,
            title: 'O Título 3',
            body: 'O corpo 3...'
          },
        ]
      });
    }, 3000);
  }

  componentDidMount() {
    this.searchPosts();
    this.setCounter();
  }

  componentDidUpdate() {
    this.timeOutUpdate = setTimeout(() => this.setCounter(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate);
    clearTimeout(this.timeOutPosts);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>Contador: {counter}</h1>
        { posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
