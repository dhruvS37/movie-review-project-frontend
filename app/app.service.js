angular.module('movieReview')
    .provider('globalSetting', function(){

        let appName = 'Movie-Review'
        let apiUrl = 'http://127.0.0.1:8000'

        this.setAppName = function(name){
            appName = name
        }

        this.setApiUrl = function(url){
            apiUrl = url
        }

        this.$get = function(){
            return {
                appName : appName,
                apiUrl : apiUrl
            }
        }
    })