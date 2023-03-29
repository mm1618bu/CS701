angular.module('myApp',[])
    .controller('SampleController', function($scope, $interval){
        var running;

        $scope.time = new Date();

        $scope.start = function(){
            if(!angular.isDefined(running)){
                running = $interval(function(){
                    $scope.time = new Date();
                },1000);
            }
        }

        $scope.stop = function(){
            if(angular.isDefined(running)){
                $interval.cancel(running);
                running = undefined;
            }
        }
    });