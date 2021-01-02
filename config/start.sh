current_path="$PWD"

cnpm i

echo "$current_path"

if [ "$(pm2 id myLife)" = "[]" ]; then
    pm2 start ${current_path}/config/ecosystem.json
else
    pm2 reload ${current_path}/config/ecosystem.json
fi

if [ $? -ne 0 ]; then
    echo "serve start failed";
    exit 1;
fi

pm2 list

