import axios from "axios";
import request from "request";

export default {
  // Gets all articles that have been saved to the database
  getArticles: function() {
    return axios.get("/api/articles");
  },
  
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }, 

  searchArticles: function(q,begin_date,end_date){
    console.log("API called");
    var key= "06c43476f224443fb7b33c253b7bd1c2";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" +
                  q + "&begin_date=" + begin_date + "0101" + "&end_date=" + end_date + "1231";
    request.get(queryURL).then(function(response){
      var result = [];
      if (response.data.response.docs[0]){
        
        for (var i=0; i<response.data.response.docs[10];i++){
          var resultInfo = {};
          resultInfo.title=response.data.response.docs[i].headline.main;
          resultInfo.date=response.data.response.docs[i].pub_date;
          resultInfo.url= response.data.response.docs[i].web_url;
          result.push(resultInfo);
        }
      }
      return resultInfo;
    })
  }
};
