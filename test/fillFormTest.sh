#! /bin/bash
responses='Suresh\n1234-12-12\nsome,hobbies\n1234567890\nadd1\nadd2';
testName=' fillForm - should fill form'

node "../fillForm.js" <<< "${responses}" &> /dev/null;
diff "./test/expectedForm" "./forms.json" &> /dev/null ;

if [[ $? -eq "0" ]];
then
  echo "✅:${testName}";
  exit
fi

echo "❌:${testName}"
