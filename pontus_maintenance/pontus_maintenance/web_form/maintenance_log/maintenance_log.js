frappe.ready(function() {
	frappe.web_form.after_load = () => {
		var name = frappe.session.user
		frappe.web_form.set_value("employee_name", name );
		};

	/*frappe.web_form.on('asset', (field, value) => {
		filterCategory(value);
	});
	
	function filterCategory(asset) {
		var myurl = '/api/resource/Maintenance%20Asset?filters=[["Maintenance%20Asset","category_name","=","034"]]';
		$.ajax({
			type: 'GET', 
			url: myurl,
			success: function(result) {
				var options = [];
				for (var i = 0; i < result.data.length; i++) {
					options.push({
						'label': result.data[i].name,
						'value': result.data[i].name
					});
				}
				var field = frappe.web_form.get_field("asset");
				field._data = options;
				field.refresh();
			}
		});
	};
	
		frappe.web_form.on_load = () => {
	   frappe.web_form.set_df_property("employee_name", "read_only", o );
	};*/
});