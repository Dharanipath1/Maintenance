import frappe
def get_context(context):
	# do your magic here
	pass

def get_maintenance_asset(asset_name):
	asset = frappe.get_list("Maintenance Asset", fields=["asset", "asset_name"] , filters={"company": 38})
	return asset