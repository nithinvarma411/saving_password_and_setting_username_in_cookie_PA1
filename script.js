document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Check if the 'count' cookie exists
  let count = getCookie('count');

  // If the cookie exists, increment the count, otherwise initialize it to 1
  count = count ? count + 1 : 1;

  // Update the cookie with the new count value
  setCookie('count', count, 7);

  // Display the count on the webpage
  document.body.innerHTML = `<h1>Page visit count: ${count}</h1>`;
});
