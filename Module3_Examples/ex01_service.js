angular.module("myServices",[])
    .factory("logService",function(){
        var logCount = 0;
        var alertCount = 0;
        return{
            log: function(msg){
                logCount++;
                console.log("[LOG + " + logCount + "]: " + msg);
            },
            alert: function(msg){
                alertCount++;
                alert("[ALERT + "+ alertCount + "]: " + msg);
            }
        };
    });