current_path="$PWD"

cnpm i

echo "$current_path"

if [ "$(pm2 id myLife)" = "[]" ]; then
    pm2 start service/app.js -i 4
else
    pm2 reload service/app.js -i 4
fi

if [ $? -ne 0 ]; then
    echo "serve start failed";
    exit 1;
fi

pm2 list

