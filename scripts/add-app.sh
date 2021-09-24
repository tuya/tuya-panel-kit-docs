user=$1
repo=$2

# pub dir
cd dist

# init dir
git clone -b gh-pages https://github.com/$1/$2.git

# clear module
cd $2
rm -rf .git