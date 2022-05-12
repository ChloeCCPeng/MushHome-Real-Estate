class HousesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# skip_before_action :verify_authenticity_token

    def index
        houses = House.all
        # byebug
        render json: houses
    end

    def create
        house = House.create!(house_params)
        if house.valid?
            render json: house
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        house = find_house
        render json: house
    end

    def update
    house = find_house
    house.update!(house_params)
    render json: house
    end

    def destroy
    house = find_house
    house.destroy
    end

    
    private
    
    def house_params
    params.permit(:street, :city, :state, :listPrice)
    end

    def find_house
    House.find(params[:id])
    end

    def render_not_found
    render json: {error: "Hmmm, there might be something wrong, I can't find any house"}, status: 404
    end

    def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages}, status:422
    end

end