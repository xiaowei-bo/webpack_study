current_path="$PWD"
git pull
if [ $? -ne 0 ]; then
    echo "git pull failed";
    exit 1;
fi

cnpm i
if [ $? -ne 0 ]; then
    echo "npm install failed";
    exit 1;
fi

npm run build
if [ $? -ne 0 ]; then
    echo "build failed";
    exit 1;
fi

if [ "$(pm2 id myLife)" = "[]" ]; then
    pm2 start ${current_path}/config/pm2config.json
else
    pm2 reload ${current_path}/config/pm2config.json
fi
if [ $? -ne 0 ]; then
    echo "serve start failed";
    exit 1;
fi

pm2 list

