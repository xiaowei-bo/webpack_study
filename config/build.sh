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
echo "构建成功。。。。。";

if [ ! -d "runtime" ]; then
  mkdir runtime
fi

rsync -rtvlpgozDP --delete \
$current_path/config \
$current_path/docs \
$current_path/service \
$current_path/package.json \
$current_path/runtime
echo "部署文件准备完毕。。。。。";