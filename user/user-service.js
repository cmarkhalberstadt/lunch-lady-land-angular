lunchladyApp.service('userService', function() {
	
	// declared for internal reference.
	var instance = this;
	
	// TODO Replace with live data.
	this.users = [
      {
		  'id' : 1234,
		  'firstName' : 'Adam',
		  'lastName' : '',
		  'email' : 'bob@xpanxion.com',
		  'phone' : '555-555-5555',
		  'office' : 123,
		  'password' : 'squidward'
      }, {
		  'id' : 1235,
		  'firstName' : 'John',
		  'lastName' : '',
		  'email' : 'bob@xpanxion.com',
		  'phone' : '555-555-5555',
		  'office' : 123,
		  'password' : 'squidward'
      }, {
		  'id' : 1236,
		  'firstName' : 'Stacy',
		  'lastName' : '',
		  'email' : 'bob@xpanxion.com',
		  'phone' : '555-555-5555',
		  'office' : 123,
		  'password' : 'squidward'
      }
    ];
	
	// TODO Replace with live data call.
	this.getUserById = function(userId) {
		var users = instance.users;
		for(var i = 0; i < users.length; i++) {
			if (users[i].id == userId) {
				return users[i];
			}
		}
	};
	
	this.getFullName = function(user) {
		return user.firstName + ' ' + user.lastName;
	}
});