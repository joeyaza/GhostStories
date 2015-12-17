angular
  .module("ghost-storiesApp")
  .directive('tile', tileView);

function tileView(){
  return {
    replace:true,
    restrict: 'E',
    templateUrl: './partials/_tileView.html',
    scope: {
      tile: '='
    },
    link: function(scope, element, attrs) {
      if(scope.tile.image){
        element
          .css({
            backgroundImage: 'url(' + scope.tile.image + ')'
          });
      }

    }

  }
}