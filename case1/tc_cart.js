"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Adrian soliz
   Date:   02/03/20
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
//adding html headings and begining the table
var cartHTML ="<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";


for(var i = 0; i < item.length; i++){
   //items prices for the things
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='" + item + "'/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML +="<td>" + "$"+itemPrice[i] + "</td>";
   cartHTML +="<td>"+itemQty[i] + "</td>";

   var itemCost = itemPrice[i] * itemQty[i];

   cartHTML += "<td> $" + itemCost + "</td></tr>";
   orderTotal += itemCost;



} 
//expanding the text
  cartHTML +="<tr>";
   cartHTML +="<td colspan='4'>SubTotal</td>";
   cartHTML += "<td> $" + orderTotal + "</td>";
   cartHTML +="</tr>";
   cartHTML +="</table>"
//adding to the html
 document.getElementById("cart").innerHTML = cartHTML;
