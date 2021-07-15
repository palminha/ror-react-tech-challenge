class ListUsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        #@list_users_props = ['User 1', 'User 2']
        @list_users_props = GithubUser.pluck(:username)
    end

    def add
        GithubUser.create(username:params[:username], description:"teste2")
    end
end
