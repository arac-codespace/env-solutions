from fabric.api import local

def webpack():
    local('rm -rf static_in_proj/static/bundles/prod/*')
    local('webpack --config webpack.prod.config.js --progress --colors')