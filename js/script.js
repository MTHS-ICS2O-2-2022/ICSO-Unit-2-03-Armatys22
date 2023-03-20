// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dominik armatys
// Created on: mar 20 2023
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("streetx-name").value
  const userAge = parseInt(document.getElementById("streetx-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}
