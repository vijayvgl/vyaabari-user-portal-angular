## Money Transfer Module :

# For registration - `http://prodtest.accupayd.co/api/dmt/GetCustomerInfo` for new mobile number

# pincode details - `http://prodcache.accupayd.co/api/master/GetPincodeDetails` `{"pincode": "625207"}`

# Verify the IFSC Code - `http://prodcache.accupayd.co/api/master/IFSCLookup?IFSCCode=CNRB0001463`

# Beneficiary Validation - `http://prodtest.accupayd.co/api/dmt/BeneValidate`

# http://prodtest.accupayd.co/api/Fino/GetCustomerInfo `mobile number verification through channel.`

{
"mobile_no": "8667872114",
"agent_ref_id": "1",
"flag": "0",
"is_internal": false,
"bank_id": "12"
}

# http://prodtest.accupayd.co/api/dmt/RegisterCustomer `Register customer `

{
"mobile_no": "9566721028",
"agent_mobile_no": "1234567890",
"customer_name": "Nigar G",
"last_name": "",
"address1": "Vaiyathan , Vikkiramangalam",
"address2": "",
"pincode": "625207",
"email": "",
"state_ref_id": "115",
"state": "TAMIL NADU",
"city": "Madurai",
"gender": "Male",
"dob": "",
"otp_validation_flag": "0",
"agent_ref_id": "1",
"pin": "625207",
"location_ref_id": "272914",
"flag": "0",
"bank_id": null,
"bank_ref_id": null,
"account_type": "3"
}
