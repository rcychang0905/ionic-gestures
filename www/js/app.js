angular.module('gestures', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    })
    .directive('ionPinch', function($timeout) {
        return {
            restrict: 'A',
            link: function($scope, $element) {

                $timeout(function() {
                    var square = $element[0],
                        posX = 0,
                        posY = 0,
                        lastPosX = 0,
                        lastPosY = 0,
                        bufferX = 0,
                        bufferY = 0,
                        scale = 1,
                        lastScale,
                        rotation = 1,
                        last_rotation, dragReady = 0;
                    ionic.onGesture('touch drag transform dragend', function(e) {
                        // TODO: code here
                    }, $element[0]);
                });
            }
        };
    });
