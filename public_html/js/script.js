/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//VARIABLE
// Define the value-added tax (VAT) as a variable
var VAT = 23;
 
// Define the price of headphones and camera as variables
var priceOfHeadphones = 100;
var priceOfCamera = 700;
 
// Calculate the gross price of headphones and camera by adding VAT to their prices
var grossPriceOfHeadPhones = priceOfHeadphones * (1 + VAT/100);
var grossPriceOfCamera = priceOfCamera * (1 + VAT/100);
 
// Output the calculated prices
alert("Gross price of headphones: " + grossPriceOfHeadPhones);
alert("Gross price of camera: " + grossPriceOfCamera);
 
// Change VAT
VAT = 25;
 
// Recalculate the gross prices of headphones and camera
grossPriceOfHeadPhones = priceOfHeadphones * (1 + VAT/100);
grossPriceOfCamera = priceOfCamera * (1 + VAT/100);
 
// Output the recalculated prices
alert("Gross price of headphones (after VAT change): " + grossPriceOfHeadPhones);
alert("Gross price of camera (after VAT change): " + grossPriceOfCamera);

var name = "Arkadiuse";
var surname = "Wiodarczyck";

alert(name + " " + surname);

/*
 * 1) you cannot start name of variable with a digit
 * 2) you cant use as the name keywords
 * 3) do not use spaces in names
 * 4) you shouldnt use operators in the names
 */

/*
 * Types of variables
 * 
 * 1) numbers - integers
 * 2) string - continuous characters
 * 3) boolean - true/false
 * 4) arrays, objects
 * 5) null - empty
 * 6) undefined
 */