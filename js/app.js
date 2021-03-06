angular.module('noprizeApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
   $stateProvider
      .state('home',{
         url: '/',
         templateUrl: 'js/routes/home.html'
      })
      .state('photos',{
         url: '/photos',
         templateUrl: 'js/routes/photos.html'
      })
      .state('memorial',{
         url: '/memorial',
         templateUrl: 'js/routes/memorial.html'
      });
});
