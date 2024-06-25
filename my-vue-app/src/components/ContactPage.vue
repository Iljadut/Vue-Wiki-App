<template>
    <div class="contact">
      <h1>Kontaktieren Sie uns</h1>
      <p>Sie können uns per E-Mail oder Telefon erreichen:</p>
      <ul>
        <li>Email: <a href="mailto:AllwissendesWiki@writemeamail.com">AllwissendesWiki@writemeamail.com</a></li>
        <li>Telefon: +49 349 32742</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage'
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .contact p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .contact ul {
    list-style: none;
    padding: 0;
  }
  
  .contact ul li {
    font-size: 1.2em;
    margin: 10px 0;
  }
  </style>
  