// disable fastclick package in Meteor if included
if (Package.fastclick) {
  Package.fastclick.FastClick.notNeeded = function() {
    return true;
  };
}
