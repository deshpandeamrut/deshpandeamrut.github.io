app.service('myService', function ($http, $q) {
//    var url ="http://localhost/appServer/process.php";
    var url ="http://nammabagalkot.in/Angular/process.php";
    return {
        'getTodos': function () {
            var defer = $q.defer();
             $http.post(url, {'action':'get'},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                console.log(err);
            defer.reject(err);
            });
            return defer.promise;
        },
        'addTodo': function (todo) {
            var defer = $q.defer();
             $http.post(url, {'action':'add','mydata':todo},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        'removeTodo': function (todo) {
            var defer = $q.defer();
            $http.post(url,{'action':'delete','mydata':todo.id},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        'markTodo': function (todo) {
            var defer = $q.defer();
            $http.post(url,{'action':'markdone','mydata':todo},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    
});


