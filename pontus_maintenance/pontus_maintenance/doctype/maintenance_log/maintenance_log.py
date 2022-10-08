# Copyright (c) 2022, Pontus and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class MaintenanceLog(Document):
	def validate(self):
	self.get_list()

	def get_list(self):
		doc = frappe.db.get_list('Maintenance Asset',
		filters={
			'company_name': 38
			},
			fields=['asset_name']
			)
	for d in doc:
		frappe.msgprint(_("The Name is {0} and age is {1}").format(d.asset_name)
	   	