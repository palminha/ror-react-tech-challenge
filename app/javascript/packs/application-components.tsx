import ReactOnRails from 'react-on-rails';

import NavBar from '../components/nav_bar/NavBar';
import UsersGrid from '../components/list_users/UsersGrid';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  NavBar,
  UsersGrid,
});
