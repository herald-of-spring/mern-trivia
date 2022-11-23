import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Quiz from './components/Quiz';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import './App.css'; 

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route 
            path="/login" 
            element={<LoginSignup />}
          />
          <Route 
            path="/quiz" 
            element={<Quiz />}
          />
          <Route 
            path="/profile"
            element={<Profile />}
          />
          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
    </>
  );
}

export default App;
