"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Adrian soliz 
   Date:   02/4/20
   
   Filename: hg_report.js
	
*/

//making the games description
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2> By:"+ itemManufacturer  +" </h2>";
gameReport +="<img src='hg_"+ itemID +".png' alt='"+ itemID +"' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List  Price</th><td>" + itemPrice  + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>"+ itemCondition +"</td></tr>";
gameReport += "<tr><th>Release</th><td>"+ itemRelease +"</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

//display  the article
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//average rating
var ratingsSum = 0;
var ratingsCount = ratings.length;
//looping the rating sum
for(var i = 0; i < ratings.length; i++){
   ratingsSum += ratings[i];
}
// calculating the rating
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg +  " out of 5 stars (" + ratingsCount + " Reviews)</h2>";

// making the reports for the reviews
for (var w = 0; w < 3; w++){
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[w] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[w] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[w] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";

   for(var r = 0; r < ratings[w]; r++) {
      ratingReport += "<img src='hg_star.png' />";
 }
 //ending the table
   ratingReport += "</td> </tr> </table>" ;
   ratingReport +=  ratingSummaries[w];
   ratingReport += "</div>";

}
//displaying the aside
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
