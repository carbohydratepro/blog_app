# README

This README would normally document whatever steps are necessary to get the
application up and running.

# 0. バージョン
- ruby -> 2.7.4
- rails -> 6.1.7
- docker compose -> 3.8
- vue -> 3

# 1. 環境構築
### 1-1. Gitリポジトリをクローン
git clone https://github.com/carbohydratepro/blog_app.git

cd blog_app

### 1-2. dockerイメージをbuild
docker-compose build

### 1-3. Dockerを起動
docker-compose up -d

### 1-4. コマンドを実行
docker-compose run web rake db:create

docker-compose run web bundle install

docker-compose run web bundle exec rake app:update:bin

### 1-5. localhost:3000にアクセス
Railsの画面が表示されていれば成功

# 3. Herokuへのdeploy

Herokuのアカウントを作成していない場合は、https://jp.heroku.com　にアクセスし、新規登録。

ターミナルでblog_appにいることを確認。

heroku login　もしくは　heroku login --interactive

ログインを確認したら、Herokuに新しいアプリケーションを作成する。

heroku create

HerokuのStackを20に変更する。

heroku stack:set heroku-20

Herokuにデプロイする。

git push heroku main


# 4. 参考サイト
### Railsその他諸々の環境構築
https://prograshi.com/framework/rails/docker-rails6-vue-vuetify/

### vue.jsのインストール
https://universato.hatenablog.com/entry/2021/07/16/025001

# 5. 備考

