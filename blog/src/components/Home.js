import React from 'react';
import Navbar from './Navbar';
import AllBlogs from './BlogPost';
import Footer from './Footer';



function Home() {
  return (
    <>
    <Navbar />

   
    <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('bg-img.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div style={{color:"white"}} className='poppins-regular'>
              <h1 className='mb-3 '>Welcome to</h1>
              <h4 className='mb-3'>Poetry Club</h4>
            </div>
          </div>
        </div>
      </div>
      <AllBlogs />
      <Footer />
    </>
  );
}

export default Home;
