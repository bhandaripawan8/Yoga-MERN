import React from 'react'


const MyComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={fatwitter} />
      <FontAwesomeIcon icon={fainstagram} />
    </div>
  );
};

// export default MyComponent;


const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto flex flex-col md:flex-row justify-between px-4">
    <div class="mb-4 md:mb-0">
      <h2 class="text-lg font-bold">Company Name</h2>
      <p class="mt-2">Kathmandu, Nepal</p>
      <p>contact@example.com</p>
    </div>
    <div class="mb-4 md:mb-0">
      <h2 class="text-[20px] font-bold">Useful Links</h2>
      <ul class="mt-2 text-[20px]">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#" class="hover:text-gray-400">Find your session</a></li>
        <li><a href="#" class="hover:text-gray-400">Services</a></li>
        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
    <div>
      <h2 class="text-lg font-bold">Follow Us</h2>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer;