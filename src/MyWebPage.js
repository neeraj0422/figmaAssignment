import React from 'react';

function MyWebPage() {
  return (
    <div className="my-web-page">
      <header>
        <h1>My Web Page</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome to My Web Page</h2>
          <p>This is a simple web page created using React.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Web Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MyWebPage;
