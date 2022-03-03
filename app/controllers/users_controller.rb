class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    def index
        users = User.all
        render json: users
        # render json: users, except: [:created_at, :updated_at]

    end

    def show
        if current_user
            render json: current_user, status: 200
        else
            render json: {error: "No current user set"}, status: 401
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            return render json: user, status: 201
        else
            return render json: { error: user.errors.full_messages }, status: 404
        end
    end

    def update
        user = current_user
        user.update(user_params)
        if user
            return render json: user, status: 201
        else
            return render json: { errors: user.errors.full_messages }, status: 422
        end
    end

    def destroy
        user = current_user
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :first_name, :password, :password_confirmation)
    end
end