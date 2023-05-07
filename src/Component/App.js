import React, {Component} from 'react';
import './App.css';
import News from './News/News'; 
import Navbar from './Navbar/Navbar'; 
class App extends Component{ 
  render(){
  return (
    <div className='containwer-fluid'>
      <Navbar/>
    <div className="App">
      <News/>
    </div>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">BBC News Services</h5>
                <p class="grey-text text-lighten-4">The latest global and local news in BBC.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.bbc.co.uk/usingthebbc/terms/" >Terms of Use</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.bbc.co.uk/usingthebbc/privacy/">Privacy Policy</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.bbc.co.uk/accessibility/">Accessibility Help</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.bbc.co.uk/contact">Contact the BBC</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2023 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}
}

export default App;
