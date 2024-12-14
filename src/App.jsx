import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <Sidebar />
          <Flex direction="column" flex="1">
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/articles" element={<div>Articles Page</div>} />
              <Route path="/users" element={<div>Users Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;