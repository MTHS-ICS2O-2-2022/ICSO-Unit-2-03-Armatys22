// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dominik armatys
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("street-name").value
  const userAge = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your adress is: " + firstName + " street, number " + userAge + "."
}
