var Event = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		event_date: React.PropTypes.string,
		place: React.PropTypes.string,
		description: React.PropTypes.string
	},

	handleDelete: function(e) {
		e.preventDefault();
		$.ajax({
			method: 'DELETE',
			url: '/api/events/' + this.props.event.id,
			// The JavaScript's bind() is used below to call 
			// a function with the 'this' value set explicitely. 
			// In other words, bind() allows us to easily set
			// which specific object will be bound to 'this' when 
			// a function is invoked.
			success: function(){
				this.props.handleDeleteRecord(this.props.event);
			}.bind(this),
			error: function(xhr, status, error){
				alert('Cannot delete requested record', error);
			}
		});
	},

	render: function(){
		var event = this.props.event;
		return (
			<tr>
				<td>{event.name}</td>
				<td>{event.event_date}</td>
				<td>{event.place}</td>
				<td>{event.description}</td>
				<td>
					<a className="btn btn-danger btn-xs"
					   onClick={ this.handleDelete } >
					   Delete
					</a>
				</td>
			</tr>
		)
	}
});