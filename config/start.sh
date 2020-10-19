cnpm i

npm run build

current_path="$PWD"
if [ "$(pm2 id myLife)" = "[]" ]; then
    pm2 start ${current_path}/config/pm2config.json
else
    pm2 reload ${current_path}/config/pm2config.json
fi
