CURRENT_FILE=".slug";
CURRENT=`cat ${CURRENT_FILE}`
CURRENT=${CURRENT// /}
echo "current slug = $CURRENT"
echo "setting to new slug = $1"
sed -i "s/$CURRENT/$1/g" ./config/index.js
sed -i "s/$CURRENT/$1/g" ./index.html

rm $CURRENT_FILE
echo $1 >> $CURRENT_FILE


