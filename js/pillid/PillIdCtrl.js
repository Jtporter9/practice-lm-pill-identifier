angular.module('app')
.controller('PillIdCtrl', function($scope, PillIdService) {

  $scope.showImageResults = false;
  $scope.showPillDetails = false;
  $scope.showInstructions = true;
  $scope.loading = false;
  $scope.sizeList = [];
  $scope.scoresList = [];
  for(i = 0; i <= 100; i++){
    if ( i <= 27 )
      $scope.sizeList.push(i);
    if ( i <= 4 )
      $scope.scoresList.push(i);
  }
  $scope.shapesList = PillIdService.shapesList;
  $scope.symbolsList = PillIdService.symbolsList;
  $scope.colorsList = PillIdService.colorsList;

  $scope.SubmitSearch = function(pillObj) {
    $scope.pillImgResults ={};
    $scope.showInstructions = false;
    $scope.loading = true;
    var params = PillIdService.BuildQuereyParams(pillObj);
    var pillIdUrl = PillIdService.BuildPillIdUrl(params);
    var responseData = PillIdService.GetPillImage(pillIdUrl)
        .then(function(response) {
            console.log("ctrl: ", response);
            $scope.loading = false;
            $scope.imageCount = "(" + response.replyStatus.imageCount + ")";
            $scope.pillImgResults = response.nlmRxImages;
            console.log("image count: ", $scope.imageCount);
            console.log("imgsobjs", $scope.pillImgResults);
            if(response.replyStatus.success == true)
              $scope.showImageResults = true;
        });
    }

    $scope.ClearSearch = function() {
      $scope.pill = {};
      console.log("search params cleared.");
    }

    $scope.togglePillDetails = function(i) {
      $scope.currentImg = $scope.pillImgResults[i].imageUrl;
      $scope.currentName = $scope.pillImgResults[i].name;
      $scope.showPillDetails = !$scope.showPillDetails;
    }

    $scope.ClosePillDetails = function() {
      $scope.showPillDetails = !$scope.showPillDetails;
    }

  }); // end of controller
