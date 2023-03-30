angular.module('app',['myDirectives'])
    .controller('AlertController',function ($scope){
        $scope.alerts = [
            {type:'error',msg:'Error Alert!'},
            {type:'success',msg:'Success Alert!'}
        ];

        $scope.alertType = 'error';
        $scope.alertText = '';

        $scope.addAlert = function(){
            if($scope.alertText.trim() != ''){
                $scope.alerts.push(
                    {type:$scope.alertType,
                    msg:$scope.alertText}
                );
                $scope.alertText = '';
            }
        };

        $scope.closeAlert = function(index){
            $scope.alerts.splice(index,1);
        };
    });