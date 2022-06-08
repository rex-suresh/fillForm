#! /bin/bash
testName=' fillForm - should fill form'
responses='Suresh\n1234-12-12\nsome,hobbies\n1234567890\nadd1\nadd2';
testContent='{
  "name": "Suresh",
  "dob": "1234-12-12",
  "hobbies": [
    "some",
    "hobbies"
  ],
  "phone_number": "1234567890",
  "address": "add1\nadd2"
}'

expectedForm=`mktemp`

echo -n "${testContent}" > "${expectedForm}"
node "../fillForm.js" <<< "${responses}" &> /dev/null;

diff "${expectedForm}" "./forms.json" #&> /dev/null ;
assertStatus=$?;

status="❌:${testName}";
if [[ "${assertStatus}" -eq "0" ]];
then
  status="✅:${testName}";
fi

echo "${status}"
