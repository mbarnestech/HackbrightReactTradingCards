'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome, user!</h1>
      <a href = "/cards">Let's go to the cards page</a> <br/>
      <img src="/static/img/balloonicorn.jpg" alt="balloonicorn"/>
    </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
