import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
// import Markdown from './components/markdown/Markdown';

import 'antd/dist/antd.css';
import Dashboard from './components/dashboard/dashboard';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log("markdown", typeof Markdown)

  return (
    <ApolloProvider client={client}>
      <>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/dashboard' element={ <Dashboard />} />
        </Routes>
        {/* <Markdown /> */}
      </>
      </ApolloProvider>
  );
}

export default App;
