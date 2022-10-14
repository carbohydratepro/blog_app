class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.bigint :user_id
      t.string :title
      t.text :body
      t.datetime :post_datetime

      t.timestamps
    end
  end
end
