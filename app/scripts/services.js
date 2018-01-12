
'use strict';

angular.module('confusionApp')
         .constant("baseURL","http://localhost:3000/")
         .service('menuFactory' , ['$resource','baseURL',function($resource,baseURL) {

            this.getDishes = function(){

                return $resource(baseURL+"dishes/:id",null,{'update': {method:'PUT'}});
            };

            // implement a function named getPromotion
             this.getPromotion = function(){

                 //return promotions[index];
                 return $resource(baseURL + "promotions/:id", null, {'update':{method:'PUT'}});
             };

             // that returns a selected promotion
             this.selectedPromotion = function(index){

                 //return promotions[index];
             };
        }])

        .factory('corporateFactory',['$resource','baseURL', function($resource,baseURL) {

            var corpfac = {};

            // Implement two functions, one named getLeaders,
            corpfac.getLeaders = function(){

                //return leadership;
                return $resource(baseURL + "leadership", null, {'update': {method:'PUT'}})

            };

            // the other named getLeader(index)
            corpfac.getLeader = function(){

                //return leadership[index];
                return $resource(baseURL + "leadership/:id", null, {'update' : {method: 'PUT'}})
            };

            // Remember this is a factory not a service
            return corpfac;

        }])

        .factory('feedbackFactory',['$resource', 'baseURL', function($resource, baseURL){

            var feedfac = {};

            feedfac.sendFeedback = function(){

                return $resource(baseURL + "feedback", null, {'save':{method : 'POST'}})

            }

            return feedfac;
        }])

;
