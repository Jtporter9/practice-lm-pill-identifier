angular.module('app')
.controller('MyMedsCtrl', function($scope) {
  $scope.showMeds = false;
  $scope.beforeMeds = true;
  $scope.removeStarString = "Are you sure you want to remove this medication from My Meds?";
  $scope.showRemoveStarAlert = false;

  $scope.toggleShowMeds = function() {
      $scope.beforeMeds = !$scope.beforeMeds;
      $scope.showMeds = !$scope.showMeds;
  };

  $scope.openRemoveStarAlert = function(index) {
    $scope.indexOfMyMedsToDelete = index;
    $scope.showRemoveStarAlert = true;
  };

  $scope.closeRemoveStarAlert = function() {
    $scope.indexOfMyMedsToDelete = null;
    $scope.showRemoveStarAlert = false;
  };

  $scope.removeStaredMed = function () {
    $scope.showRemoveStarAlert = false;
    $scope.myMeds.splice($scope.indexOfMyMedsToDelete, 1);
  };

  $scope.myMeds = [{
      name: "Adderall",
      img: "http://rximage.nlm.nih.gov/image/images/gallery/600/00555-0762-02_RXNAVIMAGE10_5D422EB1.jpg",
      price: 25.42,
      pharmacy: "Walmart",
      form: "Tablet",
      strength: "30mg",
      quantity: 30
  }, {
      name: "Lipitor",
      img: "http://rximage.nlm.nih.gov/image/images/gallery/600/00071-0158-23_RXNAVIMAGE10_0A088504.jpg",
      price: 10.13,
      pharmacy: "Costco",
      form: "Tablet",
      strength: "30mg",
      quantity: 30
  }, {
      name: "ACETAMINOPHEN",
      img: "http://rximage.nlm.nih.gov/image/images/gallery/600/00603-2545-21_RXNAVIMAGE10_F223797B.jpg",
      price: 5.42,
      pharmacy: "Walgreens",
      form: "Tablet",
      strength: "30mg",
      quantity: 30
  }]
});
