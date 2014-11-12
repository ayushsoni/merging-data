/* 
    app.js
    Angular application for the address book challenge
    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";

//new Angular module
angular.module('AddressBook', [])

    //new controller for Angular module and initialization function
    .controller('AddressController', function($scope) {
        //two new properties added
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';
        $scope.sortReverse = false;
       
        //method that sets the sort column property to each individual
        //columnname
        $scope.sortBy = function(colName) {
            
            //manipulates and enables the sort button's properties using the active style
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        }

        //returns the name of the sorted column and it's contents
        $scope.isSortedBy = function(colName) {
            return $scope.sortCol == colName;
        }

    });