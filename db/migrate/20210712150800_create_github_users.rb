class CreateGithubUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :github_users do |t|
      t.string :username
      t.string :description

      t.timestamps
    end
  end
end
