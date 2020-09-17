CURRENT_FILE=".theme";
CURRENT=`cat ${CURRENT_FILE}`
CURRENT=${CURRENT// /}
echo "current theme = $CURRENT"
echo "setting to new theme = $1"
sed -i "s/$CURRENT/$1/g" ./src/main.js
rm $CURRENT_FILE
echo $1 >> $CURRENT_FILE


