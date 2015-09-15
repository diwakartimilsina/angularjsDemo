angular.module('PersonApp.services', []).service('PersonService', function() {
				return{
					getPerson: function(){
						var person = {
							firstName: "Diwakar",
							lastName: "Timilsina"
						};
						console.log("Returning: ",person);
						return person;
					}
				}
});