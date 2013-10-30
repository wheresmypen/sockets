$(function(){
	// connect the socket.io server
	var socket = io.connect('http://localhost')
	//define socket events
	socket.on('connect', function(){
		console.log("wahoo!");

	});
	// attach events
	$("#message-input").on('keyup', function(event){
		var key = event.which;
		if (key === 13) {
			socket.emit('clientMessage', $(this).val());
		}
	});
	socket.on('broadcastMessage', function(data){
		$("#room").append(data);
	})

});
