async function fetchdata() {
    try {
      let response = await fetch("https://api.github.com/users?per_page=10");
      let data = await response.json();
  
      // Extract and log login, node_id, and url from each user object
      data.forEach((news) => {
        console.log(
          `Title: ${news.title}, Description: ${news.Description}, URL: ${news.url}`
        );
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchdata();