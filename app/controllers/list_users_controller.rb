class ListUsersController < ApplicationController
    def index
        @list_users_props = { users: ['User 1', 'User 2']}
    end
end
