module.exports = function(name, res) {
  res.send(`
    <h3>This is the About Page</h3>
    <p>Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js</p>
    <footer>Name: Alimurung, Anne Nichole G. | Date: 2025-07-14 | Section: WD302</footer>
  `);
};
